package com.lincook.backend.Entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "member")
@Getter
public class Member {
    @Id
    @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userid;

    private String password;
    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Builder
    public Member(String userid, String password, Authority authority)
    {
        this.userid = userid;
        this.password = password;
        this.authority = authority;
    }
}
