"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validation/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        reset();
        toast.success("Thank you! Your message has been sent.");
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again or reach out by phone or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-xl border border-[#bdc9c2] shadow-sm text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#c5ebdb] text-[#006951] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-display text-2xl text-[#181d1b]">Message Received</h3>
        <p className="text-sm text-[#3e4944] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to Hotel O Namaste. Our team has received your note and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-xs font-semibold text-[#006951] hover:underline uppercase tracking-wider cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 sm:p-10 rounded-xl border border-[#bdc9c2] shadow-sm space-y-5">
      <div>
        <h3 className="font-display text-2xl text-[#181d1b]">Send a Message</h3>
        <p className="text-xs text-[#6e7a74] mt-1">
          Have an inquiry or custom request? Leave us a message below.
        </p>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          placeholder="e.g. Rahul Sharma"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <Input
          label="Phone Number *"
          type="tel"
          placeholder="e.g. +91 98765 43210"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <Input
        label="Email Address *"
        type="email"
        placeholder="e.g. rahul@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Subject *"
        placeholder="e.g. Booking availability enquiry for wedding group"
        error={errors.subject?.message}
        {...register("subject")}
      />

      <Textarea
        label="Your Message *"
        placeholder="Please write your questions or details here..."
        rows={4}
        error={errors.message?.message}
        {...register("message")}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-[#006951] hover:bg-[#00513e] disabled:opacity-50 text-white px-8 py-3.5 rounded font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <span>Sending Message...</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
}
