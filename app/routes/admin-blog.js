import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },
  actions: {

  update(blog, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        blog.set(key,params[key]);
      }
    });
    blog.save();
    this.transitionTo('admin');

  },
  destroyBlog(blog) {
    blog.destroyRecord();
    this.transitionTo('admin');
  }
}
});
