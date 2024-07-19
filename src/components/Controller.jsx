function Controller({
  tasks,
  handleAll,
  handleActive,
  handleComplete,
  handleClear,
}) {
  return (
    <div className="controller">
      <p className="left-part">
        {tasks.filter((task) => !task.complete).length} items left
      </p>

      <div className="btns">
        <button type="button" onClick={handleAll} className="all">
          All
        </button>
        <button type="button" onClick={handleActive}>
          Active
        </button>
        <button type="button" onClick={handleComplete}>
          Completed
        </button>
      </div>

      <button type="button" onClick={handleClear} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
}

export default Controller;
