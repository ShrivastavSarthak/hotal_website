import officesImage from "../../assets/office.jpg";
import rooms from "../../assets/rooms.jpg";
import services from "../../assets/services.jpg";
import wedding from "../../assets/wedding.jpg";
import dinning from "../../assets/dinning.jpg";
export const ServicesOption = () => {
  return (
    <div className="bg-[#fafbfc] container mx-auto px-4 py-8 my-10 ">
      <div className="grid grid-flow-col grid-rows-2 gap-6 h-[50rem]">
        <div className="row-span-2 overflow-hidden rounded-2xl  ">
          <img
            src={rooms}
            alt="rooms"
            className="object-cover w-full h-full "
          />
        </div>
        <div className=" col-span-1 rounded-2xl overflow-hidden">
          <img
            src={dinning}
            alt="dinning"
            className="object-cover w-full h-full "
          />
        </div>
        <div className=" col-span-1 rounded-2xl overflow-hidden">
          <img
            src={services}
            alt="services"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="col-span-1  rounded-2xl overflow-hidden">
          <img
            src={officesImage}
            alt="Offices"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="col-span-1  rounded-2xl overflow-hidden">
          <img
            src={wedding}
            alt="wedding"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};
