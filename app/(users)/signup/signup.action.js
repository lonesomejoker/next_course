"use server";
import { signupSchema } from "@/components/schema/signupSchema";
import { db } from "@/config/db";

export const signupAction = async (prevState, formData) => {
  try {
    const raw = Object.fromEntries(formData);

    // ✅ Zod validation
    const result = signupSchema.safeParse(raw);

    if (!result.success) {
      // 🔥 extract first error message only
      const firstError = result.error.issues[0]?.message;

      return {
        success: false,
        message: firstError || "Invalid input",
      };
    }

    const { fullName, email, password } = result.data;

    await db.execute(
      `INSERT INTO registration (full_name, email, password) VALUES (?, ?, ?)`,
      [fullName, email, password]
    );

    return {
      success: true,
      message: "Account created successfully! Welcome aboard.",
    };
  } catch (error) {
    console.error("DB ERROR:", error);

    // ✅ Duplicate email handling
    if (error.code === "ER_DUP_ENTRY") {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};