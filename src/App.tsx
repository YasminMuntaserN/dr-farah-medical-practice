import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
