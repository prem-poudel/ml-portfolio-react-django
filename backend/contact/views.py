from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer
from django.conf import settings
import requests

class ContactMessageView(APIView):
    def post(self, request):
        try:
            serializer = ContactMessageSerializer(data=request.data)
            if serializer.is_valid():
                instance = serializer.save()

                # Prepare Telegram notification
                token = settings.TELEGRAM_BOT_TOKEN
                chat_id = settings.TELEGRAM_CHAT_ID
                message = (
                    f"📩 *Hi Prem, New Message Received:*\n\n"
                    f"👤 Name: {instance.name}\n"
                    f"✉️ Email: {instance.email}\n"
                    f"📝 Message:\n{instance.message}"
                )

                telegram_url = f"https://api.telegram.org/bot{token}/sendMessage"
                payload = {
                    "chat_id": chat_id,
                    "text": message,
                    "parse_mode": "Markdown"
                }

                try:
                    requests.post(telegram_url, data=payload, timeout=5)
                except requests.exceptions.RequestException:
                    # Handle Telegram API request failure
                    return Response({
                        "message": "Failed to send notification to Telegram"
                    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

                return Response({
                    "message": "Message sent successfully"
                }, status=status.HTTP_201_CREATED)

            return Response({
                "message": "Invalid data"
            }, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({
                "message": "An error occurred",
                "error": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
