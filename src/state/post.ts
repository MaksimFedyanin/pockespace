import { atom } from 'recoil';
import { IPost } from '../types/post';

const InitialPostState = null;

export const PostState = atom<IPost>({
  key: 'post',
  default: InitialPostState,
});

export default { state: PostState, initialState: InitialPostState };
