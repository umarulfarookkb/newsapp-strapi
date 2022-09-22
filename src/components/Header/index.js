// import "./Header.css";
// import { Link } from "react-router-dom";
// import { Back } from '@cred/neopop-web/lib/components';

// import { Container,Box,Typography } from "@mui/material";

// export default function Header() {
//   return (
//       <>
//         <Container sx={{display:"flex",backgroundColor:"#161517"}}>

//           <Box sx={{marginRight:10}}>
//             <Typography variant="h5">Crypto News</Typography>
//           </Box>
//           <Box sx={{display:"flex",gap: "2rem"}}>
//             <Typography variant="h6">Latest</Typography>
//             <Typography variant="h6">NFT</Typography>
//             <Typography variant="h6">Meta</Typography>
//             <Typography variant="h6">Crypto</Typography>
//             <Typography variant="h6">Blockchain</Typography>
//             <Typography variant="h6">Interview</Typography>
//           </Box>

//         </Container>
//       </>
//     );
//   }

// <section className="header">
//   <Link to={'/'}><Back/></Link>
//   <div className="headerName">News24</div>
// </section>

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import NavLinkRow from "../NavLinkRow";
import NavDrawerMenu from "../NavDrawerMenu";
import { useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@cred/neopop-web/lib/components";

const Header = () => {
  const theme = useTheme();
  // console.log(theme);
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  //console.log(isSmall);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#161517" }}
        elevation={0}
      >
        <Toolbar>
          {isSmall ? (
            <>
              <NavDrawerMenu />
              <Box sx={{ marginRight: "auto", marginLeft: "auto" }}>
                <Typography variant="h5">Crypto News</Typography>
              </Box>
            </>
          ) : (
            <Container sx={{ gap: "1rem", display: "flex" }}>
              <Box>
                <Typography variant="h5">Crypto News</Typography>
              </Box>
              <NavLinkRow links={navLinks} />
              <Box>
                {/* <Button variant="contained"  sx={{backgroundColor:"#FFEB34", width: "100%", borderRadius: "6px" }}>
                Sign In/Up
                </Button> */}
                <Button variant="secondary" kind="flat" size="small">
                  Sign In/Up
                </Button>
              </Box>
            </Container>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "73px" }}></div>
    </>
  );
};
const navLinks = [
  { href: "/", label: "Latest" },
  { href: "/nft", label: "NFT" },
  { href: "/meta", label: "Meta" },
  { href: "/crypto", label: "Crypto" },
  { href: "/blockchain", label: "Blockchain" },
  { href: "/interview", label: "Interview" },
];
export default Header;
