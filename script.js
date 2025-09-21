// Récupérer les éléments
const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');

// Fonction pour ajouter une tâche
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;

    if (taskText !== '') {
        // Créer un nouvel élément de liste
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Ajouter un écouteur d'événement pour marquer la tâche comme terminée
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Créer un bouton "Supprimer"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Empêche l'événement de "click" sur la tâche
            taskList.removeChild(taskItem); // Supprimer l'élément li
        });

        // Ajouter le bouton à l'élément li
        taskItem.appendChild(deleteButton);

        // Ajouter l'élément li à la liste
        taskList.appendChild(taskItem);

        // Effacer le champ de texte
        taskInput.value = '';
    }
});
