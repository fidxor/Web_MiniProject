package com.ringcook.prototype.board;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
public class Commnet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer BNum;

    @Column(columnDefinition = "TEXT")
    private String Body;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime CreatTime;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime modifyTime;

    @JsonManagedReference
    @ManyToOne
    private MainBoard mainBoard;
}
