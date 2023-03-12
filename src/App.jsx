import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {

  return (
    <main className="bg-zinc-900 h-full ">
      <div className="container mx-auto p-20">
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}

export default App;
