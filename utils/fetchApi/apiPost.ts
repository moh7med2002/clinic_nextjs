/**
 * Reusable function for making API POST requests.
 * @param endpoint API endpoint (e.g., "/users/signin")
 * @param data Payload to send in the request body
 * @returns Response data or an error message
 */
export async function apiPost<T>(
  endpoint: string,
  data: unknown
): Promise<T | { error: string; errors?: string[] }> {
  if (!process.env.API_URL) {
    return { error: "Server configuration error. Please try again later." };
  }

  try {
    const response = await fetch(`${process.env.API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const responseData = await response.json();

    if (!response.ok) {
      return {
        error:
          typeof responseData.message === "string"
            ? responseData.message
            : "Request failed",
        errors: Array.isArray(responseData.message) ? responseData.message : [],
      };
    }

    return responseData;
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
