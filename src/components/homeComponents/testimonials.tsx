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
    <div className="container mx-auto my-16 px-4">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="text-[#112211] font-semibold text-2xl sm:text-3xl">
          Testimonials
        </h3>
        <h1 className="text-[#112211] font-bold text-3xl sm:text-4xl md:text-5xl mt-2">
          What Our Clients Say
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {testimonials.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#F9F2EC] border-2 border-[#C3A8A8] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              {/* Avatar and Name */}
              <div className="flex gap-6 items-center">
                <Avatar
                  sx={{ width: 64, height: 64 }}
                  alt={card.name}
                  src={card.image}
                />
                <div>
                  <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
                    {card.name}
                  </h1>
                  <p className="text-sm sm:text-base text-[#444] font-medium">
                    {card.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <Rating value={card.rating} size="medium" readOnly />

              {/* Review */}
              <p className="text-[#112211] font-normal text-sm sm:text-base leading-relaxed">
                "{card.review}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
