import { storageService } from '../services.js/async-storage.service.js';
import { utilService } from '../services.js/util.service.js';

const STORAGE_KEY = 'userDB';

export const userService = {
  query,
  //   getById,
  //   remove,
  //   create,
  update,
};

async function query() {
  try {
    let users = await storageService.query(STORAGE_KEY);
    if (!users || !users.length) {
      users = gUsers;
      utilService.saveToStorage(STORAGE_KEY, users);
    }

    return users;
  } catch (err) {
    console.log('Had Error', err);
  }
}

async function update(user) {
  let updatedsUser = await storageService.put(STORAGE_KEY, user);

  return updatedsUser;
}

//  כאשר יוזר רוצה להתחבר, הוא ממלא את השם משתמש והססמא, אותה נשלח לפונקציה שתביא לנו את כל היוזרים מתוך הלוקאל סטוראג'. אם המערך יוזרים ריק, נשמור במקום מערך יוזרים בצורת הארד קודד. לאחר מכן נחפש יוזר ששם המשתמש שלו וגם הססמא זהים ליוזר מתוך המערך של כל היוזרים. אם מצאנו אחד כזה, לשמור אותו בסשן סטוראג' ונחזיר חזרה לפרונט את היוזר המחובר. אם לא מצאנו אחד כזה, נשלח שגיאה לפרונט ונטפל בה

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
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    savedStoryIds: [],
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
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    savedStoryIds: [],
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
      {
        _id: 'C600',
        fullname: 'Marko',
        imgUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
    ],
    savedStoryIds: [],
  },
];

export const SuggestedUsers = [
  {
    _id: utilService.makeId(),
    username: 'Daniel22',
    userUrl:
      'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },

  {
    _id: utilService.makeId(),
    username: 'Leon30',
    userUrl:
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },

  {
    _id: utilService.makeId(),
    username: 'AdamBit',
    userUrl:
      'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },

  {
    _id: utilService.makeId(),
    username: 'LinaLove',
    userUrl:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

  {
    _id: utilService.makeId(),
    username: 'Dikla1990',
    userUrl:
      'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
