// lib/i18n/dictionaries.ts

export type Locale = "en" | "ka";
export const LOCALES: Locale[] = ["en", "ka"];
export const DEFAULT_LOCALE: Locale = "en";

export const dictionaries = {
  en: {
    meta: {
      title: "Request a Solution | MWAY Solutions",
      description:
        "Submit your project or procurement requirement to MWAY Solutions. Our team will review your requirements and contact you.",
    },
    page: {
      eyebrow: "REQUEST A SOLUTION",
      heading: "Tell Us What You Need",
      intro:
        "Submit your requirement below — equipment, a project, or a technical/procurement request — and our team will review it and get in touch.",
    },
    sections: {
      contact: "Contact Information",
      organization: "Organization Type",
      request: "Request",
      files: "Attachments",
    },
    fields: {
      company: "Company / Organization",
      contactPerson: "Contact Person",
      email: "Email",
      phone: "Phone",
      country: "Country",
      city: "City",
      orgType: "Organization Type",
      project: "Project / Requirement",
      productsOfInterest: "Products or Services of Interest",
      quantity: "Estimated Quantity",
      deliveryLocation: "Required Delivery Location",
      deliveryDate: "Required Delivery Date",
      budgetRange: "Budget Range (optional)",
      additionalInfo: "Additional Information",
      attachments: "Upload files",
    },
    placeholders: {
      company: "e.g. Tbilisi Grand Hotel",
      contactPerson: "Full name",
      email: "you@company.com",
      phone: "+995 5xx xxx xxx",
      country: "Georgia",
      city: "Tbilisi",
      project:
        "Describe your project or requirement — e.g. full kitchen equipment supply for a new institutional facility",
      productsOfInterest: "e.g. commercial ovens, refrigeration, dishwashing equipment",
      quantity: "e.g. 1 unit, or a full equipment list",
      deliveryLocation: "City / facility address",
      deliveryDate: "",
      budgetRange: "e.g. estimated range, if known",
      additionalInfo: "Anything else we should know",
    },
    orgTypes: {
      private: "Private Business",
      government: "Government",
      public_institution: "Public Institution",
      ngo: "NGO",
      education: "Education",
      healthcare: "Healthcare",
      hospitality: "Hospitality",
      other: "Other",
    },
    fileUpload: {
      dragText: "Drag files here or click to browse",
      hint: "PDF, DOC/DOCX, XLS/XLSX, JPG, PNG, ZIP — up to 10MB per file, 25MB total",
      examplesLabel: "Examples:",
      examples: [
        "Technical specifications",
        "Tender documents",
        "Project drawings",
        "Equipment lists",
      ],
      remove: "Remove",
      tooLarge: "File is too large (max 10MB).",
      badType: "File type not allowed.",
      totalTooLarge: "Total attachment size exceeds 25MB.",
    },
    buttons: {
      submit: "Submit Request",
      submitting: "Submitting...",
      submitted: "Request Submitted",
    },
    states: {
      successTitle: "Thank you.",
      successBody:
        "Your request has been received. Our team will review your requirements and contact you shortly.",
      errorTitle: "Something went wrong.",
      errorBody: "Your request could not be submitted. Please try again, or email us directly at info@mwaysolutions.net.",
    },
    validation: {
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      tooShort: "Please provide a bit more detail.",
    },
    // ---------- NEW: contact section ----------
    contact: {
      meta: {
        title: "Contact | MWAY Solutions",
        description: "Get in touch with MWAY Solutions for your equipment, project, or procurement needs.",
      },
      page: {
        eyebrow: "CONTACT",
        heading: "Get in Touch",
        intro:
          'Questions about a product, a project, or anything else — send us a message and we\'ll get back to you. For a specific project or procurement requirement, use <a href="/request-solution" class="text-[#C08A3E] font-semibold underline underline-offset-2">Request a Solution</a> instead — it captures the detail our team needs to respond properly.',
      },
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        attachment: "Attach a file (optional)",
        submit: "Send Message",
        submitting: "Sending...",
        successTitle: "Thank you.",
        successBody: "Your message has been received. Our team will get back to you shortly.",
        errorBody: "Your message could not be sent. Please try again, or email us directly at info@mwaysolutions.net.",
      },
      validation: {
        nameRequired: "This field is required.",
        invalidEmail: "Enter a valid email address.",
        messageRequired: "Please provide a bit more detail.",
      },
      subjects: [
        { value: "general", label: "General Inquiry" },
        { value: "sales", label: "Sales & Products" },
        { value: "support", label: "Technical Support" },
        { value: "partnership", label: "Partnership" },
        { value: "other", label: "Other" },
      ],
    },
  },
  ka: {
    meta: {
      title: "მოთხოვნის გაგზავნა | MWAY Solutions",
      description:
        "გაგზავნეთ თქვენი პროექტის ან შესყიდვის მოთხოვნა MWAY Solutions-ში. ჩვენი გუნდი განიხილავს მოთხოვნას და დაგიკავშირდებათ.",
    },
    page: {
      eyebrow: "მოთხოვნის გაგზავნა",
      heading: "გვითხარით რა გჭირდებათ",
      intro:
        "შეავსეთ ფორმა — აღჭურვილობა, პროექტი ან ტექნიკური/შესყიდვის მოთხოვნა — და ჩვენი გუნდი განიხილავს მოთხოვნას და დაგიკავშირდებათ.",
    },
    sections: {
      contact: "საკონტაქტო ინფორმაცია",
      organization: "ორგანიზაციის ტიპი",
      request: "მოთხოვნა",
      files: "დანართები",
    },
    fields: {
      company: "კომპანია / ორგანიზაცია",
      contactPerson: "საკონტაქტო პირი",
      email: "ელ. ფოსტა",
      phone: "ტელეფონი",
      country: "ქვეყანა",
      city: "ქალაქი",
      orgType: "ორგანიზაციის ტიპი",
      project: "პროექტი / მოთხოვნა",
      productsOfInterest: "სასურველი პროდუქტები ან სერვისები",
      quantity: "სავარაუდო რაოდენობა",
      deliveryLocation: "მიწოდების ადგილი",
      deliveryDate: "მიწოდების სასურველი თარიღი",
      budgetRange: "ბიუჯეტის ფარგლები (არასავალდებულო)",
      additionalInfo: "დამატებითი ინფორმაცია",
      attachments: "ატვირთეთ ფაილები",
    },
    placeholders: {
      company: "მაგ. სასტუმრო „თბილისი გრანდ“",
      contactPerson: "სახელი და გვარი",
      email: "you@company.com",
      phone: "+995 5xx xxx xxx",
      country: "საქართველო",
      city: "თბილისი",
      project:
        "აღწერეთ თქვენი პროექტი ან მოთხოვნა — მაგ. სამზარეულოს სრული აღჭურვილობის მიწოდება ახალი ინსტიტუციური ობიექტისთვის",
      productsOfInterest: "მაგ. სამრეწველო ღუმელები, მაცივრები, ჭურჭლის სარეცხი დანადგარები",
      quantity: "მაგ. 1 ერთეული, ან სრული ნუსხა",
      deliveryLocation: "ქალაქი / ობიექტის მისამართი",
      deliveryDate: "",
      budgetRange: "მაგ. სავარაუდო ფარგლები, ასეთის არსებობის შემთხვევაში",
      additionalInfo: "სხვა ინფორმაცია, რომელიც უნდა ვიცოდეთ",
    },
    orgTypes: {
      private: "კერძო ბიზნესი",
      government: "სამთავრობო",
      public_institution: "საჯარო დაწესებულება",
      ngo: "არასამთავრობო ორგანიზაცია",
      education: "განათლება",
      healthcare: "ჯანდაცვა",
      hospitality: "სასტუმრო/რესტორნის სფერო",
      other: "სხვა",
    },
    fileUpload: {
      dragText: "გადმოიტანეთ ფაილები აქ ან დააჭირეთ ასარჩევად",
      hint: "PDF, DOC/DOCX, XLS/XLSX, JPG, PNG, ZIP — მაქს. 10MB თითო ფაილზე, ჯამში 25MB",
      examplesLabel: "მაგალითები:",
      examples: [
        "ტექნიკური სპეციფიკაციები",
        "ტენდერის დოკუმენტები",
        "პროექტის ნახაზები",
        "აღჭურვილობის ნუსხა",
      ],
      remove: "წაშლა",
      tooLarge: "ფაილი ძალიან დიდია (მაქს. 10MB).",
      badType: "ფაილის ტიპი დაუშვებელია.",
      totalTooLarge: "დანართების ჯამური ზომა აღემატება 25MB-ს.",
    },
    buttons: {
      submit: "მოთხოვნის გაგზავნა",
      submitting: "იგზავნება...",
      submitted: "მოთხოვნა გაგზავნილია",
    },
    states: {
      successTitle: "გმადლობთ.",
      successBody:
        "თქვენი მოთხოვნა მიღებულია. ჩვენი გუნდი განიხილავს მოთხოვნას და მალე დაგიკავშირდებათ.",
      errorTitle: "დაფიქსირდა შეცდომა.",
      errorBody:
        "მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ ხელახლა, ან მოგვწერეთ პირდაპირ: info@mwaysolutions.net",
    },
    validation: {
      required: "ეს ველი სავალდებულოა.",
      invalidEmail: "შეიყვანეთ სწორი ელ. ფოსტის მისამართი.",
      tooShort: "გთხოვთ, მიუთითოთ მეტი დეტალი.",
    },
    // ---------- NEW: contact section (Georgian) ----------
    contact: {
      meta: {
        title: "კონტაქტი | MWAY Solutions",
        description: "დაგვიკავშირდით აღჭურვილობის, პროექტის ან შესყიდვის საკითხებში.",
      },
      page: {
        eyebrow: "კონტაქტი",
        heading: "დაგვიკავშირდით",
        intro:
          'გაქვთ შეკითხვა პროდუქტზე, პროექტზე ან სხვა საკითხზე? გამოგვიგზავნეთ შეტყობინება და ჩვენ მალე ვუპასუხებთ. კონკრეტული პროექტის ან შესყიდვის მოთხოვნისთვის გამოიყენეთ <a href="/request-solution" class="text-[#C08A3E] font-semibold underline underline-offset-2">მოთხოვნის გაგზავნა</a> – ის შეიცავს ყველა საჭირო დეტალს, რომ ჩვენმა გუნდმა სწორად უპასუხოს.',
      },
      form: {
        name: "სახელი",
        company: "კომპანია",
        email: "ელ. ფოსტა",
        phone: "ტელეფონი",
        subject: "თემა",
        message: "შეტყობინება",
        attachment: "ფაილის დამაგრება (არასავალდებულო)",
        submit: "შეტყობინების გაგზავნა",
        submitting: "იგზავნება...",
        successTitle: "გმადლობთ.",
        successBody: "თქვენი შეტყობინება მიღებულია. ჩვენი გუნდი მალე დაგიკავშირდებათ.",
        errorBody: "შეტყობინების გაგზავნა ვერ მოხერხდა. სცადეთ ხელახლა, ან მოგვწერეთ პირდაპირ: info@mwaysolutions.net",
      },
      validation: {
        nameRequired: "ეს ველი სავალდებულოა.",
        invalidEmail: "შეიყვანეთ სწორი ელ. ფოსტის მისამართი.",
        messageRequired: "გთხოვთ, მიუთითოთ მეტი დეტალი.",
      },
      subjects: [
        { value: "general", label: "ზოგადი შეკითხვა" },
        { value: "sales", label: "გაყიდვები და პროდუქტები" },
        { value: "support", label: "ტექნიკური მხარდაჭერა" },
        { value: "partnership", label: "პარტნიორობა" },
        { value: "other", label: "სხვა" },
      ],
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}