import { useState, useEffect } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import Sidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

// Load projects from local storage
const loadProjectsFromLocalStorage = () => {
  const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  return savedProjects;
};

function App() {
  const initialProjects = loadProjectsFromLocalStorage();

  const [state, setState] = useState({
    createNew: false,
    addNew: false,
    projects: initialProjects,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  // Save projects to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(state.projects));
  }, [state.projects]);

  function handleDisplayNew() {
    setState((prevState) => ({
      ...prevState,
      createNew: true,
      addNew: true,
    }));
  }

  function handleCancelNew() {
    setState((prevState) => ({
      ...prevState,
      createNew: false,
      addNew: false,
    }));
  }

  function handleAddProject(newProject) {
    setState((prevState) => ({
      ...prevState,
      createNew: false,
      addNew: false,
      projects: [...prevState.projects, newProject],
    }));
    setSelectedProject(newProject); // Select the newly created project
  }

  function handleDeleteProject(index) {
    const projectToDelete = state.projects[index];
    setState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((_, i) => i !== index),
    }));
    if (selectedProject && selectedProject === projectToDelete) {
      setSelectedProject(null);
    }
  }

  function handleSelectProject(project) {
    setState((prevState) => ({
      ...prevState,
      createNew: false,
      addNew: false,
    }));
    setSelectedProject(project);
  }

  function handleAddTask(task) {
    if (!selectedProject) return; // Guard clause if no project is selected

    const updatedProject = {
      ...selectedProject,
      tasks: [...(selectedProject.tasks || []), task],
    };
    const updatedProjects = state.projects.map((project) =>
      project === selectedProject ? updatedProject : project
    );

    setState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
    setSelectedProject(updatedProject);
  }

  function handleDeleteTask(index) {
    const updatedProject = {
      ...selectedProject,
      tasks: selectedProject.tasks.filter((_, i) => i !== index),
    };

    const updatedProjects = state.projects.map((project) =>
      project === selectedProject ? updatedProject : project
    );

    setState((prevState) => ({
      ...prevState,
      projects: updatedProjects,
    }));
    setSelectedProject(updatedProject);
  }

  return (
    <main className="h-screen my-8 flex gap-16 bg-amber-50">
      <Sidebar
        projects={state.projects}
        onCreateNewProject={handleDisplayNew}
        onSelectProject={handleSelectProject}
        onDeleteProject={handleDeleteProject}
      />
      {state.createNew || state.addNew ? (
        <NewProject
          onCancelNewProject={handleCancelNew}
          onSaveNewProject={handleAddProject}
        />
      ) : selectedProject ? (
        <SelectedProject
          project={selectedProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      ) : (
        <NoProjectSelected onCreateNewProject={handleDisplayNew} />
      )}
    </main>
  );
}

export default App;
