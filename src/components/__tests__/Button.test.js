import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("render Button correctly", () => {

    const textTestData = "Click me";
    render(<Button text={textTestData} />);
    const buttonElement = screen.getByText(textTestData);
    expect(buttonElement).toBeInTheDocument();
});
