const isAdmin = (req, res, next) => {
  if (!req.session.user_id && !req.user.admin) {
    res.status(401).json({
      msg: "You're not authorized to because you are not an admin.",
    });
  } else {
    next();
  }
}

module.exports = isAdmin
