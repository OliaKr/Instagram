import { storageService } from '../services.js/async-storage.service.js'
import { utilService } from '../services.js/util.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'userDB'
const AUTH_KEY = 'authDB'

export const userService = {
  query,
  update,
  updateUsers,
  loggedInUser,
  fetchUser,
}

async function query() {
  try {
    let users
    users = await httpService.get('users')

    if (!users.data.length) {
      users = gUsers

      httpService.post('users', users)
    }

    return users.data
  } catch (err) {
    console.log('Had Error', err)
  }
}

async function fetchUser() {
  try {
    let user = await storageService.query(AUTH_KEY)
    utilService.saveToStorage(AUTH_KEY, user)

    return user
  } catch (err) {
    console.log('Had Error', err)
  }
}

async function updateUsers(updatedUsers) {
  try {
    let users = await storageService.query(STORAGE_KEY)
    users = updatedUsers
    utilService.saveToStorage(STORAGE_KEY, users)
    return users
  } catch (err) {
    console.log('Had Error', err)
  }
}

async function update(user) {
  let updatedsUser = await httpService.put('user', user)

  return updatedsUser.data
}

async function loggedInUser(user) {
  console.log('from user-ervice', user)
  let updatedsUser = await storageService._save(AUTH_KEY, user)

  return updatedsUser
}

export const gUsers = [
  {
    _id: 'Z550',
    username: 'Liori',
    password: '123456',
    fullname: 'Lior Maor',
    bio: 'Happiness depends upon ourselves',
    imgUrl:
      'https://res.cloudinary.com/dsinv9pik/image/upload/v1674477174/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_vsrinc.jpg',
    following: [
      {
        _id: 'Z580',
        fullname: 'ulashi ulashi',
        imgUrl: 'https://img.mako.co.il/2014/02/24/467424241_g.jpg',
      },
      {
        _id: 'u103',
        fullname: 'Eli Mor',
        imgUrl: 'https://shorturl.at/adGH1',
      },
    ],
    followers: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: true,
    notifications: [
      {
        _id: utilService.makeId(),
        type: 'Dob Moran like your story',
        by: {
          _id: 'B700',
          fullname: 'Dob',
          imgUrl:
            'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
        },
      },
      {
        _id: utilService.makeId(),
        type: 'maria pali started follow you',
        written: false,
        by: {
          _id: 'C600',
          fullname: 'maria pali',
          imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
        },
      },
    ],
  },
  {
    _id: 'A550',
    username: 'Muko',
    password: '123456',
    fullname: 'Muko Muka',
    bio: 'We’re all born naked and the rest is drag',
    imgUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/230111041545-01-dani-alves-brazil-112822.jpg?c=original',
    following: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
      {
        _id: 'u103',
        fullname: 'Eli Mor',
        imgUrl: 'https://shorturl.at/adGH1',
      },
    ],
    followers: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
      {
        _id: 'C600',
        fullname: 'maria pali',
        imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [
      {
        _id: utilService.makeId(),
        type: 'like your story',
        written: false,
        by: {
          _id: 'C600',
          fullname: 'maria pali',
          imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
        },
      },
    ],
  },
  {
    _id: 'B700',
    username: 'Dob',
    password: '123456',
    fullname: 'Dob moran',
    bio: 'Change will not come if we wait for some other person or some other time',
    imgUrl:
      'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
    following: [
      {
        _id: 'C600',
        fullname: 'Dob',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
      {
        _id: 'u102',
        fullname: 'Leo Dicaprio',
        imgUrl: 'https://tinyurl.com/bddwcp58',
      },
    ],
    followers: [
      {
        _id: 'C600',
        fullname: 'Dob',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [
      {
        _id: utilService.makeId(),
        type: 'like your story',
        by: {
          _id: 'C600',
          fullname: 'maria pali',
          imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
        },
      },
    ],
  },
  {
    _id: 'C600',
    username: 'Maria',
    password: '123456',
    fullname: 'Maria Pali',
    bio: 'You can be the lead in your own life',
    imgUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
    following: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
    ],
    followers: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'Z580',
    username: 'ulashi',
    password: '123456',
    fullname: 'ulashi ulashi',
    bio: 'If you don’t like the road you’re walking, start paving another one',
    imgUrl: 'https://img.mako.co.il/2014/02/24/467424241_g.jpg',
    following: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    followers: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'u102',
    username: 'lea1',
    password: '123456',
    fullname: 'lea di',
    bio: 'Imagination is more important than knowledge',
    imgUrl: 'https://tinyurl.com/bddwcp58',
    following: [
      {
        _id: 'u103',
        fullname: 'eli mor',
        imgUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
      },
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    followers: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'u103',
    username: 'eli1',
    password: '123456',
    fullname: 'eli mor',
    bio: 'I’d rather regret the things I’ve done than regret the things I haven’t done',
    imgUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
    following: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    followers: [
      {
        _id: 'B700',
        fullname: 'Dob',
        imgUrl:
          'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
      },
    ],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [
      {
        _id: utilService.makeId(),
        type: 'like your story',
        by: {
          _id: 'B700',
          fullname: 'Dob',
          imgUrl:
            'https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg',
        },
      },
    ],
  },
  {
    _id: 'o12344',
    username: 'Daniel22',
    password: '123456',
    fullname: 'Daniel Levy',
    bio: 'Be strong and man!',
    imgUrl:
      'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: [],
    followers: [],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'b343434',
    username: 'Leon30',
    password: '123456',
    fullname: 'Leon Dimitrov',
    bio: 'Stalin is my king!',
    imgUrl:
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: [],
    followers: [],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'c898989',
    username: 'AdamBit',
    password: '123456',
    fullname: 'Adam Biton',
    bio: 'I support Israel!',
    imgUrl:
      'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    following: [],
    followers: [],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'd34236',
    username: 'LinaLove',
    password: '123456',
    fullname: 'Lina Sorokina',
    bio: 'Go after your dreams!',
    imgUrl:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    following: [],
    followers: [],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
  {
    _id: 'f909090',
    username: 'Dikla1990',
    password: '123456',
    fullname: 'Dikla Din',
    bio: 'When you will see me you will understand that a woman can be very strong',
    imgUrl:
      'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
    following: [],
    followers: [],
    savedStoryIds: [],
    isNewNotifications: false,
    notifications: [],
  },
]
