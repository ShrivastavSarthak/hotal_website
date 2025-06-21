export default function SearchOption() {
  return (
    <div className="absolute p-4 shadow-md rounded-2xl bottom-[25vh] left-1/2 transform -translate-x-1/2 text-center bg-white container mx-auto h-[25vh] flex flex-col justify-between items-center">
      <div className="w-full mx-3 ">
        <h1 className="font-[600] text-[20px] text-left">
          Search Your Hotel Here
        </h1>
      </div>
      <div className="flex justify-end items-center gap-4 w-full">
        <button className="rounded-sm py-3 px-4">+Add Promo Code</button>
        <button className="bg-[#EE4816] rounded-sm py-3 px-4 text-[#fff]">
          Show Place
        </button>
      </div>
    </div>
  );
}
