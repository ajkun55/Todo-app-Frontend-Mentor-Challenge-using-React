function FormList({ addTask, inputRef }) {
  return (
    <form onSubmit={(e) => addTask(e)}>
      <input type="text" placeholder="Create a new todo..." ref={inputRef} />
      <button type="button" onClick={(e) => addTask(e)}>
        add
      </button>
    </form>
  );
}

export default FormList;
