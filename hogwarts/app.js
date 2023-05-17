if (typeof jQuery == "undefined") {
  console.log("oops! I still have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}

$(() => {
  const $container = $("#container"); //Query for your div with the id of container and set it to a variable named $container
  console.log($container);

  const $h1 = $("<h1>"); //Create an <h1> element and set it to a variable called $h1
  console.log($h1);

  $h1.text("Hogwarts"); //Add some text inside the h1 element. Example text: 'Hogwarts'
  $container.append($h1);
});
