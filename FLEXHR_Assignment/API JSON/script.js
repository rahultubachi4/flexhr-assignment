const API_URL = "http://localhost:3000/todos";
const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");


function fetchTodos() {
    fetch(API_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(todos) {
            todoList.innerHTML = "";
            todos.forEach(function(todo) {
                var li = document.createElement("li");
                li.className = todo.completed ? "completed" : "not-completed";
                li.textContent = todo.title;

                var button = document.createElement("button");
                if (todo.completed) {
                    button.className = "remove-btn";
                    button.textContent = "Remove";
                } else {
                    button.className = "complete-btn";
                    button.textContent = "Complete";
                }

                li.appendChild(button);
                todoList.appendChild(li);

                button.onclick = function() {
                    if (todo.completed) {
                        deleteTodoPromise(todo.id);
                    } else {
                        completeTodoPromise(todo.id);
                    }
                };
            });
        });
}


addTaskButton.onclick = function() {
    var task = newTaskInput.value.trim();
    if (task) {
        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: task, completed: false })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(newTodo) {
            var li = document.createElement("li");
            li.className = "not-completed";
            li.textContent = newTodo.title;

            var button = document.createElement("button");
            button.className = "complete-btn";
            button.textContent = "Complete";

            li.appendChild(button);
            todoList.appendChild(li);

            button.onclick = function() {
                completeTodoPromise(newTodo.id);
            };
        });
        newTaskInput.value = "";
    }
};


function completeTodoPromise(id) {
    fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: true })
    }).then(function() {
        fetchTodos();
    });
}


// function deleteTodoPromise(id) {
//     fetch(`${API_URL}/${id}`, {
//         method: "DELETE"
//     }).then(function() {
//         fetchTodos();
//     });
// }



fetchTodos();
