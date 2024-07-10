import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/br.json";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import Overlay from "../Overlay";
import TopBar from "../TopBar";
import { ReactNode } from "react";
import ThemeProvider from "../ThemeProvider";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  }),
  useParams: () => ({ locale: "br" }),
  useSelectedLayoutSegment: () => ({ locale: "br" }),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

function RenderSetup(children?: ReactNode) {
  render(
    <GlobalStateProvider>
      <NextIntlClientProvider locale="br" messages={messages}>
        {children}
      </NextIntlClientProvider>
    </GlobalStateProvider>
  );
}
describe("TopBar", () => {
  it("Should render correctly", () => {
    RenderSetup(<TopBar />);
    expect(screen.getByText("Portfólio")).toBeInTheDocument();
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("Should open the overlay", () => {
    RenderSetup(
      <>
        <TopBar />
        <Overlay />
      </>
    );
    const openOverlay = screen.getByTestId("overlay-open");
    fireEvent.click(openOverlay);
    const overlay = screen.getByRole("navigation");
    expect(overlay).toBeInTheDocument();
  });

  it("Should change the theme", async () => {
    RenderSetup(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <TopBar />
      </ThemeProvider>
    );
    const themeSwitch = screen.getByTestId("change-theme");
    expect(themeSwitch).toBeInTheDocument();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(window.getComputedStyle(themeSwitch).backgroundColor);
  });
});
