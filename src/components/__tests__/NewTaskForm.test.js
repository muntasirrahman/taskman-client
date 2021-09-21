import { render, screen } from "@testing-library/react";
import NewTaskForm from "../NewTaskForm";

test("render NewTaskForm correctly", () => {

    render(<NewTaskForm />);
    const dateElement = screen.getByText("Date");
    expect(dateElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("Date");
    expect(descriptionElement).toBeInTheDocument();
});
