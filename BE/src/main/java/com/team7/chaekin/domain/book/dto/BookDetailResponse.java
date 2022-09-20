package com.team7.chaekin.domain.book.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BookDetailResponse {
    private long bookId;
    private String isbn;
    private String author;
    private String index;
    private String description;
    private String image;
    private String title;
    private double ratingScore;
}
