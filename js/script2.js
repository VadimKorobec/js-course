"use strict";

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3", "track-4"],
//   trackCount: 4,
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName("Mango");
// playlist.addTrack("track-5");
// playlist.updateRating(10);

// console.log(playlist);

// const username = "Mango";
// const email = "mango@mail.com";

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// console.log([]);

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// for (const key of keys) {
//   console.log(feedback[key]);
// }

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

const friendsName = friends.filter((item) => !item.online);
console.log(friendsName);

// console.table(friends);

// for (const friend of friends) {
//   if (friend.name === "Mango") {
//     console.log(friend);
//   }
// }

const findFriendbyName = function (allFriends, name) {
  for (const friend of allFriends) {
    if (friend.name === name) {
      return "Found!";
    }
  }
  return "Not found!";
};

console.log(findFriendbyName(friends, "Poly"));

const getAllNames = function (allFriends) {
  let arr = [];
  for (const friend of allFriends) {
    arr.push(friend.name);
  }
  return arr;
};

console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
  const isOnline = [];
  for (const friend of allFriends) {
    if (friend.online) {
      isOnline.push(friend);
    }
  }

  return isOnline;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const isOffline = [];
  for (const friend of allFriends) {
    if (!friend.online) {
      isOffline.push(friend);
    }
  }

  return isOffline;
};

console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const newFriends = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    if (friend.online) {
      newFriends.online.push(friend);
    } else {
      newFriends.offline.push(friend);
    }
  }

  return newFriends;
};

console.log(getFriendsByOnlineStatus(friends));

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

const playlist = {
  name: "My list",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  trackCount: 3,
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { followers, views, likes } = playlist.stats;

console.log(followers, views);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 18,
  mango: 6,
  gogo: 12,
};

const entries = Object.entries(authors);
console.log(entries);

let bestRating = 0;

for (const [name, rating] of entries) {
  console.log(name, rating);
}

console.log(bestRating);
