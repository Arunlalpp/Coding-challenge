import defaultSellerData from "./data";
import SellerApp from "./components/SellerApp";
import BinarySearch from "./components/BinarySearch";

function App() {
  return (
    <div className="bg-slate-600 flex flex-col justify-center items-center h-screen w-screen">
      <SellerApp sellerData={defaultSellerData} />
      <div className="py-8">
        <BinarySearch />
      </div>
    </div>
  );
}

export default App;
