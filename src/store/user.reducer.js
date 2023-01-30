import { ScienceTwoTone } from '@mui/icons-material';
import { userService } from '../assets/services.js/user-service.js';
import { gUsers } from '../assets/services.js/user-service.js';
export const SWITCH_USER = 'SWITCH_USER';
export const SET_USERS = 'SET_USERS';
export const CLOSE_SWITCH_USERS_MODAL = 'CLOSE_SWITCH_USERS_MODAL';
export const OPEN_SWITCH_USERS_MODAL = 'OPEN_SWITCH_USERS_MODAL';
export const SAVE_STORY_TO_USER = 'SAVE_STORY_TO_USER';

const initialState = {
  user: gUsers[0],
  users: [],
  isSwitchModalOpen: false,
};

export function userReducer(state = initialState, action) {
  var newState = state;

  switch (action.type) {
    case SET_USERS:
      newState = { ...state, users: action.users };
      break;
    case SWITCH_USER:
      newState = { ...state, user: action.userLine };
      break;
    case OPEN_SWITCH_USERS_MODAL:
      console.log(action);
      newState = { ...state, isSwitchModalOpen: action.isSwitchModalOpen };
      break;
    case CLOSE_SWITCH_USERS_MODAL:
      newState = { ...state, isSwitchModalOpen: action.isSwitchModalOpen };
      break;
    case SAVE_STORY_TO_USER:
      newState = { ...state, user: action.user };
    default:
  }
  return newState;
}
