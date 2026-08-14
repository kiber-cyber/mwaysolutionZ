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
    contact: {
      meta: {
        title: "Contact | MWAY Solutions",
        description: "Get in touch with MWAY Solutions for your equipment, project, or procurement needs.",
      },
      page: {
        eyebrow: "CONTACT",
        heading: "Get in Touch",
        intro:
          'Questions about a product, a project, or anything else — send us a message and we\'ll get back to you. For a specific project or procurement requirement, use Request a Solution instead — it captures the detail our team needs to respond properly.',
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
    about: {
      meta: {
        title: "About | MWAY Solutions",
        description: "Professional Solutions. International Sourcing. Reliable Partnerships.",
      },
      hero: {
        eyebrow: "ABOUT",
        heading: "About MWAY Solutions",
        subheading: "Professional Solutions. International Sourcing. Reliable Partnerships.",
      },
      content: `MWAY Solutions is a professional solutions, sourcing, procurement, and project coordination firm serving businesses, institutions, organizations, and clients with demanding requirements.

Our work is built around a professional team and a network of established manufacturers, suppliers, contractors, logistics providers, and specialized service partners across Georgia, Turkey, Europe, and other relevant markets.

We help clients source products, equipment, materials, and specialized services, while also coordinating the people and organizations required to deliver more complex projects.

**More Than a Supplier**

We understand that many requirements cannot be solved simply by selecting a product from a catalogue.

A project may require several suppliers, a specialized manufacturer, an experienced contractor, international sourcing, customized production, or coordination between multiple parties.

This is where MWAY Solutions brings value.

We identify suitable sources, communicate with professional partners, coordinate requirements, and help move the project from an initial request toward a practical result.

Our clients can approach us with a specific product, a technical requirement, or simply a problem that needs to be solved.

**International Sourcing**

Through our professional relationships and regional market access, we can assist with sourcing from Turkey, European markets, and other international suppliers.

Depending on the requirement, this may include commercial equipment, technical products, specialized materials, components, furnishings, custom-made products, and other goods that may not be readily available through conventional local channels.

Where necessary, we can also identify alternative suppliers or contractors when the original source cannot meet the required specification, quantity, quality, or delivery timeframe.

**A Network Behind Every Solution**

Our capabilities extend beyond the products we directly source.

We work with a network of professional partners whose expertise can be brought into a project when required — from manufacturers and distributors to contractors, technical specialists, logistics providers, and other service professionals.

This allows us to remain flexible and approach each requirement individually rather than forcing every client into the same solution.

**Built Around Long-Term Relationships**

We believe reliable business is built on trust, communication, professional standards, and long-term relationships.

Our objective is not simply to complete a single transaction. We aim to become a dependable partner that clients can return to whenever they need a product, service, supplier, contractor, or solution.

One requirement. Multiple possibilities. One coordinated solution.`,
      cta: {
        title: "Have a Requirement?",
        subtitle: "Tell us what you need. Our team will review your requirements and help identify the right solution.",
        button: "Request a Solution",
      },
    },
    products: {
      meta: {
        title: "Products | MWAY Solutions",
        description: "Browse equipment and products available for commercial, institutional and project-based requirements.",
      },
      hero: {
        eyebrow: "CATALOG",
        heading: "Products",
        intro: "Equipment and products for commercial, institutional and project-based requirements. This is a working catalog, not a shop — every item is available to request, not purchase online.",
      },
      categories: "Browse by Category",
      selected: "Selected Products",
      selectedIntro: "A curated showcase — not the full catalog. Tell us what you need and we'll confirm availability and specifications.",
      cta: {
        title: "Don't see what you need?",
        subtitle: "Our catalog covers common equipment categories, but most projects need something more specific. Tell us the requirement directly.",
        button: "Request a Solution",
      },
    },
    solutions: {
      meta: {
        title: "Solutions | MWAY Solutions",
        description: "Equipment supply, custom design, installation, procurement and maintenance solutions.",
      },
      hero: {
        eyebrow: "SOLUTIONS",
        heading: "Solutions That Move Projects Forward",
        intro: "From equipment supply and procurement to installation, commissioning and ongoing technical support, we help organizations turn requirements into practical, reliable solutions.",
      },
      capabilities: "What We Do",
      areas: "Solution Areas",
      cta: {
        title: "Have a Requirement?",
        subtitle: "Tell us what you need. Our team will review your requirements and help identify the right solution.",
        button: "Request a Solution",
      },
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
    contact: {
      meta: {
        title: "კონტაქტი | MWAY Solutions",
        description: "დაგვიკავშირდით აღჭურვილობის, პროექტის ან შესყიდვის საკითხებში.",
      },
      page: {
        eyebrow: "კონტაქტი",
        heading: "დაგვიკავშირდით",
        intro:
          'გაქვთ შეკითხვა პროდუქტზე, პროექტზე ან სხვა საკითხზე? გამოგვიგზავნეთ შეტყობინება და ჩვენ მალე ვუპასუხებთ. კონკრეტული პროექტის ან შესყიდვის მოთხოვნისთვის გამოიყენეთ მოთხოვნის გაგზავნა – ის შეიცავს ყველა საჭირო დეტალს, რომ ჩვენმა გუნდმა სწორად უპასუხოს.',
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
    about: {
      meta: {
        title: "ჩვენს შესახებ | MWAY Solutions",
        description: "პროფესიული გადაწყვეტილებები. საერთაშორისო sourcing. სანდო პარტნიორობა.",
      },
      hero: {
        eyebrow: "ჩვენს შესახებ",
        heading: "MWAY Solutions-ის შესახებ",
        subheading: "პროფესიული გადაწყვეტილებები. საერთაშორისო sourcing. სანდო პარტნიორობა.",
      },
      content: `MWAY Solutions არის პროფესიული გადაწყვეტილებების, sourcing-ის, შესყიდვებისა და პროექტების კოორდინაციის მიმართულებით მომუშავე კომპანია, რომელიც ემსახურება ბიზნესებს, ორგანიზაციებს, დაწესებულებებსა და კლიენტებს სხვადასხვა, მათ შორის რთული და სპეციფიკური მოთხოვნებით.

ჩვენი საქმიანობა ეფუძნება პროფესიონალთა გუნდსა და მწარმოებლების, მომწოდებლების, კონტრაქტორების, ლოჯისტიკური კომპანიებისა და სპეციალიზებული მომსახურების პარტნიორების ქსელს საქართველოში, თურქეთში, ევროპასა და სხვა შესაბამის ბაზრებზე.

ჩვენ ვეხმარებით კლიენტებს პროდუქციის, აღჭურვილობის, მასალებისა და სპეციალიზებული მომსახურებების მოძიებაში და, საჭიროების შემთხვევაში, ვაკოორდინირებთ იმ ადამიანებსა და ორგანიზაციებს, რომლებიც კონკრეტული პროექტის განხორციელებისთვის არის საჭირო.

**ჩვენ მხოლოდ მომწოდებელი არ ვართ**

გვესმის, რომ ბევრი მოთხოვნის გადაწყვეტა მხოლოდ კატალოგიდან პროდუქტის არჩევით შეუძლებელია.

პროექტს შეიძლება დასჭირდეს რამდენიმე მომწოდებელი, სპეციალიზებული მწარმოებელი, გამოცდილი კონტრაქტორი, საერთაშორისო შესყიდვა, ინდივიდუალური წარმოება ან რამდენიმე მხარის ერთიანი კოორდინაცია.

სწორედ აქ ვქმნით დამატებით ღირებულებას.

ჩვენ ვეძებთ შესაბამის წყაროებს, ვუკავშირდებით პროფესიონალ პარტნიორებს, ვაზუსტებთ მოთხოვნებს და ვეხმარებით პროცესს, რომ საწყისი მოთხოვნა პრაქტიკულ შედეგამდე მივიდეს.

კლიენტს შეუძლია მოგვმართოს როგორც კონკრეტული პროდუქტისა და ტექნიკური მოთხოვნით, ასევე უბრალოდ პრობლემით, რომლის გადაწყვეტაც სჭირდება.

**საერთაშორისო sourcing და შესყიდვები**

ჩვენი პროფესიული ურთიერთობებისა და რეგიონულ ბაზრებთან წვდომის საშუალებით, შეგვიძლია დავეხმაროთ კლიენტებს პროდუქციისა და აღჭურვილობის მოძიებაში თურქეთის, ევროპის და სხვა საერთაშორისო ბაზრებიდან.

მოთხოვნის შესაბამისად, ეს შეიძლება მოიცავდეს კომერციულ აღჭურვილობას, ტექნიკურ პროდუქტებს, სპეციალიზებულ მასალებს, კომპონენტებს, ავეჯს, ინდივიდუალურად დამზადებულ პროდუქციასა და სხვა საქონელს, რომელიც ადგილობრივ ბაზარზე მარტივად ხელმისაწვდომი არ არის.

თუ თავდაპირველი მომწოდებელი ვერ აკმაყოფილებს მოთხოვნილ სპეციფიკაციას, რაოდენობას, ხარისხს ან მიწოდების ვადას, საჭიროების შემთხვევაში ვეძებთ ალტერნატიულ მომწოდებლებსა და კონტრაქტორებს.

**ყველა გადაწყვეტილების უკან — პროფესიული ქსელი**

ჩვენი შესაძლებლობები მხოლოდ უშუალოდ მოძიებული პროდუქციით არ შემოიფარგლება.

საჭიროების შემთხვევაში, პროექტში შეგვიძლია ჩავრთოთ სხვადასხვა მიმართულების პროფესიონალი პარტნიორები — მწარმოებლები, დისტრიბუტორები, კონტრაქტორები, ტექნიკური სპეციალისტები, ლოჯისტიკური კომპანიები და სხვა მომსახურების პროფესიონალები.

ეს საშუალებას გვაძლევს თითოეულ მოთხოვნას ინდივიდუალურად მივუდგეთ და კლიენტისთვის ერთი სტანდარტული გადაწყვეტის ნაცვლად, კონკრეტულ საჭიროებაზე მორგებული შესაძლებლობები შევთავაზოთ.

**გრძელვადიან ურთიერთობებზე დაფუძნებული კომპანია**

ჩვენ გვჯერა, რომ სანდო ბიზნესი იქმნება ნდობით, კომუნიკაციით, პროფესიული სტანდარტებითა და გრძელვადიანი ურთიერთობებით.

ჩვენი მიზანია, მხოლოდ ერთჯერადი მიწოდების ორგანიზატორი არ ვიყოთ.

გვინდა ვიყოთ პარტნიორი, რომელსაც კლიენტი მიმართავს მაშინ, როდესაც მას სჭირდება პროდუქტი, მომსახურება, მომწოდებელი, კონტრაქტორი ან პრაქტიკული გადაწყვეტა.

ერთი მოთხოვნა. მრავალი შესაძლებლობა. ერთი კოორდინირებული გადაწყვეტა.`,
      cta: {
        title: "გაქვთ მოთხოვნა?",
        subtitle: "გვითხარით რა გჭირდებათ. ჩვენი გუნდი განიხილავს მოთხოვნას და დაგიკავშირდებათ.",
        button: "მოთხოვნის გაგზავნა",
      },
    },
    products: {
      meta: {
        title: "პროდუქტები | MWAY Solutions",
        description: "აღჭურვილობა და პროდუქტები კომერციული, ინსტიტუციური და პროექტზე დაფუძნებული მოთხოვნებისთვის.",
      },
      hero: {
        eyebrow: "კატალოგი",
        heading: "პროდუქტები",
        intro: "აღჭურვილობა და პროდუქტები კომერციული, ინსტიტუციური და პროექტზე დაფუძნებული მოთხოვნებისთვის. ეს არის სამუშაო კატალოგი, არა მაღაზია — ყველა პროდუქტის მოთხოვნა შესაძლებელია, ონლაინ შეძენა კი არა.",
      },
      categories: "კატეგორიები",
      selected: "შერჩეული პროდუქტები",
      selectedIntro: "შერჩეული მიმოხილვა — არა სრული კატალოგი. გვითხარით რა გჭირდებათ და ჩვენ დავადასტურებთ ხელმისაწვდომობასა და სპეციფიკაციებს.",
      cta: {
        title: "ვერ ხედავთ რას ეძებთ?",
        subtitle: "ჩვენი კატალოგი მოიცავს ჩვეულებრივ აღჭურვილობის კატეგორიებს, მაგრამ უმეტეს პროექტს რაღაც უფრო სპეციფიკური სჭირდება. გვითხარით მოთხოვნა პირდაპირ.",
        button: "მოთხოვნის გაგზავნა",
      },
    },
    solutions: {
      meta: {
        title: "გადაწყვეტილებები | MWAY Solutions",
        description: "აღჭურვილობის მიწოდება, ინდივიდუალური დიზაინი, ინსტალაცია, შესყიდვები და ტექნიკური მომსახურება.",
      },
      hero: {
        eyebrow: "გადაწყვეტილებები",
        heading: "გადაწყვეტილებები, რომლებიც პროექტებს აწინაურებენ",
        intro: "აღჭურვილობის მიწოდებიდან და შესყიდვებიდან დაწყებული, ინსტალაციის, კომისირებისა და მიმდინარე ტექნიკური მხარდაჭერის ჩათვლით — ვეხმარებით ორგანიზაციებს, მოთხოვნები პრაქტიკულ, საიმედო გადაწყვეტილებებად აქციონ.",
      },
      capabilities: "რას ვაკეთებთ",
      areas: "გადაწყვეტილებების სფეროები",
      cta: {
        title: "გაქვთ მოთხოვნა?",
        subtitle: "გვითხარით რა გჭირდებათ. ჩვენი გუნდი განიხილავს მოთხოვნას და დაგიკავშირდებათ.",
        button: "მოთხოვნის გაგზავნა",
      },
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}