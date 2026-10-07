import { useRef, useEffect } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Imperatively focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className="form-card left-align">
      <label htmlFor="user-input" className="form-label">
        Username
        <input
          className="form-control"
          id="user-input"
          ref={inputRef}
          type="text"
          placeholder="Focus is here when mounted"
        />
      </label>
    </form>
  );
}
