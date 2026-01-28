"use client";

import { contact } from "@/server/contact";
import { useActionState, useEffect } from "react";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import Form from "next/form";
import SubmitButton from "./SubmitButton";

const Contact = () => {
  const [contactState, contactAction] = useActionState(contact, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!contactState.message) return;
    if (contactState.success) {
      toast.success(contactState.message);
    } else {
      toast.error(contactState.message);
    }
  }, [contactState]);

  return (
    <section className="container mx-auto px-6 py-16" id="contact">
      <Toaster position="top-right" richColors />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Contact us
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Do you have any questions?
        </p>

        <Form className="space-y-6" action={contactAction}>
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Name"
              className="w-full border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="E-Mail"
              className="w-full border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Please ask your questions here"
              rows={6}
              className="w-full border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              className="h-5 w-5 rounded border-input focus:ring-primary cursor-pointer"
            />
            <label htmlFor="privacy" className="text-gray-700 cursor-pointer">
              I have read and accept the privacy policy.
            </label>
          </div>

          <SubmitButton title="Send" />
        </Form>
      </div>
    </section>
  );
};

export default Contact;
