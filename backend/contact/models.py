from django.db import models

# Create your models here.
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact from {self.name} at {self.submitted_at}"
    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"