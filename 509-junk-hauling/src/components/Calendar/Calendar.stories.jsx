import React, { useState } from "react";
import Calendar from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
};

export const Default = () => {
  const [date, setDate] = useState(new Date());
  return <Calendar date={date} onDateChange={setDate} />;
};