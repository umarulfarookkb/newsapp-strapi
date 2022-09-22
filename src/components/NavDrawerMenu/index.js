import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavbarDrawerStore } from "../../store/store";

const NavDrawerMenu = () => {
  const isOpen = useNavbarDrawerStore((s) => s.isNavbarDrawerOpen);
  const onClose = useNavbarDrawerStore((s) => s.toggleNavbarDrawerOpen);
  console.log(isOpen);
  return (
    <>
      <IconButton sx={{backgroundColor:"bark"}} onClick={onClose}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={onClose} sx={drawerSx}>
        <List>
          {navLinks.map((link, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{link.label}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
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
const drawerWidth = 240;


const drawerSx = (theme) => ({
  "& .MuiDrawer-root": {
    width: drawerWidth,
    boxSizing: "border-box",
  },

  "& .MuiDrawer-paper": {
    width: drawerWidth,
    overflowX: "hidden",
    borderRightColor: "none",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "white",
  },
});
export default NavDrawerMenu;

