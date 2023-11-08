const books = [
    { title: "To Kill a Mockingbird", author: 'Harper Lee', publishedYear: '1960'},
    { title: "1984", author: 'George Orwell',  publishedYear: '1949'},
    { title: "The Great Gatsby", author: 'F. Scott Fitzgerald',  publishedYear: '1925'},
    { title: "Pride and Prejudice", author: 'Jane Austen',  publishedYear: '1813'},
    { title: "The Catcher in the Rye", author: 'J.D. Salinger',  publishedYear: '1951'},
    { title: "The Hobbit", author: 'J.R.R. Tolkien',  publishedYear: '1937'},
    { title: "Brave New World", author: 'Aldous Huxley',  publishedYear: '1932'},
    { title: "The Lord of the Rings", author: 'J.R.R. Tolkien',  publishedYear: '1954'},
    { title: "Moby-Dick", author: 'Herman Melville',  publishedYear: '1851'},
    { title: "War and Peace", author: 'Leo Tolstoy', publishedYear: '1869'},
    { title: "Wuthering Heights", author: 'Emily Brontë',  publishedYear: '1847'},
    { title: "The Alchemist", author:'Paulo Coelho',  publishedYear: '1988'},
    { title: "Crime and Punishment", author: 'Fyodor Dostoevsky',  publishedYear: '1866'}
];

function renderBooks(books) {
const tableBody = document.querySelector('.table-of-books');
        tableBody.innerHTML = '';
        books.forEach(book => {
            const row = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.textContent = book.title;
            const authorCell = document.createElement('td');
            authorCell.textContent = book.author;
            const yearCell = document.createElement('td');
            yearCell.textContent = book.publishedYear;
            row.appendChild(titleCell);
            row.appendChild(authorCell);
            row.appendChild(yearCell);
            tableBody.appendChild(row);
        });
}

function filterBooksByAuthor() {
    const filterAuthor = document.querySelector('.author-filter-input').value;
    const filteredBooksByAuthor = books.filter((book) => book.author.toLowerCase().includes(filterAuthor.toLowerCase()));
    renderBooks(filteredBooksByAuthor);  
}

function filterBooksByBookName() {
    const filterBookName = document.querySelector('.book-name-filter-input').value;
    const filteredBooksByBookName = books.filter((book) => book.title.toLowerCase().includes(filterBookName.toLowerCase()));
    renderBooks(filteredBooksByBookName);
}

function filterBooksByYear() {
    const filterYear = document.querySelector('.year-filter-input').value;
    const filteredBooksByYear = books.filter((book) => {
        return book.publishedYear.toString().includes(filterYear);
    });
    renderBooks(filteredBooksByYear);
}

renderBooks(books);

document.querySelector('.author-filter-input').addEventListener('input', filterBooksByAuthor);
document.querySelector('.book-name-filter-input').addEventListener('input', filterBooksByBookName);
document.querySelector('.year-filter-input').addEventListener('input', filterBooksByYear);
