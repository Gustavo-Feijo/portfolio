import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconCard from "../IconCard";
import { SiReact } from "react-icons/si";

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("iconCard", () => {
  it("Should render the iconCard.", () => {
    render(<IconCard icon={<SiReact data-testid="icon" />} name="React" />);
    const iconName = screen.getByText("React");
    expect(iconName).toBeInTheDocument();
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });
});
