import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("render Header title correctly", () => {
    const titleData = "This is a title";
    render(<Header title={titleData} />)

    const titleElement = screen.getByText(titleData);
    expect(titleElement).toBeInTheDocument();
});
