//server actions
"use server";
import { db } from "@/config/db";
import { redirect } from "next/navigation";

//u can also set "use server" individually inside functions
//u need prevoiusState in useActionState method inside argument
export const contactAction = async ( formData) => {
  // const fullName = formData.get("fullName");

  try {
    const { fullName, email, message } = Object.fromEntries(formData); //gets all values of inputfield inside form
    console.log(fullName, email, message);
    //object.fromEntries converts array of arrays into pure js objects

    await db.execute(
      `insert into contact_form (full_name,email,message) values (?,?,?)`, //prepared statement for preventing sql injections
      [fullName, email, message]
    );
    return { success: true, message: " form submitted successfully" };
    // redirect("/");
  } catch (error) {
    console.log("server action:", error);
    if (error.message === "NEXT_REDIRECT") throw error;  //for handling redirect
    return { success: false, message: "error while subitting" };
  }
};
