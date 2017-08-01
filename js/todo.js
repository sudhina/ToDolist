$(document).ready(function(){

	$("#addItem").on('click',addItem);
	$('#todoc').on('change','.complteItem',completeTtem);
	$('#todoc').on('click','.deleteItem',deleteItem);
	$('#newToDO').on('keypress',function(event){
		if(event.which==13){
			addItem();
			event.preventdDefault();
		}
	});


		function addItem(){
	
		var newToDotext=$('#newToDO').val();
	
		$('#todoc').append('<li><input class="complteItem" type="checkbox">'+ newToDotext + '<span class ="glyphicon glyphicon-trash deleteItem"></span><hr></li>');
		$('#newToDO').val(""); 


	};
function deleteItem(){
$(this).parent().remove();
};
function completeTtem(){
	$(this).parent().toggleClass('done');

};
	
});