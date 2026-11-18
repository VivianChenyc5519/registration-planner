import { Route, Routes } from "react-router-dom";
import { CoursePage } from "./features/Course/coursePage";
// import { SchedulePage } from "./features/Schedule/SchedulePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoursePage />} />
      {/* <Route path="/schedule" element={<SchedulePage />} /> */}
    </Routes>
  );
}

export default App;
