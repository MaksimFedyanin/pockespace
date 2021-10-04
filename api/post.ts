import { API } from './index';

export const getPost = async (postId: number) => fetch(`${API}/post/${postId}/`)
  .then((response) => response.json());
