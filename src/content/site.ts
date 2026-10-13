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
    email: "forachildkatie@yahoo.com",
    emailHref: "mailto:forachildkatie@yahoo.com",
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
    mapsEmbedUrl:
      "https://www.google.com/maps?q=1300+South+Main+Street+Suite+1000+North+Canton+OH+44720&hl=en&z=16&output=embed",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=1300+South+Main+Street+Suite+1000+North+Canton+OH+44720",
  },

  hours: [
    { label: "Daycare", value: "Monday–Friday, 6:30 AM – 6:00 PM" },
    { label: "Preschool", value: "Monday–Friday, 6:30 AM – 6:00 PM" },
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
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Schedule a Tour", href: "/contact" },
  { label: "Meet the Team", href: "/about#meet-the-team" },
  { label: "Contact", href: "/contact" },
] as const;

export const homeContent = {
  hero: {
    headline:
      "When children become involved, they see, they think, they understand; they pursue.",
    subheadline: "North Canton’s best daycare and licensed preschool",
    imageSrc: "/images/gallery/storytime.jpg",
    imageAlt:
      "A teacher reading a picture book to a group of children during storytime at For A Child",
    imageLabel: "Storytime",
    primaryCta: { label: "Schedule a Tour", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    tertiaryCta: { label: "Call 330-966-7010", href: "tel:3309667010" },
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
    eyebrow: "Our Hours",
    title: "Daycare and licensed preschool",
    intro:
      "Daycare and licensed preschool are both available Monday through Friday, 6:30 AM to 6:00 PM.",
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
    imageSrc: "/images/gallery/teachers-play.jpg",
    imageAlt:
      "A teacher sitting with young children during floor play with colorful toys at For A Child",
    imageLabel: "Teachers and children playing",
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
          "Our teachers have early childhood education degrees or a state-accredited CDA.",
      },
      {
        title: "CPR Certified Staff",
        description:
          "Staff are certified in CPR, First Aid, Communicable Disease, and Child Abuse.",
      },
      {
        title: "Clean Classrooms",
        description:
          "Friendly, comfortable classrooms in a fun, clean, educational, and creative environment.",
      },
      {
        title: "Daily Communication",
        description:
          "Each child receives a Daily Sheet describing their day. Families also stay connected through the ClassDojo app, and parents can call or text at any time.",
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
    intro:
      "Moments from classrooms at For A Child — learning, play, storytime, and caring teachers.",
    cta: { label: "View Full Gallery", href: "/gallery" },
  },
  cta: {
    title: "Ready to visit For A Child?",
    body: "Katie Thomas, Director of Operations, will be happy to answer your questions and set up a visit. When you call, please ask for Katie.",
    primaryCta: { label: "Schedule a Tour", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    tertiaryCta: { label: "Call 330-966-7010", href: "tel:3309667010" },
  },
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

export const galleryImages = [
  {
    id: "1",
    src: "/images/gallery/storytime.jpg",
    label: "Storytime",
    alt: "A teacher reading aloud to children seated on a colorful classroom rug",
  },
  {
    id: "2",
    src: "/images/gallery/teachers-play.jpg",
    label: "Teachers interacting",
    alt: "A teacher playing on the floor with young children and colorful toys",
  },
  {
    id: "3",
    src: "/images/gallery/infant-toddler.jpg",
    label: "Infant & toddler care",
    alt: "A caregiver with an infant and toddler surrounded by toys in the classroom",
  },
  {
    id: "4",
    src: "/images/gallery/summer-tracing.jpg",
    label: "Classroom learning",
    alt: "A child tracing lines with a marker during a table activity",
  },
  {
    id: "5",
    src: "/images/gallery/sorting-play.jpg",
    label: "Hands-on learning",
    alt: "Two children sorting colorful animal counters on an alphabet rug",
  },
  {
    id: "6",
    src: "/images/gallery/color-sorting.jpg",
    label: "Color sorting",
    alt: "Children sorting bear counters by color into small buckets",
  },
] as const;

/** @deprecated Use galleryImages */
export const galleryPlaceholders = galleryImages;

export const teamPhoto = {
  src: "/images/team/team-photo.jpg",
  label: "The For A Child team",
  alt: "Members of the For A Child team smiling together at an outdoor community event",
} as const;

export const teamMembers = [
  {
    id: "cricket",
    name: "Cricket Scheurer",
    role: "Owner",
    bio: [
      "For A Child first opened its doors in 1994 and has been owned by Cricket Scheurer since 2009.",
      "[Detailed biography pending.]",
    ],
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
  gallery: {
    title: "Gallery",
    description: "Photos from life at For A Child, LLC in North Canton, Ohio.",
    headline: "Gallery",
    intro:
      "A look inside For A Child — storytime, play, and everyday learning moments.",
  },
  testimonials: {
    title: "Testimonials",
    description:
      "Read what families say about daycare and preschool at For A Child, LLC in North Canton, Ohio.",
    headline: "Testimonials",
    intro: "Hear from families in the For A Child community.",
  },
  contact: {
    title: "Contact",
    description:
      "Contact the office at For A Child, LLC. Ask for Katie Thomas, Director of Operations, to enroll or schedule a visit.",
    headline: "Contact the Office",
    intro:
      "Ready to enroll or schedule a tour? Please ask for Katie Thomas, Director of Operations. Katie will be happy to answer your questions and help you get started.",
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
