import { useRef, useState, useEffect } from "react";
import Footer from "./components/Footer";
import FormList from "./components/FormList";
import Header from "./components/Header";
import ShowList from "./components/ShowList";
import Controller from "./components/Controller";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

const initialState = [
  { id: uuidv4(), name: "Complete Online JavaScript Course", complete: true },
  { id: uuidv4(), name: "Jog around the park 3x", complete: false },
  { id: uuidv4(), name: "10 minutes meditation", complete: false },
  { id: uuidv4(), name: "Read for 1 hour", complete: false },
  { id: uuidv4(), name: "Pick up groceries", complete: false },
  {
    id: uuidv4(),
    name: "Complete Todo App on Frontend Mentor",
    complete: false,
  },
];

function App() {
  const [tasks, setTasks] = useLocalStorageState([]);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const inputRef = useRef();
  const [isDark, setIsDark] = useState(false);

   useEffect(function(){
    tasks.length === 0 ? setTasks(initialState) : null;
    handleAll()
  },[])

  function addTask(e) {
    e.preventDefault();
    const taskName = inputRef.current.value;
    if (taskName !== "") {
      setTasks((prev) => {
        return [...prev, { id: uuidv4(), name: taskName, complete: false }];
      });
      setFilteredTasks((prev) => {
        return [...prev, { id: uuidv4(), name: taskName, complete: false }];
      });
    }
    inputRef.current.value = null;
  }

  function deleteTask(id) {
    const newList = tasks.filter((t) => t.id !== id);
    setTasks(newList);
    setFilteredTasks(newList);
  }

  function toggleComplete(task) {
    const newList = [...tasks];
    const item = newList.find((t) => t.id === task.id);
    item.complete = !task.complete;
    setTasks(newList);
  }

  function handleAll() {
    setFilteredTasks(tasks);
  }

  function handleActive() {
    const newList = tasks.filter((t) => !t.complete);
    setFilteredTasks(newList);
  }

  function handleComplete() {
    const newList = tasks.filter((t) => t.complete);
    setFilteredTasks(newList);
  }

  function handleClear() {
    const newList = tasks.filter((t) => !t.complete);
    setTasks(newList);
    setFilteredTasks(newList);
  }
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <main>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <FormList addTask={addTask} inputRef={inputRef} />
        <div className="lists">
          <ShowList
            tasks={tasks}
            setFilteredTasks={setFilteredTasks}
            filteredTasks={filteredTasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />

          <Controller
            tasks={tasks}
            handleAll={handleAll}
            handleActive={handleActive}
            handleComplete={handleComplete}
            handleClear={handleClear}
          />
        </div>
        <p className="d-text">Drag and drop to reorder list</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
