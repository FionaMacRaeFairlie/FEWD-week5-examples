import { useState } from "react";

export default function StudentSurvey() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    level: "undergraduate",
    interests: [],
    agreeToTerms: false,
    startDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Special handling for multiple checkboxes
    if (type === "checkbox" && name === "interests") {
      let updatedInterests;

      if (checked) {
        updatedInterests = [...formData.interests, value];
      } else {
        updatedInterests = formData.interests.filter(
          (interest) => interest !== value,
        );
      }

      setFormData({
        ...formData,
        interests: updatedInterests,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form submitted successfully!");
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Student Survey</h2>

      {/* Name */}
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Select */}
      <div className="form-group">
        <label className="form-label">Course</label>
        <select
          className="form-control"
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Choose...</option>
          <option value="Computing">Computing</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
        </select>
      </div>

      {/* Radio Buttons */}
      <div className="form-group">
        <label className="form-label">Level</label>

        <label>
          <input
            type="radio"
            name="level"
            value="undergraduate"
            checked={formData.level === "undergraduate"}
            onChange={handleChange}
          />
          Undergraduate
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="level"
            value="postgraduate"
            checked={formData.level === "postgraduate"}
            onChange={handleChange}
          />
          Postgraduate
        </label>
      </div>

      <div className="form-group">
        <label className="form-label">Interests</label> 
        <div className="checkbox-group">
           
          <div className="checkbox-item">
            <input
              id="programming"
              type="checkbox"
              name="interests"
              value="Programming"
              checked={formData.interests.includes("Programming")}
              onChange={handleChange}
            />
            <label htmlFor="programming">Programming</label>
          </div>
           
          <div className="checkbox-item">
            <input
              id="ai"
              type="checkbox"
              name="interests"
              value="AI"
              checked={formData.interests.includes("AI")}
              onChange={handleChange}
            />
            <label htmlFor="ai">Artificial Intelligence</label>
          </div>
           
          <div className="checkbox-item">
            <input
              id="security"
              type="checkbox"
              name="interests"
              value="Cyber Security"
              checked={formData.interests.includes("Cyber Security")}
              onChange={handleChange}
            />
            <label htmlFor="security">Cyber Security</label>
          </div>
           
        </div>
      </div>

      {/* Date Input */}
      <div className="form-group">
        <label className="form-label">Start Date</label>
        <input
          className="form-control"
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      {/* Text Area */}
      <div className="form-group">
        <label className="form-label">Comments</label>
        <textarea
          className="form-control"
          name="notes"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      {/* Single Checkbox */}
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      <hr />

      <h3>Current State</h3>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </form>
  );
}
