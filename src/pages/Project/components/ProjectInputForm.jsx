
import { addNewProjectToServer } from "../../../services/addItemToServer";

const ProjectInputForm = ({ addNewItem }) => {
   const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const projectName = form.projectName.value;
    const projectTags = form.projectTags.value;
    const projectDescription = form.projectDescription.value;
    const githubLink = form.githubLink.value;
    const liveLink = form.liveLink.value;
    const projectImage = form.projectImage.files[0]; // ✅ get the actual file

    // Prepare FormData for file upload
    const formData = new FormData();
    formData.append("title", projectName);
    formData.append("tags", projectTags);
    formData.append("description", projectDescription);
    formData.append("github", githubLink);
    formData.append("link", liveLink);
    formData.append("image", projectImage);

    const addNewProject = await addNewProjectToServer(formData);

    if (addNewProject) {
        addNewItem(addNewProject);
        form.reset();
    } else {
        alert("Failed to Add Project. Try Again");
    }
};


    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
                    Add New Project
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                            Project Name
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            placeholder="Enter your Project Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="projectTags" className="block text-sm font-medium text-gray-700">
                            Project Tags
                        </label>
                        <input
                            type="text"
                            name="projectTags"
                            id="projectTags"
                            placeholder="Enter tags (e.g., React, Node.js, MongoDB)"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                            Project Description
                        </label>
                        <textarea
                            name="projectDescription"
                            id="projectDescription"
                            rows="4"
                            placeholder="Enter Project description"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            
                        />
                    </div>

                    <div>
                        <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700">
                            Project Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="projectImage"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="projectImage"
                                            name="projectImage"
                                            type="file"
                                            className="sr-only"
                                            
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">
                            GitHub Link
                        </label>
                        <input
                            type="url"
                            name="githubLink"
                            id="githubLink"
                            placeholder="Enter your Github Link"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            
                        />
                    </div>

                    <div>
                        <label htmlFor="liveLink" className="block text-sm font-medium text-gray-700">
                            Live Demo URL
                        </label>
                        <input
                            type="url"
                            name="liveLink"
                            id="liveLink"
                            placeholder="Enter your Live demo url"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Add Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectInputForm
