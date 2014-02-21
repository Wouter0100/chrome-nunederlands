var opdracht = ((typeof exerciseEABABA !== 'undefined') ? exerciseEABABA : null);

if(opdracht != null) {

    var textbox = $('textarea#EABABABA');

    if(textbox.length != 0) {
        textbox.val(opdracht.items[0].targetText.split('\n\n')[1]);

        opdracht.itemTextSelected(opdracht.getItem(textbox.attr("id")), textbox.val());

	$('.okBtn').click();
    }else{
        opdracht.showCorrectAnswer();

	$('.selCorrect').removeClass('selCorrect').children('.sc').click();
    }

    //$('.okBtn').removeClass('inactive');
}