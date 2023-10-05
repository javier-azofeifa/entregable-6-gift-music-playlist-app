import { setCredentialsSlice } from "./store/slices/credentials.slice";
import ProtectedRoutes from "./page/ProtectedRoutes";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import PlaylistPage from "./page/PlaylistPage";
import ArtistPage from "./page/ArtistPage";
import { useDispatch } from "react-redux";
import LoginPage from "./page/LoginPage";
import TrackPage from "./page/TrackPage";
import HomePage from "./page/HomePage";
import { useEffect } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const obj = { token, username, email };
    dispatch(setCredentialsSlice(obj));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/track/:id" element={<TrackPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
