import { Button } from "@mui/material";

const cardData = [
  {
    title: "Santorini Escape",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tag: { text: "Romantic", bgColor: "#FDE68A", containerBgColor: "#FEF3C7" },
    details: { duration: "3 Days,2 Nights", date: "12 Aug 2025" },
    pricing: { price: "1200$", per: "/Person" },
  },
  {
    title: "Mountain Adventure",
    imageUrl: "https://images.unsplash.com/photo-1508610048659-a06b669e9aa1",
    tag: { text: "Thrill", bgColor: "#FCA5A5", containerBgColor: "#FEE2E2" },
    details: { duration: "5 Days,4 Nights", date: "25 Sep 2025" },
    pricing: { price: "980$", per: "/Person" },
  },
  {
    title: "Desert Safari",
    imageUrl: "https://images.unsplash.com/photo-1549887534-394f448f80b8",
    tag: { text: "Adventure", bgColor: "#FCD34D", containerBgColor: "#FEF9C3" },
    details: { duration: "2 Days,1 Night", date: "8 Oct 2025" },
    pricing: { price: "600$", per: "/Person" },
  },
  {
    title: "Paris Getaway",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    tag: { text: "Luxury", bgColor: "#D8B4FE", containerBgColor: "#EDE9FE" },
    details: { duration: "4 Days,3 Nights", date: "30 Jul 2025" },
    pricing: { price: "1500$", per: "/Person" },
  },
  {
    title: "Goa Beach Fun",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    tag: { text: "Chill", bgColor: "#FDBA74", containerBgColor: "#FFEDD5" },
    details: { duration: "3 Days,2 Nights", date: "15 Aug 2025" },
    pricing: { price: "700$", per: "/Person" },
  },
  {
    title: "Tokyo City Lights",
    imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
    tag: { text: "Explore", bgColor: "#A5F3FC", containerBgColor: "#E0F2FE" },
    details: { duration: "6Days,5Nights", date: "10 Nov 2025" },
    pricing: { price: "1700$", per: "/Person" },
  },
  {
    title: "Bali Retreat",
    imageUrl: "https://images.unsplash.com/photo-1540202404-48ec20ac95a0",
    tag: { text: "Relax", bgColor: "#BBF7D0", containerBgColor: "#DCFCE7" },
    details: { duration: "5 Days,4Nights", date: "5 Dec 2025" },
    pricing: { price: "1100$", per: "/Person" },
  },
  {
    title: "New York Weekend",
    imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    tag: { text: "Urban", bgColor: "#C4B5FD", containerBgColor: "#DDD6FE" },
    details: { duration: "2 Days,2Nights", date: "22 Jul 2025" },
    pricing: { price: "950$", per: "/Person" },
  },
  {
    title: "Swiss Alps Escape",
    imageUrl: "https://images.unsplash.com/photo-1606312619070-57f5a7a5b9c3",
    tag: { text: "Snow", bgColor: "#FBCFE8", containerBgColor: "#FCE7F3" },
    details: { duration: "4 Days,3Nights", date: "18 Jan 2026" },
    pricing: { price: "1350$", per: "/Person" },
  },
];

export default function UpcomingOffers() {
  return (
    <div className="mt-[18vh] container mx-auto p-4">
      <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl">
        Upcoming Offers
      </h1>

      <div className="mt-20">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 sm:p-8 mt-6 flex flex-col gap-6 justify-between shadow-xl h-full"
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold">
                {card.title}
              </h1>

              <div className="rounded-3xl h-60 sm:h-72 md:h-80 bg-cover bg-center overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-full flex justify-between items-center text-xs sm:text-sm md:text-base">
                  <div
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: card.tag.containerBgColor }}
                  >
                    <h4
                      className="font-medium"
                      style={{ color: card.tag.bgColor }}
                    >
                      {card.tag.text}
                    </h4>
                  </div>
                  <h3 className="text-[#56565680]">{card.details.duration}</h3>
                  <h3 className="text-[#56565680]">{card.details.date}</h3>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h2>
                    <span className="text-black font-medium text-lg sm:text-xl md:text-2xl">
                      {card.pricing.price}
                    </span>
                    <span className="text-[#56565680] text-sm sm:text-base font-medium">
                      {" "}
                      {card.pricing.per}
                    </span>
                  </h2>
                  <Button
                    sx={{
                      backgroundColor: "#EE4816",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#d43c12" },
                      borderRadius: "1rem",
                      fontSize: "0.875rem",
                      padding: "0.5rem 1.5rem",
                      textTransform: "none",
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
