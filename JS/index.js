// Initialize a new TaskManager with currentId set to 0 
// Create object from class TaskManager

const taskManager = new TaskManager(0);

// Display older tasks if there are any
taskManager.load();
taskManager.render();

// Select the Recipe Form

let taskForm = document.querySelector('#addRecipeForm')
let txtRecipeName  =  document.querySelector('#txtRecipeName');
let txtTaskIngredients =  document.querySelector('#txtTaskIngredients');
let txtTaskRecipeSteps =  document.querySelector('#txtTaskRecipeSteps');
let txtTaskTimePrep = document.querySelector('#txtTaskTimePrep');
let txtTaskTimeCook = document.querySelector('#txtTaskTimeCook');
let txtTaskServes = document.querySelector('#txtTaskServes');
let submitTask = document.querySelector("#addRecipeBtn");       //Add recipe button
let taskList = document.querySelector("#taskList");           

let nameOk = false;
let ingredientsOk = false;
let recipeStepsOk = false;
let timePrepOk = false;
let timeCookOk = false;
let servesOk = false

  
//err message
let errMessageName =  document.querySelector('#errMessageName');
let errMessageIngredients =  document.querySelector('#errMessageIngredients');
let errMessageRecipeSteps =  document.querySelector('#errMessageRecipeSteps');
let errMessageTimePrep =  document.querySelector('#errMessageRecipeSteps');
let errMessageTimeCook =  document.querySelector('#errMessageRecipeSteps');
let errMessageServes =  document.querySelector('#errMessageRecipeSteps');
  
  
// Name input validation function
const nameValidFunc = ()=> {
    nameOk = false;
    if(txtRecipeName.value.length >= 5){
        errMessageName.style.display = "block";
        errMessageName.innerHTML = "Looks good!";
        errMessageName.style.color = "green";
        txtRecipeName.style.borderColor = "green";
    nameOk = true;
} else {
    errMessageName.style.display = "block";
    errMessageName.innerHTML = "Please provide a valid recipe name ";
    errMessageName.style.color = "red";
    txtRecipeName.style.borderColor = "red";
}};
txtRecipeName.addEventListener("input", nameValidFunc);  
    
 //Ingredients input validation function
const ingredientsValidFunc = ()=> {
    ingredientsOk = false;
    if(txtTaskIngredients.value.length >= 5){
        errMessageIngredients.style.display = "block";
        errMessageIngredients.innerHTML  = "Looks good!";
        errMessageIngredients.style.color= "green";
    txtTaskIngredients.style.borderColor = "green";
    ingredientsOk = true;
} else {
    errMessageIngredients.style.display = "block";
    errMessageIngredients.innerHTML = "Please provide a valid ingredients";
    errMessageIngredients.style.color = "red";
    txtTaskIngredients.style.borderColor = "red";
}};
txtTaskIngredients.addEventListener("input",ingredientsValidFunc);  

//Recipe Steps validation function
const recipeStepsValidFunc = ()=> {
    recipeStepsOk = false;
    if(txtTaskRecipeSteps.value.length >= 5){
        errMessageRecipeSteps.style.display = "block";
        errMessageRecipeSteps.innerHTML  = "Looks good!";
        errMessageRecipeSteps.style.color= "green";
    txtTaskRecipeSteps.style.borderColor = "green";
    recipeStepsOk = true;
} else {
    errMessageRecipeSteps.style.display = "block";
    errMessageRecipeSteps.innerHTML = "Please provide the steps for your recipe";
    errMessageRecipeSteps.style.color = "red";
    errMessageRecipeSteps.style.borderColor = "red";
}};
txtTaskRecipeSteps.addEventListener("input",recipeStepsValidFunc);  


const validFormFieldInput = (event) => {
    event.preventDefault();
    // Name input validation
    nameValidFunc();
    
    // Description input validation
    ingredientsValidFunc();

    // assignTo validation
    recipeStepsValidFunc();

       
    // add recipe step
    if(nameOk && ingredientsOk && recipeStepsOk && timePrepOk && timeCookOk && servesOk ){
        taskManager.addTask(txtRecipeName.value, txtRecipeName.value, txtTaskRecipeSteps.value, txtTaskRecipeSteps.value, txtTaskTimeCook.value, serves.value);
        //console.log(taskManager.tasks);

        
// reset inputs fields

        // reset name
        txtRecipeName.value = "";
        errMessageName.style.display = "none";
        txtRecipeName.style.borderColor = "#ced4da";

        // reset ingredients
        txtRecipeName.value = "";
        errMessageIngredients.style.display = "none";
        txtTaskIngredients.style.borderColor = "#ced4da";

        // reset Recipe Steps
        txtTaskRecipeSteps.value = "";
        errMessageRecipeSteps.style.display = "none";
        txtTaskRecipeSteps.style.borderColor = "#ced4da";

        // reset Preparation Time
        txtTaskRecipeSteps.value = "";
        errMessageTimePrep.style.display = "none";
        txtTaskTimePrep.style.borderColor = "#ced4da";

        // reset Cooking Time
        txtTaskTimeCook.value = "";
        errMessageTimeCook.style.display = "none";
        txtTaskTimeCook.style.borderColor = "#ced4da";

        //console.log(taskManager.render());

        txtTaskServes.value = "";
        errMessageServes.style.display = "none";
        txtTaskServes.style.borderColor = "#ced4da";
        
    } 
    taskManager.render();

    //Saving the data in the localSorage
    taskManager.save();
};

// submit button handler
taskForm.addEventListener("submit", validFormFieldInput);

//test to create a task HTML 
// console.log(taskHtml);


taskList.addEventListener("click", (event) =>{
        taskManager.render();
        //Saving the data in the localSorage
        taskManager.save();
    

    if(event.target.classList.contains("delete-button")){
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;    
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);

        taskManager.render();
        //Saving the data in the localSorage
        taskManager.save();
    }
});
