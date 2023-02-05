import { store } from '../store/store.js';
import { userService } from '../assets/services.js/user-service.js';

import {
  SET_USERS,
  SWITCH_USER,
  CLOSE_SWITCH_USERS_MODAL,
  OPEN_SWITCH_USERS_MODAL,
  SAVE_STORY_TO_USER,
  TOGGLE_SEARCH_DRAWER,
  TOGGLE_NOTIFICATIONS_DRAWER,
} from '../store/user.reducer.js';

export async function switchUser(userLine) {
  try {
    store.dispatch({
      type: SWITCH_USER,
      userLine,
    });
  } catch (err) {
    console.log(`Cannot logging the user ${userLine.fullname} `, err);
    throw err;
  }
}

export async function loadUsers() {
  try {
    const users = await userService.query();

    store.dispatch({
      type: SET_USERS,
      users,
    });
  } catch (err) {
    console.log('Cannot load users', err);
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
    console.log('Cannot close switch users modal', err);
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

export async function toggleSearchDrawer(isSearchOpen) {
  try {
    store.dispatch({
      type: TOGGLE_SEARCH_DRAWER,
      isSearchOpen: isSearchOpen,
    });
  } catch (err) {
    console.log('Cannot open search drawer', err);
    throw err;
  }
}

export async function toggleNotificationsDrawer(isNotificationsOpen) {
  try {
    store.dispatch({
      type: TOGGLE_NOTIFICATIONS_DRAWER,
      isNotificationsOpen: isNotificationsOpen,
    });
  } catch (err) {
    console.log('Cannot open search drawer', err);
    throw err;
  }
}

export async function updateUser(user) {
  console.log('should see maria', user)
  try {
    let savedUser = await userService.update(user);
    store.dispatch({
      type: SAVE_STORY_TO_USER,
      user: savedUser,
    });
  } catch (err) {
    console.log('Cannot save story', err);
    throw err;
  }
}

export async function updateOtherUser(user) {
  console.log('should see maria', user)
  try {
    let savedUser = await userService.update(user);
    console.log('update other user', user)
  } catch (err) {
    console.log('Cannot save story', err);
    throw err;
  }
}


