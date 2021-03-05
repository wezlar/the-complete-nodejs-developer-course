const users = [];

const addUser = ({ id, username, room }) => {
  // clean the data
  const newUsername = username.trim().toLowerCase();
  const newRoom = room.trim().toLowerCase();

  // validate the data
  if (!newUsername || !newRoom) {
    return {
      error: 'Username and Room are required!',
    };
  }

  const isExistingUser = users.find((user) => {
    return user.room === newRoom && user.username === newUsername;
  });

  // validate username
  if (isExistingUser) {
    return {
      error: 'Userame is in use',
    };
  }

  // store user
  const user = { id, username: newUsername, room: newRoom };
  users.push(user);
  return {
    user,
  };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room.trim().toLowerCase());
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
