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

  $container.append($h1); //appending h1 to container

  const $h2 = $("<h2>").text("Taylor Murdock"); //h2 element with your name
  const $h3 = $("<h3>").text("Ravenclaw"); //h3 element with your house
  const $h4Pet = $("<h4>").text("Opal").addClass("pet toad"); //pets name and class

  const $h4Wand = $("<h4>").text("Elder Wand"); //name of my wand
  $container.append($h2, $h3, $h4Pet, $h4Wand); //appending these items to the container just like we did with h1
});
