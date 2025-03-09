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
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          style={{
            scale: 1.6,
          }}
          type="checkbox"
          checked={task.isCompleted || false}
          onChange={handleChecked}
        ></input>
        <div
          style={{
            borderRadius: "8px",
            border: "1px solid red",
            display: "flex",
            width: "25px",
            height: "25px",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handledelete}
        >
          X
        </div>
      </div>
    </div>
  );
}
export default TaskBox;
