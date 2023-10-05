import '../../css/ArtistInfo.css'

const ArtistInfo = ({ artist }) => {

  return (
    <section className='artist_info_section'>
        <header className='artist_info_header'>
            <img src={artist?.images[0].url} alt="" />
        </header>
        <article className='artist_info_article'>
            <h2  className='artist_info_title'>{artist?.name}</h2>
            <ul>
                <li><span>Followers: </span><span>{artist?.followers.total}</span></li>
                <li><span>Popularity: </span><span>{artist?.popularity}</span></li>
                <li>
                    <span>Genres: </span>
                    <ul>
                        {
                            artist?.genres.map(genre => (
                                <li key={genre}>{genre}</li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default ArtistInfo
