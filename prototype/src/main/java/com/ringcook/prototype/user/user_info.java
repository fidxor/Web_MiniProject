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
    private Integer u_num;

    @Column(length = 255, unique = true)
    private String u_id;

    private String u_pw;

    private String u_local;
}
