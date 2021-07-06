
//CreateTaskHTML() AND RETURN html tags.
const createTaskHtml = (name, ingredients, recipesteps, preptime, cooktime, serves, id) => {
    let visibility;

      const html = `
                <!-- task  start -->
                  <div class="card text-dark bg-light mb-3 mt-4" cardid= "${id}"  style="ma x-width: 18rem;" >
                    <div class="card-header" text-center id="cardHeader">
                      <a data-bs-toggle="collapse" href="#collapseTask1" role="button" aria-expanded="false" aria-controls="collapseTask1" style="color:black; font-weight:bold">
                      ${name} 
                      </a>                    
                    </div>
  
                    <!-- collapse task 1 start -->
                    <div class="collapse text-left" id="collapseTask1">
                      <div class="card-body ">
                      <!-- task content start  -->
                            <p class="card-text text-left">
                                <span class= "collapseTask1Span"> Name: ${name} </span>
                                <div class="mt-0 pt-0"></div><br>
                                <span class= "collapseTask1Span"> Method: </span> ${ingredients} <br>
                                <span class= "collapseTask1Span"> Method: </span>${recipesteps} <br>
                                <span class= "collapseTask1Span"> PrepTime: </span>${preptime} <br>
                                <span class= "collapseTask1Span"> CookTime: </span>${cooktime} <br>
                                <span class= "collapseTask1Span"> Serves: </span>${serves} <br>
                            </p>
                        <div class="d-flex justify-content-around">
                        
                        <button type="button" class="btn btn-outline-success editButton" id="${id}" onclick='markDoneDiv(${id})'>Edit</button>
                        <button type="button" class="btn btn-outline-danger delete-button id="delete-button">Delete</button>
                        </div>
                        <!-- task content end -->
                      </div>
                    </div>   
                    <!-- collapse task  end -->
                  </div>
                   <!-- end task  -->
                </div>`;  
    return html;          
  }  
  
  // Add Tasks programmatically
  // When a new task is added with valid information, the data should be stored inside a JavaScript object. Each task object should be added to and stored in an array variable.
  // The added task should be visible on the current tasks list and should display the task information.
  // When adding a new task, the task id should be incremented and unique.
  
  class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    }
  
    // Create the addTask method
    addTask(name, ingredients, recipesteps, preptime, cooktime, serves) {
      // Create a task object that we will push to the list of tasks
      
      const newTask = {
        // Increment the current Id for each new task
        id: this.currentId++,
        name: name,
        ingredients: ingredients,
        method: recipesteps,
        preptime: preptime,
        cooktime: cooktime,
        serves: serves
      };
      //store in array
      this.tasks.push({newTask});  
    }

    //Each time a new task is added, the render() method is called to display the new task.
    
    render(){
        const tasksHtmlList = [];

        for(let i = 0; i < this.tasks.length; i++){
          
          const renderTask = this.tasks[i];
          
          const taskHtml = createTaskHtml(
            renderTask.id,
            renderTask.name, 
            renderTask.ingredients, 
            renderTask.recipesteps, 
            renderTask.preptime,
            renderTask.cooktime,
            renderTask.serves
            );
            // push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }
        
        // Create the tasksHtml by joining them with space in between
        const taskHtml = tasksHtmlList.join("\n");

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector(".todo .todoSection");

        tasksList.innerHTML= taskHtml;
    }

    getTaskById(taskId){
        let foundTask;
        for(let i = 0; i < this.tasks.length; i++){
          const task = this.tasks[i];
          if(task.id === taskId){
            foundTask = task;
          }
        }
        return foundTask;
      }
  

      save(){
        let tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem("currentId", currentId);
      }
  
      load(){
        //cheching if there are any tasks in localStorage
        if(localStorage.getItem("tasks")){
          let tasksJson = localStorage.getItem("tasks");
          this.tasks = JSON.parse(tasksJson);
        }
  
        if(localStorage.getItem("currentId")){
          let currentId = localStorage.getItem("currentId");
          this.currentId = JSON.parse(currentId);
        }
      }
  
      deleteTask(taskId){
        let newTasks = [];
        for(let i = 0; i < this.tasks.length; i++){
          let task = this.tasks[i];
          if(task.id !== taskId){
            newTasks.push(task);
          }
        }
        this.tasks = newTasks;
      }
  
  };
  