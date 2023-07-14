import defaultSellerData from "./data";
import SellerApp from "./components/SellerApp";

function App() {
  return (
    <div className="bg-slate-600 flex flex-col justify-center items-center h-screen w-screen">
      <SellerApp
        sellerData={defaultSellerData}
      />
    </div>
  );
}

export default App;
