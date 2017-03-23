import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    showComment() {
      this.set('addComment', true);
    },
    saveComment() {
      var params = {
        userName: this.get('userName'),
        body: this.get('body'),
        date: this.get('date'),
        blog: this.get('blog')
      };
      console.log(params);
      this.set('addComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
