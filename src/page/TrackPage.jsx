import TrackRelated from "../components/TrackPage/TrackRelated";
import TrackInfo from "../components/TrackPage/TrackInfo";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../css/TrackPage.css";

const TrackPage = () => {
  const { id } = useParams();

  const [track, getTrack] = useFetch();

  useEffect(() => {
    getTrack(`/api/tracks/${id}`);
  }, [id]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="track_page_container">
      <button className="track_page_button" onClick={handleBack}>Back</button>
      <div className="track_page_info">
        <TrackInfo track={track} />
      </div>
      <TrackRelated artist={track?.artists[0].name} />
    </div>
  );
};

export default TrackPage;
