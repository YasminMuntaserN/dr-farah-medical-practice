import React, { useState, useEffect } from "react";
import BookingSection from "../components/BookingSection";
import BookingLayout from "../ui/BookingLayout";
import ConsultationFormModal from "./components/ConsultationFormModal";
import { useNavigate } from "react-router-dom";

const BookingPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BookingLayout>
        <BookingSection setShowConsultationForm={setShowConsultationForm} />
    </BookingLayout>
  );
};

export default BookingPage;
