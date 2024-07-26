import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { apiData } from "../utils/apiData";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    apiData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2, background: "white" }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "rgb(63, 63, 218)" }}
      >
        Search Results For: <span style={{ color: "red" }}>{searchTerm}</span>{" "}
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
