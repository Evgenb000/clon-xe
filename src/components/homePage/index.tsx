import BlockDataApi from "./content/blockDataApi";
import BlockDownloadApp from "./content/blockDownloadApp";
import CurrencyProfiles from "./content/currencyProfiles";
import CurrencyTools from "./content/currencyTools";
import ExchangeRates from "./content/exchangeRates";
import PopularTools from "./content/popularTools";
import Recommendations from "./content/recommendations";
import Subscription from "./content/subscription";
import TransferSteps from "./content/transferSteps";
import TabBox from "./tabBox";

export default function HomeComponent() {
  return (
    <>
      <div className="flex h-max text-center flex-col items-center main-bg-blue pt-11 w-screen header-bg-vector mb-40 px-4">
        <h1 className="t-white t30a39 font-bold">
          Trusted Global Currency Converter & Money Transfers
        </h1>

        <h2 className="t-white t16a27">
          Best source for currency conversion, sending money online and tracking exchange rates
        </h2>
        
        <TabBox />
      </div>
      
      <TransferSteps />
      <ExchangeRates />
      <PopularTools />
      <BlockDataApi />
      <CurrencyTools />
      <Recommendations />
      <BlockDownloadApp />
      <Subscription />
      <CurrencyProfiles />
    </>
  );
}
