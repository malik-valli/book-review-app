const express = require('express');
const bodyParser = require('body-parser');
const { Book, Review } = require('../models');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

// Get all books
app.get('/books', async (req, res) => {
  const books = await Book.findAll({ include: 'reviews' });
  res.json(books);
});

// Get a single book by id
app.get('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id, { include: 'reviews' });
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Get reviews for a specific book
app.get('/books/:id/reviews', async (req, res) => {
  const reviews = await Review.findAll({ where: { bookId: req.params.id } });
  res.json(reviews);
});

// Create a new book
app.post('/books', async (req, res) => {
  const { name, author } = req.body;
  const book = await Book.create({ name, author });
  res.status(201).json(book);
});

// Create a review for a specific book
app.post('/books/:id/reviews', async (req, res) => {
  const { author, text } = req.body;
  const bookId = req.params.id;
  const review = await Review.create({ author, text, bookId });
  res.status(201).json(review);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});