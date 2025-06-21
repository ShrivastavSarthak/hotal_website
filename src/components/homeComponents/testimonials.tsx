import { Avatar, Rating } from "@mui/material";

const testimonials = [
  {
    name: "Sophia K.",
    role: "Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "From the moment we arrived, everything was flawless. The customer service was excellent, and the exclusive offers made our stay even better!",
  },
  {
    name: "Liam J.",
    role: "Traveler",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    review:
      "Absolutely loved the experience! The booking process was seamless and the place exceeded all my expectations.",
  },
  {
    name: "Ava W.",
    role: "Vacationer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "The attention to detail was impressive. We felt taken care of at every step. I will definitely book again through this service!",
  },
];

export default function Testimonials() {
  return (
    <div className="container mx-auto my-16">
      <div className=" w-full flex justify-center flex-col items-center">
        <h3 className="text-[#112211] font-[600] text-[32px] ">
          Testimonials{" "}
        </h3>
        <h1 className="text-[#112211] font-[700] text-[40px] ">
          What Our Clients Say{" "}
        </h1>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-10">
        {testimonials.map((card, index) => (
          <div
            key={index}
            className="w-[400px] h-[362px] rounded-2xl bg-[#F9F2EC] border-[2px] border-[#C3A8A8] p-10"
          >
            <div className="flex flex-col justify-start items-start gap-8 ">
              <div className="flex gap-10 w-full">
                <Avatar
                  sx={{ width: 70, height: 70 }}
                  alt={card.name}
                  src={card.image}
                />
                <div className="h-full flex flex-col justify-between items-start">
                  <h1 className="font-[600] text-[32px]">{card.name}</h1>
                  <p className="font-[500] text-[16px]">{card.role}</p>
                </div>
              </div>
              <Rating value={card.rating} size="large" readOnly />
              <p className="text-[#112211] font-[400] text-[16px] text-start">
                "{card.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
