import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/image/global/Asset 2@3x 1.png";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/About" },
    { text: "Jewelry", path: "/Jewelry" },
    { text: "Style", path: "/Style" },
    { text: "Collection", path: "/Collection" },
    { text: "Contact us", path: "/Contactus" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#000", borderBottom: "2px solid #ECD4BA" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "80px",
          alignItems: "center",
        }}
      >
        {isMobile ? (
          <>
            <Box
              sx={{
                flexGrow: 1,
                height: 40,
                maxWidth: "100px",
                position: "absolute",
                left: 16,
              }}
            >
              <NavLink to="/">
                <img
                  src={logo}
                  alt="elegance"
                  style={{ objectFit: "contain" }}
                />
              </NavLink>
            </Box>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ position: "absolute", right: 16 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 2,
                    backgroundColor: "#000",
                  }}
                >
                  <Box sx={{ flexGrow: 1, height: 50, maxWidth: "100px" }}>
                    <NavLink to="/">
                      <img
                        src={logo}
                        alt="elegance"
                        style={{ objectFit: "contain" }}
                      />
                    </NavLink>
                  </Box>
                  <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List sx={{ width: 250 }}>
                  {menuItems.map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      component={NavLink}
                      to={item.path}
                      onClick={toggleDrawer}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.slice(0, 3).map((item) => (
                <Typography
                  color="inherit"
                  key={item.text}
                  component={NavLink}
                  to={item.path}
                  mx={{ lg: 3, xs: 1.5 }}
                  sx={{
                    textDecoration: "none",
                    transition: "0.6s",
                    color: "inherit",
                    ":hover": { color: "gold" },
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                maxWidth: "124px",
              }}
              mx={{ lg: 2, xs: 1 }}
            >
              <NavLink to="/">
                <img src={logo} alt="elegance" />
              </NavLink>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {menuItems.slice(3).map((item) => (
                <Typography
                  color="inherit"
                  key={item.text}
                  component={NavLink}
                  to={item.path}
                  mx={{ lg: 3, xs: 1.5 }}
                  sx={{
                    textDecoration: "none",
                    transition: "0.6s",
                    color: "inherit",
                    ":hover": { color: "gold" },
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
