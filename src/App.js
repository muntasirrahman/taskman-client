import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

require("dotenv").config();

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTaskList = async () => {
            const getTaskListFromServer = await fetchTaskList();
            setTasks(getTaskListFromServer);
        }
        getTaskList()
    }, []);

    const fetchTaskList = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/v1/tasks`);
        const data = await response.json();
        return data;
    }

    /*
    const deleteTask = async (id) => {
        await fetch(process.env.REACT_APP_API_HOST + `/api/v1/task/${id}`, {
            method: "DELETE"
        });
        setTasks(tasks.filter((task) => task.id !== id));
    }
    */

    const [showNewTaskForm, setShowNewTaskForm] = useState(false);

    const addTask = async (newTask) => {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/v1/task`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        const data = await response.json();
        console.log("Receive data:", data);
        setTasks([...tasks, data]);
        setShowNewTaskForm(false);
    }

    const completeTask = async (task) => {
        const taskId = task.id;
        await fetch(`${process.env.REACT_APP_API_HOST}/api/v1/task/${taskId}`, {
            method: "PUT"
        });
        // await response.json();
        task.completed = true;
        setTasks(tasks.filter((task) => !task.completed));
    }

    return (
        <div className="container">
            <Header showNewTaskForm={showNewTaskForm}
                    onAddTask={() => setShowNewTaskForm(!showNewTaskForm)} />
            { showNewTaskForm && <NewTaskForm onAdd={addTask}/> }
            {
                (tasks.length > 0) ? (
                    <TaskList tasks={tasks} onComplete={completeTask} />
                ) : (
                    "No more task"
                )
            }
        </div>
    )
}

export default App;
