import AlbumCard from "./AlbumCard"
import '../../css/ArtistAlbum.css'

const ArtistAlbum = ({ albums }) => {

  return (
    <section className="artist_album_container">
        <h3 className="artist_album_title">Artist's Album</h3>
        <div>
            {
                albums?.map(albumInfo => (
                    <AlbumCard
                        key={albumInfo.id}
                        album={albumInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ArtistAlbum