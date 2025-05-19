import React from "react";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-36 h-screen ">
      <form onSubmit={sumbitForm} className="flex flex-col gap-2">
        <input
          className="bg-gray-100 border-2"
          type="text"
          placeholder="fullname"
          name="fullname"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="bg-gray-100 border-2"
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="bg-gray-100 border-2"
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="border px-3 ">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Form;
