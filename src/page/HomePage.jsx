import TrackCard from "../components/HomePage/TrackCard";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import "../css/HomePage.css";

const HomePage = () => {
  const [listTracks, getListTracks] = useFetch();
  const [inputValue, setInputValue] = useState("ricardo arjona");
  const [quantityPerPage, setQuantityPerPage] = useState(10);

  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`);
  }, [inputValue, quantityPerPage]);

  const inputSearch = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };

  const handleTracksPerPage = (e) => {
    setQuantityPerPage(e.target.value);
  };

  const tracksPlayList = useSelector((store) => store.tracks);

  return (
    <div className="home_container">
      <form className="home_form" onSubmit={handleSearch}>
        <div className="home_info">
          <label htmlFor="search">Search</label>
          <input ref={inputSearch} type="text" />
        </div>
        <select className="home_select" onChange={handleTracksPerPage} defaultValue={10}>
          {[2, 4, 6, 8, 10].map((tracksPerPege) => (
            <option key={tracksPerPege} value={tracksPerPege}>
              {tracksPerPege}
            </option>
          ))}
        </select>
      </form>
      <div className="track_container">
        {listTracks?.tracks.items.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
