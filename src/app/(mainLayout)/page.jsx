import Banner from "@/components/Banner";
import FeaturedEvents from "@/components/FeaturedEvents";
import HowItWorks from "@/components/HowIt";
import LiveStats from "@/components/LiveStats";
import PopularCities from "@/components/PopulerCities";
import RatingSection from "@/components/RatingSection";
import RecentlyAdded from "@/components/RecentlyAdded";
import WhyChooseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      {/* <FeaturedProperties></FeaturedProperties> */}
      <FeaturedEvents></FeaturedEvents>
      <WhyChooseUs></WhyChooseUs>
      <PopularCities></PopularCities>
      <RecentlyAdded></RecentlyAdded>
      <RatingSection></RatingSection>
      <HowItWorks></HowItWorks>
      <LiveStats></LiveStats>
    </div>
  );
}
