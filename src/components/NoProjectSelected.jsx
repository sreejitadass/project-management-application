import ProjectCreationImage from "./../assets/no-projects.png"

export default function NoProjectSelected({ onCreateNewProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={ProjectCreationImage} alt="Project-Creation-Image" className="mb-16 w-20 h-20 mx-auto object-contain"/>
            <h2 className="text-xl font-bold text-stone-600">No Selected Projects!</h2>
            <p className="text-stone-700 mt-4">Select an existing project or create a new one</p>
            <button 
                className="mt-20 bg-stone-900 text-stone-300 px-3.5 py-2.5 rounded-md hover:bg-stone-800" 
                onClick={onCreateNewProject}
            >
                Create new project
            </button>
        </div>
    );
}
