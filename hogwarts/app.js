if (typeof jQuery == "undefined") {
  console.log("oops! I still have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}

$(() => {
  const $container = $("#container");
  console.log($container);

  const $h1 = $("<h1>").text("Hogwarts");
  console.log($h1);
  $container.append($h1);

  const $h2 = $("<h2>").text("Taylor Murdock");
  const $h3 = $("<h3>").text("Ravenclaw");
  const $h4Pet = $("<h4>").text("Opal").addClass("pet toad");
  const $h4Wand = $("<h4>").text("Elder Wand");

  $container.append($h2, $h3, $h4Pet, $h4Wand);

  const $ul = $("<ul>").attr("storage", "trunk");

  const $li1 = $("<li>").text("Butter Beer");
  const $li2 = $("<li>").text("Invisibility Cloak").addClass("secret");
  const $li3 = $("<li>").text("Magic Map").addClass("secret");
  const $li4 = $("<li>").text("Time Turner").addClass("secret");
  const $li5 = $("<li>").text("Leash").addClass("pet toad");
  const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");

  $ul.append($li1, $li2, $li3, $li4, $li5, $li6);
  $container.append($ul);

  const $h5 = $("<h5>").text("Spring 2017"); // Add an h5 element with the text "Spring 2017"
  $container.prepend($h5); // Add it above the table

  const $table = $("<table>"); // Create the table element
  const $thead = $("<thead>"); // Create the thead element

  const $th1 = $("<th>").text("Day"); // Create the first th element with the text "Day"
  const $th2 = $("<th>").text("Classes"); // Create the second th element with the text "Classes"

  $thead.append($th1, $th2); // Append th elements to the thead element
  $table.append($thead); // Append thead element to the table element

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const classes = [
    "Herbology",
    "Divination",
    "History of Magic",
    "Charms",
    "Potions",
    "Transfiguration",
    "Defense Against the Dark Arts",
    "Quidditch practice",
  ];

  for (let i = 0; i < days.length; i++) {
    const $tr = $("<tr>"); // Create a tr element for each day
    const $td1 = $("<td>").text(days[i]); // Create the td element for the day
    const $td2 = $("<td>").text(classes[i]); // Create the td element for the classes

    $tr.append($td1, $td2); // Append td elements to the tr element
    $table.append($tr); // Append tr element to the table element
  }

  $container.append($table); // Append the table to the container div
});
