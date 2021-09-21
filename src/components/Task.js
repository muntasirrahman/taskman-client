import React from "react";

const Task = (props) => {
    return (
        <div className="task">
            <h3>
                {props.task.description}
                <input type={"checkbox"} className="form-check"
                       onChange={() => props.onComplete(props.task)} />
            </h3>
            <p data-testid="targetDate">{props.task.targetDate}</p>
        </div>
    )
}

export default Task;
