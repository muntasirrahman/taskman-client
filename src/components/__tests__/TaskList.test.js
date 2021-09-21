import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";

test("Render TaskList correctly", () => {
    const listTestData = [
        {id: 1, description: "task 1", targetDate: "2022-01-01", completed: false},
        {id: 2, description: "task 2", targetDate: "2022-02-02", completed: false},
        {id: 3, description: "task 3", targetDate: "2021-03-03", completed: false},
    ];

    render(<TaskList tasks={listTestData}/>);
    const taskElement1 = screen.getByText("task 1");
    expect(taskElement1).toBeInTheDocument();

    const taskElement2 = screen.getByText("task 2");
    expect(taskElement2).toBeInTheDocument();

    const taskElement3 = screen.getByText("task 3");
    expect(taskElement3).toBeInTheDocument();
});
