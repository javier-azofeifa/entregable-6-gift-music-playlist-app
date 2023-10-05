import getConfigToken from "../services/getConfigToken";
import { useState } from "react";
import axios from "axios";

const useFetch = () => {

  const baseUrl = "https://playlist-share-dev.fl0.io";

  const [infoApi, setInfoApi] = useState();

  const getApi = (paht) => {
    const url = `${baseUrl}${paht}`;
    axios.get(url, getConfigToken())
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };
  return [ infoApi, getApi ]
};

export default useFetch;
