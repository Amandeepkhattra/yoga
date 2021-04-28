
// Schedule Page
  $( function() {
    $( "#datepicker" ).datepicker();   // Select the date weekly for your Schedule
    //$("#datepicker").datepicker("show");
  } );



// Tabs Code
 $( function() {
    $( "#tabs" ).tabs();
  } );


 

// JSON files in trainers.html
		$(document).ready(function(){
			$.getJSON("team.json", function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$("#team").append(
                            /*"Name: " + value.image + "<br>" +*/
                             "<img src=" +  value.image +">" + "<br>" +
							  "<strong>" + value.full_name + "</strong>" + "<br>" +
							  "<strong>" + value.title + "</strong>" +  "<br>" +
							    "" + value.tag_line + "<br>" +
                                "<p></p>"
						);
					});
				}); 
			});
		});



