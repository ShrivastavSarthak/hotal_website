import { Avatar, Button, TextField } from "@mui/material";
import footerImage from "../../assets/footer.jpg";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="h-[55vh] relative">
        <img
          src={footerImage}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />

        {/* Centered overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="font-semibold text-[#112211] text-2xl sm:text-3xl md:text-4xl leading-snug">
            Register now for this weekend and <br className="hidden sm:block" />{" "}
            save up to 10%!
          </h1>

          <Button
            sx={{
              backgroundColor: "#EE4816",
              color: "#fff",
              "&:hover": { backgroundColor: "#d43c12" },
              borderRadius: "2rem",
              marginTop: "1.5rem",
              paddingInline: "1.5rem",
              paddingBlock: "0.75rem",
            }}
          >
            Book Now
          </Button>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-5">
          <div className="flex flex-col justify-start items-start gap-10">
            <h1 className="text-[#112211] font-[600] text-[20px]">
              Stay Connected
            </h1>
            <div className=" flex flex-col justify-start items-start gap-5">
              <p className="text-[#112211] font-[400] text-[14px]">
                Address:New york, USA
              </p>
              <p className="text-[#112211] font-[400] text-[14px]">
                Phone: (+1) 4345 543 332{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-10">
            <h1 className="text-[#112211] font-[600] text-[20px]">Yobooku</h1>
            <div className=" flex flex-col justify-start items-start gap-5">
              <p className="text-[#112211] font-[400] text-[14px]">About Us</p>
              <p className="text-[#112211] font-[400] text-[14px]">
                Destinations{" "}
              </p>
              <p className="text-[#112211] font-[400] text-[14px]">
                Collaboration{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-around items-start gap-10">
            <h1 className="text-[#112211] font-[600] text-[20px]">
              On Instagram
            </h1>
            <div className="w-full grid grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0.5rem",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  key={index}
                  src={`https://picsum.photos/200/200?random=${index}`}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-20 object-cover mb-2"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-10">
            <h1 className="text-[#112211] font-[600] text-[20px]">
              Newsletter
            </h1>
            <div className="w-full flex flex-col justify-start items-start">
              <div className=" flex flex-col justify-start items-start gap-5 w-full">
                <p className="text-[#112211] font-[400] text-[14px]">
                  get updated news and offers!{" "}
                </p>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Enter your email"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "2rem",
                        "& fieldset": {
                          borderColor: "#112211",
                        },
                        "&:hover fieldset": {
                          borderColor: "#112211",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#112211",
                        },
                      },
                    }}
                  />
                  <Button
                    sx={{
                      backgroundColor: "#EE4816",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#d43c12" },
                      borderRadius: "2rem",
                      mt: 5,
                      px: 2,
                      py: 2,
                      width: "100%",
                      textTransform: "capitalize",
                    }}
                  >
                    Get the Hottest offers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EE4816]">
        <p className="font-[400] text-[14px] mt-10 text-center text-[#ffff] py-3">
          All Rights Reserved for Pigment Store.
        </p>
      </div>
    </div>
  );
}
