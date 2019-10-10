/*
        Part 3 - Practice with Arrays
*/


/*
1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie 
in your array.
*/
var movieArr1 = ["AnotherLife", "Birdbox", "Transcendence", "Leila", "EatPraylove"];

document.write("Part 1:" + "<br>");
document.write("Second movie in my array of movies is '" + movieArr1[1] + "'" + "<br><br>");



/*
2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
Then, use the console to display the first movie in your array.
*/

//Function constructor method to declare array
var movies = new Array(5);

movies[0] = "AnotherLife";
movies[1] = "Birdbox";
movies[2] = "Transcendence";
movies[3] = "Leila";
movies[4] = "EatPraylove";

document.write("Part 2:" + "<br>");
document.write("First movie is '" + movieArr1[0] + "'" + "<br><br>");

/*
3. Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to 
display the length of the array. You should now have 6 total movies stored in the array.
*/

movies.splice(2, 0, "TallGirl");
document.write("Part 3:" + "<br>");
document.write(movies + "<br>");
document.write("Total length of array is: " + movies.length + "<br><br>");

/*
4. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index 
in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie 
in the array. Use the console to display the contents of the array.
*/

var movies4 = ["AnotherLife", "Birdbox", "Transcendence", "Leila", "EatPraylove"];

delete movies4[0];
document.write("Part 4:" + "<br>");
document.write(movies4 + "<br><br>");


/*
5. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index 
in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and 
display each movie within the console window.
*/

var movies5 = ["AnotherLife", "Birdbox", "Transcendence", "Leila", "EatPraylove", "Sholay", "Happy"];
var i;

document.write("Part 5:" + "<br>");
for (i = 0; i < movies5.length; i++) {
    document.write(movies5[i] + "<br>");
}
document.write("<br>");

/*
6. Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within 
the console window.
*/

var index;

document.write("Part 6:" + "<br>");
for (index in movies5) {
    document.write(movies5[index] + "<br>");
}

document.write("<br>");

/*
7. Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the 
console window in a sorted view.
*/

document.write("Part 7- Sorted view:" + "<br>");

movies5.sort();

for (index in movies5) {
    document.write(movies5[index] + "<br>");
}
document.write("<br>");

/*
8. Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the 
array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s 
formatted to look like this (note the spacing, you must include that too):

Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
…
*/

var leastFavMovies = ["Romeo", "Juiet", "Sad"];

document.write("Part 8:" + "<br>");
document.write("Movies I like:" + "<br><br>");
for (i = 0; i < movies5.length; i++) {
    document.write(movies5[i] + "<br>");
}

document.write("<br> Movies I regret watching:" + "<br><br>");
for (i = 0; i < leastFavMovies.length; i++) {
    document.write(leastFavMovies[i] + "<br>");
}
document.write("<br>");

/*
9. Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array 
called movies. Use the console window to display the list in reverse sorted order.
*/

var movies9 = movies5.concat(leastFavMovies);

movies9.reverse().sort();

document.write("Part 9:" + "<br>");
for (i = 0; i < movies9.length; i++) {
    document.write(movies9[i] + "<br>");
}
document.write("<br>");

/*
10. Copy the code from step 9. Use an array function to return just the last item in the array and display it 
within the console window.
*/

document.write("Part 10:" + "<br>");
document.write(movies9[movies9.length-1] + "<br>");