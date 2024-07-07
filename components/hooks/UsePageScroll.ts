import { useEffect } from "react";

function scrollPageByDelta(deltaY: number) {
  window.scrollBy({
    top: window.innerHeight * (deltaY > 0 ? 1 : -1),
    behavior: "smooth",
  });
}
// Hook for adding a event listner to the wheel that forces the window to scroll by the entire window size.
function usePageScroll() {
  useEffect(() => {
    let isScrolling = false;
    function resetScroll() {
      setTimeout(() => (isScrolling = false), 400);
    }
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) {
        return;
      }
      isScrolling = true;
      event.preventDefault();
      scrollPageByDelta(event.deltaY);
      resetScroll();
    };

    let startY = 0;
    let curY = 0;
    const handleTouchStart = (event: TouchEvent): void => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent): void => {
      curY = event.touches[0].clientY;
    };

    const handleTouchEnd = (): void => {
      if (isScrolling) return;
      isScrolling = true;
      const deltaY = startY - curY;
      scrollPageByDelta(deltaY);
      resetScroll();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
}
export default usePageScroll;
