import { useRef, useEffect } from "react";

export function useBlob<T extends Element>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      ref.current!.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: 2000,
          fill: "forwards",
        }
      );
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return ref;
}
