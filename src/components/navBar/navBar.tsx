export function NavBar() {
  return (
    <div className=" container mx-auto">
      <nav className="py-2 sticky z-20 w-full flex justify-between items-center bg-[#FFFFFF] ">
        <div>logo</div>
        <div className="flex justify-between items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
