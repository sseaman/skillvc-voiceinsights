var prompt = require('prompt');

module.exports = {
	
	preInstall : function(sourceDir, destDir) { },

	postInstall : function(sourceDir, destDir) {
		return new Promise(function(resolve, reject) {
			prompt.start();

			prompt.get(
				[
					{
						name		: 'applicationToken',
						description : 'Voice Insights Application Token',
						type		: 'string',
						message		: 'If you do not know the application token now, you will need to manually edit it in the voiceInsightsSessionHandler.js file',
						required	: false
					}
				], 
				function (err, result) {
					// so many exit points... ugg...
					if (!err) {
						if (result.applicationToken.length > 0) {
							var fs = require('fs')
							var path = require('path');
							var file = path.join(destDir,'sessionHandlers/voiceInsightsSessionHandler.js');

							fs.readFile(file, 'utf8', function (err,data) {
								if (!err) {
									var replaced = data.replace(/VI_APP_TOKEN/g, result.applicationToken);

									fs.writeFile(file, replaced, 'utf8', function (err) {
									 	if (err) {
											console.log('Error reading voiceInsightsSessionHandler with id. Error: '+err);
											reject(err);
										}
										else {
											resolve();
										}
									});
								}
								else {
									console.log('Error reading voiceInsightsSessionHandler for modification. Error: '+err);
									reject(err);
								}
							});
						}
						else {
							console.log('To set the Application Token you will need to edit /sessionHandlers/voiceInsightsSessionHandler.js');
							resolve();
						}
					}
					else {
						console.log('Error processing Application Token. Error: '+err);
						reject(err);
					}
				}
			);
		});
	}
};