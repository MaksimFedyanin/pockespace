import { atom } from 'recoil';

const InitialPostsState = [];

export const PostsState = atom({
  key: 'posts',
  default: InitialPostsState,
});

export default { state: PostsState, initialState: InitialPostsState };
