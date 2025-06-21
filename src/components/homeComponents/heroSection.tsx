import homeImage from "@/assets/homeImg.jpg";
export default function HeroSection() {
    return (
        <div className="relative w-full h-[55vh]">
        {/* Background Image */}
        <img
          src={homeImage}
          alt="Home"
          className="object-cover w-full h-full"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        {/* Text Content at Bottom Center */}
        <div className="absolute bottom-[20vh]  left-1/2 transform -translate-x-1/2 text-center text-white">
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
      </div>
    )
}