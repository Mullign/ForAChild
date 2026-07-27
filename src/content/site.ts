/**
 * Central site content & configuration.
 * Only real, provided details live here. Remaining gaps stay as clear placeholders.
 */

export const siteConfig = {
  name: "For A Child, LLC",
  shortName: "For A Child",
  tagline: "North Canton’s best daycare and licensed preschool",
  motto:
    "When children become involved, they see, they think, they understand; they pursue.",
  description:
    "For A Child, LLC is a daycare and licensed preschool in North Canton, Ohio. Our newly renovated facility in the ServUs Plaza offers a quiet, secluded setting with friendly classrooms and educated staff focused on each child’s growth.",
  url: "https://forachildllc.com",
  locale: "en_US",
  logo: {
    src: "/images/brand/logo.png",
    src2x: "/images/brand/logo@2x.png",
    width: 345,
    height: 100,
    alt: "For A Child, LLC logo — daycare and licensed preschool in North Canton, Ohio",
  },
  icon: "/images/brand/icon.jpg",

  contact: {
    phone: "330-966-7010",
    phoneHref: "tel:3309667010",
    /** Email not provided yet */
    email: "",
    emailHref: "",
    address: {
      street: "1300 South Main Street, Suite 1000",
      city: "North Canton",
      state: "OH",
      zip: "44720",
      display: "1300 South Main Street, Suite 1000, North Canton, Ohio 44720",
    },
    locationNote:
      "Located in the ServUs Plaza, in the lower level at the rear of the plaza.",
    directions: [
      "For A Child is located at the back of the Servus Center at North Canton Plaza.",
      "Enter the drive on the south side of the plaza and drive around to the back of the building.",
      "Please drive slowly — children cross the drive.",
    ],
    askFor: "Katie Thomas, Director of Operations",
    mapsEmbedUrl: "",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=1300+South+Main+Street+Suite+1000+North+Canton+OH+44720",
  },

  hours: [
    { label: "Daycare", value: "Monday–Friday, 6:30 AM – 6:30 PM" },
    { label: "Preschool", value: "Monday–Friday, 9:00 AM – 11:30 AM" },
  ],

  licensing:
    "Licensed through the Ohio Department of Jobs and Family Services.",
  opened: "1994",
  owner: "Cricket Scheurer",
  ownedSince: "2009",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "Infant Care",
        href: "/programs/infant-care",
        description: "[Program details pending]",
      },
      {
        label: "Toddler Care",
        href: "/programs/toddler-care",
        description: "[Program details pending]",
      },
      {
        label: "Preschool",
        href: "/programs/preschool",
        description: "Monday–Friday, 9:00 AM – 11:30 AM",
      },
      {
        label: "Before & After School",
        href: "/programs/before-after-school",
        description: "[Program details pending]",
      },
      {
        label: "Summer Programs",
        href: "/programs/summer",
        description: "[Program details pending]",
      },
    ],
  },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Schedule a Tour", href: "/contact?intent=tour" },
  { label: "Meet the Team", href: "/about#meet-the-team" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const homeContent = {
  hero: {
    headline:
      "When children become involved, they see, they think, they understand; they pursue.",
    subheadline: "North Canton’s best daycare and licensed preschool",
    imageAlt: "[Hero image: welcoming classroom or outdoor play — photo pending]",
    imageLabel: "Hero photo pending",
    primaryCta: { label: "Schedule a Tour", href: "/contact?intent=tour" },
    secondaryCta: { label: "Enroll Today", href: "/enrollment" },
    tertiaryCta: { label: "Contact Us", href: "/contact" },
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "A welcoming place families trust",
    intro:
      "We would like to welcome you to For A Child, LLC — daycare and licensed preschool in a newly renovated facility designed for comfort, learning, and peace of mind.",
    items: [
      {
        title: "Safe & Secure Setting",
        description:
          "Our quiet, secluded location in the ServUs Plaza provides safety and security for children when they play and for parents at drop-off and pick-up.",
      },
      {
        title: "Licensed & Experienced",
        description:
          "Licensed through the Ohio Department of Jobs and Family Services. Opened in 1994 and owned by Cricket Scheurer since 2009.",
      },
      {
        title: "Educated, Caring Staff",
        description:
          "Friendly, comfortable classrooms give our educated staff a fun, clean, educational, and creative environment for your children.",
      },
      {
        title: "Family-Centered Care",
        description:
          "Families are the building blocks on which For A Child was founded. We encourage parental support in daily activities.",
      },
    ],
  },
  programs: {
    eyebrow: "Our Programs",
    title: "Daycare and licensed preschool",
    intro:
      "Daycare is available Monday through Friday, 6:30 AM to 6:30 PM. Our licensed preschool program meets Monday through Friday, 9:00 AM to 11:30 AM. Additional program details will be added as provided.",
  },
  philosophy: {
    eyebrow: "Our Mission",
    title: "For A Child’s mission for your kids",
    body: [
      "At For A Child, LLC, it is our belief that children are the future and our mission is to provide a focus of nurturing encouragement, and respect to the child’s development.",
      "For A Child, LLC provides an environment that allows children the opportunity to reach their fullest potential because of our staff’s desire to be positive role models. With this mindset, our staff is sensitive to the basic needs of the children by providing encouragement, motivation, and the opportunities to nurture intellect and creativity.",
      "We believe children should be respected and recognized for individual abilities, unique characteristics, and unlimited potential. We will accomplish this by providing the best environment for your child through continuous improvement of our caregivers, training, curriculum, and facilities.",
      "Our staff understands that children are at their best when their needs are met through activities such as, but not limited to, literature, cooking, math, and letter manipulatives. These practices contribute to each child’s personal growth and development.",
    ],
    imageAlt: "[Teachers interacting with children — photo pending]",
    imageLabel: "Philosophy photo pending",
  },
  safety: {
    eyebrow: "Safety & Trust",
    title: "A prepared, secure environment for learning",
    intro:
      "Parents care deeply about safety. For A Child works to provide the best possible environment through continuous improvement of caregivers, staff training, curriculum, and facilities.",
    items: [
      {
        title: "Secure Facility",
        description:
          "Our quiet, secluded location at the rear of the ServUs Plaza supports safety and security for children and families.",
      },
      {
        title: "Qualified Teachers",
        description:
          "Teachers undergo extensive training and certification to help ensure children have a prepared and safe environment for learning.",
      },
      {
        title: "CPR Certified Staff",
        description: "[CPR / first-aid certification details pending.]",
      },
      {
        title: "Clean Classrooms",
        description:
          "Friendly, comfortable classrooms in a fun, clean, educational, and creative environment.",
      },
      {
        title: "Daily Communication",
        description:
          "[Parent communication practices pending. We welcome parent involvement in children’s daily activities.]",
      },
      {
        title: "Age-Appropriate Learning",
        description:
          "Activities such as literature, cooking, math, and letter manipulatives support each child’s growth and development.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What families are saying",
    intro:
      "We’re grateful for the families who share their experiences at For A Child.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A glimpse into our days",
    intro: "[Gallery photos pending — real classroom and campus images coming soon.]",
    cta: { label: "View Full Gallery", href: "/gallery" },
  },
  cta: {
    title: "Ready to visit For A Child?",
    body: "Katie Thomas, Director of Operations, will be happy to answer your questions and set up a visit. When you call, please ask for Katie.",
    primaryCta: { label: "Schedule a Tour", href: "/contact?intent=tour" },
    secondaryCta: { label: "Enroll Today", href: "/enrollment" },
    tertiaryCta: { label: "Call 330-966-7010", href: "tel:3309667010" },
  },
} as const;

export const programSummaries = [
  {
    slug: "infant-care",
    title: "Infant Care",
    ages: "[Ages pending]",
    description: "[Infant care details pending.]",
    href: "/programs/infant-care",
    imageLabel: "Infant care photo pending",
    imageAlt: "[Infant care classroom — photo pending]",
  },
  {
    slug: "toddler-care",
    title: "Toddler Care",
    ages: "[Ages pending]",
    description: "[Toddler care details pending.]",
    href: "/programs/toddler-care",
    imageLabel: "Toddler care photo pending",
    imageAlt: "[Toddler classroom — photo pending]",
  },
  {
    slug: "preschool",
    title: "Preschool",
    ages: "Monday–Friday, 9:00 AM – 11:30 AM",
    description:
      "Our licensed preschool program supports children’s growth through engaging, developmentally appropriate learning in a nurturing classroom environment.",
    href: "/programs/preschool",
    imageLabel: "Preschool photo pending",
    imageAlt: "[Preschool learning — photo pending]",
  },
  {
    slug: "before-after-school",
    title: "Before & After School",
    ages: "[Ages pending]",
    description: "[Before & after school details pending.]",
    href: "/programs/before-after-school",
    imageLabel: "Before & after school photo pending",
    imageAlt: "[School-age care — photo pending]",
  },
  {
    slug: "summer",
    title: "Summer Programs",
    ages: "[Ages pending]",
    description: "[Summer program details pending.]",
    href: "/programs/summer",
    imageLabel: "Summer programs photo pending",
    imageAlt: "[Summer outdoor play — photo pending]",
  },
] as const;

/** Daycare overview used on programs pages — hours provided; fuller copy pending */
export const daycareOverview = {
  title: "Daycare",
  hours: "Monday–Friday, 6:30 AM – 6:30 PM",
  description:
    "Full-day daycare in a friendly, comfortable setting with educated staff focused on a fun, clean, educational, and creative environment.",
} as const;

export const testimonials = [
  {
    id: "1",
    quote:
      "We could not be happier with our experience at For A Child. Both of our kids have attended daycare and from the very beginning we felt welcomed, supported and truly cared for. The teachers created a safe environment where our kids are excited to go and learn each day. What really sets For A Child apart is the director, Katie and her staff. They have gone above and beyond for our family and honestly feel like part of our family at this point. Knowing our children are in the hands of people who genuinely love and care about them gives us a great peace of mind.",
    name: "[Name pending]",
    detail: "",
  },
  {
    id: "2",
    quote:
      "Our family is truly grateful for the exceptional care our children receive at For a Child. From the moment we first walked through the doors, we were welcomed with genuine warmth and compassion. Every staff member is caring, patient, and deeply committed to creating a nurturing environment where children feel safe, supported, and loved. The center offers the perfect balance of fun and learning. Our kids look forward to their days filled with creative activities, engaging lessons, and plenty of laughter. We especially appreciate the thought and effort put into planning exciting field trips and festive holiday celebrations that bring the entire family together. These events have helped us build connections not only with the staff but with other families as well—truly making the center feel like an extension of our home. Finding a daycare that combines safety, education, joy, and a strong family focus is rare, and we feel incredibly fortunate to be part of this wonderful community. Our children are thriving, growing, and happy—and that means everything to us.",
    name: "Steven and Andrea Albaugh",
    detail: "",
  },
] as const;

export const galleryPlaceholders = [
  { id: "1", label: "Children learning", alt: "[Children learning — photo pending]" },
  {
    id: "2",
    label: "Teachers interacting",
    alt: "[Teachers interacting — photo pending]",
  },
  { id: "3", label: "Outdoor play", alt: "[Outdoor play — photo pending]" },
  { id: "4", label: "Classroom", alt: "[Classroom environment — photo pending]" },
  { id: "5", label: "Reading", alt: "[Reading time — photo pending]" },
  { id: "6", label: "Art", alt: "[Art activities — photo pending]" },
  { id: "7", label: "Science", alt: "[Science exploration — photo pending]" },
  { id: "8", label: "Music", alt: "[Music activities — photo pending]" },
  { id: "9", label: "Playground", alt: "[Playground — photo pending]" },
  {
    id: "10",
    label: "Family involvement",
    alt: "[Family involvement — photo pending]",
  },
] as const;

export const teamMembers = [
  {
    id: "cricket",
    name: "Cricket Scheurer",
    role: "Owner",
    bio: [
      "For A Child first opened its doors in 1994 and has been owned by Cricket Scheurer since 2009.",
      "[Detailed biography pending.]",
    ],
    imageLabel: "Cricket Scheurer photo pending",
    imageAlt: "[Photo of Cricket Scheurer — pending]",
  },
  {
    id: "katie",
    name: "Katie Thomas",
    role: "Director of Operations",
    bio: [
      "Katie Thomas is the Director of Operations. She has been with For A Child since 2003 and has an Associate’s Degree in Early Childhood.",
      "When you contact For A Child, please ask for Katie. She will be happy to answer questions and set up a visit.",
      "[Additional biography details pending.]",
    ],
    imageLabel: "Katie Thomas photo pending",
    imageAlt: "[Photo of Katie Thomas — pending]",
  },
] as const;

export const pageContent = {
  about: {
    title: "About Us",
    description:
      "Learn about For A Child, LLC — a daycare and licensed preschool in North Canton, Ohio, welcoming families since 1994.",
    headline: "All About For A Child",
    welcome: [
      "We would like to welcome you to For A Child, LLC — Day Care and Licensed Preschool. Our newly renovated facility is located in North Canton, Ohio in the “ServUs Plaza” in the lower level in the rear of the plaza. The area is quiet and secluded providing safety and security for the children when they play and for parents to drop off and pick up.",
      "Our friendly, comfortable classrooms provide our educated staff with a fun, clean, educational, and creative environment for your children. Our staff understands that children are at their best when their needs are met through activities such as, but not limited to, literature, cooking, math, and letter manipulatives. These practices will contribute to each child’s personal growth and development. Along with the development of your child, we encourage parental support in daily activities.",
    ],
    missionTitle: "For A Child’s Mission for your Kids",
    mission: [
      "At For A Child, LLC, it is our belief that children are the future and our mission is to provide a focus of nurturing encouragement, and respect to the child’s development.",
      "For A Child, LLC provides an environment that allows children the opportunity to reach their fullest potential because of our staff’s desire to be positive role models. With this mindset, our staff is sensitive to the basic needs of the children by providing encouragement, motivation, and the opportunities to nurture intellect and creativity.",
      "We believe children should be respected and recognized for individual abilities, unique characteristics, and unlimited potential. We will accomplish this by providing the best environment for your child through continuous improvement of our caregivers, training, curriculum, and facilities.",
    ],
    improvementTitle: "Always improving",
    improvement:
      "For A Child works to provide the best possible environment for children through the continuous improvement of caregivers, staff training, curriculum, and facilities.",
    historyTitle: "History & Licensing",
    history: [
      "For A Child is licensed through the Ohio Department of Jobs and Family Services. For A Child LLC first opened its doors back in 1994 and has been owned by Cricket Scheurer since 2009. Our teachers go through extensive training and certification processes to make sure that the children will have the most prepared and safe environment for their learning. We believe that families are the building blocks on which we are founded and value each individual child for what they bring to our For A Child “Family.”",
      "Katie Thomas, Director of Operations, has been with For A Child since 2003 and has an Associate’s Degree in Early Childhood. When contacting For A Child, please ask for Katie.",
    ],
    activitiesTitle: "How children learn with us",
    activitiesIntro:
      "We believe children do their best when their needs are met through activities that support development and personal growth, including:",
    activities: [
      "Literature",
      "Cooking",
      "Math",
      "Letter manipulatives",
      "Other activities designed to support children’s development",
    ],
    activitiesNote:
      "We also encourage parents to provide support and participate in their child’s daily activities.",
  },
  programs: {
    title: "Programs",
    description:
      "Explore daycare and licensed preschool programs at For A Child, LLC in North Canton, Ohio.",
    headline: "Our Programs",
    intro:
      "For A Child offers daycare Monday through Friday, 6:30 AM to 6:30 PM, and a licensed preschool program Monday through Friday, 9:00 AM to 11:30 AM. Additional program details will be added as they are provided.",
  },
  enrollment: {
    title: "Enrollment",
    description:
      "Start the enrollment process or schedule a visit with For A Child, LLC in North Canton, Ohio.",
    headline: "Enrollment",
    intro:
      "Interested in joining the For A Child family? Contact us with your name, email, phone number, and message. Katie Thomas, Director of Operations, will be happy to answer questions and set up a visit.",
    steps: [
      {
        title: "Reach out",
        description:
          "Call 330-966-7010 and ask for Katie, or send us a message through our contact form.",
      },
      {
        title: "Schedule a visit",
        description:
          "Katie will be happy to answer your questions and set up a visit to our North Canton center.",
      },
      {
        title: "Complete enrollment",
        description: "[Enrollment packet and next-step details pending.]",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    description: "Photos from life at For A Child, LLC in North Canton, Ohio.",
    headline: "Gallery",
    intro: "[Gallery photos pending.]",
  },
  testimonials: {
    title: "Testimonials",
    description:
      "Read what families say about daycare and preschool at For A Child, LLC in North Canton, Ohio.",
    headline: "Testimonials",
    intro: "Hear from families in the For A Child community.",
  },
  faq: {
    title: "FAQ",
    description: "[FAQ meta description pending.]",
    headline: "Frequently asked questions",
    intro: "Answers to common questions about For A Child.",
    items: [
      {
        question: "What are your hours?",
        answer:
          "Daycare is Monday through Friday, 6:30 AM to 6:30 PM. Preschool is Monday through Friday, 9:00 AM to 11:30 AM.",
      },
      {
        question: "Where are you located?",
        answer:
          "1300 South Main Street, Suite 1000, North Canton, Ohio 44720. We are in the lower level at the rear of the ServUs Plaza / Servus Center at North Canton Plaza. Enter the drive on the south side of the plaza and drive around to the back. Please drive slowly — children cross the drive.",
      },
      {
        question: "Who should I ask for when I call?",
        answer:
          "Please ask for Katie Thomas, Director of Operations. Katie will be happy to answer your questions and set up a visit.",
      },
      {
        question: "Is For A Child licensed?",
        answer:
          "Yes. For A Child is licensed through the Ohio Department of Jobs and Family Services.",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Contact For A Child, LLC in North Canton, Ohio. Ask for Katie Thomas to schedule a visit.",
    headline: "Contact Us",
    intro:
      "Thank you for your interest in For A Child. When you call, please ask for Katie Thomas, Director of Operations. Katie will be happy to answer your questions and set up a visit.",
  },
  blog: {
    title: "News & Updates",
    description: "Latest news and updates from For A Child, LLC.",
    headline: "Latest News & Updates",
    intro: "Stay tuned for new information and updates from the center.",
    empty: "Stay tuned for new information and updates from the center.",
  },
} as const;

/** @deprecated Use pageContent — kept briefly for migration clarity */
export const pagePlaceholders = pageContent;

/** @deprecated Use testimonials */
export const testimonialPlaceholders = testimonials;

export const programPageDefaults = {
  headline: "[Program headline pending]",
  intro: "[Program details pending.]",
  highlightsTitle: "What Families Can Expect",
  highlights: [
    "[Program highlight pending]",
    "[Program highlight pending]",
    "[Program highlight pending]",
  ],
  dailyRhythmTitle: "A Day in the Classroom",
  dailyRhythm: "[Daily schedule details pending.]",
  ctaNote:
    "Call 330-966-7010 and ask for Katie Thomas to schedule a visit or learn more.",
} as const;

export const preschoolPageContent = {
  headline: "Licensed Preschool",
  intro:
    "Our licensed preschool program meets Monday through Friday, 9:00 AM to 11:30 AM, in a friendly, comfortable classroom environment.",
  highlightsTitle: "What Families Can Expect",
  highlights: [
    "Licensed preschool program",
    "Activities that may include literature, cooking, math, letter manipulatives, and other experiences that support development",
    "Educated staff focused on a fun, clean, educational, and creative environment",
  ],
  dailyRhythmTitle: "Program Hours",
  dailyRhythm: "Monday through Friday, 9:00 AM to 11:30 AM.",
  ctaNote:
    "Call 330-966-7010 and ask for Katie Thomas to schedule a visit or learn more.",
} as const;
