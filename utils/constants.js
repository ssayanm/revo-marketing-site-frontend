import { FaApple, FaShopify, FaLinkedin } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import Brands from "../components/Brands";
import Creators from "../components/Creators";
import Sellers from "../components/Sellers";
import Publishers from "../components/Publishers";

export const links = [
  {
    id: 1,
    text: "How It Works",
    url: "/how-it-works",
  },

  {
    id: 4,
    text: "Inspiration",
    url: "/inspiration",
  },
  {
    id: 5,
    text: "Pricing",
    url: "/pricing",
  },
  {
    id: 6,
    text: "Get Started",
    url: "/get-started",
  },
];

export const footerLinks = [
  {
    id: 2,
    text: "Studio Login",
    url: "https://studio.revo.video/#/login2",
  },

  {
    id: 4,
    text: "Careers",
    url: "https://jobs.wrk.xyz/borderFee",
  },
];

export const footerLinksAlt = [
  {
    id: 2,
    text: "Terms & Conditions",
    url: "/terms",
  },
  {
    id: 3,
    text: "Privacy Policy",
    url: "/privacy",
  },
];

export const social = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon "></FaLinkedin>,
    url: "https://www.linkedin.com/company/revo-video/",
  },
];

export const categories = [
  {
    id: 1,
    text: "Brands",
    label: "Brands",
    url: "/",
    components: <Brands />,
  },
  {
    id: 2,
    text: "Creators",
    label: "Creators",
    url: "/",
    components: <Creators />,
  },
  {
    id: 3,
    text: "Publishers & Distributors",
    label: "Publishers & Distributors",
    url: "/",
    components: <Publishers />,
  },
  {
    id: 4,
    text: "Direct Sellers",
    label: "Direct Sellers",
    url: "/",
    components: <Sellers />,
  },
];

export const pricing = [
  {
    id: 1,
    title: "DTC",
    info: "Any DTC brand on e-commerce platforms. Download the app and go live",
    desc: [
      "5% of gross sales generated on the platform",
      "No monthly fee",
      "No code environment",
      "No obligation",
    ],
  },
  {
    id: 2,
    title: "Brands White Label",
    info: "For brands that want to customize the consumer experience.",
    desc: [
      "5% of gross sales generated on the platform",
      "Volume discounts",
      "No code environment",
    ],
  },
  {
    id: 3,
    title: "Revo for Enterprise SaaS",
    info: "For large companies who want to fully customize and even extend the Revo platform within their ecosystem",
    desc: [
      "5% of gross sales generated on the platform",
      "Volume discounts",
      "No code environment",
    ],
  },
];

export const featuredChannels = [
  {
    id: 1,
    title: "Abundance",
    subTitle: "Deepak Chopra",
    image: "/images/01.png",
    link: "https://event.revo.video/#/watch/booksandbooks/75769602927189",
  },
  {
    id: 2,
    title: "MDLR X Dora Maar Launch",
    subTitle: "Dora Maar",
    image: "/images/02.png",
    link: "https://event.revo.video/#/watch/doramaar/75856687315388",
  },

  {
    id: 3,
    title: "Live Shopping / Danielle Natoni",
    subTitle: "Doli",
    image: "/images/03.png",
    link: "https://event.revo.video/#/watch/golinutrition.myshopify.com/75741070294804?preview",
  },
  {
    id: 4,
    title: "Hullosam X Tiila Live",
    subTitle: "Athr Beauty",
    image: "/images/04.png",
    link: "https://event.revo.video/#/watch/aether-natural-beauty.myshopify.com/75800448980593",
  },
  {
    id: 5,
    title: "Show Refresher",
    subTitle: "Brand With A Heart",
    image: "/images/05.png",
    link: "https://event.revo.video/#/watch/brandwithaheart/75809869779976",
  },

  {
    id: 6,
    title: "Manifest Your Glow Up",
    subTitle: "Ascention Beauty + LOLI",
    image: "/images/06.png",
    link: "https://event.revo.video/#/watch/ascentionbeautyco-com.myshopify.com/75808574162402",
  },
  {
    id: 7,
    title: "Keeping Wines",
    subTitle: "Vin Social",
    image: "/images/07.png",
    link: "https://event.revo.video/#/watch/vinsocial.myshopify.com/75785148997304",
  },
  {
    id: 8,
    title: "Kutch Craft Trail",
    subTitle: "Peepultree",
    image: "/images/08.png",
    link: "https://event.revo.video/#/watch/peepultree/75806145429588",
  },

  {
    id: 9,
    title: "Honey Dew You Love Me",
    subTitle: "Lights Laquer",
    image: "/images/09.png",
    link: "https://event.revo.video/#/watch/lightslacquer-com.myshopify.com/75776529644188",
  },
  {
    id: 10,
    title: "Shine Bright VIP Party",
    subTitle: "Tocara",
    image: "/images/10.png",
    link: "https://event.revo.video/#/watch/tocara/75818606241749",
  },
  {
    id: 11,
    title: "Denise's Bling Bash",
    subTitle: "Tocara",
    image: "/images/11.png",
    link: "https://event.revo.video/#/watch/tocara/75881187613732",
  },

  {
    id: 12,
    title: "Sip, Sparkle & Shop",
    subTitle: "Tocara",
    image: "/images/12.png",
    link: "https://event.revo.video/#/watch/tocara/75804051335521?preview",
  },
];

export const featuresPrice = [
  {
    id: 1,
    feature: "One Click Catalog Sync",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 2,
    feature: "Stream one to many and up to 11 guests",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 3,
    feature: "Full Studio",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 4,
    feature: "AI Try-On",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 5,
    feature: "Branded Consumer screen",
    dtc: "For Fee",
    brands: true,
    enterprise: true,
  },
  {
    id: 6,
    feature: "One-Click Checkout",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 7,
    feature: "Creator Community Matching",
    dtc: false,
    brands: "For Fee",
    enterprise: "For Fee",
  },
  {
    id: 8,
    feature: "Marketplace Placement",
    dtc: true,
    brands: true,
    enterprise: true,
  },
  {
    id: 9,
    feature: "Marketplace Promotion",
    dtc: "For Fee",
    brands: false,
    enterprise: true,
  },
  {
    id: 10,
    feature: "Creator Payment Wallets",
    dtc: "For Fee",
    brands: "Included",
    enterprise: "Included",
  },
  {
    id: 11,
    feature: "Training",
    dtc: "For Fee",
    brands: "Included",
    enterprise: "Included",
  },
  {
    id: 12,
    feature: "Platform customization",
    dtc: "For Fee",
    brands: "For Fee",
    enterprise: "For Fee",
  },
  {
    id: 13,
    feature: "Customer Care",
    dtc: "e-mail & live chat 9-5 M-F EST",
    brands: "24/7 support 2h response time",
    enterprise: "24/7 support 30min response time",
  },
  {
    id: 14,
    feature: "Client Servicess",
    dtc: "N/A",
    brands: "Monthly Updates",
    enterprise: "Weekly Updates",
  },
];
