// Récupération des éléments HTML nécessaires
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

// Ajout des événements drag and drop aux éléments draggables
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Ajout des événements drag and drop aux éléments dropzones
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        dropzone.classList.add('hovered');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('hovered');
    });

    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const correct = JSON.parse(draggable.getAttribute('data-correct'));

        if (correct) {
            dropzone.innerHTML = 'Bonne réponse !';
            dropzone.classList.add('correct');
            dropzone.style.backgroundColor = 'green';
        } else {
            dropzone.innerHTML = 'Mauvaise réponse';
            dropzone.classList.add('incorrect');
            dropzone.style.backgroundColor = 'red';
        }
    });
});
