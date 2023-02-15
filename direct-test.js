const webpush = require('web-push');

const publicVapidKey = 'BBBtQpsQgp6rQn8AAjJvWt3jafkrva8afcvVeTsDtaVjkFEk16l0K8AOQjoCYpzhSjsgLYDFehvjZowr1_fQDDw';
const privateVapidKey = 'J_C7y5B50ejfM31GO2MKmjLxnODThWZ05UFT0o4YiQ4';

webpush.setVapidDetails('mailto:anggi@feedloop.io', publicVapidKey, privateVapidKey);

const anggi = {
  endpoint: "https://wns2-pn1p.notify.windows.com/w/?token=BQYAAAD6Ee2y%2bfJNGTXg0%2fRUVi9P905v3LOyICr3YB%2b7XTToL%2fc1%2b0F%2bY%2f7VORX1ptHbWoZceDNpypboReI0UrgDTyjJ6yymNc%2bSJGGQi7Y0JciewzPMvqXbCF1GG5aUoLDrkbFCMcjIqIvanPXcd%2bfZoQ5edLdoIMOkFm3theJ5cbkF1ZM49TEZMxPuX6e2qLcXPB37xp3u1WFEw9lluQkQm5YPI7ac9HlEgaqAIV%2fPXrNfwIEp6wcba6u9sXWa6LP0lkwfHqU3x5%2fbt1%2fiY4jDBnU4dcSSFLhSMqncaa6efjX0rHtjqBT%2fKO4acWc8%2bQNBBaE%3d",
  expirationTime: null,
  keys: {
    p256dh: "BFyI0e3zHKRSLSmMI0K-iel9WCvLbZFSRpKtilz1j01niuRCX-wJIw-KXT9DnM8QEfI-x7KIHlKzmspWGL2plho",
    auth: "Oe8AnmVK5WvU1tBAOKyuxA"
  }
};

const gulang = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/e1nnFPMsqaU:APA91bGk06dSN5MerWRSZif2fuuojgVBFZxTj_wGS6rPdr8JvHHypBmbtCmdIK2NEtOgi2s0kDB9TCLBPoDo90dqEWwGbsq8nl-Wus_KMNRpnavEQo3CXpIwyJb-3MmQnJkKVasOuOWh',
  expirationTime: null,
  keys: {
    p256dh: 'BOH0dfzN87m3hzgLKZ8qN0YC1unZtBqgIx67X1F_tuyMM7qw7xROc7pR5hExxkW_IUxj0-NE5-ag3TWpKUdalxc',
    auth: 'Gc7gawh0c7hRWKJRcMAORA',
  },
};

const yuri = {
  endpoint:
    'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABj0lMjt0M3CzKWT-cxqmPJFWOBuM6bIOok8YVWBHVgyFrLFUv0BLUMb5NblBrPOkbAe2T1OjtrNytJgTaqHJsSFlsuamW2JHQREIdl9cFYaonyXnqnR4pMj8eAdMzBi29biR77xPleGn-h7jmIwPdacrWilLPosZ8J85XWPW5v6Dwf7K4',
  expirationTime: null,
  keys: {
    p256dh: 'BP1N3bjN99eD8Zp9BzNFbGiujeRSKaa98MlHwN0o2li_eqdVymebST6I0PR-UqhGoTIEjmV7cYwxBoG9QgJCnIg',
    auth: '9XAAf7FETgtkltjHGrfLsw',
  },
};

(async () => {
  const subscription = anggi;
  // Create payload
  const data = {
    title: 'test web push 2',
    options: {
      body: 'test body 2',
      requireInteraction: true,
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
  };
  const payload = JSON.stringify(data);
  console.log("masuk")
  // Pass object into sendNotification
  webpush.sendNotification(subscription, payload).catch((err) => console.error(err));
})();