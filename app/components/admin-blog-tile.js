import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(blog, params) {
      this.sendAction('update', blog, params);
    }
  }
});
