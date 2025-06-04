export default function ProjectCard({ projectTitle, projectDescription, projectImage }) {
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
    </div>
  );
}
