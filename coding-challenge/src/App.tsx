// import defaultSellerData from "./data";
// import SellerApp from "./components/SellerApp";
// import BinarySearch from "./components/BinarySearch";

import { VonnueBirthday } from "./components/VonnueBirthday";

function App() {
  return (
    <div className="bg-slate-600 flex flex-col justify-center items-center h-screen w-screen">
      {/* <SellerApp sellerData={defaultSellerData} /> */}
      <div className="py-8">
        {/* <BinarySearch /> */}

        <VonnueBirthday UTCTimes="2022-07-29T06:04:32Z" />
      </div>
    </div>
  );
}

export default App;
