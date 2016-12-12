# SkillVC - Voice Insights plugin

The (Voice Insights)[http://voicelabs.co/] plugin for SkillVC integrates Voice Insights Skill Analytics library directly into
your skill without requiring any changes to your code.

To use this plugin you will need an account with Voice Labs [http://voicelabs.co/] as well as your application token.

## Installation
-----
To install the Voice Insights plugin, use SkillVC's plugin installation system from your projects root directory:

     ./node_modules/.bin/skillvc install . skillvc-voiceinsights --ignore_errors

During installation you will be prompted for the application token.  Enter it 
or edit the ./sessionHandlers/voiceInsightsSessionHander.js file later to enable the plugin with 
(Voice Labs)[http://voicelabs.co/].

NOTE: --ignore_errors is required as Voice Insights uses a deprecated library that causes a warning that forces SkillVC's plugin system to exit
prematurely.