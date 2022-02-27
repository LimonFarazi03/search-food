const randomBuddies = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(data => displayBuddies(data))
}

const displayBuddies = (data) => {
  console.log(data);
}