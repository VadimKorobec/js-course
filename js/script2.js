"use strict";

const playlist = {
  name: "My playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3", "track-4"],
  trackCount: 4,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.changeName("Mango");
playlist.addTrack("track-5");
playlist.updateRating(10);

console.log(playlist);

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
