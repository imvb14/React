
import {useState} from "react";
import NewProject from "./Components/NewProject";
import SideBar from "./Components/SideBar";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";

function App() {

  const [projects, setProjects] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks:[],
  })

  function showform(){
    setProjects((prev)=>{
      return {
        ...prev,
        selectProjectId: null
      }
    })
  }
    function cancel(){
      setProjects((prev)=>{
        return {
          ...prev,
          selectProjectId: undefined
        }
      })
    }
  function handleAddProject(projectData){

    
    setProjects((prev)=>{

      const newProject = {
        ...projectData,
        id: Math.random()*100
      }
      return{
        ...prev,
        selectProjectId: undefined,
        tasks:[],
        projects: [...prev.projects, newProject]
      }
    })
  }

  function handleSelectProject(id){
    setProjects((prev)=>{
      return {
        ...prev,
        selectProjectId: id
      }
    })
  }

  function deleteTask(id){

    setProjects((prev)=>{
      return{
        ...prev,
        projects: prev.projects.filter(project => project.id !== id),
        selectProjectId: undefined
      }
    })

  }

  function addTask (text){
    setProjects((prev)=>{
      return {
        ...prev,
        tasks: [text,...prev.tasks]
      }
    })
  }
  const selectedProject = projects.projects.find(project => project.id === projects.selectProjectId)
  let content = <SelectedProject project={selectedProject} ondeleteTask={deleteTask} onAdd={addTask} tasks={projects.tasks}/>
  if(projects.selectProjectId === null){
   //{ projects.selectProjectId === null ?  : <NoProjectSelected showform={showform}/>}
   content  = <NewProject onAdd={handleAddProject} cancel={cancel}/>
  }
  else if(projects.selectProjectId === undefined){
    content = <NoProjectSelected showform={showform}/>
  }
  
  return (  
    <main className="h-screen my-8 flex gap-8">
     <SideBar showform={showform} projects={projects.projects} onSelectProject={handleSelectProject} />
     {content}
    </main>
  
  );

}

export default App;
