import { render, screen } from "@testing-library/react";
import Task from "../Task";

test("Render Task", () => {
    const descriptionTestData = "This is a task";
    const testData = {
        id: 0,
        description: descriptionTestData,
        targetDate: "2021-12-31",
        completed: false
    };

    render(<Task task={testData}/>);
    const taskElement = screen.getByText(descriptionTestData);
    expect(taskElement).toBeInTheDocument();

    const targetDateElement = screen.getByTestId("targetDate");
    expect(targetDateElement).toBeInTheDocument();
})
