const { UsersModel } = require("../model/usersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await UsersModel.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }

module.exports.userVerification = async (req, res) => {
    const token = req.cookies.token;  // Get token from cookies
  
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);  // Verify token
      const user = await UsersModel.findById(decoded.id);  // Find user by decoded ID
  
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.status(401).json({ status: false, message: "User not found" });
      }
    } catch (err) {
      return res.status(403).json({ status: false, message: "Invalid token" });
    }
  };