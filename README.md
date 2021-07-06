# MyRecipeApp
Using HTML, CSS and JS an user of my app would be able to Add recipes, Search on the list of all recipes add, Delete recipes

This app should satisfy the following requirements:


I. Add recipes that have names and ingredients
Implement the card layout bootstrap component that contains the task information:
* name
* ingredients
* method
* Preparation Time
* cookingTime
* Serves

> #### Tools
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://getbootstrap.com/)
      
    
## Walkthrough

### Step 1: Implement the task Card layout

In this step, we'll create a basic structure of a card with the task's information. This will be used as a template that we will later fill in from our form using javascript. But for now, we will *hardcode* it! 

1. Add a new sample [card](https://getbootstrap.com/docs/4.5/components/card/) to the `index.html`
2. Add field inside the card for the name.
3. Add field inside the card for the list of the ingredients.
4. Add field inside the card for the method.
5. Add field inside the card for Preparation time
5. Add field inside the card for cooking time.
6. Add field inside the card for number of serves.


II. Display a list of all recipes
## Description

For this task, I'll be writing the code to display each of the `TaskManager`'s `recipes` on the page.

## Walkthrough

### Step 1: Using Javascript to Create the Task HTML

> #### Useful Resources for this step
> - [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

In this step, we'll create a function using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to return the HTML for each individual task.

1. In `js/taskManager.js`, above the `TaskManager` class definition, create a new function, `createTaskHtml`. The function should accept the following parameters:
    - `name`
    - `ingredients`
    - `method`
    - `cookingTime`
    - `serves`

2. Within this `createTaskHtml` function, create a string using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), copying across one of your tasks that we *hardcoded* in earlier in task 3 from the `index.html`

   

3. Using the template literal placeholders (`${}`), replace each text section of the task HTML with the correct parameter

4. Return the HTML from the function

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Create a `taskHtml` variable with the result of calling the `createTaskHtml` function, making sure to pass a value for each parameter.
> 2. `console.log()` the `taskHTML` variable
>


### Step 2: The render method

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
> - [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
> - [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
> - [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
> - [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

To display the tasks, we'll be creating a new method on our `TaskManager` class called `render`.

"Render" is a term used in computer science that means to "create a visual reference of". In this step, we are _rendering_ our tasks, so that they are visible on the page.

We can mostly rely on the data stored for each task in the `TaskManager`'s `tasks` property to display the task nicely on the page. The one change we will need to make is to format the `dueDate` of the task so that it is human-readable. To do this, we'll be using JavaScript's `Date` object.

1. In `js/taskManager.js`, within the `TaskManager` class, create a `render()` method. This method does not need any parameters.

2. Create a variable `tasksHtmlList` and assign it an empty array. This will hold the HTML of all the tasks.

3. Loop over the `TaskManager`'s tasks, and for each task:

    1. Store the current task in a variable

   

        **Hint**: Use MDN's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) reference to see what methods are available to format a date. Build a string using string concatenation or template literals. Check the [example/taskManager.js](example/taskManager.js) to see how it can be done if you get stuck.
    
    4. Create a `taskHtml` variable to store the HTML of the current task, by calling the `createTaskHtml` function and using the properties of the current task, as well as the new `formattedDate` variable for the parameters.

    5. `push` the `taskHtml` into the `tasksHtmlList` array.

4. After looping through each task, create a new `tasksHtml` variable (think about your scoping), and set it to a string of HTML of all the tasks by `join`ing the `tasksHtmlList` array together, separating each task's html with a newline.

    **Hint**: `\n` can be used to represent a newline.

5. Make sure the tasks list in `index.html` has an `id` so it can be selected.

6. Select the tasks list element and set its `innerHTML` to the `tasksHtml`.

### Step 3: Calling render

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Now that the `TaskManager` class has a `render()` method, we need to make sure to call it each time a new task is added, so that it is _rendered_ to the page!

1. In `js/index.js`, in the event listener for the `submit` event on the **New Task** form, find the call to the `TaskManager`'s `addTask`.

2. After `addTask` is called, call the `TaskManager`'s `render` method.

## Results

Go ahead and open `index.html` in the browser and add some tasks using the form. You should see each new task populate the task list!



III. Delete recipes

 Deleting Recipes

## Description

Now that we are persisting tasks to `localStorage`, we need a way to delete old tasks so that they don't fill up the list over time.

## Walkthrough

### Step 1: Add A Delete Button to the Task HTML

> #### Useful Resources for this step
> - [Bootstrap Buttons](https://getbootstrap.com/docs/4.5/components/buttons/)

If you haven't already, we'll need to make sure we have a button on each of our tasks to delete the task.

1. In `js/taskManager.js`, find the function `createTaskHtml`.
2. In the returned HTML, add a `button` to delete the task, giving it a class `delete-button` that we will use later to check if the button was clicked.

> #### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Open `index.html` in the browser and create a new task using the form.
>
> **Expected Result**
> You should see tasks you have created now have a "Delete" button.

### Step 2: Create the deleteTask Method on TaskManager

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

Now we'll need a way to delete the task. For this, we'll create a `deleteTask` method on our `TaskManager` class.

In this method, we'll be removing the task from the `this.tasks` array. Interestingly, there is no simple way to remove an element from an array. Instead, we can tackle this problem in one of two ways:

- Use the `slice()` method to remove a section of the array
- Create a new array **without** the elements we want removed included.

For this step, we'll go with the second way. It's more _explicit_ and clear.

1. In `js/taskManager.js`, create a `deleteTask` method on the `TaskManager` class. It should take one parameter, `taskId`, the id of the task we want to be deleted.
2. In the `deleteTask` method, create a new variable `newTasks` and set it to an empty array.
3. Loop over the tasks, and for each iteration:
    - Get the current task in the loop, store it in a variable `task`.
    - Check if `task.id` is **not** equal to the `taskId` passed as a parameter.
    - If the `task.id` is **not** equal to the `taskId`, push the `task` into the `newTasks` array.
4. Set `this.tasks` to `newTasks`.

For each iteration, we make sure that each task being added back into the `this.tasks` array is **not** the task that was deleted. 

### Step 3: Setting an EventListener to the Delete Button on Tasks

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)







IV. Recipes are saved in the browser's local storage.
For this task, we'll _persist_ (ie: save) our tasks to LocalStorage, so that we can load them again the next time we visit our page.

### Step 1: Adding the save method to TaskManager

> #### Useful Resources for this step
> - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
> - [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
> - [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
> - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

In this step, I'll add a `save()` method to our TaskManager, that we can call to save the current `this.tasks` to localStorage. We also need to save the `currentId` of the task we're working on, so that any new tasks after the application has loaded can continue off the `currentId`.

Because `localStorage` can only store strings, we need a way to convert our `this.recipes` array to a string, that can also be converted _back_ to an array when we load the tasks. For this, we'll be using [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), which we can [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) later on to convert back to an array.

Also, since our `recipeId` is a number, we'll need to convert that to a string too.

1. In `js/taskManager.js`, in the `TaskManager` class, create a `save` method. This method doesn't require any parameters.
2. In the `save` method, create a JSON string of the tasks using `JSON.stringify()` and store it to a new variable, `tasksJson`.
3. Store the JSON string in `localStorage` under the key `tasks` using `localStorage.setItem()`.
4. Convert the `this.recipeId` to a string and store it in a new variable, `recipeId`.
5. Store the `recipeId` variable in `localStorage` under the key `recipeId` using `localStorage.setItem()`.
4. In `js/index.js`, after both adding a new task and updating a task's status to done, call `taskManager.save()` to save the tasks to `localSorage`.

> #### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Open `index.html` in the browser and create a new task using the form.
> 2. Open the developer tools and navigate to the `Application` tab.
> 3. In the sidebar, under `Storage`, expand `Local Storage` and select `file://`
>
> **Expected Result**
> You should see a key `recipe` with the stringified array of tasks as it's value, as well as a key `currentId` with the currentId as it's value.
> ![Image of Expected Result](images/1.png)

### Step 2: Adding the load method to TaskManager

> #### Useful Resources for this step
> - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
> - [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Now that we have saved our tasks to `localStorage`, we need a way to load them back into our `TaskManager` when we load the application. As well as loading our `currentId` back into our `TaskManager`.

For this, we'll be converting the array we _stringified_ with `JSON.stringify()` back to an array, using `JSON.parse()`, before storing them back into the `TaskManager`'s `this.tasks`.

We'll also be converting the `currentId` number we converted as a string, back to a number.

1. In `js/taskManager.js`, add a new method called `load`. This method doesn't require any parameters.
2. In the `load` method, check if any tasks are saved in localStorage with `localStorage.getItem()`.
3. If any tasks are stored, get the JSON string of tasks stored in `localStorage` with `localStorage.getItem()`, making sure to pass the key we used to save the tasks, `tasks`. Store this string into a new variable, `tasksJson`.
4. Convert the `tasksJson` string to an array using `JSON.parse()` and store it in `this.tasks`.
5. Next, check if the `currentId` is saved in localStorage with `localStorage.getItem()`.
6. If the `currentId` is stored, get the `currentId` in localStorage using `localStorage.getItem()` and store it in a new variable, `currentId`.
7. Convert the currentId to a number before storing it to the `TaskManager`'s `this.currentId`
8. In `js/index.js`, near the top of the file, after _instantiating_ `taskManager`, `load` the tasks with `taskManager.load()` and render them with `taskManager.render()`.



