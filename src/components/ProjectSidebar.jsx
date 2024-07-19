import React from 'react';

export default function Sidebar({ onCreateNewProject, onDeleteProject, onSelectProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-10 font-bold uppercase">Your Projects</h2>
      <div>
        <button onClick={onCreateNewProject} className="px-4 py-1 text-xs mb-16 md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600">+ Add Project</button>
      </div>
      <ul>
        {projects.map((project, index) => (
          <div key={index} className="flex justify-between items-center mt-1">
            <li>
              <button onClick={() => onSelectProject(project)} className="text-lg font-semibold mb-1">{project.title}</button>
            </li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 transform hover:scale-110 transition-transform duration-300 cursor-pointer hover:fill-red-500"
              onClick={() => onDeleteProject(index)}
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </ul>
    </aside>
  );
}
