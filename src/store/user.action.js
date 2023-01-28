


import { store } from '../store/store.js';
import {userService} from '../assets/services.js/user-service.js'

import {SET_USERS, SWITCH_USER , CLOSE_SWITCH_USERS_MODAL, OPEN_SWITCH_USERS_MODAL} from '../store/user.reducer.js'

export async function switchUser(userLine) {
    try {
        // let updatedsUser = await userService.update(user);
      store.dispatch({
        type: SWITCH_USER,
        userLine,
      });
    //   return updatedsUser
    } catch (err) {
      console.log(`Cannot logging the user ${userLine.fullname} `, err)
      throw err;
    }
  }

  export async function loadUsers() {
    try {
      const users = await userService.query()

      store.dispatch({
        type: SET_USERS,
        users,
      });
    } catch (err) {
      console.log('Cannot load srories', err)
      throw err;
    }
  }

  export async function closeSwitchUsersModal() {
    try {
      store.dispatch({
        type: CLOSE_SWITCH_USERS_MODAL,
        isSwitchModalOpen: false,
      });
    } catch (err) {
      console.log('Cannot close switch users modal', err)
      throw err;
    }
  }

  export async function openSwitchUsersModal() {
    try {
      store.dispatch({
        type: OPEN_SWITCH_USERS_MODAL,
        isSwitchModalOpen: true,
      });
    } catch (err) {
      console.log('Cannot open switch users modal', err);
      throw err;
    }
  }


  