import { Button } from "@mui/material";

const places = [
  {
    name: "Santorini",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Swiss Alps",
    imageUrl: "https://images.unsplash.com/photo-1606312619070-57f5a7a5b9c3",
  },
  {
    name: "Paris",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    name: "Tokyo",
    imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
  },
  {
    name: "New York",
    imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    name: "Goa Beach",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
  },
];

export default function Location() {
  return (
    <div className="container mx-auto w-full my-14">
      <h1 className="font-[700] text-[48px] leading-[54px] text-center">
        Choose Your Location
      </h1>
      <div className=" mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 w-full gap-4">
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-2"
          >
            <h3 className="text-lg font-medium">{place.name}</h3>
            <div className="overflow-hidden rounded-[30px]  h-[196px] w-[196px]">
              <img
                src={place.imageUrl}
                alt={place.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <Button
          sx={{
            backgroundColor: "#EE4816",
            color: "#fff",
            "&:hover": { backgroundColor: "#d43c12" },
            borderRadius: "2rem",
            mt: 5,
            px: 2,
            py: 2,
          }}
        >
          View all places
        </Button>
      </div>
    </div>
  );
}
