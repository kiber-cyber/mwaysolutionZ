import { z } from "zod";

/** Organization types offered in the form — keep in sync with dictionaries.ts orgTypes keys. */
export const ORG_TYPES = [
  "private",
  "government",
  "public_institution",
  "ngo",
  "education",
  "healthcare",
  "hospitality",
  "other",
] as const;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
  "application/zip",
  "application/x-zip-compressed",
] as const;

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB per file
export const MAX_TOTAL_ATTACHMENT_BYTES = 25 * 1024 * 1024; // 25MB total

/**
 * Core request-solution fields. File validation happens separately in the
 * API route (zod doesn't handle multipart File objects cleanly across
 * client/server boundaries), using ALLOWED_FILE_TYPES / size constants above.
 */
export const requestSolutionSchema = z.object({
  company: z.string().trim().min(2).max(200),
  contactPerson: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  orgType: z.enum(ORG_TYPES),
  project: z.string().trim().min(10).max(5000),
  productsOfInterest: z.string().trim().max(2000).optional().or(z.literal("")),
  quantity: z.string().trim().max(500).optional().or(z.literal("")),
  deliveryLocation: z.string().trim().max(300).optional().or(z.literal("")),
  deliveryDate: z.string().trim().max(100).optional().or(z.literal("")),
  budgetRange: z.string().trim().max(200).optional().or(z.literal("")),
  additionalInfo: z.string().trim().max(5000).optional().or(z.literal("")),

  // Honeypot — real users never see or fill this field (hidden via CSS).
  // If it arrives non-empty, the submission is silently dropped as spam.
  website: z.string().max(0).optional().or(z.literal("")),

  // Cloudflare Turnstile token, verified server-side in the API route.
  turnstileToken: z.string().min(1, "Verification failed. Please try again."),

  locale: z.enum(["en", "ka"]).default("en"),
});

export type RequestSolutionInput = z.infer<typeof requestSolutionSchema>;

/** Simple contact form — lighter than the Request a Solution form. */
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(200),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000),

  // Honeypot, same pattern as requestSolutionSchema.
  website: z.string().max(0).optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Verification failed. Please try again."),
  locale: z.enum(["en", "ka"]).default("en"),
});

export type ContactInput = z.infer<typeof contactSchema>;
