import Footer from "../../components/footer/footer";
import HeroSection from "../../components/homeComponents/heroSection";
import Location from "../../components/homeComponents/location";
import PropertyManagement from "../../components/homeComponents/propertyMamagement";
import SearchOption from "../../components/homeComponents/searchOption";
import { ServicesOption } from "../../components/homeComponents/ServicesOption";
import Testimonials from "../../components/homeComponents/testimonials";
import UpcomingOffers from "../../components/homeComponents/upcomingOffers";

export function Home() {
  return (
    <div className="bg-[#fafbfc]  ">
      <HeroSection />
      <SearchOption />
      <UpcomingOffers />
      <ServicesOption/>
      <Location/>
      <PropertyManagement />
      <Testimonials />
      <Footer />
    </div>
  );
}
