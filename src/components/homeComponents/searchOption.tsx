import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import BedIcon from '@mui/icons-material/Bed';
export default function SearchOption() {
  return (
    <div className="absolute p-4 shadow-md rounded-2xl top-[52vh] left-1/2 transform -translate-x-1/2 text-center bg-white container mx-auto  flex flex-col justify-between items-center">
      <div className="w-full mx-3 ">
        <h1 className="font-[600] text-[20px] text-left">
          Search Your Hotel Here
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Weight or Custom Field */}
        <TextField
          label="Enter Destination"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "100%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start"><BedIcon/></InputAdornment>
              ),
            },
          }}
        />

        {/* Check-In Field */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangeCalendar"]}>
            <DemoItem>
              <TextField
                label="Check In"
                id="check-in"
                sx={{ m: 1, width: "100%" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">📅</InputAdornment>
                    ),
                  },
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>

        {/* Check-Out Field */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangeCalendar"]}>
            <DemoItem>
              <TextField
                label="Check Out"
                id="check-out"
                sx={{ m: 1, width: "100%" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">📅</InputAdornment>
                    ),
                  },
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>

        {/* Number of Guests */}
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="guest-label">Guests</InputLabel>
          <Select
            labelId="guest-label"
            id="guests"
            label="Guests"
            defaultValue=""
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>
                {num} Guest{num > 1 && "s"}
              </MenuItem>
            ))}
            <MenuItem value="5+">5+ Guests</MenuItem>
          </Select>
        </FormControl>
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
