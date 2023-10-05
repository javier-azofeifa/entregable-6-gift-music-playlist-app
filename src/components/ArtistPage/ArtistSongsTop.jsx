import TrackCard from "../HomePage/TrackCard"
import '../../css/ArtistSongsTop.css'

const ArtistSongsTop = ({ tracks }) => {

  return (
    <section className="artist_top_container">
        <h3  className="artist_top_title">Artist's Top Songs</h3>
        <div>
            {
                tracks?.map(trackInfo => (
                    <TrackCard
                        key={trackInfo.id}
                        track={trackInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ArtistSongsTop