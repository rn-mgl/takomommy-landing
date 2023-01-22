import Contacts from "../src/components/Contacts";
import Footer from "../src/components/Footer";
import Init from "../src/components/Init";
import Offers from "../src/components/Offers";
import Prices from "../src/components/Prices";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-proximity">
      <Init />
      <Offers />
      <Prices />
      <Contacts />
      <Footer />
    </div>
  );
}
