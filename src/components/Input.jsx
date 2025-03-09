import { useState } from "react";

function Input({ tasks, setTasks }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handlePress = () => {
    if (value.trim() === "") {
      return;
    }
    let isExists = tasks.some((element) => element.value === value);
    let payload = {
      value: value.trim(),
      isCompleted: false,
    };
    // method 1
    // let newTasks = [...tasks, payload];
    // setTasks(newTasks);

    // method 2
    // setTasks([...tasks, payload])

    // method 3
    if (!isExists) {
      setTasks((prev) => {
        // prev.push(payload) // wrong
        // return prev // wrong
        return [...prev, payload];
      });
      setValue("");
    } else {
      setError("Already Exists");
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={value}
          placeholder="Enter task name..."
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
        />
        <button onClick={handlePress}>Add Task</button>
      </div>
      <p
        style={{
          fontSize: "20px",
          color: "red",
        }}
      >
        {error}
      </p>
    </>
  );
}
export default Input;
