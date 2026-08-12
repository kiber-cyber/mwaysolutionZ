"use client";

import { useState } from "react";
import Script from "next/script";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, AlertCircle, Paperclip } from "lucide-react";
import { contactSchema } from "@/lib/validation";
import type { z } from "zod";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    onContactTurnstileSuccess?: (token: string) => void;
    onContactTurnstileExpire?: () => void;
  }
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { locale: "en", website: "", turnstileToken: "" },
  });

  if (typeof window !== "undefined") {
    window.onContactTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
      setValue("turnstileToken", token);
    };
    window.onContactTurnstileExpire = () => {
      setTurnstileToken("");
      setValue("turnstileToken", "");
    };
  }

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, String(value ?? "")));
      if (attachment) formData.append("attachment", attachment);

      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus("success");
      reset();
      setAttachment(null);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-[#1A1D22]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#3E6B8A] focus:ring-1 focus:ring-[#3E6B8A] rounded-sm";
  const labelClass = "block text-sm font-medium mb-1.5";
  const errorClass = "text-xs text-red-600 mt-1";

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <CheckCircle2 className="mx-auto mb-5 text-[#3E6B8A]" size={40} strokeWidth={1.5} />
        <h2 className="font-display text-2xl font-semibold mb-3">Thank you.</h2>
        <p className="text-[#1A1D22]/65 leading-relaxed">
          Your message has been received. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6" noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <div>
          <label className={labelClass} htmlFor="name">Name *</label>
          <input id="name" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>This field is required.</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input id="company" className={inputClass} {...register("company")} />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className={labelClass} htmlFor="email">Email *</label>
            <input id="email" type="email" className={inputClass} {...register("email")} />
            {errors.email && <p className={errorClass}>Enter a valid email address.</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">Phone</label>
            <input id="phone" className={inputClass} {...register("phone")} />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="subject">Subject</label>
          <input id="subject" className={inputClass} {...register("subject")} />
        </div>

        <div>
          <label className={labelClass} htmlFor="message">Message *</label>
          <textarea id="message" rows={5} className={inputClass} {...register("message")} />
          {errors.message && <p className={errorClass}>Please provide a bit more detail.</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="attachment">Attachment</label>
          <label
            htmlFor="attachment"
            className="flex items-center gap-2 border border-dashed border-[#1A1D22]/20 hover:border-[#1A1D22]/35 rounded-sm px-4 py-3 text-sm text-[#1A1D22]/60 cursor-pointer transition-colors"
          >
            <Paperclip size={16} className="text-[#3E6B8A]" />
            {attachment ? attachment.name : "Attach a file (optional)"}
          </label>
          <input
            id="attachment"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.zip"
            onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
          />
        </div>

        {TURNSTILE_SITE_KEY && (
          <div
            className="cf-turnstile"
            data-sitekey={TURNSTILE_SITE_KEY}
            data-callback="onContactTurnstileSuccess"
            data-expired-callback="onContactTurnstileExpire"
          />
        )}
        <input type="hidden" {...register("turnstileToken")} value={turnstileToken} />

        {status === "error" && (
          <div className="flex items-start gap-2.5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>Your message could not be sent. Please try again, or email us directly at info@mwaysolutions.net.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 bg-[#C08A3E] hover:bg-[#a8752f] disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-sm transition-colors"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          {status !== "submitting" && <ArrowRight size={16} />}
        </button>
      </form>
    </>
  );
}