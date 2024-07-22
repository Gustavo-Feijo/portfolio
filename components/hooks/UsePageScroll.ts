import { MutableRefObject, useEffect } from "react";

// Function that scrolls up or down based on a delta value passed.
function scrollPageByDelta(deltaY: number) {
  window.scrollBy({
    top: window.innerHeight * (deltaY > 0 ? 1 : -1),
    behavior: "smooth",
  });
}

// Hook for adding a event listner to the wheel that forces the window to scroll by the entire window size.
function usePageScroll(ref: MutableRefObject<HTMLDivElement | null>) {
  useEffect(() => {
    // Keep track of the current state of the screen scroll.
    // A timeout is created to reset the scrolling state every X seconds.
    let isScrolling = false;
    let timeout: NodeJS.Timeout;

    // Function to reset the scroll state.
    function resetScroll() {
      timeout = setTimeout(() => (isScrolling = false), 500);
    }

    // Function to handle wheel events.
    const handleWheel = (event: WheelEvent) => {
      // Verifies if a scroll is not occurring, if so, set it as true.
      if (isScrolling) {
        return;
      }
      isScrolling = true;
      event.preventDefault();

      // Scroll the entire page by one window height based on the direction of the event.
      scrollPageByDelta(event.deltaY);

      // Reset the scrolling state.
      resetScroll();
    };

    // Variables to handle touch screen scrolling.
    let startY = 0;
    let lastY = 0;

    // Get the start position of the touch.
    const handleTouchStart = (event: TouchEvent): void => {
      startY = event.touches[0].clientY;
    };

    // Get a position of the touch during the movement.
    const handleTouchMove = (event: TouchEvent): void => {
      lastY = event.touches[0].clientY;
    };

    // Do the scrolling based on the start and last movement values.
    const handleTouchEnd = (): void => {
      if (isScrolling) {
        return;
      }
      isScrolling = true;
      const deltaY = startY - lastY;
      if (deltaY > 50 || deltaY < -50) {
        scrollPageByDelta(deltaY);
      }
      resetScroll();
    };

    // Get the ref of the passed element and add all necessary event listners to it.
    const element = ref.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
      element.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      element.addEventListener("touchmove", handleTouchMove, { passive: true });
      element.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    // Cleanup.
    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
      }
      clearTimeout(timeout);
    };
  }, [ref]);
}
export default usePageScroll;
