const { User } = require('./models/user');

const registerUser = async (username, email, password) => {
  const db = await require('./models/index').db();
  await User.createTable(db);
  const user = new User(db, null, username, email, password);
  await user.save();
  return user;
};

const loginUser = async (email, password) => {
  const db = await require('./models/index').db();
  const user = await User.findByEmail(db, email);
  if (!user) {
    throw new Error('User not found');
  }
  if (user.password !== password) {
    throw new Error('Invalid password');
  }
  return user;
};

module.exports = { registerUser, loginUser };