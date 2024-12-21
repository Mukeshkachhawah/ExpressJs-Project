const express = require("express");
const {
  loginUser,
  registerUser,
  logoutUser,
  authMiddleware,
} = require("../../controllers/auth/auth-Controller");

const router = express.Router();
router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});

module.exports = router;
