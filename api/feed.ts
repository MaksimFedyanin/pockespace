import {API} from "./index";

export const getPosts = async () => await fetch(`${API}/posts/`)
    .then((response) => response.json());
