import { API } from './index';

export const getPosts = async () => fetch(`${API}/posts/`)
  .then((response) => response.json());
