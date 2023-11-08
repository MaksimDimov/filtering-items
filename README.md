# filtering-items

## Description
This is simple programm that contain small list of books with authors and years of publishing. You can find any book from this list depends on name, author's name and year of publishing. The propose of this project is to make some simple word and number filters. Here is the screenshot of the project: 

<div align="center">
    
![](Screenshot_1.png)

</div>

## Structure
### HTML
In my HTML I have 3 inputs for 3 filters and table that will be filled up by books from the array from JavaScript document.
```html
<body>
    <main>
        <div class="container">
            <label for="book-name-filter-input" class="item">Filter by book name:</label>
            <input type="text" class="book-name-filter-input item">
            <label for="author-filter-input" class="item">Filter by author:</label>
            <input type="text" class="author-filter-input item">
            <label for="year-filter-input" class="item">Filter by year:</label>
            <input type="text" class="year-filter-input item">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Published Year</th>
                    </tr>
                </thead>
                <tbody class="table-of-books">
                </tbody>
            </table>
        </div>
    </main>
</body>
```

### CSS
CSS have only styling, and program work without this document.

### JavaScript
Creating a function, That will fill ip the table by book information.
```JavaScript
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
```
Next step will be creating 3 functions for every filter: 
```JavaScript
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
```
And the last part is the smallest: just add the event listeners for the filter inputs: 
```JavaScript
document.querySelector('.author-filter-input').addEventListener('input', filterBooksByAuthor);
document.querySelector('.book-name-filter-input').addEventListener('input', filterBooksByBookName);
document.querySelector('.year-filter-input').addEventListener('input', filterBooksByYear);
```

### Demo
You can try this programm [here](https://maksimdimov.github.io/filtering-items/).
