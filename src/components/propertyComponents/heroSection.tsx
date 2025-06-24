import homeImage from "@/assets/homeImg.jpg";
import DynamicImageHero from "../../ui/imageHero";

export default function PropertyHeroSection() {
  return (
    <DynamicImageHero
      image={homeImage}
      title={
        <div>
          <div className="">
            <h1 className="leading-[100%] text-4xl font-[600] text-[45px]">
              Make your travel wishlist,{" "}
            </h1>
            <h1 className="text-4xl font-[600] text-[45px]">
              we’ll do the rest{" "}
            </h1>
          </div>
          <p className="text-[20px] font-[500] mt-4 mb-6">
            Special offers to suit your plan
          </p>
        </div>
      }
    />
  );
}
