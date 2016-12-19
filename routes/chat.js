var Conversation = require('../models/conversation')
var Message = require('../models/message'),
var User = require('../../urgentcarefrontend/js/main.js');

exports.getConversations = function (req, res, next) {
  // Only return one message from each conversation to display as snippet
  Conversation.find({ participants: req.user._id }).select('_id').exec(function (err, conversations) {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    // Set up empty array to hold conversations + most recent message
    var fullConversations = [];
    conversations.forEach(function (conversation) {
      Message.find({ 'conversationId': conversation._id }).sort('-createdAt').limit(1).populate({
        path: "author",
        select: "profile.firstName profile.lastName"
      }).exec(function (err, message) {
        if (err) {
          res.send({ error: err });
          return next(err);
        }
        fullConversations.push(message);
        if (fullConversations.length === conversations.length) {
          return res.status(200).json({ conversations: fullConversations });
        }
      });
    });
  });
};
