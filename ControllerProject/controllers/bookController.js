const books = [
    {id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', checkedOut: true},
    {id: 2, title: '1984', author: 'George Orwell', checkedOut: true},
    {id: 3, title: 'Dune', author: 'Frank Herbert', checkedOut: true},
    {id: 4, title: 'Hunger Game', author: 'Susan Collins' },
    {id: 5, title: 'Harry Potter', checkedOut: false },
    {id: 6, author: 'Oda', checkedOut: false }
];

exports.showBooks = (_req, res) => {
    res.render('home', {
        title: 'Library - Books',
        books
    });
};

exports.showSummary = (_req, res) => {
    const total = books.length;
    const checkedOut = books.filter(b => b.checkedOut).length;
    const available = total - checkedOut;

    res.render('summary', {
        title: 'Library - Summary',
        total,
        checkedOut,
        available
    });
};

module.exports.books = books;