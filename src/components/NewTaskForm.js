import {useState} from "react";

const NewTaskForm = (props) => {
    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("");

    const submitFormData = (event) => {
        event.preventDefault();
        if (!description) {
            alert("Description can't be empty");
            return;
        }
        if (!targetDate) {
            alert("Target Date can't be empty");
            return;
        }

        const newTask = {
            description: description,
            targetDate: targetDate,
        }

        props.onAdd(newTask);
        setDescription("");
        setTargetDate("");
        return true;
    }

    return (
        <form className="add-form" onSubmit={submitFormData}>
            <div className="form-control">
                <label className="form-label">Description</label>
                <input type="text" placeholder="Description" value={description}
                       onChange={(event) => setDescription(event.target.value)} />
            </div>
            <div className="form-control">
                <label className="form-label">Date</label>
                <input type="text" placeholder="2022-12-31" value={targetDate}
                       onChange={(event) => setTargetDate(event.target.value)}/>
            </div>
            <div style={{display: "flex"}}>
                <input type="submit" value="Save" className="btn" style={{ marginLeft: "auto"}}/>
            </div>
        </form>
    )
}
export default NewTaskForm;
