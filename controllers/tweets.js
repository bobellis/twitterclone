Twitter.TweetsController = Ember.ArrayController.extend({
  actions: {
    sortByDate: function() {
      this.set('sortProperties', ['date']);
      this.set('sortAscending', false);
    },
    
    newTweet: function() {
      var newTweet = {id: (tweets.length + 1), body: this.get('tweetbody'), date:this.get('date')};
      tweets.addObject(newTweet);
    }
  }

});
