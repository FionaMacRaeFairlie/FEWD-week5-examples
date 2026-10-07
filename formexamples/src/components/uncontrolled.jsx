import { useRef } from "react";

export default function UncontrolledForm() {
  const usernameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access value directly from the DOM node
    const value = usernameRef.current.value;
    console.log("Submitted:", value);
  };

  return (
    <form className="form-card left-align" onSubmit={handleSubmit}>
      <div className="input-action-row">
        <label className="form-label">
          Username
          <input
            className="form-control"
            type="text"
            defaultValue="Enter username here" // Use defaultValue for initial state
            ref={usernameRef}
          />
        </label>
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
