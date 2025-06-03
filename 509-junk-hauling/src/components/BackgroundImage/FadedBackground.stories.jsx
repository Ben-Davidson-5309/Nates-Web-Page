import FadedBackground from "./FadedBackground";

export default {
  title: "Components/FadedBackground",
  component: FadedBackground,
};

export const Default = () => (
  <div style={{ position: "relative", height: "300px" }}>
    <FadedBackground />
    <div style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "120px" }}>
      Content over faded background
    </div>
  </div>
);