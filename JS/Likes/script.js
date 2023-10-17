console.log("page loading...");

// define an array 'likes' to store the number of likes for each post
var likes = [9, 12, 9];

// define an array 'spans' to store references to HTML elements with IDs 'post-1, 'post-2' , 'post-3'
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3"),
    
];

// define a function 'like' that increments the like count for a specific post and updates the corresponding HTML element
function like(id) {
    likes[id]++; // incrementation 
    spans[id].innerHTML = likes[id] + "like(s)";
}