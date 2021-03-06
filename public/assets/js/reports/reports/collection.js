define([
  'locker',
  './model',
  'basicauth'
], function(locker, Model) {
  return locker.Collection.extend({
    model: Model,
    nestedUrl: 'reports',
    credentials: {
      username: window.lrs.key,
      password: window.lrs.secret
    }
  });
});