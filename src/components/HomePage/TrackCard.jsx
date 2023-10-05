import { addTrack } from "../../store/slices/tracks.slice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../css/TrackCard.css";

const TrackCard = ({ track }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAddTrack = () => {
    dispatch(addTrack(track));
  };

  const handleArtist = (id) => {
    navigate(`/artist/${id}`)
  }

  return (
    <section className="track_card_container">
      <header className="track_card_header">
        <img src={track.album.images[0].url} alt="" />
      </header>
      <div className="track_card_info">
        <article className="track_card_article">
          <Link to={`/track/${track.id}`}><h3 className="track_card_title">{track.name}</h3></Link>
          <ul>
            {track.artists.map(artist => (
              <li
              onClick={() => handleArtist(artist.id)}
              key={artist.id}
              >{artist.name}</li>
            ))}
          </ul>
        </article>
        <footer className="track_card_footer">
          <a target="_blank" href={track.external_urls.spotify}>
            <i className="bx bxl-spotify"></i>
          </a>
          <button className="track_card_button" onClick={handleAddTrack}>
            <i className="bx bx-plus-circle"></i>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default TrackCard;
