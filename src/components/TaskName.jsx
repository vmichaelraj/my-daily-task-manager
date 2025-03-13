function TaskBox({ task, setTasks }) {
  const handleChecked = (e) => {
    setTasks((prev) => {
      return prev.map((element) => {
        if (element.value === task.value) {
          return {
            ...element,
            isCompleted: e.target.checked,
          };
        } else {
          return element;
        }
      });
    });
  };
  const handledelete = () => {
    if (confirm("Are you sure?")) {
      setTasks((prev) => {
        return prev.filter((element) => element.value !== task.value);
      });
    }
  };

  return (
    <div className="task-item">
      <p>{task.value}</p>
      <div className="modify-container">
        <input
          type="checkbox"
          checked={task.isCompleted || false}
          onChange={handleChecked}
        ></input>
        <div className="delete-container"
          onClick={handledelete}
        >
          X
        </div>
      </div>
    </div>
  );
}
export default TaskBox;
