"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import FileUpload from "./FileUpload";
import { ORG_TYPES, requestSolutionSchema } from "@/lib/validation";
import { Locale, dictionaries } from "@/lib/i18n/dictionaries";
import * as z from "zod";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileExpire?: () => void;
  }
}

type FormState = "idle" | "submitting" | "success" | "error";
type FormValues = z.infer<typeof requestSolutionSchema>;

export default function RequestSolutionForm({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<FormState>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    // Type assertion forcefully bypasses the strict Zod mismatch on Vercel
    resolver: zodResolver(requestSolutionSchema) as any,
    defaultValues: { 
      locale: locale as any, 
      orgType: "private", 
      website: "", 
      turnstileToken: "" 
    } as any,
  });

  // Prefills "Products or Services of Interest" when arriving from a product page
  const searchParams = useSearchParams();
  useEffect(() => {
    const product = searchParams.get("product");
    if (product) setValue("productsOfInterest", product);
  }, [searchParams, setValue]);

  if (typeof window !== "undefined") {
    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
      setValue("turnstileToken", token);
    };
    window.onTurnstileExpire = () => {
      setTurnstileToken("");
      setValue("turnstileToken", "");
    };
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => formData.append(key, String(value ?? "")));
      files.forEach((file) => formData.append("attachments", file));

      const res = await fetch("/api/request", { method: "POST", body: formData });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setStatus("success");
      reset();
      setFiles([]);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <CheckCircle2 className="mx-auto mb-5 text-[#3E6B8A]" size={40} strokeWidth={1.5} />
        <h2 className="font-display text-2xl font-semibold mb-3">{dict.states.successTitle}</h2>
        <p className="text-[#1A1D22]/65 leading-relaxed">{dict.states.successBody}</p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-[#1A1D22]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#3E6B8A] focus:ring-1 focus:ring-[#3E6B8A] rounded-sm";
  const labelClass = "block text-sm font-medium mb-1.5";
  const errorClass = "text-xs text-red-600 mt-1";

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-16" noValidate>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        {/* CONTACT */}
        <fieldset>
          <legend className="font-display text-lg font-semibold mb-6 pb-3 border-b border-[#1A1D22]/10 w-full">
            {dict.sections.contact}
          </legend>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className={labelClass} htmlFor="company">{dict.fields.company} *</label>
              <input id="company" className={inputClass} placeholder={dict.placeholders.company} {...register("company")} />
              {errors.company && <p className={errorClass}>{dict.validation.required}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="contactPerson">{dict.fields.contactPerson} *</label>
              <input id="contactPerson" className={inputClass} placeholder={dict.placeholders.contactPerson} {...register("contactPerson")} />
              {errors.contactPerson && <p className={errorClass}>{dict.validation.required}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="email">{dict.fields.email} *</label>
              <input id="email" type="email" className={inputClass} placeholder={dict.placeholders.email} {...register("email")} />
              {errors.email && <p className={errorClass}>{dict.validation.invalidEmail}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">{dict.fields.phone}</label>
              <input id="phone" className={inputClass} placeholder={dict.placeholders.phone} {...register("phone")} />
            </div>
            <div>
              <label className={labelClass} htmlFor="country">{dict.fields.country}</label>
              <input id="country" className={inputClass} placeholder={dict.placeholders.country} {...register("country")} />
            </div>
            <div>
              <label className={labelClass} htmlFor="city">{dict.fields.city}</label>
              <input id="city" className={inputClass} placeholder={dict.placeholders.city} {...register("city")} />
            </div>
          </div>
        </fieldset>

        {/* ORGANIZATION TYPE */}
        <fieldset>
          <legend className="font-display text-lg font-semibold mb-6 pb-3 border-b border-[#1A1D22]/10 w-full">
            {dict.sections.organization}
          </legend>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ORG_TYPES.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2.5 border border-[#1A1D22]/12 bg-white px-4 py-3 text-sm cursor-pointer has-[:checked]:border-[#3E6B8A] has-[:checked]:bg-[#3E6B8A]/5"
              >
                <input type="radio" value={type} className="accent-[#3E6B8A]" {...register("orgType")} />
                {dict.orgTypes[type]}
              </label>
            ))}
          </div>
        </fieldset>

        {/* REQUEST */}
        <fieldset>
          <legend className="font-display text-lg font-semibold mb-6 pb-3 border-b border-[#1A1D22]/10 w-full">
            {dict.sections.request}
          </legend>
          <div className="space-y-6">
            <div>
              <label className={labelClass} htmlFor="project">{dict.fields.project} *</label>
              <textarea id="project" rows={5} className={inputClass} placeholder={dict.placeholders.project} {...register("project")} />
              {errors.project && <p className={errorClass}>{dict.validation.tooShort}</p>}
            </div>
            <div>
              <label className={labelClass} htmlFor="productsOfInterest">{dict.fields.productsOfInterest}</label>
              <input id="productsOfInterest" className={inputClass} placeholder={dict.placeholders.productsOfInterest} {...register("productsOfInterest")} />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="quantity">{dict.fields.quantity}</label>
                <input id="quantity" className={inputClass} placeholder={dict.placeholders.quantity} {...register("quantity")} />
              </div>
              <div>
                <label className={labelClass} htmlFor="deliveryLocation">{dict.fields.deliveryLocation}</label>
                <input id="deliveryLocation" className={inputClass} placeholder={dict.placeholders.deliveryLocation} {...register("deliveryLocation")} />
              </div>
              <div>
                <label className={labelClass} htmlFor="deliveryDate">{dict.fields.deliveryDate}</label>
                <input id="deliveryDate" type="date" className={inputClass} {...register("deliveryDate")} />
              </div>
              <div>
                <label className={labelClass} htmlFor="budgetRange">{dict.fields.budgetRange}</label>
                <input id="budgetRange" className={inputClass} placeholder={dict.placeholders.budgetRange} {...register("budgetRange")} />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor="additionalInfo">{dict.fields.additionalInfo}</label>
              <textarea id="additionalInfo" rows={4} className={inputClass} placeholder={dict.placeholders.additionalInfo} {...register("additionalInfo")} />
            </div>
          </div>
        </fieldset>

        {/* FILES */}
        <fieldset>
          <legend className="font-display text-lg font-semibold mb-6 pb-3 border-b border-[#1A1D22]/10 w-full">
            {dict.sections.files}
          </legend>
          <FileUpload files={files} onChange={setFiles} dict={dict.fileUpload} error={fileError} onError={setFileError} />
        </fieldset>

        {/* TURNSTILE + SUBMIT */}
        <div>
          {TURNSTILE_SITE_KEY && (
            <div
              className="cf-turnstile mb-6"
              data-sitekey={TURNSTILE_SITE_KEY}
              data-callback="onTurnstileSuccess"
              data-expired-callback="onTurnstileExpire"
            />
          )}
          <input type="hidden" {...register("turnstileToken")} value={turnstileToken} />

          {status === "error" && (
            <div className="flex items-start gap-2.5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-4 py-3 mb-6">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{dict.states.errorBody}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 bg-[#C08A3E] hover:bg-[#a8752f] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-sm transition-colors"
          >
            {status === "submitting" ? dict.buttons.submitting : dict.buttons.submit}
            {status !== "submitting" && <ArrowRight size={16} />}
          </button>
        </div>
      </form>
    </>
  );
}