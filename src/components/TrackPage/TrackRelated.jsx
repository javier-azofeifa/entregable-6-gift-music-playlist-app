import TrackCard from "../HomePage/TrackCard";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import '../../css/TrackRelated.css'

const TrackRelated = ({ artist }) => {

  const [tracksList, getTracksList] = useFetch();

  useEffect(() => {
    if (artist) {
      getTracksList(`/api/tracks?limit=10&q=${artist}`);
    }
  }, [artist]);

  return (
    <section className="track_related_container" >
      <h3 className="track_related_title">Track Related</h3>
      <div className="track_related_card">
        {
            tracksList?.tracks.items.map(track => (
                <TrackCard
                    key={track.id}
                    track={track}
                />
            ))
        }
      </div>
    </section>
  );
};

export default TrackRelated;