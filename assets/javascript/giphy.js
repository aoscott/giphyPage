// By setting this as a global variable you set yoruself up for finnicky bugs caused by variable collisisons.
// Since you can always derive this value from within your click handlers, I'd suggest only defining it there.
// var getPresident = "";

		$("#addPresident").on("click", function(event) {
			event.preventDefault();

			// I know that indentation can seem like a silly thing to care about, but I urge you to pay close attention 
			// to it. A consistently indented file is much easier to visually parse through and understand.
			var getPresident = $("#findPresident").val().trim();

			// You generally want to keep your html as simple as possible. In this case,
			// that means you don't need to make a paragraph tag to contain the button.
			// You can just have the button 👌
			// var president = $("<p>");

			// president.attr("id", "item-");
			// president.append(+ getPresident);

			// You want your variable names to describe what the variable represents
			// In this case this is a button you're creating, so naming it presidentGif
			// is rather misleading.
			var presidentButton = $("<button>");
			presidentButton.text($("#findPresident").val())

			presidentButton.attr("president", getPresident);

			// president = president.prepend(presidentGif);


			$("#buttons").prepend(presidentButton);
			// Good job resetting the state of the input 🙌
			$("#findPresident").val("");
	
		});

				// Setting a click handler inside of a global click handler will cause multiple click handlers to be created for the 
				// same element which ends up executing the same handler multiple times for a single click.
				// $(document.body).on("click", function() {

					// I wasn't entirely sure what purpose this was serving and everything seemed to work without it, so I just commented it out.
					// var presidentNumber = $(this).attr("data-PresidentImage");

					// $("#item-" + presidentNumber).remove();


					$("#buttons").on("click", "button", function() {
						var getPresident  = $(this).attr("president");
						var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + getPresident +
						 "&api_key=dc6zaTOxFJmzC&limit=10";

						$.ajax({
							url: queryURL,
							method: "GET"
						})
						.done(function(response) {
							var results = response.data;

							// emptying out the gif container before adding new ones prevents the page from getting really really large with a ton of gifs
							$("#gifs-appear-here").empty();

							// This gif looping logic was spot on!
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
				// });