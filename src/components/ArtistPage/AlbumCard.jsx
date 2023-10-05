import '../../css/AlbumCard.css'

const AlbumCard = ({ album }) => {

    const yearReleaseDate = (new Date(album.release_date)).getFullYear()

  return (
    <article className='album_card_article'>
        <header className='album_card_header'>
            <img src={album.images[0].url} alt="" />
        </header>
        <div className='album_card_info'>
          <h4 className='album_card_title'>{album.name}</h4>
          <span className='album_card_span'>{yearReleaseDate}</span>
        </div>
    </article>
  )
}

export default AlbumCard