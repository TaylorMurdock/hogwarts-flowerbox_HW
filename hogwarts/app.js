// Check if jQuery is properly linked
if (typeof jQuery == "undefined") {
  console.log("oops! I still have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}

// Execute the code once the DOM is ready
$(() => {
  const $container = $("#container"); // Query for the div with the id "container" and assign it to the variable $container
  console.log($container); // Log $container to the console

  const $h1 = $("<h1>").text("Hogwarts"); // Create an <h1> element with the text "Hogwarts" and assign it to the variable $h1
  console.log($h1); // Log $h1 to the console
  $container.append($h1); // Append $h1 to $container

  const $h2 = $("<h2>").text("Taylor Murdock"); // Create an <h2> element with the text "Taylor Murdock" and assign it to the variable $h2
  const $h3 = $("<h3>").text("Ravenclaw"); // Create an <h3> element with the text "Ravenclaw" and assign it to the variable $h3
  const $h4Pet = $("<h4>").text("Opal").addClass("pet toad"); // Create an <h4> element with the text "Opal" and classes "pet" and "toad", and assign it to the variable $h4Pet
  const $h4Wand = $("<h4>").text("Elder Wand"); // Create an <h4> element with the text "Elder Wand" and assign it to the variable $h4Wand

  $container.append($h2, $h3, $h4Pet, $h4Wand); // Append $h2, $h3, $h4Pet, $h4Wand to $container

  const $ul = $("<ul>").attr("storage", "trunk"); // Create a <ul> element with the attribute "storage" and value "trunk" and assign it to the variable $ul

  const $li1 = $("<li>").text("Butter Beer"); // Create a <li> element with the text "Butter Beer" and assign it to the variable $li1
  const $li2 = $("<li>").text("Invisibility Cloak").addClass("secret"); // Create a <li> element with the text "Invisibility Cloak" and class "secret" and assign it to the variable $li2
  const $li3 = $("<li>").text("Magic Map").addClass("secret"); // Create a <li> element with the text "Magic Map" and class "secret" and assign it to the variable $li3
  const $li4 = $("<li>").text("Time Turner").addClass("secret"); // Create a <li> element with the text "Time Turner" and class "secret" and assign it to the variable $li4
  const $li5 = $("<li>").text("Leash").addClass("pet toad"); // Create a <li> element with the text "Leash" and classes "pet" and "toad" and assign it to the variable $li5
  const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans"); // Create a <li> element with the text "Bertie Bott's Every Flavor [Jelly] Beans" and assign it to the variable $li6

  $ul.append($li1, $li2, $li3, $li4, $li5, $li6); // Append $li1, $li2, $li3, $li4, $li5, $li6 to $ul
  $container.append($ul); // Append $ul to $container

  const $h5 = $("<h5>").text("Spring 2017"); // Create an <h5> element with the text "Spring 2017" and assign it to the variable $h5
  $container.prepend($h5); // Prepend $h5 to $container

  const $table = $("<table>"); // Create a <table> element and assign it to the variable $table
  const $thead = $("<thead>"); // Create a <thead> element and assign it to the variable $thead

  const $th1 = $("<th>").text("Day"); // Create a <th> element with the text "Day" and assign it to the variable $th1
  const $th2 = $("<th>").text("Classes"); // Create a <th> element with the text "Classes" and assign it to the variable $th2

  $thead.append($th1, $th2); // Append $th1, $th2 to $thead
  $table.append($thead); // Append $thead to $table

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; // Create an array of days
  const classes = [
    "Herbology",
    "Divination",
    "History of Magic",
    "Charms",
    "Potions",
    "Transfiguration",
    "Defense Against the Dark Arts",
    "Quidditch practice",
  ]; // Create an array of classes

  for (let i = 0; i < days.length; i++) {
    const $tr = $("<tr>"); // Create a <tr> element and assign it to the variable $tr
    const $td1 = $("<td>").text(days[i]); // Create a <td> element with the text from the days array and assign it to the variable $td1
    const $td2 = $("<td>").text(classes[i]); // Create a <td> element with the text from the classes array and assign it to the variable $td2

    $tr.append($td1, $td2); // Append $td1, $td2 to $tr
    $table.append($tr); // Append $tr to $table
  }

  $container.append($table); // Append $table to $container

  $h4Wand.remove(); // Remove $h4Wand from the DOM

  $li1.remove(); // Remove $li1 from the DOM

  const $newWand = $("<h4>")
    .text("Phoenix Feather Wand")
    .css("color", "indigo"); // Create a new <h4> element with the text "Phoenix Feather Wand" and CSS property "color" set to "indigo" and assign it to the variable $newWand
  $h4Pet.after($newWand); // Insert $newWand after $h4Pet

  $h4Pet.detach(); // Detach $h4Pet from the DOM
  $ul.append($li5); // Append $li5 to $ul

  $ul.children(".pet").detach(); // Detach children with class "pet" from $ul
  $container.append($h4Pet); // Append $h4Pet to $container

  $(".secret").hide("slow").delay(2000).show("slow"); // Hide elements with class "secret" slowly, delay for 2000 milliseconds, then show them slowly

  $(".pet.toad .leash").addClass("cabbage"); // Add class "cabbage" to elements with class "leash" that are children of elements with classes "pet" and "toad"

  $h5.text("Fall 2018"); // Set the text of $h5 to "Fall 2018"

  const $newLi = $("<li>").text("Butter Beer"); // Create a new <li> element with the text "Butter Beer" and assign it to the variable $newLi
  $ul.prepend($newLi); // Prepend $newLi to $ul

  $ul.attr("storage", "chest"); // Set the "storage" attribute of $ul to "chest"
});
