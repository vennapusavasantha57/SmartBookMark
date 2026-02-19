package com.spring.smartbookmark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.smartbookmark.entity.Bookmark;


public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
}
