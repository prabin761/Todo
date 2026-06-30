import React from "react";
import { useState, useRef } from "react";

const SignIn = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.target.focus();
      return;
    }
    if (!form.password) {
      passwordRef.target.focus();
    }
    console.log("Form submitted", form);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        type="text"
        value={form.name}
        ref={nameRef}
        onChange={handleChange}
        placeholder="Name"
        name="name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        name="email"
        ref={emailRef}
      />

      <input
        type="password"
        className="border rounded-2xl p-2 my-3"
        value={form.password}
        onChange={handleChange}
        placeholder="your password"
        name="password"
        ref={passwordRef}
      />

      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
