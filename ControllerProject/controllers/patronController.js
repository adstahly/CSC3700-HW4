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

exports.showPatron = (_req, res) => {
    res.render(`Patron `);
}