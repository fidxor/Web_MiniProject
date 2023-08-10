package com.ringcook.prototype.board;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class MainBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer BNum;

    @Column(length = 255)
    private String Head;

    @Column(length = 255)
    private String Body;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime CreatTime;

    @OneToMany(mappedBy = "mainBoard", cascade = CascadeType.REMOVE)
    private List<Commnet> commnetList;
}
