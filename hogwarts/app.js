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

  const $ul = $("<ul>").attr("storage", "trunk"); // Create unordered list with attribute "storage" and value "trunk"

  const $li1 = $("<li>").text("Butter Beer");
  const $li2 = $("<li>").text("Invisibility Cloak").addClass("secret"); // Add class "secret" to the list item
  const $li3 = $("<li>").text("Magic Map").addClass("secret");
  const $li4 = $("<li>").text("Time Turner").addClass("secret");
  const $li5 = $("<li>").text("Leash").addClass("pet toad"); // Use the same class as your pet
  const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");

  $ul.append($li1, $li2, $li3, $li4, $li5, $li6); // Append list items to the unordered list
  $container.append($ul); // Append the unordered list to the container div
});
