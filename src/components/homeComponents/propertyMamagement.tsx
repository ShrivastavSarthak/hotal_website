import LockIcon from "@mui/icons-material/Lock";
import ApartmentIcon from '@mui/icons-material/Apartment';
import StyleIcon from '@mui/icons-material/Style';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
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
  }
]


export default function PropertyManagement() {
  return (
    <div className=" container mx-auto my-20">
      <div className="flex flex-col items-center justify-center text-center ">
        <h1 className="font-[700] text-[48px] leading-[54px] text-[#112211]">
          Better than Property Management
        </h1>
        <p className="font-[400] text-[20px] leading-[30px] mt-4 text-[#181A18]">
          We work with 100+ companies to meet accommodation needs in London.
          Offer a dedicated
        </p>
        <p className="font-[400] text-[20px] leading-[30px] text-[#181A18]">
          booking manager that can help to find properties for your needs.
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[16px]">
        {
          cardData.map((card,index)=>(
            <div key={index} className="h-[208px] w-[305px] rounded-[30px] flex flex-col p-5 items-start justify-between bg-[#F9F2EC] mt-8">
          {card.logo}
          <div>
            <h2 className="font-[700] text-[24px] leading-[32px]">
              {card.title}
            </h2>
            <p className="text-[#565656] text-[16px] font-[400] leading-[20px]">
              {" "}
              {card.description}
            </p>
          </div>
        </div>
          ))
        }
        
      </div>
    </div>
  );
}
