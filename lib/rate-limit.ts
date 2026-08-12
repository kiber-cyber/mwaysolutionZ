/**
 * Minimal fixed-window rate limiter, keyed by IP.
 *
 * IMPORTANT: this uses in-process memory, which works per-instance but is
 * NOT reliable on Vercel serverless — each cold start / concurrent instance
 * gets its own counter, so it only slows down abuse, it doesn't hard-stop it.
 * For production-grade protection, replace this with a shared store, e.g.
 * Upstash Redis + @upstash/ratelimit (a few lines to swap in) — that's the
 * recommended upgrade path once this is live and getting real traffic.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // per window per IP

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(ip: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const existing = buckets.get(ip);

  if (!existing || existing.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { allowed: true };
}

/** Best-effort client IP extraction behind Vercel/Cloudflare proxies. */
export function getClientIp(headers: Headers): string {
  return (
    headers.get("cf-connecting-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unknown"
  );
}
