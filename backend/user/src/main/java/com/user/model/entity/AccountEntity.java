package com.user.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Account")
public class AccountEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(unique = true)
    private Long userId;

    private String firstName;
    private String lastName;

    private String username;

    private String callNumber;

    @Column(unique = true)
    private String email;

    public AccountEntity(Long userId, String firstName, String lastName, String username, String callNumber, String email) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.callNumber = callNumber;
        this.email = email;
    }
}
