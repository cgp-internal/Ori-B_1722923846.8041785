const { registerUser, loginUser } = require('./services/auth');
const { User } = require('./models/user');

class UserController {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await registerUser(username, email, password);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await loginUser(email, password);
      res.json(user);
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = { UserController };