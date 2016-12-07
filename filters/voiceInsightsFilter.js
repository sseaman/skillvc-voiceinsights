var VoiceInsights = require('voice-insights-sdk');

function VoiceInsightsFilter() {}

VoiceInsightsFilter.prototype = {

	executePost : function(event, context, svContext) {
		var res = context.getResponse();
		if (res && res.response) {
			VoiceInsights.track(
				event.request.intent.name, 
				event.request.intent.slots, 
				res.response.outputSpeech.text);
		}
		svContext.filterChainCallback.success();
	}

}

module.exports = VoiceInsightsFilter;