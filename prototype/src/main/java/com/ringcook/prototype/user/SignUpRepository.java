package com.ringcook.prototype.user;

import com.ringcook.prototype.user.user_info;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SignUpRepository extends JpaRepository<user_info, Integer> {
    Optional<user_info> findByUsername(String username);
    user_info findByUsernameAndEmail(String username, String email);
}
