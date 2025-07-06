export default function ProjectCard({ projectTitle, projectDescription, projectImage, projectLink, projectTechnologies, projectFeatures }) {
  return (
    <div className="w-full max-w-sm bg-gray-50 p-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300 ease-in-out flex flex-col gap-4 border border-gray-100">
      <div className="w-full h-48 overflow-hidden rounded-xl">
        <img
          src={projectImage}
          alt={`${projectTitle} image`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{projectTitle}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{projectDescription}</p>
      <div className="text-sm text-gray-600">
        <strong>Technologies:</strong>
        {' '}
        <TechStack technologies={projectTechnologies} />
        <p><strong>Features:</strong> {projectFeatures}</p>
      </div>
      <a
        href={projectLink}
        className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        View Project
      </a>

    </div>
  );
}

function TechStack({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.split(', ').map((tech, index) => (
        <span
          key={index}
          className="inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}