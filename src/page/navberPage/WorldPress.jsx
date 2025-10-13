import React, { useState } from "react";
import Container from "../../component/Container";
import Rank from "../../component/Rank";
import ContentVideo from "../../component/ContentVideo";

const WorldPress = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "8801749286221"; // তোমার WhatsApp নাম্বার
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ANumber: ${formData.number}`;
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="mt-[100px]">
      <Container>
        <Rank />
        <ContentVideo />

        {/* ✅ Form যোগ করা হয়েছে */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[400px] mt-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Your Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Send to WhatsApp
          </button>
        </form>
      </Container>
    </div>
  );
};

export default WorldPress;
