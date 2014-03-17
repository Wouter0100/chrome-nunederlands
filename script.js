var opdracht = ((typeof exerciseEABABA !== 'undefined') ? exerciseEABABA : null);

if(opdracht != null) {

	console.log(opdracht.type);

	switch(opdracht.type) {
			
		case EX_TEXTENTRY:
			var textbox = $('textarea#EABABABA');
			
			textbox.val(opdracht.items[0].targetText.split('\n\n')[1]);
			opdracht.itemTextSelected(opdracht.getItem(textbox.attr("id")), textbox.val());
			$('.okBtn').click();
			
			break;
		
		case EX_DRAGNSORT:
		case EX_DRAGCONTAINER:
		case EX_DRAGNDROPSTACKSENTENCE:	
		case EX_DRAGNSTACK:
		case EX_DRAGNDROP:
		case EX_TEXTENTRYDROPLIST:
		case EX_CONNECTION:
		case EX_PAIRS:
		case EX_SMARTASSET:
		case EX_SINGLECHOICE:
		case EX_MULTIPLECHOICE:
		case EX_TRUEORFALSE:
		case EX_SHAPECLICK:
		default:
			opdracht.showCorrectAnswer();

			$('.selCorrect').removeClass('selCorrect').children('.sc').click();
			break;
			
	}
}
