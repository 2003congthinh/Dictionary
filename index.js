const word = 
["Abdomen", "Abroad", "Above/Over", "Ally", "Apricot", "Architect", "Artist", "Atmosphere", "Attraction", "Avocado",
 "Banana", "Baker", "Back", "Barber", "Bathroom", "Beard", "Bear", "Behind", "Best friend", "Berry", "Biology", 
 "Bird", "Blackboard", "Blazer", "Blouse", "Blue", "Book", "Boyfriend", "Break", "Bricklayer", "Brother", 
 "Caterpillar", "Cat", "Celsius", "Chair", "Chalk", "Cheese", "Cheeseburger", "Cheetah", "Chicken nugget", 
 "Childhood", "Chipmunk", "Chin", "Chocolate", "Chorus", "Chest", "Cinema", "Classmate", "Classroom", "Climate", 
 "Clock", "Close friend", "Closet", "Cloth", "Cloudy", "Cobra", "Coffee", "Cold", "Colleague", "College", 
 "Computer room", "Coral", "Cousin", "Crew", "Crocodile", "Cuisine", "Dad", "Date", "Degree", "Desk", "Destination",
  "Dessert", "Dinosaur", "Door", "Dress", "Drink", "Eagle", "Ear", "Earth", "Eel", "Elephant", "Enginner", "English",
   "Exercise", "Eye", "Face", "Factory worker", "Falcon", "Family", "Father", "Favorite", "Festival", "Fish", 
   "Flat cap", "Floor", "Food", "Football", "Forest", "Forever", "Friendship", "Frog", "Fruit", "Fry", "Garden", 
   "Gazelle", "Geography", "Giraffe", "Girlfriend", "Glass", "Glove", "Gloves", "Goal", "Grandfather", "Grandmother",
    "Gray", "Greeting", "Guitar", "Gym", "Head teacher", "Health", "Hide-and-seek", "History", "Holiday", "Home", 
    "Homework", "Hot", "Hot dog", "Hyena", "In front of", "Insect", "Inside", "Jacket", "Jellyfish", "Jigsaw", 
    "Journey", "Juice", "Kangaroo", "Kiwi fruit", "Kite", "Knee", "Koala bear", "Lamp", "Language", "Laptop", 
    "Lawyer", "Leaf", "Lemonade", "Library", "Lion", "Lizard", "Lobster", "Love", "Lunch", "Lung", "Makeup", 
    "Marker", "Maths", "Me", "Meeting", "Memory", "Mirror", "Mistake", "Mobile phone", "Mom", "Monitor", "Moon", 
    "Mother", "Mountain", "Mouse", "Mouth", "Movie", "Mug", "Napkin", "Navel", "Neck", "Near/Close to", "Necktie", 
    "Neighbor", "Newspaper", "Notebook", "Old friend", "Opposite", "Orange", "Ostrich", "Over", "Owl", "Pastry", 
    "Peach", "Pear", "Pencil", "Pen", "Penguin", "Pepsi", "Phone", "Physics", "Pillow", "Pizza", "Pomegranate", 
    "Pupil", "Rain", "Rainbow", "Raincoat", "Reading", "Refrigerator", "Resort", "Restaurant", "Rhinoceros", "Rug", 
    "Salad", "Sandwich", "School", "Science", "Sea", "Seashell", "See-saw", "Sister", "Sink", "Skip", 
    "Skipping rope", "Skiing", "Sky", "Slide", "Slippers", "Slope", "Soda", "Soft drink", "Son", "Soup", "Soy sauce",
     "Spectacle", "Sport", "Spring", "Squid", "Stadium", "Stairs", "Star", "Starfruit", "Station", "Step", "Stomach",
    "Stove", "Strawberry", "Student", "Study", "Sun", "Sunny", "Sunrise", "Sunset", "Swan", "Sweater", "Swimming",
    "Swing", "Sword", "T-shirt", "Table", "Tag", "Tarantula", "Teacher", "Tea", "Test", "Textbook", "Throat", 
    "Thumb", "Tic-tac-toe", "Tie", "Tiger", "Toad", "Toilet", "Tongue", "Top", "Top hat", "Touch", "Travel", 
    "Tree", "Trip", "Trousers", "Truck", "Tub", "Tug-of-war", "Turtle", "Umbrella", "Under", "Uncle", "Village", 
    "Visit", "Volcano", "Washing machine", "Water", "Weather", "Wedding", "Weekend", "White", "Whiteboard", 
    "Wife", "Window", "Wine", "Winter", "Wood", "Woodpecker", "Work", "Worker", "World", "Wristwatch", "Yellow", "Zebra"];
// Function to pronounce a word
function pronounceWord(word) {
    // Create a new SpeechSynthesisUtterance object
    var utterance = new SpeechSynthesisUtterance(word);

    // Use the default speech synthesis voice
    utterance.voice = speechSynthesis.getVoices()[2];

    // Speak the word
    speechSynthesis.speak(utterance);
}
for(let i = 0; i < word.length; i++) {
var div = document.createElement("div");
var button = document.createElement("button");
div.id = word[i];
div.className = "word"
div.innerHTML = word[i];
button.innerHTML = "Pronounciations";
button.className = "button";
button.id = word[i];
// Add an event listener to the button to call the pronounceWord function
button.addEventListener("click", function () {
    pronounceWord(word[i]);
});
document.getElementById("content").appendChild(div).appendChild(button);
}
