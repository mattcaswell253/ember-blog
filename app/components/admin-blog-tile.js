import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(blog, params) {
      this.sendAction('update', blog, params);
    },
    delete(blog) {
      if (confirm('Are you sure you want to delete this blog?')) {
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});
