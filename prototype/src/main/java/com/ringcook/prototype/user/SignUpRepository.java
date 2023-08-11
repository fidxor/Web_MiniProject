package com.ringcook.prototype.user;

import com.ringcook.prototype.user.user_info;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SignUpRepository extends JpaRepository<user_info, Long> {
    Optional<user_info> findById(String id);
    user_info findByIdAndPw(String id, String pw);
}
