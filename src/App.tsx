import { Box, CardContent, Toolbar, Tooltip, Typography } from "@mui/material";
import Typewritter from "typewriter-effect";
import L from "leaflet";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const iconStyle = {
  width: "36px",
  height: "auto",
} as const;

function LeafletMapComponent() {
  const position: [number, number] = [42.730986945498195, -73.68160923312035];

  const defaultIcon = L.icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <Box sx={{ margin: "auto", width: { xs: "100%", sm: "80%", md: "50%" } }}>
      <MapContainer
        center={position}
        zoom={16}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            Russell Sage Labratory 110 8th Street, Troy, NY 12180, United States
            of America
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "#ED1D24", height: "300px" }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontWeight: "bold", color: "#fde7e8", paddingTop: "100px" }}
        >
          <Typewritter
            onInit={(typewriter) => {
              typewriter.typeString("ICPC @ RPI").start();
            }}
          />
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold", color: "#fde7e8" }}
        >
          <Typewritter
            onInit={(typewriter) => {
              typewriter.pauseFor(2000).typeString("November 9, 2025").start();
            }}
          />
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#760A0D", minHeight: "50px" }}>
        <Typography
          align="center"
          sx={{
            fontWeight: "bold",
            color: "white",
            paddingTop: "13px",
            paddingBottom: "13px",
          }}
        >
          Northeastern North America International Collegiate Programming
          Contest
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fde7e8",
          height: "auto",
          paddingBottom: "50px",
        }}
      >
        <Box sx={{ width: "auto", maxWidth: "25cm", margin: "auto" }}>
          <Box>
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: "bold", paddingTop: "20px" }}
            >
              General Information
            </Typography>
            <Typography align="center" sx={{ margin: "20px" }}>
              Our site does NOT supply computers, participants will need to
              bring their own Laptops.
              <br />
              <br />
              Printing services will be provided according to the conditions
              stated in the official ICPC rules regarding the number of pages
              printed per team, etc. Teams will need to bring a thumb drive or
              other storage device that they will use to put all materials they
              want to be printed on. There should be no other content on the
              drive other than materials that need to be printed.
            </Typography>
          </Box>
          <Box>
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: "bold", paddingTop: "20px" }}
            >
              Directions
            </Typography>
            <Typography align="center" sx={{ margin: "20px" }}>
              The event will kickoff at the Russell Sage Laboratory(SAGE).
              Contestant teams will be assigned to rooms in the SAGE. See below
              for a list of all rooms.
              <div style={{ marginBottom: "20px" }} />
              <LeafletMapComponent />
              <br />
              You may also want to follow the{" "}
              <a href="https://info.rpi.edu/visit/directions">
                driving directions for RPI.
              </a>{" "}
              Once you arrive, please proceed to the Sage 3510 for the
              registration and welcome event. Parking information can be found
              on the{" "}
              <a href="https://info.rpi.edu/parking-and-transportation">
                RPI Parking and Transportation information page.
              </a>
              <br />
              <br />
            </Typography>
          </Box>
          <Box>
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: "bold", paddingTop: "20px" }}
            >
              Tentative Schedule
            </Typography>
            <Typography align="center" sx={{ margin: "20px" }}>
              9:00 AM EST - Registration and Welcome Coffee, Hot Chocolate, and
              Donuts - Sage 3510
              <br />
              <br />
              9:45 AM EST - Opening ceremony begins - Sage 4101
              <br />
              <br />
              11:00 AM EST - Contest begins - Room assigned to your team
              <br />
              <br />
              1:00 PM EST - Lunch is served - Sage 3510
              <br />
              <br />
              3:00 PM EST - Scoreboard freezes - Room assigned to your team
              <br />
              <br />
              4:00 PM EST - Contest finishes - Room assigned to your team
              <br />
              <br />
              4:30 PM EST - Closing ceremony/results - Sage 4101
            </Typography>
          </Box>
          <Box>
            <Typography
              align="center"
              variant="h5"
              sx={{ fontWeight: "bold", paddingTop: "20px" }}
            >
              Locations
            </Typography>
            <Typography align="center" sx={{ margin: "20px" }}>
              Contestant teams will be assigned to one of the following rooms to
              proceed to after the opening ceremony: <br />
              SAGE 4101
              <br />
              SAGE 5101
              <br />
              SAGE 2112
              <br />
              SAGE 2704
              <br />
              SAGE 2715
              <br />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#760A0D", minHeight: "50px" }}>
        <Toolbar sx={{ height: "auto", color: "white" }}>
          <CardContent sx={{ margin: "auto", marginTop: "3px" }}>
            <Tooltip title={"kuzmik2@rpi.edu"} enterTouchDelay={0}>
              <EmailIcon
                sx={iconStyle}
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
            </Tooltip>
            <a
              href={"https://github.com/anderm18/icpcrpisite"}
              style={{ color: "white", margin: "10px" }}
            >
              <GitHubIcon sx={iconStyle} />
            </a>
          </CardContent>
        </Toolbar>
      </Box>
    </>
  );
}

export default App;
