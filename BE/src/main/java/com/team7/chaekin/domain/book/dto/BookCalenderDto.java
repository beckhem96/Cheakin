package com.team7.chaekin.domain.book.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class BookCalenderDto {
    private long bookId;
    private String title;
    private Boolean isStartDay;
    private Boolean isEndDay;
}
