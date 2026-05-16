import React from "react";

function DonateWidget() {
  const handleDonate = () => {
    // Replace this with your real donation link
    window.open("https://cash.app/$JHeroGR", "_blank");
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#1e1e1e",
        color: "white",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <h2>Support This Project</h2>

      <p>
        If this todo app helped you, consider supporting development.
      </p>

      <button
        onClick={handleDonate}
        style={{
          marginTop: "10px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#00c853",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Donate 💸
      </button>
    </div>
  );
}

export default DonateWidget;