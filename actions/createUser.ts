"use server";
export async function createUser(prev: unknown, formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const birthdate = formData.get("birthdate");
  console.log("--------------------------------------");
  console.log(username, email, password, birthdate);
  return true;
}
