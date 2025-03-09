"use server";
import { apiPost } from "@/utils/fetchApi/apiPost";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type LoginActionState = {
  email?: string;
  password?: string;
  error?: string;
  errors?: string[];
};

// export async function UserLoginForm(
//   _prevState: unknown, // Unused parameter
//   formData: FormData
// ): Promise<LoginActionState> {
//   const email = formData.get("email") as string | null;
//   const password = formData.get("password") as string | null;

//   if (!process.env.API_URL) {
//     return {
//       error: "Server configuration error. Please try again later.",
//       errors: [],
//     };
//   }

//   try {
//     const response = await fetch(`${process.env.API_URL}/users/signin`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//       // credentials: "include",
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return {
//         error:
//           typeof errorData.message === "string"
//             ? errorData.message
//             : "Login failed",
//         errors: Array.isArray(errorData.message) ? errorData.message : [],
//       };
//     }
//   } catch (error) {
//     return {
//       error: "Something went wrong. Please try again.",
//       errors: [],
//     };
//   }
//   redirect("/user");
// }
export async function UserLoginForm(
  _prevState: unknown,
  formData: FormData
): Promise<LoginActionState> {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  const result = await apiPost<LoginActionState>("/users/signin", {
    email,
    password,
  });

  if ("error" in result) {
    return result;
  }
  const cookieStore = await cookies();
  cookieStore.set("name", "lee");

  redirect("/user");
}
