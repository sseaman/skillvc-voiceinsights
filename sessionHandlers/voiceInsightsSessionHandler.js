var VoiceInsights = require('voice-insights-sdk');

function VoiceInsightsSessionHandler() {}

VoiceInsightsSessionHandler.prototype = {

	sessionStart : function(event, context, svContext) {
		VoiceInsights.initialize(event.session, 'VI_APP_TOKEN');
	}

}

module.exports = VoiceInsightsSessionHandler;