// Récupère les éléments du DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const errorMessage = document.getElementById('errorMessage');

// Quand on soumet le formulaire (bouton "Ajouter")
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();                      // empêche le rechargement de la page
  const text = taskInput.value.trim();     // on enlève espaces devant/derrière

  if (text === '') {                       // SI le texte est vide
    errorMessage.classList.remove('hidden'); // afficher message d'erreur
    return;                                // sortir — ne rien ajouter
  }

  // sinon — créer la tâche
  const li = createTaskElement(text);
  taskList.appendChild(li);

  taskInput.value = '';                    // vider le champ
  errorMessage.classList.add('hidden');    // cacher le message d'erreur
  taskInput.focus();                       // remettre le focus pour taper vite
});

// Si l'utilisateur commence à taper, on cache le message d'erreur
taskInput.addEventListener('input', () => errorMessage.classList.add('hidden'));

// Crée un <li> complet (texte + edit + delete) et retourne l'élément
function createTaskElement(text) {
  const li = document.createElement('li');
  li.className = 'p-2 bg-gray-200 rounded-lg flex justify-between items-center';

  const span = document.createElement('span'); // texte de la tâche
  span.textContent = text;

  const buttons = document.createElement('div'); // conteneur pour les boutons

  // --- bouton ÉDITER ---
  const editBtn = document.createElement('button');
  editBtn.type = 'button';
  editBtn.textContent = '✏️';
  editBtn.className = 'ml-2 text-blue-500';
  editBtn.addEventListener('click', () => {
    // remplacer le span par un input pour éditer
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = span.textContent;
    inputEdit.className = 'border rounded p-1 w-64';
    li.replaceChild(inputEdit, span);
    inputEdit.focus();
    inputEdit.select();

    // ENTRÉE = sauvegarder (si non vide), ESC = annuler, BLUR = annuler
    inputEdit.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        const newText = inputEdit.value.trim();
        if (newText !== '') span.textContent = newText; // on garde ancien texte si vide
        li.replaceChild(span, inputEdit);
      } else if (e.key === 'Escape') {
        li.replaceChild(span, inputEdit);
      }
    });

    inputEdit.addEventListener('blur', function () {
      // on annule l'édition si l'utilisateur clique ailleurs
      li.replaceChild(span, inputEdit);
    });
  });

  // --- bouton SUPPRIMER ---
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'ml-2 text-red-500';
  deleteBtn.addEventListener('click', () => {
    li.remove(); // supprime simplement l'élément du DOM
  });

  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttons);
  return li;
}
