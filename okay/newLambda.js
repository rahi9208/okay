let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.get({
		TableName: 'DummyUsers',
		Key: { 'Email': 'hello' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	callback(null, 'Successfully executed');
}