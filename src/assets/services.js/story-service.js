

const story = [{
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
    "by": {
      "_id": "u101",
      "fullname": "Ulash Ulashi",
      "imgUrl": "http://some-img"
    },
   
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "tags":["fun", "kids"]
  },{
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
    "by": {
      "_id": "u101",
      "fullname": "Ulash Ulashi",
      "imgUrl": "http://some-img"
    },
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "tags":["fun", "kids"]
  },{
    "_id": "s101",
    "txt": "Best trip ever",
    "imgUrl": "http://some-img", //Can be an array if decide to support multiple imgs
    "by": {
      "_id": "u101",
      "fullname": "Ulash Ulashi",
      "imgUrl": "http://some-img"
    },
  
    "comments": [
      {
        "id": "c1001",
        "by": {
          "_id": "u105",
          "fullname": "Bob",
          "imgUrl": "http://some-img"
        },
        "txt": "good one!",
        "likedBy": [ // Optional
          {
            "_id": "u105",
            "fullname": "Bob",
            "imgUrl": "http://some-img"
          }
        ]
      },
      {
        "id": "c1002",
        "by": {
          "_id": "u106",
          "fullname": "Dob",
          "imgUrl": "http://some-img"
        },
        "txt": "not good!",
      }
    ],
    "likedBy": [
      {
        "_id": "u105",
        "fullname": "Bob",
        "imgUrl": "http://some-img"
      },
      {
        "_id": "u106",
        "fullname": "Dob",
        "imgUrl": "http://some-img"
      }
    ],
    "tags":["fun", "kids"]
  }]

  function _createStory(txt, imgUrl, by, comments) {
    return {
        _id: utilService.makeId(),
        txt,
        imgUrl,
        by,
        comments,
    }
}
// "by": {
//     "_id": "u101",
//     "fullname": "Ulash Ulashi",
//     "imgUrl": "http://some-img"
//   },