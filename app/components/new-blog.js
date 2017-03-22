import Ember from 'ember';

export default Ember.Component.extend({
  addBlog: false,
  actions: {
    blogForm() {
      this.set('addBlog', true);
    },

    saveBlog() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        post: this.get('post'),
        image: this.get('image'),
        date: this.get('date'),
      };
      this.set('addBlog', false);
      this.sendAction('saveBlog', params);
    }
  }
});
