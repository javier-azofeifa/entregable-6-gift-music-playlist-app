import ArtistSongsTop from "../components/ArtistPage/ArtistSongsTop"
import ArtistAlbum from "../components/ArtistPage/ArtistAlbum"
import ArtistInfo from "../components/ArtistPage/ArtistInfo"
import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../css/ArtistPage.css'

const ArtistPage = () => {

    const { id } = useParams()

    const [ artist, getArtist ] = useFetch()

    useEffect(() => {
        getArtist(`/api/artists/${id}`)
    }, [id])

    console.log(artist);

  return (
    <div className="artist_page_container">
        <div className="artist_page_button">
            <button><Link className="artist_page_link" to='/'>Atras</Link></button>
        </div>
        <div className="artist_info">
            <ArtistInfo
                artist={artist}
            />
        </div>
        <ArtistAlbum
            albums={artist?.albums}
        />
        <ArtistSongsTop
            tracks={artist?.songsTop}
        />
    </div>
  )
}

export default ArtistPage