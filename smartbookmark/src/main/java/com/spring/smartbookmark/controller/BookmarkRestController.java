package com.spring.smartbookmark.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spring.smartbookmark.entity.Bookmark;
import com.spring.smartbookmark.service.BookmarkService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bookmarks")
public class BookmarkRestController {

    private final BookmarkService service;

    public BookmarkRestController(BookmarkService service) {
        this.service = service;
    }
    @GetMapping
    public List<Bookmark> getAllBookmarks() {
        return service.getAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Bookmark> getBookmarkById(@PathVariable Long id) {
        Bookmark bookmark = service.getById(id);
        return ResponseEntity.ok(bookmark);
    }


    @PostMapping("/save")
    public ResponseEntity<Bookmark> createBookmark(@RequestBody Bookmark bookmark) {
        Bookmark savedBookmark = service.save(bookmark);
        return ResponseEntity.ok(savedBookmark);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bookmark> updateBookmark(
            @PathVariable Long id,
            @RequestBody Bookmark bookmark) {

        Bookmark updatedBookmark = service.update(id, bookmark);
        return ResponseEntity.ok(updatedBookmark);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBookmark(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok("Bookmark deleted successfully");
    }
}
