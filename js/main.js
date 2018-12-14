const follow = document.querySelector("#follow-button");
const followers = document.querySelector("#followers");
const proPic = document.querySelector("#profile-pic");
let clicked = true;

follow.addEventListener("click", function() {
  clicked = !clicked;
  //if clicked is === true toggle class and inner html
  if (clicked) {
    follow.classList.add("clicked");
    follow.innerHTML = "Following";
    followers.innerHTML = "10k";
  } else {
    follow.classList.remove("clicked");
    follow.innerHTML = "Follow";
    followers.innerHTML = "9,999";
  }
});

proPic.addEventListener("onload", function() {
  proPic.classList.add("onload");
});
