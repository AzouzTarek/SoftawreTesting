package com.example.IntegrationTest.repository;

import com.example.IntegrationTest.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}