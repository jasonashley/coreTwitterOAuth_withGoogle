module.exports = {
  getUser: (req, res) => {
    res.send(req.user);
  },

  logout: (req, res) => {
    req.logout();
    res.send(req.user);
  }
};
