Twitter.TweetRoute = Ember.Route.extend({
  model: function(params) {
    return tweets.findBy('id', parseInt(params.tweet_id));
  }
});
