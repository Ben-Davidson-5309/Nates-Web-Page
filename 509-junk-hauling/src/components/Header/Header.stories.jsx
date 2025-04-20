import React from "react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Header", // Storybook category and component name
  component: Header,
};

const Template = (args) => (
  <Router>
    <Header {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};