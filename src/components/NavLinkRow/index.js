// import Link from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NavLinkRow = ({ links = [] }) => {
  return (
    <Box sx={{ gap: "2rem",display:"flex" }}>
      {links.map((link) => (
        <NavLink key={link.href} label={link.label} href={link.href} />
      ))}
    </Box>
  );
};

function NavLink({ href, label }) {
  return (
    <a href={href}>
      <Typography
        variant="body2"
        fontSize={{ xs: "0.75rem", md: "0.875rem", lg: "1.2rem" }}
        sx={{ color: "white", cursor: "pointer" }}
      >
        {label}
      </Typography>
    </a>
  );
}

export default NavLinkRow;
