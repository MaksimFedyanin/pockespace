import { atom } from "recoil";

const InitialPopupState = null;

export type PopupType = null | 'registration';

export const PopupState = atom<PopupType>({
    key: 'popup',
    default: InitialPopupState,
});

export default { state: PopupState, initialState: InitialPopupState };
