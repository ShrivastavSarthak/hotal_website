import LockIcon from "@mui/icons-material/Lock";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StyleIcon from "@mui/icons-material/Style";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
const cardData = [
  {
    logo: <LockIcon sx={{ fontSize: "5rem" }} />,
    title: "Guaranteed rent",
    description: "We do the searching for you",
  },
  {
    logo: <StyleIcon sx={{ fontSize: "5rem" }} />,
    title: "No fees",
    description: "Preferred partner rates",
  },
  {
    logo: <ApartmentIcon sx={{ fontSize: "5rem" }} />,
    title: "No voids",
    description: "Preferred partner rates",
  },
  {
    logo: <LocalConvenienceStoreIcon sx={{ fontSize: "5rem" }} />,
    title: "24/7 maintenance",
    description: "Extend on short notice",
  },
];

export default function PropertyManagement() {
  return (
    <div className="container mx-auto my-20 px-4">
      {/* Heading and Text */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#112211]">
          Better than Property Management
        </h1>
        <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed mt-4 text-[#181A18] max-w-2xl">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated
        </p>
        <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed text-[#181A18] max-w-2xl">
          booking manager that can help to find properties for your needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl flex flex-col p-5 items-start justify-between bg-[#F9F2EC] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {card.logo}
            <div className="mt-4">
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                {card.title}
              </h2>
              <p className="text-[#565656] text-sm sm:text-base font-normal mt-1 leading-snug">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
