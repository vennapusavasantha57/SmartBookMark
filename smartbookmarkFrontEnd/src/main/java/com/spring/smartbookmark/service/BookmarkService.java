package com.spring.smartbookmark.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.smartbookmark.entity.Bookmark;
import com.spring.smartbookmark.repository.BookmarkRepository;

@Service
public class BookmarkService {

    private final BookmarkRepository repository;

    public BookmarkService(BookmarkRepository repository) {
        this.repository = repository;
    }

    public List<Bookmark> getAll() {
        return repository.findAll();
    }

    public Bookmark getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bookmark not found with id: " + id));
    }

    public Bookmark save(Bookmark bookmark) {
        return repository.save(bookmark);
    }

    public Bookmark update(Long id, Bookmark updatedBookmark) {
        Bookmark existingBookmark = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Bookmark not found with id: " + id));

        existingBookmark.setTitle(updatedBookmark.getTitle());
        existingBookmark.setUrl(updatedBookmark.getUrl());

        return repository.save(existingBookmark);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
