import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Expense Tracker",
    description: "Developed a RESTful API for an expense tracking application using Django REST Framework.",
    technologies: "Django, Django REST Framework, Simple JWT, OpenAPI",
    features: "User authentication, expense management.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ve8BbHLXckQOKYaqt5npgq1uBiqeAX5Y9A&s",
    link: "https://github.com/prem-poudel/expense-tracker"
  },
  {
    title: "Blog Rest API",
    description: "Built a RESTful API for a blog application using Django REST Framework.",
    technologies: "Django, Django REST Framework",
    features: "User authentication, blog post management.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMGl8QAo8SpCh_HJ4aia-8agpOdGGSxbKKg&s",
    link: "https://github.com/prem-poudel/blog-app"
  },
  {
    title: "Mero Kaam",
    description: "Creates a API for a job listing application using Express.js and MongoDB.",
    technologies: "Express.js, MongoDB, Mongoose",
    features: "Job listing, user authentication, application management.",
    image: "https://www.wildapricot.com/wp-content/uploads/2022/10/job-board-software.png",
    link: "https://github.com/lawarjameschaudhary/Hackathon-Project/tree/main/backend"
  },
  {
    title: "AI Powered Telegram Chatbot",
    description: "Developed a Telegram chatbot that uses Gemini AI for handling user queries and providing information.",
    technologies: "Python, Telegram Bot API, Gemini AI, MongoDB, Google Search API",
    features: "User registration, Gemini Chat, Image Analysis, Google Search, Sentiment Analysis.",
    image: "https://png.pngtree.com/background/20231030/original/pngtree-d-render-of-an-adorable-ai-bot-helper-ideal-for-business-picture-image_5810378.jpg",
    link: "https://github.com/prem-poudel/python-telegram-bot"
  }
  


];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-20 text-gray-800"
    >
      <SectionTitle title="Projects" subtitle="State-of-the-Art Learning" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectTitle={project.title}
            projectDescription={project.description}
            projectTechnologies={project.technologies}
            projectFeatures={project.features}
            projectImage={project.image}
            projectLink={project.link}
          />
        ))}
      </div>
    </section>
  );
}
