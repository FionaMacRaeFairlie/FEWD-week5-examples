import ControlledForm from "./components/controlled";
import UncontrolledForm from "./components/uncontrolled";
import FocusedInput from "./components/focus";
import StudentSurvey from "./components/studentsurvey";
import "./App.css";

function App() {
  return (
    <div className="form-container">
      <ControlledForm />
      <UncontrolledForm />
      <FocusedInput />
      <StudentSurvey />
    </div>
  );
}

export default App;
