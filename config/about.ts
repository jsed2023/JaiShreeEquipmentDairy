import {
  Building2,
  Landmark,
  CreditCard,
  Package,
  TrendingUp,
  Users,
  Award,
  FileCheck,
  Building,
  BriefcaseBusiness,
  CalendarDays,
  UserRound,
  MapPin,
  UserPlus,
  Scale,
  IndianRupee,
  University,
  MapPinned,
  Hash,
  WalletCards,
  Truck,
  Clock3,
  Box,
  Milk,
  Database,
  Weight,
  TestTube2,
  Store,
  BadgeCheck,
  Map,
  Handshake,
  Warehouse,
  ShieldCheck,
  HeartHandshake,
  FileText,
  BadgeIndianRupee,
} from "lucide-react";

import type {
  AboutAndStory,
  AboutFactsheet,
  ProductRangeAndWhyChooseUs,
} from "@/types";

export const aboutAndStory: AboutAndStory[] = [
  {
    id: 1,
    title: "About Us - Jai Shree Equipment Dairy",
    desc: "Welcome to Jai Shree Equipment Dairy, your trusted source for top-quality dairy equipment. With years of industry experience, we specialize in repairing, retailing, and supplying advanced dairy solutions to meet the diverse needs of farmers, processors, and dairy businesses. From milk cream separator machines, milk analyzer machines, and milk collection units to dairy weighing scales and milk testing equipment, we offer products to enhance efficiency, improve milk quality, and streamline dairy operations.",
  },
  {
    id: 2,
    title: "Our Story",
    desc: "Founded with a commitment to innovation and quality, Jai Shree Equipment Dairy has grown into a trusted supplier of dairy equipment. We understand the importance of reliable and efficient equipment in ensuring optimal productivity and hygiene. With a passion for the dairy industry, we have built a reputation for delivering products that meet high standards of performance and durability.",
  },
];

export const productRangeAndWhyChooseUs: ProductRangeAndWhyChooseUs[] = [
  {
    id: 1,
    title: "Our Product Range",
    descList: [
      {
        id: "1A",
        title: "1. Paras Cream Separator Machines",
        desc: "Efficient cream separator machines for accurate cream extraction used in ghee, butter, and dairy production.",
      },
      {
        id: "1B",
        title: "2. Advance Milk Analyzer Machines",
        desc: "Advance brand milk analyzer machines for accurate testing of Fat, SNF, Protein, and Lactose. Perfect for milk collection centers and dairy businesses to ensure transparency and quality.",
      },
      {
        id: "1C",
        title: "3. Dairy Khata DPU Milk Collection System",
        desc: "Dairy Khata digital milk collection unit with integrated weighing scale, milk analyzer, and thermal printer for fast, accurate, and transparent milk procurement.",
      },
      {
        id: "1D",
        title: "4. Dairy Weighing Scales",
        desc: "High-accuracy electronic weighing scales for milk collection centers and dairy farms.",
      },
      {
        id: "1E",
        title: "5. Milk Testing Equipment",
        desc: "Complete range of milk testing tools including lactometer, fat testing kits, and SNF testing equipment.",
      },
      {
        id: "1F",
        title: "6. Dairy Machine Spare Parts",
        desc: "Genuine and reliable spare parts available for dairy machines and equipment.",
      },
      {
        id: "1G",
        title: "7. Dairy Equipment Setup Solutions",
        desc: "Complete dairy equipment setup with installation and technical support.",
      },
      {
        id: "1H",
        title: "8. Automatic Milk Collection Center Setup",
        desc: "End-to-end setup for dairy societies including DPU system, software, analyzer, and operator training.",
      },
    ],
  },
  {
    id: 2,
    title: "Why Choose Us?",
    descList: [
      {
        id: "2A",
        title: "High-Quality Branded Dairy Machines",
        desc: "We deal in trusted dairy equipment brands including Paras, Advance, and Dairy Khata for reliable and long-lasting performance.",
      },
      {
        id: "2B",
        title: "Complete Technical Support",
        desc: "Machine installation, training, and full technical guidance.",
      },
      {
        id: "2C",
        title: "Best Price in Market",
        desc: "Competitive pricing for farmers and dairy businesses.",
      },
      {
        id: "2D",
        title: "Fast & Safe Delivery",
        desc: "Quick dispatch with secure packaging and reliable transport.",
      },
      {
        id: "2E",
        title: "Genuine Products Guarantee",
        desc: "100% genuine products with warranty support.",
      },
      {
        id: "2F",
        title: "After-Sales Service & Spare Parts",
        desc: "Prompt service support with spare parts availability.",
      },
    ],
  },
];

