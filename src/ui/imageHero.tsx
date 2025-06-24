export default function DynamicImageHero({
  image,
  title,
}: {
  image: string;
  title: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-[55vh]">
      {/* Background Image */}
      <img src={image} alt="Home" className="object-cover w-full h-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      {/* Text Content at Bottom Center */}
      <div className="absolute bottom-[20vh]  left-1/2 transform -translate-x-1/2 text-center text-white">
        {title}
      </div>
    </div>
  );
}
