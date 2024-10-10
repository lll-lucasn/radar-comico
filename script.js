document.addEventListener('DOMContentLoaded', (event) => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const nameInput = document.getElementById('name-input');
    const commentsList = document.getElementById('comments-list');

    // Função para carregar comentários salvos
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.classList.add('comment-item');
            li.innerHTML = `<strong>${comment.name}:</strong> <p>${comment.text}</p>`;
            commentsList.appendChild(li);
        });
    }

    // Função para salvar comentário
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newComment = {
            name: nameInput.value,
            text: commentInput.value
        };
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        commentInput.value = '';
        nameInput.value = '';
        loadComments();
    });

    loadComments();
});
