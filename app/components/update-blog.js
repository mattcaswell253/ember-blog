import Ember from 'ember';

export default Ember.Component.extend({
  updateBlog: false,
  actions: {
    updateBlog() {
      this.set('updateBlog', true);
    },
    update(blog) {
      console.log(blog);
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        post: this.get('post'),
        image: this.get('image'),
        date: this.get('date'),
      };
      // console.log("update blog.js");
      // console.log(params);

      this.set('updateBlog', false);
      this.sendAction('update', blog, params);
    }
  }
});
