import "../../app/globals.css";

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


export default function Footer() {
  return (
    <div className="flex bottom-0 right-0 left-0 static main-bg-blue w-screen min-h-screen text-center justify-center">
      <footer className="justify-center text-center items-center max-w-screen-xl">
        <div className="grid grid-cols-4 gap-32">
          <div>
            <div>Language</div>
            <div>English !!!ARROW BOTTOM!!!</div>
          </div>

          <div>
            FACEBOOK X LINKEDIN INSTAGRAM 
          </div>
        </div>

        <div className="grid grid-cols-4 gap-9 mt-14 text-left">
          <div>
            <div>
              Transfer Money
            </div>

            <ul>{TransferMoney.map((item) => <li key={item} className="">{item}</li>)}</ul>
          </div>

          <div>
            <div>
              XE Business
            </div>

            <ul>{XEBusiness.map((item) => <li key={item} className="">{item}</li>)}</ul>
          </div>

          <div>
            <div>
              Apps
            </div>

            <ul>{Apps.map((item) => <li key={item} className="">{item}</li>)}</ul>
          </div>

          <div>
            <div>
              ToolsAndResources
            </div>

            <ul>{ToolsAndResources.map((item) => <li key={item} className="">{item}</li>)}</ul>
          </div>
        </div>

        <div className="text-left mt-14">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil beatae explicabo labore atque eaque.
          </div>
          <div className="mt-14">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cumque!
          </div>
        </div>
      </footer>
    </div>
  );
}