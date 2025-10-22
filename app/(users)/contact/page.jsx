"use client";

import { useActionState, useState, useTransition } from "react";
import { contactAction } from "./contact.action";
import { useFormStatus } from "react-dom";

// const contactAction=(formData)=>{
//   const {fullName,email,message}=Object.fromEntries(formData.entries()); //gets all values of inputfield inside form
//   console.log("data:",fullName,email,message);
// };

const Contact = () => {
  // const [state,formAction,isPending]=useActionState(fn,initialState);
  // const [state, formAction, isPending] = useActionState(contactAction, null);

  const [contactForm, setContactForm] = useState(null);
  const [isPending, startTransition] = useTransition(); //use transition use case React 19

  const handleSubmit = (formData) => {
    startTransition(async () => {
      const res = await contactAction(formData);
      setContactForm(res);
    });
  };
  return (
    <div className="consistent relative">
      <div className="max-w-[42%] mx-auto bg-neutral-800 px-8 pt-8 pb-12 rounded-2xl h-fit">
        <h3 className="  mb-5 text-white">Get In Touch</h3>
        <form className="space-y-6" action={handleSubmit}>
          {/* Full Name Field */}

          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-4 py-3 bg-gray-200 rounded-md ocus:outline-none focus:ring-2 focus:ring-indigo-500  transition-colors duration-200 text-neutral-800 placeholder-gray-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-200  rounded-md ocus:ring-2 focus:ring-indigo-500  transition-colors duration-200 text-neutral-800 placeholder-gray-400"
              placeholder="Enter your email address"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-200 outline-none rounded-md transition-colors duration-200 text-neutral-800 placeholder-gray-400 "
              placeholder="Enter your message..."
            />
          </div>

          {/* Submit Button */}
          <Submit />
        </form>
      </div>
      {contactForm && (
        <p
          className={`text-white mt-3 w-fit mx-auto  shadow-md shadow-gray-200 px-6 py-2  ${
            contactForm.success ? "bg-emerald-500 " : "bg-rose-600"
          }`}
        >
          {contactForm.message}
        </p>
      )}
      {/* {state && (
        <p
          className={`text-white mt-3 w-fit mx-auto  shadow-md shadow-gray-200 px-6 py-2  ${
            state.success ? "bg-emerald-500 " : "bg-rose-600"
          }`}
        >
          {state.message}
        </p>
      )} */}
    </div>
  );
};

export default Contact;

const Submit = () => {
  const { pending, data, method, action } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className=" w-full px-4 py-3.5 bg-black text-white rounded-md caption disabled:bg-gray-800 disabled:cursor-not-allowed"
    >
      {pending ? <span>Loading...</span> : <span>Send Message</span>}
    </button>
  );
};
