const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.status(401).json({ message: "You're not authorized to view this resource" });
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = withAuth
