import Item from "./Item";
import { Reorder } from "framer-motion";

function ShowList({
  tasks,
  setFilteredTasks,
  filteredTasks,
  deleteTask,
  toggleComplete,
}) {
  return (
    <div>
      <Reorder.Group axis="y" values={tasks} onReorder={setFilteredTasks}>
        {filteredTasks.map((task) => (
          <Reorder.Item key={task.id} value={task}>
            <Item
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default ShowList;
