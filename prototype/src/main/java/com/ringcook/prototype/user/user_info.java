package com.ringcook.prototype.user;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class user_info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer num;

    @Column(length = 255, unique = true)
    private String id;

    private String pw;

    private String address;
}
