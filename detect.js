var content = '';
var bck = chrome.extension.getBackgroundPage();

chrome.webRequest.onCompleted.addListener(function(vars){
	bck.console.log(vars.url);
	$.get(vars.url + '?is_just_testing_yolo', function(data) {
		data = $('<div />').html(data.replace(/\s*\(.*?\)\s*/g, '').replace(/\s*\&.*?\;\s*/g, '')).html();
		bck.console.log(data);
		content = $.xml2json(data);
		bck.console.log(content);
	}, 'html');
}, {
    urls: ["http://scormplayer.cl7.noordhoff.nl/content/*/*/extract/*/nl/xml/data*.xml"]
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	if(message.method == 'getContent'){
		sendResponse(content);
		return true;
	}
});
