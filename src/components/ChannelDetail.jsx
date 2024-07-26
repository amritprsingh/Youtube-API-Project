import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { apiData } from "../utils/apiData";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    apiData(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" sx={{ background: "white" }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,36,26,1) 0%, rgba(9,118,121,1) 19%, rgba(46,127,138,1) 47%, rgba(20,180,168,1) 77%, rgba(13,191,198,1) 85%, rgba(12,192,202,1) 86%, rgba(9,198,217,1) 90%, rgba(6,202,228,1) 93%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "50px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
