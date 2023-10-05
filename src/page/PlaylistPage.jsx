import usePlaylist from "../hooks/usePlaylist"
import { useEffect } from "react"

const PlaylistPage = () => {

  const { getPlaylist, playlist } = usePlaylist()

  useEffect(() => {
    getPlaylist()
  }, [])

  console.log(playlist);

  return (
    <article>
      {
        playlist.map(track => (
          <div key={track.id}>
            <h2>{track.title}</h2>
          </div>
        ))
      }
    </article>
  )
}

export default PlaylistPage