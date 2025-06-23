import officesImage from "../../assets/office.jpg";
import rooms from "../../assets/rooms.jpg";
import services from "../../assets/services.jpg";
import wedding from "../../assets/wedding.jpg";
import dinning from "../../assets/dinning.jpg";


export const ServicesOption = () => {
  const images = [
    { src: rooms, alt: "Rooms", title: "Rooms" },
    { src: dinning, alt: "Dining", title: "Dining" },
    { src: services, alt: "Services", title: "Services" },
    { src: officesImage, alt: "Offices", title: "Offices" },
    { src: wedding, alt: "Weddings", title: "Weddings" },
  ];

  return (
    <div className="bg-[#fafbfc] container mx-auto px-4 py-8 my-10">
      <div className="grid grid-flow-col grid-rows-2 gap-6 h-[50rem]">
        {images.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl ${
              i === 0 ? "row-span-2" : "col-span-1"
            } group`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Text animation */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-6 flex justify-center items-end">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
