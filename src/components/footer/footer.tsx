import { Button } from "@mui/material";
import footerImage from "../../assets/footer.jpg";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className=" h-[55vh] relative">
        <img
          src={footerImage}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className=" absolute left-[60vh] bottom-[20vh] flex flex-col justify-center items-center ">
          <h1 className="font-[600] text-[38px] text-center ">
            Register now for this weekend and <br /> save up to 10%!
          </h1>
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
            Book Now
          </Button>
        </div>
      </div>
      <div className="container mx-auto">
        
      </div>
    </div>
  );
}
