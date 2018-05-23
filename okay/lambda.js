let AWS = require('aws-sdk');
const ml = new AWS.MachineLearning();
const ses = new AWS.SES();
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	console.log();
	ddb.put({
		TableName: 'BookingInfoAnomalies',
		Item: {}
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	ml.predict({
		MLModelId: 'ml-DYPsae14K89',
		PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
		Record: {
			kl: ssd
		}
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	ses.sendEmail({
		Destination: {
			ToAddresses: ['kl@kl.com'],
			CcAddresses: ['kl@kl.com'],
			BccAddresses: ['kl@kl.com', 'kl@kl.com']
		},
		Message: {
			Body: {
				Text: {
					Data: ''
				}
			},
			Subject: {
				Data: 'kl'
			}
		},
		Source: 'andun@adroitlogic.com',
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});

	s3.putObject({
		"Body": "kl",
		"Bucket": "batchprocess.bucket",
		"Key": "kl"
	})
		.promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				ETag: "\\"6805f2cfc46c0f04559748bb039d69ae\\"", 
				VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});

	callback(null, 'Successfully executed');
}