// app/privacy/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MWAY Solutions",
  description: "Privacy Policy and data processing notice.",
};

const termlyHtml = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * { background: transparent !important; }
  [data-custom-class='title'], [data-custom-class='title'] * { font-family: Arial !important; font-size: 26px !important; color: #000000 !important; }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * { font-family: Arial !important; color: #595959 !important; font-size: 14px !important; }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-family: Arial !important; font-size: 19px !important; color: #000000 !important; }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * { font-family: Arial !important; font-size: 17px !important; color: #000000 !important; }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * { color: #595959 !important; font-size: 14px !important; font-family: Arial !important; }
  [data-custom-class='link'], [data-custom-class='link'] * { color: #3030F1 !important; font-size: 14px !important; font-family: Arial !important; word-break: break-word !important; }
</style>
<!-- Paste your full Termly HTML block directly below this line. 
     I have truncated the giant string here for readability, 
     but you just paste your raw HTML right here inside the backticks. -->
<div><strong><span style="font-size: 26px;"><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></span></strong></div>
<div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated August 13, 2026</span></span></strong></span></div>
<div style="line-height: 1.5;"><span style="color: rgb(127, 127, 127);"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for Mway Solutions...</span></span></span></div>
`;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#1A1D22] font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6 lg:px-10 py-20 w-full bg-white shadow-sm my-10 rounded-xl">
        <div 
          className="termly-container break-words"
          dangerouslySetInnerHTML={{ __html: termlyHtml }} 
        />
      </main>
      <Footer />
    </div>
  );
}