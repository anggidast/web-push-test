console.log('Service Worker Loaded...');

self.addEventListener('push', (e) => {
  const data = e.data.json();
  console.log(JSON.stringify(data, null, 2));
  console.log('Push Recieved...');
  self.registration.showNotification(data.title, data.options).then((result) => console.log(result));
});

self.addEventListener('notificationclick', function (event) {
  var notification = event.notification;
  var data = notification.data;
  var action = event.action;
  console.log(notification, '<<< notification');
  console.log(action, '<<< action');

  if (action) {
    var promise = Promise.resolve();
    promise = promise.then(function () {
      clients.openWindow(data[action]);
    });

    event.waitUntil(promise);
  } else if (!action && data.body) {
    var promise = Promise.resolve();
    promise = promise.then(function () {
      clients.openWindow(data.body);
    });

    event.waitUntil(promise);
  }

  // var data = notification.data
});
