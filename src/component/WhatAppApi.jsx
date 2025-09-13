import React, { useState } from "react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px" }}
        />
      </div>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#075E54",
              color: "white",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="https://i.ibb.co/Y2s9sTp/profile.jpg" // 👉 তোমার প্রোফাইল ছবি লিঙ্ক বসাও
              alt="profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            <div>
              <strong>Jihadul Islam</strong>
              <p style={{ margin: 0, fontSize: "12px" }}>
                SEO Expert & Consultant
              </p>
            </div>
          </div>

          {/* ✅ Dynamic Time */}
          <div style={{ padding: "10px", fontSize: "14px", color: "#333" }}>
            <p>
              <strong>Jihadul</strong> <br />
              Contact Jihadul Islam Today!
            </p>
            <small>{time}</small>
          </div>

          <a
            href="https://wa.me/8801749286221?text=Hi!%20I%20want%20to%20know%20about%20SEO%20services"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              background: "#25D366",
              color: "white",
              padding: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            💬 Click to start chat
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
