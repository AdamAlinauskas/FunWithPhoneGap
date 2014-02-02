document.addEventListener("deviceready", StartApp, false);


function StartApp(){
	
	$().ready(function(){
		$("#addItem").click(function(e){
			e.preventDefault();
			var todoText = $("#todo-text").val();

			if(todoText == "" || todoText == null)
				return;

			$("#items-todo").append("<li class='todo-item'>"+todoText+"</li>");
			 $("#todo-text").val("");
			});

		$(document).on("click",".todo-item",function(){
			if($(this).hasClass("todo-item-done"))
				$(this).removeClass("todo-item-done");
			else
				$(this).addClass("todo-item-done");
		});


		});
	
}