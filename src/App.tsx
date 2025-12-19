import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import BookingFormPage from "./pages/BookingFormPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-form" element={<BookingFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
