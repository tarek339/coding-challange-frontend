"use server";

import { PreviewData } from "next";

type Response = {
  success: boolean;
  message: string;
  error?: string;
};

type Result = {
  success: boolean;
  message: string;
};

export const contact = async (
  prev: PreviewData,
  formData: FormData,
): Promise<Result> => {
  try {
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    // const privacy = formData.get("privacy")?.toString() || "";

    // Server-side validation
    const errors: string[] = [];
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    // const trimmedPrivacy = privacy.trim();

    if (!trimmedName) {
      errors.push("Name is required.");
    } else if (trimmedName.length < 2) {
      errors.push("Name must be at least 2 characters.");
    }

    if (!trimmedEmail) {
      errors.push("Email is required.");
    } else {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(trimmedEmail)) errors.push("Email is invalid.");
    }

    if (!trimmedMessage) {
      errors.push("Message is required.");
    } else {
      if (trimmedMessage.length < 10)
        errors.push("Message must be at least 10 characters.");
      if (trimmedMessage.length > 500)
        errors.push("Message must be at most 500 characters.");
    }

    // const privacyAccepted = ["on", "true", "1", "yes"].includes(
    //   trimmedPrivacy.toLowerCase(),
    // );
    // if (!privacyAccepted) errors.push("You must accept the privacy policy.");

    if (errors.length) {
      return {
        success: false,
        message: errors.join(" "),
      };
    }

    const res = await fetch(process.env.NEXT_FORM_URL || "", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: trimmedEmail,
        name: trimmedName,
        message: trimmedMessage,
      }),
    });

    const json: Response = await res.json().catch(() => null);

    if (!res.ok) throw new Error(json?.error || "Error from external API");

    return {
      success: true,
      message: "Your message has been sent successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "An unexpected error occurred.",
    };
  }
};
