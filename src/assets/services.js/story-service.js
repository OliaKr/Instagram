import { storageService } from '../services.js/async-storage.service.js';
import { utilService } from '../services.js/util.service.js';

const STORAGE_KEY = 'storyDB';

export const storyService = {
  query,
  getById,
  remove,
  create,
  update,
};

export const newStory = {
  _id: null,
  txt: '',
  postImg: [], //Can be an array if decide to support multiple imgs
  by: {
    _id: '',
    fullname: '',
    userImg: '',
  },
  comments: [],
  likedBy: [],
  tags: [],
};

const gStories = [
  {
    _id: 's101',
    txt: 'Best trip ever',
    postImg: [
      'https://i.pinimg.com/474x/fe/bb/63/febb6397ebc186d9d0910d05d8fc28af.jpg',
      'https://res.cloudinary.com/dsinv9pik/image/upload/v1674992159/324925483_746086793599887_2422444401539407282_n_x1var0.jpg',
      'https://res.cloudinary.com/dsinv9pik/image/upload/v1674988394/325913754_1048696716095856_6968959291050052233_n_xjxeb9.jpg',
    ], //Can be an array if decide to support multiple imgs
    by: {
      _id: 'Z580',
      fullname: 'Ulash Ulashi',
      userImg: 'https://img.mako.co.il/2014/02/24/467424241_g.jpg',
    },

    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          // Optional
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'c1002',
        by: {
          _id: 'u106',
          fullname: 'Dob',
          imgUrl: 'http://some-img',
        },
        txt: 'not good!',
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
  {
    _id: 's102',
    txt: 'Nice!',
    postImg: ['https://i.insider.com/58936e390849ec1a008b4619?width=700'], //Can be an array if decide to support multiple imgs
    by: {
      _id: 'u102',
      fullname: 'Lea Di',
      userImg: 'https://tinyurl.com/bddwcp58',
    },
    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: 'http://some-img',
        },
        txt: 'good one!',
        likedBy: [
          // Optional
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'c1002',
        by: {
          _id: 'u106',
          fullname: 'Dob',
          imgUrl: 'http://some-img',
        },
        txt: 'not good!',
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
  {
    _id: 's103',
    txt: 'Great pic!',
    postImg: ['https://shorturl.ac/79odv'], //Can be an array if decide to support multiple imgs
    by: {
      _id: 'u103',
      fullname: 'Eli Mor',
      userImg: 'https://randomuser.me/api/portraits/men/71.jpg',
    },

    comments: [
      {
        id: 'c1001',
        by: {
          _id: 'u105',
          fullname: 'Bob',
          imgUrl: ['https://shorturl.ac/79odv'],
        },
        txt: 'good one!',
        likedBy: [
          // Optional
          {
            _id: 'u105',
            fullname: 'Bob',
            imgUrl: 'http://some-img',
          },
        ],
      },
      {
        id: 'c1002',
        by: {
          _id: 'u106',
          fullname: 'Dob',
          imgUrl: 'http://some-img',
        },
        txt: 'not good!',
      },
    ],
    likedBy: [
      {
        _id: 'u105',
        fullname: 'Bob',
        imgUrl: 'http://some-img',
      },
      {
        _id: 'u106',
        fullname: 'Dob',
        imgUrl: 'http://some-img',
      },
    ],
    tags: ['fun', 'kids'],
  },
];

function _createStory(txt, imgUrl, by, comments) {
  return {
    _id: utilService.makeId(),
    txt,
    imgUrl,
    by,
    comments,
  };
}

async function query() {
  try {
    let stories = await storageService.query(STORAGE_KEY);
    if (!stories || !stories.length) {
      stories = gStories;
      utilService.saveToStorage(STORAGE_KEY, stories);
    }

    return stories;
  } catch (err) {
    console.log('Had Error', err);
  }
}

function getById(storyId) {
  return storageService.get(STORAGE_KEY, storyId);
}

async function remove(storyId) {
  await storageService.remove(STORAGE_KEY, storyId);
}

async function create(story) {
  let savedStory = await storageService.post(STORAGE_KEY, story);
  return savedStory;
}

async function update(story) {
  let savedStory = await storageService.put(STORAGE_KEY, story);
  return savedStory;
}
