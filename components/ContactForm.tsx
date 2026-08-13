"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
// import { Turnstile } from '@marsidev/react-turnstile'; // Uncomment if using Turnstile

interface ContactFormProps {
  locale: string;
  dict: any;
}

export default function ContactForm({ locale, dict }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    // Pre-fill subject from URL (e.g., /contact?subject=sales)
    const querySubject = searchParams.get("subject");
    if (querySubject) {
      const validSubjects = dict.subjects.map((s: any) => s.value);
      if (validSubjects.includes(querySubject.toLowerCase())) {
        setSubject(querySubject.toLowerCase());
      }
    }
  }, [searchParams, dict.subjects]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    
    // Example fetch to your API route
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center p-8 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">{dict.form.successTitle}</h3>
        <p className="text-green-700">{dict.form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{dict.form.name}</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#C08A3E] outline-none" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{dict.form.company}</label>
          <input type="text" id="company" name="company" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#C08A3E] outline-none" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{dict.form.email}</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#C08A3E] outline-none" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{dict.form.phone}</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#C08A3E] outline-none" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{dict.form.subject}</label>
        <select 
          id="subject" 
          name="subject" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#C08A3E] outline-none bg-white"
        >
          {dict.subjects.map((sub: any) => (
            <option key={sub.value} value={sub.value}>{sub.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{dict.form.message}</label>
        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#C08A3E] outline-none"></textarea>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{dict.form.errorBody}</p>
      )}

      {/* <Turnstile siteKey="YOUR_SITE_KEY" /> */}

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#0E1B2B] text-white font-medium py-3 rounded-md hover:bg-[#1a2e47] transition-colors disabled:opacity-70"
      >
        {isSubmitting ? dict.form.submitting : dict.form.submit}
      </button>
    </form>
  );
}