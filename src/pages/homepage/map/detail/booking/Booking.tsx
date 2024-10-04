import React, { useState } from "react";
import CardSelectSection from "./components/CardSelectSection";
import ReviewSection from "./components/ReviewSection";
import TimeSelectSection from "./components/TimeSelectSection";

const Booking = () => {
  const [section, setSection] = useState(1);
  return (
    <div className="">
      {section === 1 && <TimeSelectSection setSection={setSection} />}
      {section === 2 && <CardSelectSection setSection={setSection} />}
      {section === 3 && <ReviewSection setSection={setSection} />}
    </div>
  );
};
export default Booking;
