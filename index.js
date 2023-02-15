const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BBBtQpsQgp6rQn8AAjJvWt3jafkrva8afcvVeTsDtaVjkFEk16l0K8AOQjoCYpzhSjsgLYDFehvjZowr1_fQDDw';
const privateVapidKey = 'J_C7y5B50ejfM31GO2MKmjLxnODThWZ05UFT0o4YiQ4';

webpush.setVapidDetails('mailto:anggi@feedloop.io', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;
  console.log(JSON.stringify(subscription, null, 2), '<<< subs');
  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({
    title: 'Push Test 2',
    options: {
      body: 'This is a test of the push notification',
      requireInteraction: true,
      image:
        'https://images.unsplash.com/photo-1666645220249-bc8a9a8b88d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      actions: [
        {
          action: 'coffee-action',
          title: 'Coffee',
          url: 'https://www.google.com',
          icon: 'http://image.ibb.co/frYOFd/tmlogo.png',
        },
      ],
      data: {
        'coffee-action': 'https://www.google.com',
        body: 'https://feedloop.io',
      },
    },
  });

  // Pass object into sendNotification
  webpush.sendNotification(subscription, payload).catch((err) => console.error(err));
});

const port = 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
