package com.user.repository;


import com.user.model.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByPassword(String password);
    Optional<UserEntity> findByUsername(String username);
    boolean existsByEmail(String email);
}
