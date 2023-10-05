import { deleteTrack } from "../../store/slices/tracks.slice";
import { useDispatch } from "react-redux";
import "../../css/TrackList.css";

const TrackList = ({ track }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteTrack(track))
  }

  return (
    <section className="track_list_container">
      <header className="track_list_header">
        <img src={track.album.images[0].url} alt="" />
      </header>
      <div className="track_list_info">
        <article className="track_list_article">
          <h3 className="track_list_title">{track.name}</h3>
          <ul>
            {track.artists.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
        </article>
        <footer onClick={handleDelete} className="track_list_footer">
          <i className="bx bx-minus-circle"></i>
        </footer>
      </div>
    </section>
  );
};

export default TrackList;
