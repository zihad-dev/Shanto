import React, { useEffect, useRef, useState } from "react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(""); // dynamic time
  const openRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openRef.current && !openRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setOpen((prev) => {
      if (!prev) {
        const now = new Date();
        const formatted = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setTime(formatted);
 
      }
      return !prev;
    });
  };

  return (
    <div>
      {/* Floating Button */}
      <div
        onClick={() =>handleToggle(!open)}
        className="fixed bottom-5 right-5 bg-[#25D366] w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer z-50 sm:w-16 sm:h-16"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8 sm:w-9 sm:h-9"
        />
      </div>

      {/* Chat Box */}
      {open && (
        <div
          ref={openRef}
          className="fixed bottom-20 right-0 w-70 md:w-80 bg-white rounded-xl shadow-xl z-50 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
            <img
              src="https://i.ibb.co/Y2s9sTp/profile.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col text-sm md:text-base"> 
              <strong>Md Hasibur Rahman Shanto</strong>
              <span className="text-xs sm:text-sm">SEO Expert & Consultant</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-3 text-sm text-gray-800 flex flex-col gap-1">
            <p>
              <strong>Hasibur</strong> <br />
              Contact Hasibur Rahman Today!
            </p>
            <small className="text-gray-500">{time}</small>
          </div>

          {/* Footer */}
          <a
            href="https://wa.me/8801749286221?text=Hi!%20I%20want%20to%20know%20about%20SEO%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-center font-bold py-3 hover:bg-green-600 transition-colors"
          >
            💬 Click to start chat
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
