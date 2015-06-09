Twitter.RepliesRoute = Ember.Route.extend({
  model: function(tweetid){
    var tweetid = this.modelFor('tweet').id
    return replies.filterBy('tweetid', tweetid);
  }
});