export const aboutFactsheet: AboutFactsheet[] = [
  {
    id: 1,
    title: "Basic Information",
    icon: Building2,
    information: [
      {
        id: "1A",
        title: "Company Name",
        desc: "Jai Shree Equipment Dairy",
        icon: Building,
      },
      {
        id: "1B",
        title: "Nature of Business",
        desc: "Supplier & Retailer of Dairy Machines including Milk Analyzer Machines, Milk Collection Systems, Cream Separator Machines, Dairy Weighing Scales, and Milk Testing Equipment",
        icon: BriefcaseBusiness,
      },
      {
        id: "1C",
        title: "Year of Establishment",
        desc: "2020",
        icon: CalendarDays,
      },
      {
        id: "1D",
        title: "CEO & Managing Director",
        desc: "Akshay Choudhary",
        icon: UserRound,
      },
      {
        id: "1E",
        title: "Company Address",
        desc: "Shop No. B-42, Upper Side, Rohit Udhyog Market, Near HP Gas Agency, Shiv Circle Road, Sri Ganganagar, Rajasthan – 335001",
        icon: MapPin,
      },
      {
        id: "1F",
        title: "Number of Employees",
        desc: "1 to 5 People",
        icon: UserPlus,
      },
      {
        id: "1G",
        title: "Legal Status of Firm",
        desc: "Proprietorship",
        icon: Scale,
      },
      {
        id: "1H",
        title: "Annual Turnover",
        desc: "₹5 Lakh – ₹30 Lakh",
        icon: IndianRupee,
      },
    ],
  },

  {
    id: 2,
    title: "Banking Information",
    icon: Landmark,
    information: [
      {
        id: "2A",
        title: "Bank Name",
        desc: "Capital Small Finance Bank",
        icon: University,
      },
      {
        id: "2B",
        title: "Branch Name",
        desc: "Sri Ganganagar",
        icon: MapPinned,
      },
      {
        id: "2C",
        title: "IFSC Code",
        desc: "CLBL0000148",
        icon: Hash,
      },
      {
        id: "2D",
        title: "Account Number",
        desc: "148205001344",
        icon: WalletCards,
      },
    ],
  },

  {
    id: 3,
    title: "Payment & Shipping Details",
    icon: CreditCard,
    information: [
      {
        id: "3A",
        title: "Payment Mode",
        desc: "Cash, UPI, Bank Transfer, Online",
        icon: WalletCards,
      },
      {
        id: "3B",
        title: "Shipping Mode",
        desc: "By Road Transport & Cargo",
        icon: Truck,
      },
      {
        id: "3C",
        title: "Delivery Time",
        desc: "1 – 7 Working Days",
        icon: Clock3,
      },
      {
        id: "3D",
        title: "Packaging Details",
        desc: "Strong & Safe Packaging for Machines",
        icon: Box,
      },
    ],
  },

  {
    id: 4,
    title: "Our Product Range",
    icon: Package,
    information: [
      {
        id: "4A",
        title: "Milk Analyzer Machine",
        desc: "Available",
        icon: TestTube2,
      },
      {
        id: "4B",
        title: "Milk Collection System / DPU",
        desc: "Available",
        icon: Database,
      },
      {
        id: "4C",
        title: "Cream Separator Machine",
        desc: "Available",
        icon: Milk,
      },
      {
        id: "4D",
        title: "Dairy Weighing Scale",
        desc: "Available",
        icon: Weight,
      },
      {
        id: "4E",
        title: "Milk Testing Equipment",
        desc: "Available",
        icon: TestTube2,
      },
    ],
  },

  {
    id: 5,
    title: "Trade & Market",
    icon: TrendingUp,
    information: [
      {
        id: "5A",
        title: "Business Type",
        desc: "Dairy Machine Supplier",
        icon: Store,
      },
      {
        id: "5B",
        title: "Brand Name",
        desc: "Jai Shree Equipment Dairy",
        icon: BadgeCheck,
      },
      {
        id: "5C",
        title: "Market Covered",
        desc: "Rajasthan, Punjab & Haryana",
        icon: Map,
      },
      {
        id: "5D",
        title: "Supply Ability",
        desc: "As per client requirement",
        icon: Handshake,
      },
    ],
  },

  {
    id: 6,
    title: "Infrastructure & Team",
    icon: Users,
    information: [
      {
        id: "6A",
        title: "Office Infrastructure",
        desc: "Modern & Well Equipped",
        icon: Building2,
      },
      {
        id: "6B",
        title: "Warehouse Facility",
        desc: "Available for Dairy Machines",
        icon: Warehouse,
      },
      {
        id: "6C",
        title: "Team Strength",
        desc: "Skilled & Experienced Staff",
        icon: Users,
      },
    ],
  },

  {
    id: 7,
    title: "Our Strengths",
    icon: Award,
    information: [
      {
        id: "7A",
        title: "Quality Assurance",
        desc: "High Quality Tested Dairy Machines",
        icon: ShieldCheck,
      },
      {
        id: "7B",
        title: "Customer Satisfaction",
        desc: "Dedicated Client Support",
        icon: HeartHandshake,
      },
      {
        id: "7C",
        title: "Why Choose Us",
        desc: "Genuine Products, Best Price, Wide Product Range, Technical Support & Fast Delivery",
        icon: Award,
      },
    ],
  },

  {
    id: 8,
    title: "Statutory Profile",
    icon: FileCheck,
    information: [
      {
        id: "8A",
        title: "BRN Number",
        desc: "0644840000000016",
        icon: FileText,
      },
      {
        id: "8B",
        title: "MSME / Udyam Registration",
        desc: "UDYAM-RJ-15-0028819",
        icon: BadgeIndianRupee,
      },
    ],
  },
];