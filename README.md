Link to online editor : https://codesandbox.io/s/cipta2021frontendbasics-zpo1r

# CIPTA 2021 Tech Workshop (Frontend Basics)

You have been tasked to finish a shopping list website passed on to you from an intern. Your tasks have been listed below.

1. Try using the website to ensure that it is functionally correct.
2. Complete the following sections :

### HTML

1. The header for our website seems a bit too small. **Change it to the biggest size header**.
2. Comments are an important part of writing any code, it helps to communicate with other programmers. **Change the TODO comment to reflect changes that you have made to the title**.
3. We want to specify that the input box is for the item that will be added to the shopping list. **Using the HTML label tag, add a label for the input box. Take a look at this [reference](https://www.w3schools.com/tags/tag_label.asp) on how to do it.**
4. There is an unnamed button below the input box. **What does it do? Can you name it appropriately?**

### CSS

1. On the first line of the style.css file, it is specified that the body should have a light sky blue background. **Why is this not working? Can you fix it?** (Tip: The problem is with the CSS selector. Take a look at [this reference](https://www.w3schools.com/CSS/css_selectors.asp).)
2. The alignment and color of our header reduces readability. **Align the header to the center and change its color to a more readable one**.
3. The item input box seems a bit small, what if someone wanted to add "red cabbage" to their shopping list? **Can you increase the width of the item input box?** (The width unit we are currently using is pixel, more units can be found [here](https://www.w3schools.com/CSSref/css_units.asp).)
4. When we hover over a button, the pointer cursor appears. We can further enhance the UI by adding a simple visual effect of changing the font color when hovering. **Using the hover selector documented [here](https://www.w3schools.com/cssref/sel_hover.asp), change the font color of the buttons to red**.

### Javascript

To add functionality to the webpage, we make use of Javascript events which essentially triggers some execution. In our example, if the add button is clicked, an item will be added to the shopping list.

It's a good idea to familiarise yourself with [Javascript basics](https://www.w3schools.com/js/) and the [HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) (Document Object Model) before attempting this section.

1. Take a look at the function _addDate_ in script.js, it changes the content of the element with ID date in the DOM. It is currently set to always use 19/2, this is clearly not practical. **Using the predefined Date class in Javascript, change the implementation of _addDate_ so that it will always use the correct date.**

> **Want to learn more? Try [FreeCodeCamp](https://www.freecodecamp.org) !**
