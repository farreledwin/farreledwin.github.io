var webPush = require('web-push');
const vapidKeys = {
	publicKey: 'BO8IBVulREJc9ABEs-M2zIs2Gja3BQXj__Dc3WxhLXwXORZxFB01aGojXmTdspnPj87vptwvncDya0jXUq58Gtc',
	privateKey: 'iqHp0WQxA4Yniw3pkziK2S5kTnxacpooK0uZO9fTqQk'
};

webPush.setVapidDetails('mailto:example@yourdomain.org', vapidKeys.publicKey, vapidKeys.privateKey);
var pushSubscription = {
	endpoint:
		'https://fcm.googleapis.com/fcm/send/dz-gVXxwaag:APA91bHhmWqz3S7lBzNHJtEVTaiEYsa9RYMRubsGpj4pciN2CamMe_j7-tMLiFAfz_pS2FeRn2LM4XylUNE6gEOoJlMGnVjWMn8_wjABsjcUthFAsCIvXnzNp30dIVxJ3OrwFFme8WsA',
	keys: {
		p256dh: 'BDpdbBPyRkNYh61BFQWEMmLubJlrZrGxWyphMEZcbNvBf1Jf8zIoVGsHwBXUjfggpP0n/300Fs6oHwdMnmzCX6o=',
		auth: 'CIvpsKljgVjJaL8ctmhrJA=='
	}
};
var payload = 'Welcome To My Website!';
var options = {
	gcmAPIKey: '560335508474',
	TTL: 60
};
webPush.sendNotification(pushSubscription, payload, options);
