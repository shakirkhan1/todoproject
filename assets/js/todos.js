/*****************************/
/* THIS IS A                 */
/*     SIMPLE TODO           */
/*       LIST PROJECT        */
/*         USING HTML,CSS,JS */
/*****************************/

var panel=document.getElementsByClassName("panel");
var acc = document.getElementsByClassName("accordion");
var header=document.getElementById("header");
var body=document.getElementById("bod");
var abt=document.getElementById("abt");

  

abt.addEventListener("click",function(){
	openNav();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




// below code is to toggle the list menu
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        	$(panel).fadeOut(500);
            panel.style.display = "none";
            this.textContent="Show List";
        } else {
        	 this.textContent="Hide List";
        	$(panel).fadeIn(500);
            panel.style.display = "block";
        }
       
    });
}
             // CheckOff clicked todo's

$("ul").on("click","li",function(){

	$(this).toggleClass("completed");

	//2nd method to do above is :

	// if($(this).css("color") === "rgb(128, 128, 128)")
	// {
 //     $(this).css({
	// 	color:"black",
	// 	textDecoration:"none"
	// });
	// }
	// else
	// {
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// });
	// }
	
});

            // to delete clicked todo's

$("ul").on("click","span",function(event){
	// we use parent() in order to delete whole line of todolist which is clicked
	// that particular li will be deleted instead of only span
$(this).parent().fadeOut(500,function(){
	$(this).remove();
	});
	event.stopPropagation();
});


           // to  input new todo to todlist

$("input[type='text']").keypress(function(event){

	//on pressing enter-key
if(event.which === 13)
   {
	if($(this).val()!=="")
	{

	 // var d = new Date();
	 //document.getElementById("demo").innerHTML = d.toDateString();

	 //to get current dd//mm/yr
	  var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
      var x=day + "/" + month + "/" + year;

     var todotext= $(this).val();//.val() act as getter
	 $(this).val("");//.val() act as setter
	 $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todotext +"  <small class='right'>"+x+"</small></li>");
	}
	else
	{
      alert("!!Oops ,please enter some text!!")
	}
    }
});



// if header is click the its color will get changed
header.addEventListener("click",function(){
	          var colo=randomcolor();
              header.style.backgroundColor=colo;
              body.style.backgroundColor=randomcolor();
});

function randomcolor(){
   // generate random numbers for rgb i.e. red graan blue between 0 - 255
   var r=Math.floor(Math.random() * 256);
   var g=Math.floor(Math.random() * 256);
   var b=Math.floor(Math.random() * 256);

   return "rgb("+r+", "+g+", "+b+")"; 
}
