const  {addMessageController,getAllMessagesController} 

= require("../controllers/message.controller.js")

const express = require('express');

const router = express.Router();

router.post('/addMessage',addMessageController);
router.get('/getAllMessages',getAllMessagesController)

module.exports = router;


