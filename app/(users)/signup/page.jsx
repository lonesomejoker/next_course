"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SignupForm from "./SignupForm";

export default function RegistrationForm() {
  // const router = useRouter();

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });
  // const [state, setState] = useState(null);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   // Simulate successful registration
  //   setState({
  //     success: true,
  //     message: "Registration successful! Welcome aboard.",
  //   });

  //   // Reset form
  //   setFormData({
  //     fullName: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   router.push("/");
  // };

  return (
    <div className="min-h-screen bg-[rgb(14,14,14)] text-white">
      <SignupForm/>
    </div>
  );
}