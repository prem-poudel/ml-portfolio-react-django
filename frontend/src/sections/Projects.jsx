import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const projects = [
  // {
  //   title: "SEO Projects",
  //   description: "Worked on keyword research, on-page optimization, and backlink building to boost visibility.",
  //   image: "https://cdn.shopify.com/s/files/1/0840/8370/3830/articles/1603954182-seo-article-header.png?v=1714646999"
  // },
  // {
  //   title: "Data Analysis Projects",
  //   description: "Explored datasets using pandas and seaborn to generate insights for strategic decisions.",
  //   image: "https://learnerbits.com/wp-content/uploads/2023/10/data-analysis-1024x576.webp"
  // },
  {
    title: "Machine Learning Projects",
    description: "Built predictive models using scikit-learn and deployed them using Django REST APIs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbrMs9oNyftcqlAxyvZXUSYZ6BPvIKe39ew&s"
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
            projectImage={project.image}
          />
        ))}
      </div>
    </section>
  );
}
