var getPresident = "";
		// 
		$("#addPresident").on("click", function(event) {
			event.preventDefault();

		
			 getPresident = $("#findPresident").val().trim();

			
					var president = $("<p>");

					president.attr("id", "item-");
					president.append(+ getPresident);


					var presidentGif = $("<button>");
					presidentGif.text($("#findPresident").val())

					presidentGif.attr("dataPresidentImage");
		

					president = president.prepend(presidentGif);

				
					$("#thePresident").append(president);

					$("#findPresident").val("");
	
				});

				$(document.body).on("click", function() {

			
					var presidentNumber = $(this).attr("data-PresidentImage");

					$("#item-" + presidentNumber).remove();


					$("button").on("click", function() {
					var getPresident  = $(this).attr("president");
					var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + getPresident +
					 "&api_key=dc6zaTOxFJmzC&limit=10";

					$.ajax({
							url: queryURL,
							method: "GET"
						})
						.done(function(response) {
							var results = response.data;

							for (var i = 0; i < results.length; i++) {
								var gifDiv = $("<div class='item'>");

								var rating = results[i].rating;

								var p = $("<p>").text("Rating: " + rating);

								var presidentImage = $("<img>");
								presidentImage.attr("src", results[i].images.fixed_height.url);

								gifDiv.prepend(p);
								gifDiv.prepend(presidentImage);

								$("#gifs-appear-here").prepend(gifDiv);
							}
						});
				});
				});