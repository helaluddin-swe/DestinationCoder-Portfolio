const ProjectOutput = ({ projectItems }) => {
  return (
    <div>
      {projectItems && projectItems.length > 0 ? (
        projectItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md mb-4">
            {/* Project Image */}
            <div>
              <img
                src={item.projectImage}
                alt={item.projectName}
                className="w-full h-48 object-cover rounded"
              />
            </div>

            {/* Project Info */}
            <div className="mt-3">
              <h3 className="text-lg font-semibold">{item.projectName}</h3>
              <p className="text-sm text-gray-600">{item.projectDescription}</p>
            </div>

            {/* Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              {item.projectTags && item.projectTags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-3 flex gap-4">
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                GitHub
              </a>
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                Live
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className="text-lg font-medium text-gray-600">
            No Items Available on Your Server. Add a New Item.
          </h3>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add New Item
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectOutput;
