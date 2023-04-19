import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "I am a frontend developer with a passion for learning and creating.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      contentType: "html",
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <p
      style={{
        whiteSpace: "pre",
      }}
      ref={el}
    />
  );
}
