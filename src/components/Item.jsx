import iconCheck from "/images/icon-check.svg";
import iconCross from "/images/icon-cross.svg";

function Item({ task, deleteTask, toggleComplete }) {
  return (
    <div className="item">
      <div>
        <label className="container">
          <input
            type="checkbox"
            value={task.complete}
            checked={task.complete}
            onChange={() => toggleComplete(task)}
          />
          <span className="checkmark"></span>
        </label>
        <p className={task.complete ? "task-name completed-task" : "task-name"}>
          {task.name}
        </p>
      </div>
      <button type="button" className="close-btn">
        <img src={iconCross} alt="" onClick={() => deleteTask(task.id)} />
      </button>
    </div>
  );
}

export default Item;
