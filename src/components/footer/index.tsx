'use client'

import "../../app/globals.css";
import Image from "next/image";
import iconFacebook from "@/images/iconFacebook.svg";
import iconTwitter from "@/images/iconTwitter.svg";
import iconIn from "@/images/iconIn.svg";
import iconInstagram from "@/images/iconInstagram.svg";
import Link from "next/link";
import ArrowBottom from "@/images/arrowBottom.svg";

const icons = [
  { name: "Facebook", src: iconFacebook, link: "https://www.facebook.com/xecom" },
  { name: "Twitter", src: iconTwitter, link: "https://twitter.com/xe" },
  { name: "LinkedIn", src: iconIn, link: "https://www.linkedin.com/company/xecurrencyauthority/" },
  { name: "Instagram", src: iconInstagram, link: "https://www.instagram.com/poweringyou/" }
];

const TransferMoney = [
  "Send Money Online",
  "Send Money to India",
  "Send Money to Pakistan",
  "Send Money to Mexico",
  "Send Money to Japan",
  "Send Money to the UK",
  "Send Money to Canada",
  "Send Money to Australia",
  "Send Money to New Zealand",
  "Send Money to Mobile Wallet",
  "Security",
  "Report fraud",
  "Trustpilot Reviews"
];

const XEBusiness = [
  "Business Payments",
  "International Business Payments",
  "Global Business Payments",
  "Risk Management",
  "Enterprise Resource Planning",
  "Currency Data API Integration",
  "Affiliate Referral Partner Program",
  "Mass Payments"
];

const Apps = [
  "Money Transfer & Currency Apps",
  "Android Money Transfer App",
  "iOS Money Transfer App"
];

const ToolsAndResources = [
  "Blog",
  "Currency Converter",
  "Currency Charts",
  "Historical Currency Rates",
  "Currency Encyclopedia",
  "Currency Rate Alerts",
  "Currency Newsletters",
  "IBAN Calculator",
  "Glossary"
];

const CompanyInfo = [
  "About Us",
  "Partnerships",
  "Careers",
  "Help Center",
  "Site Map",
  "Legal",
  "Privacy",
  "Cookie Policy",
  "Consent Manager",
  "Money Transfer Information",
  "File a Complaint",
  "Accessibility"
];


export default function Footer() {
  return (
    <div className="flex bottom-0 right-0 left-0 static main-bg-blue w-screen min-h-screen text-center justify-center">
      <footer className="justify-center text-center items-center max-w-screen-xl px-20 py-24 text-lg">
        <div className="grid grid-cols-4 gap-9 text-left">
          <div>
            <div className="t16a27 mb-3">Language</div>
            <div className="t14a21 flex">
              English
              
              <Image src={ArrowBottom} alt="Arrow" width={10} height={10} className="ml-2" />
            </div>
          </div>

          <div className="flex">
            {icons.map(icon => (
              <Link key={icon.name} href={icon.link} target="_blank" className=" p-0.5">
                  <Image
                    src={icon.src}
                    alt={`icon ${icon.name}`}
                    width={32}
                    height={32}
                  />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-9 mt-14 text-left">
          <div>
            <div className="t16a27 mb-3">
              Transfer Money
            </div>

            <ul>{TransferMoney.map((item) => <li key={item} className="t12a18 mb-2">{item}</li>)}</ul>
          </div>

          <div>
            <div className="t16a27 mb-3">
              XE Business
            </div>

            <ul>{XEBusiness.map((item) => <li key={item} className="t12a18 mb-2">{item}</li>)}</ul>
          </div>

          <div>
            <div className="t16a27 mb-3">
              Apps
            </div>

            <ul>{Apps.map((item) => <li key={item} className="t12a18 mb-2">{item}</li>)}</ul>
          </div>

          <div>
            <div className="t16a27 mb-3">
              ToolsAndResources
            </div>

            <ul>{ToolsAndResources.map((item) => <li key={item} className="t12a18 mb-2">{item}</li>)}</ul>
          </div>
        </div>

        <div className="text-left mt-14">
          <div>
            <div className="t16a27 mb-2">
              Company Info
            </div>

            <ul className="flex font-thin t12a18">
              {CompanyInfo.map((item) => <li key={item} className="mr-4">{item}</li>)}
            </ul>
          </div>

          <div className="mt-14 t14a21">
            © 1995-2024 XE.com Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}