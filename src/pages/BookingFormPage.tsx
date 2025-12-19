import React, { useState, useEffect } from "react";
import ConsultationFormModal from "../components/ConsultationFormModal";
import { useNavigate } from "react-router-dom";
import BookingLayout from "../ui/BookingLayout";

const BookingFormPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        <ConsultationFormModal />
    </BookingLayout>
  );
};

export default BookingFormPage;
