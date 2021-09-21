import React from "react";
import Task from "./Task";

const TaskList = (props) => {
    return (
        <>
            {props.tasks.map( currentTask => (
                <Task key={currentTask.id} task={currentTask} onComplete={props.onComplete}/>
            ))}
        </>
    )
}

export default TaskList;
