// Gives functionality to the addItem button
const addItem = () => {
	var item = document.getElementById("item");

	// Checks that the input for item is not empty
	if (item.value) {
		// Create a <li> node to add to the shopping list
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(item.value));

		// Add <li> to shopping list
		var shoppingList = document.getElementById("shopping-list");
		shoppingList.appendChild(li);

		// Resets the item input
		item.value = "";
	}
};

const clearList = () => {
	var shoppingList = document.getElementById("shopping-list");

	// Removes items if there are any
	while (shoppingList.firstChild) {
		shoppingList.removeChild(shoppingList.firstChild);
	}
};

const addDate = () => {
	const d = new Date();
	document.getElementById("date").innerHTML = " for 19/2";
};
