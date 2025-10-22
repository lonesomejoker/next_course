"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createHospitalAction } from "./hospital.action";

export const HospitalForm = () => {
  const [hospitalState, setHospitalState] = useState(null);
  const router =useRouter();
  const handleCreateHospital = async (formData) => {
    const res = await createHospitalAction(formData);
    setHospitalState(res);
    // router.refresh(); //for client side for fetching the latest data just like revalidatePath("/hospitals");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🏥 Add New Hospital
        </h2>
        <form
          className="grid grid-cols-1 gap-4 sm:grid-cols-2  "
          action={handleCreateHospital}
        >
          <input
            className="border p-2 rounded"
            type="text"
            name="name"
            placeholder="Hospital Name"
          />
          <input
            className="border p-2 rounded"
            type="text"
            name="city"
            placeholder="City"
          />
          <input
            className="border p-2 rounded"
            type="text"
            name="state"
            placeholder="State"
          />
          <input
            className="border p-2 rounded"
            type="text"
            name="department"
            placeholder="Department"
          />
          <input
            className="border p-2 rounded"
            type="number"
            name="established_year"
            placeholder="Established Year (e.g. 2005)"
            min="1800"
            max={new Date().getFullYear()}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Add Hospital
          </button>
        </form>
        {hospitalState && (
        <p
          className={`text-white mt-3 w-fit mx-auto  shadow-md shadow-gray-200 px-6 py-2  ${
            hospitalState.success ? "bg-emerald-500 " : "bg-rose-600"
          }`}
        >
          {hospitalState.message}
        </p>
      )}
      </div>
    </>
  );
};
