import React from "react";
import { MemoryRouter } from "react-router-dom";
import HomeCard from "./HomeCard";

export default {
  title: "Components/HomeCard",
  component: HomeCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <HomeCard {...args} />;

export const RatesAndDates = Template.bind({});
RatesAndDates.args = {
  title: "Rates and Dates",
  description: "Check out our pricing and availability.",
  linkText: "View Rates and Dates",
  linkUrl: "/ratesanddates",
};

export const RentATrailer = Template.bind({});
RentATrailer.args = {
  title: "Rent a Trailer",
  description: "Need a trailer? Rent one from us today!",
  linkText: "Rent a Trailer",
  linkUrl: "/rentatrailer",
};

export const AboutUs = Template.bind({});
AboutUs.args = {
  title: "About Us",
  description: "Learn more about our company and mission.",
  linkText: "About Us",
  linkUrl: "/about",
};

export const ContactUs = Template.bind({});
ContactUs.args = {
  title: "Contact Us",
  description: "Get in touch with us for more information.",
  linkText: "Contact Us",
  linkUrl: "/contact",
};