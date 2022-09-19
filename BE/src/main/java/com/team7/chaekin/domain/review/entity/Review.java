package com.team7.chaekin.domain.review.entity;

import com.team7.chaekin.domain.booklog.entity.BookLog;
import com.team7.chaekin.domain.common.entity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Review extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "booklog_id")
    private BookLog bookLog;

    @Column(nullable = false)
    private double score;

    @Column(length = 1000)
    private String comment;

    @Column
    private boolean isRemoved;
}
