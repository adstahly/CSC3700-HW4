const bookController = require('./bookController');
const books = bookController.books
const patrons = [
    {id: 1, name: 'Alice', checkedOutBooks: [1,3] },
    {id: 2, name: 'Bob', checkedOutBooks: [] },
    {id: 3, name: 'Charlie', checkedOutBooks: [2] }
];


exports.listPatrons = (_req, res) => {
    res.render('patrons', {
        title: 'Patron List',
        patrons
    });
};

exports.showPatron = (req, res) => {
    const patron = patrons.find(p => p.id === parseInt(req.params.id));
    const checkedOutBooks = books.filter(book => patron.checkedOutBooks.includes(book.id))
    res.render(`patronDetails`, {
        title: 'Patron Details',
        book: checkedOutBooks,
        patron
    });
}

exports.showSummary = (req, res) => {
    const totalPatrons = patrons.length;
    const booksCheckedOut = patrons.map(patron => patron.checkedOutBooks).flat();
    const totalBooksCheckedOut = booksCheckedOut.length;
    const averageBooks = totalBooksCheckedOut/totalPatrons;
    console.log(totalPatrons);
    console.log(totalBooksCheckedOut);
    console.log(averageBooks);
    res.render(`patronSummary`, {
        title: 'Patron Summary',
        totalPatrons,
        totalBooksCheckedOut,
        averageBooks
    })
}