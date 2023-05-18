import React from "react";
import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NavBar,
  VideoDetail,
  Feed,
  ChannelDetail,
  SearchFeed,
  SearchBar,
} from "./components";

const App = () => {
  const { url } = useMatch();
  return (
    <BrowserRouter basename="/React-Youtube-clone">
      <Box sx={{ backgroundColor: "white" }}>
        <NavBar />
        <Routes>
          <Route path={`${url}/`} element={<Feed />} />
          <Route path={`${url}/video/:id`} element={<VideoDetail />} />
          <Route path={`${url}/channel/:id`} element={<ChannelDetail />} />
          <Route path={`${url}/search/:searchTerm`} element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
