

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
        users =  gUsers;
        utilService.saveToStorage(STORAGE_KEY, users);
      }
  
      return users;
    } catch (err) {
      console.log('Had Error', err);
    }
  }

  async function update(user){

    let updatedsUser = await storageService.put(STORAGE_KEY, user);
  
    return updatedsUser;
  
  
  
  }
  
  //  כאשר יוזר רוצה להתחבר, הוא ממלא את השם משתמש והססמא, אותה נשלח לפונקציה שתביא לנו את כל היוזרים מתוך הלוקאל סטוראג'. אם המערך יוזרים ריק, נשמור במקום מערך יוזרים בצורת הארד קודד. לאחר מכן נחפש יוזר ששם המשתמש שלו וגם הססמא זהים ליוזר מתוך המערך של כל היוזרים. אם מצאנו אחד כזה, לשמור אותו בסשן סטוראג' ונחזיר חזרה לפרונט את היוזר המחובר. אם לא מצאנו אחד כזה, נשלח שגיאה לפרונט ונטפל בה
  



export const gUsers = [
  {
    "_id": "Z550",
    "username": "Liori",
    "password": "123456",
    "fullname": "Lior Maor",
    "imgUrl": 'https://res.cloudinary.com/dsinv9pik/image/upload/v1674477174/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_vsrinc.jpg',
    "following": [
      {
        "_id": "B700",
        "fullname": "Dob",
        "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg"
      },
      {
        "_id": "C600",
        "fullname": "Marko",
        "imgUrl": "https://randomuser.me/api/portraits/men/75.jpg"
      }
    ],
    "followers": [
      {
        "_id": "B700",
        "fullname": "Dob",
        "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg"
      },
      {
        "_id": "C600",
        "fullname": "Marko",
        "imgUrl": "https://randomuser.me/api/portraits/men/75.jpg"
      }
    ],
    "savedStoryIds": ["s104", "s111", "s123"]
  },
    {
      "_id": "A550",
      "username": "Muko",
      "password": "123456",
      "fullname": "Muko Muka",
      "imgUrl": "https://media.cnn.com/api/v1/images/stellar/prod/230111041545-01-dani-alves-brazil-112822.jpg?c=original",
      "following": [
        {
          "_id": "B700",
          "fullname": "Dob",
          "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg"
        },
        {
          "_id": "C600",
          "fullname": "Marko",
          "imgUrl": "https://randomuser.me/api/portraits/men/75.jpg"
        }
      ],
      "followers": [
        {
          "_id": "B700",
          "fullname": "Dob",
          "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg"
        },
        {
          "_id": "C600",
          "fullname": "Marko",
          "imgUrl": "https://randomuser.me/api/portraits/men/75.jpg"
        }
      ],
      "savedStoryIds": ["s104", "s111", "s123"]
    },
    {
      "_id": "B700",
      "username": "Dob",
      "password": "123456",
      "fullname": "Dob moran",
      "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg",
      "following": [
        {
          "_id": "C600",
          "fullname": "Dob",
          "imgUrl": "https://randomuser.me/api/portraits/men/75.jpg"
        }
      ],
      "followers": [
        {
          "_id": "C600",
          "fullname": "Dob",
          "imgUrl": "https://randomuser.me/api/portraits/men/75.jpg"
        }
      ],
      "savedStoryIds": ["m104", "m111", "m123"]
    },
    {
      "_id": "C600",
      "username": "Marko",
      "password": "123456",
      "fullname": "Marko Pollo",
      "imgUrl": "http://some-img",
      "following": [
        {
          "_id": "B700",
          "fullname": "Dob",
          "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg"
        },
      ],
      "followers": [
        {
          "_id": "B700",
          "fullname": "Dob",
          "imgUrl": "https://media.allure.com/photos/5c734d9adbe270553d92abf1/1:1/w_1503,h_1503,c_limit/Rami-Malek-Oscars-2019-Look-Dyp.jpg"
        },
      ],
      "savedStoryIds": ["s1594", "s166", "s199"]
    },



  ]



export const SuggestedUsers = [
    {
        _id: utilService.makeId(),
        username: "Daniel22",
        userUrl: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'


    },

    {

        _id: utilService.makeId(),
        username: "Leon30",
        userUrl: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'


    },

    {
        
        _id: utilService.makeId(),
        username: "AdamBit",
        userUrl: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'


    },


    {

    
        _id: utilService.makeId(),
        username: "LinaLove",
        userUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'



    },

    {
        _id: utilService.makeId(),
        username: "Dikla1990",
        userUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600'



    }



]