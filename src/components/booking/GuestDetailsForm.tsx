"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const guestDetailsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .max(16, "Phone number is too long")
    .regex(/^[+]?[\d\s-]{10,16}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  specialRequest: z
    .string()
    .trim()
    .max(500, "Special request cannot exceed 500 characters")
    .optional(),
  honeypot: z.string().optional(),
});

export type GuestDetailsFormData = z.infer<typeof guestDetailsSchema>;

interface GuestDetailsFormProps {
  defaultValues: Partial<GuestDetailsFormData>;
  onSubmit: (data: GuestDetailsFormData) => void;
  onBack: () => void;
}

export function GuestDetailsForm({
  defaultValues,
  onSubmit,
  onBack,
}: GuestDetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestDetailsFormData>({
    resolver: zodResolver(guestDetailsSchema),
    defaultValues: {
      fullName: defaultValues.fullName || "",
      phone: defaultValues.phone || "",
      email: defaultValues.email || "",
      specialRequest: defaultValues.specialRequest || "",
      honeypot: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5 text-xs sm:text-sm flex-1 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="text-center">
          <h3 className="font-display text-base sm:text-lg font-semibold text-[#181d1b]">
            Contact Details
          </h3>
          <p className="text-[11px] text-[#6e7a74]">
            Where should our front desk reach out to confirm your booking?
          </p>
        </div>

        {/* Honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
        </div>

        {/* Full Name */}
        <Input
          label="Full Name *"
          placeholder="e.g. Rahul Sharma"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Phone */}
          <Input
            label="Phone Number *"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            error={errors.phone?.message}
            {...register("phone")}
          />

          {/* Email */}
          <Input
            label="Email Address *"
            type="email"
            placeholder="e.g. rahul@example.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        {/* Special Request */}
        <Textarea
          label="Special Requests (Optional)"
          placeholder="e.g. Early check-in preference, extra towels..."
          rows={2}
          error={errors.specialRequest?.message}
          {...register("specialRequest")}
        />
      </div>

      <div className="flex items-center gap-2 pt-1 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="w-1/3 border border-[#bdc9c2] hover:bg-[#ebefeb] text-[#181d1b] py-2.5 rounded-lg font-medium text-xs transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-2/3 bg-[#006951] hover:bg-[#00513e] text-white py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
        >
          Review Enquiry
        </button>
      </div>
    </form>
  );
}
