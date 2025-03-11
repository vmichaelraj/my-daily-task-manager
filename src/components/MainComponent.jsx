import { useEffect, useState, useRef } from "react";
import Input from "./Input";
import Status from "./Status";
export default function MainComponent() {
  const [tasks, setTasks] = useState([]);
  const dailyResetInterval=useRef(null);
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("myTasks")) || []);
    setIsInit(true);
  }, []);

  useEffect(() => {
    if (isInit === true) {
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }
  }, [tasks, isInit]);

  useEffect(() => {
    const now = new Date();
    const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  const untilMidnight=tomorrow-now;

  const midnightTimeout= setTimeout(()=>{
    setTasks((prev)=>
      prev.map((task)=>({...task,isCompleted:false}))
    );
    dailyResetInterval.current=setInterval(()=>{
      setTasks((prev)=>
        prev.map((task)=>({...task,isCompleted:false}))
      );
    },24*60*60*1000);
  },untilMidnight);
  return()=>{
    clearTimeout(midnightTimeout);
    if (dailyResetInterval.current){
      clearInterval(dailyResetInterval.current);
    }
  };
  },[]);

  return (
    <>
      <Input tasks={tasks} setTasks={setTasks} />
      <div className="status-container">
        {tasks.length === 0 ? (
          <p
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            No tasks are there
          </p>
        ) : (
          <>
            <Status
              heading={"Pending"}
              tasks={tasks.filter((ele) => ele.isCompleted === false)}
              setTasks={setTasks}
            />
            <Status
              heading={"completed"}
              tasks={tasks.filter((ele) => ele.isCompleted === true)}
              setTasks={setTasks}
            />
          </>
        )}
      </div>
    </>
  );
}
