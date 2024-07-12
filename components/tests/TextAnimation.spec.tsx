import { render, screen, waitFor } from "@testing-library/react";
import TextAnimation from "../TextAnimation";
import "@testing-library/jest-dom";

describe("TextAnimation", () => {
  it("Should render the text", async () => {
    const { container } = render(<TextAnimation text="Testing" speed={100} />);
    const textSpan = container.querySelector("span");
    expect(textSpan).toBeInTheDocument();
    await waitFor(() => {
      const displayText = screen.getByText("Testing");
      expect(displayText).toBeInTheDocument();
    });
  });
});
