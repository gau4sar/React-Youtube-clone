import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";

import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "white",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: 0,
              padding: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <img src={logo} alt="icon" style={{ height: "50px" }} />
            </div>

            <div style={{ marginLeft: "12x", margin: 0, padding: 0 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "black", textAlign: "center" }}
              >
                YouTube
              </Typography>
            </div>
          </div>
        </div>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;
