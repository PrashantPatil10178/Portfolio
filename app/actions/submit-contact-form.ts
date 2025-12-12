"use server";

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate the required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // Simulate network delay to show loading state in UI
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you would send an email or store in a database
    // You can also use the API route we created at /api/contact
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    });

    return {
      success: true,
      data: { name, email, subject, message },
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Failed to submit the form. Please try again later.",
    };
  }
}
