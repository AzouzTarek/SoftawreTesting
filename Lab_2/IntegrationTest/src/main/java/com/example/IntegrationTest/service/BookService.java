package com.example.IntegrationTest.service;

import com.example.IntegrationTest.model.Book;
import com.example.IntegrationTest.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Long id) {
        Optional<Book> book = bookRepository.findById(id);
        return book.orElse(null);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }
}