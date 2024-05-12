const Message = require("../models/message.model");

exports.addMessageController = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
 
    const data = await Message.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) {
      return res.status(200).json({ message: "Message added successfully" });
    } else {
      return res
        .status(400)
        .json({ message: "Failed to add message to database." });
    }
  } catch (err) {
    next(err);
  }
};


exports.getAllMessagesController = async(req, res, next) => {

  try {

    const {from,to} = req.body;
    const messages = await Message.find({})

  }catch(ex) {
    next(ex);
  }
 }

