import usePlaylist from "../../hooks/usePlaylist";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import TrackList from "./TrackList";
import "../../css/HeaderMusic.css";

const HeaderMusic = () => {

  const tracksPlaylist = useSelector(store => store.tracks);

  const { reset, handleSubmit, register } = useForm()

  const { postPlaylist } = usePlaylist()

  const submit = data => {
    console.log(data);
    const obj = {
      ...data,
      tracks: tracksPlaylist.map(e => ({id: e.id}))
    }
    postPlaylist(obj)
    reset({
      title: '',
      to: '',
      message: ''
    })
  }

  return (
    <header className="header_container">
      <h1 className="header_title">Gift Music</h1>
      <div>
        <form className="header_form" onSubmit={handleSubmit(submit)}>
          <div className="header_info">
            <label htmlFor="title">Title</label>
            <input {...register('title')} type="text" id="title" />
          </div>
          <div className="header_info">
            <label htmlFor="to">To</label>
            <input {...register('to')} type="text" id="to" />
          </div>
          <div className="header_info">
            <label htmlFor="message">Message</label>
            <textarea {...register('message')} id="message" />
          </div>
          <div className="header_track">
            {tracksPlaylist.map((track) => (
              <TrackList
                key={track.id}
                track={track}
              />
            ))}
          </div>
          <div className="header_create">
            <button className="header_button">Create</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default HeaderMusic;
