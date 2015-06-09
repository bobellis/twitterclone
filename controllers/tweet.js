Twitter.TweetController = Ember.ObjectController.extend({
  actions: {
      newReply: function(){
      debugger
      var newReply = {id: (replies.length + 1), tweetid: this.id, body: this.get('replybody')};
      replies.addObject(newReply);
    }
  }

});
