import { useState } from "react";
export default function ControlledForm() {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", username); // Data comes directly from state
  };

  return (
    <form className="form-card left-align" onSubmit={handleSubmit}>
      <label className="form-label">
        Username
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter unsername here"
        />
      </label>
      <p className="left-align">Current value: {username}</p>
    </form>
  );
}
