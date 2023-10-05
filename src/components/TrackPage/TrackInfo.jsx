import { useState } from "react";
import '../../css/TrackInfo.css'

const TrackInfo = ({ track }) => {
  const [isShowPlayer, setIsShowPlayer] = useState(false);

  const handlePlayer = () => {
    setIsShowPlayer(!isShowPlayer);
  };

  return (
    <div className="track_info_container">
      <article className="track_info_article">
        <header className="track_info_header">
          <img onClick={handlePlayer} src={track?.album.images[0].url} alt="" />
        </header>
        <section className="track_info_section">
          <h3>{track?.name}</h3>
          <ul>
            {track?.artists.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
          <p>
            <span>Album: </span>
            {track?.album.name}
          </p>
          <p>
            <span>Release date: </span>
            {track?.album.release_date}
          </p>
        </section>
      </article>
      {
        isShowPlayer
            && (
                <iframe className="track_iframe"
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/track/580CJMS4grsSo5VTU2ecQS?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                ></iframe>
            )
      }
    </div>
  );
};

export default TrackInfo;
