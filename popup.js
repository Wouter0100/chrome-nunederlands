var waitTimer;
var items;

chrome.runtime.sendMessage({ method: 'getContent' }, function(content) {
	if (content == '') {
		$('#noDataFound').show();
		$('#dataFound').hide();
	}else{
		$('#noDataFound').hide();
		$('#dataFound').show();
	}
	
	items = content;
});

$(function(){
	$('#inputField').focus().keyup(function(event) {
		var found = 0;
		
		if ($('#inputField').val() != '') {
			$.each(items.item, function(index, value){
				if(value.question.indexOf($('#inputField').val()) !== -1) {
					$('#answerBlock').html('"' + value.question + '" is "' + value.answers.answer[0] + '"');
					console.log(value);
					found++;
				}
			});
		}
		
		if (found == 0) {
			$('#answerBlock').html('Hier zal het antwoord verschijnen..');
		}
	});
});
