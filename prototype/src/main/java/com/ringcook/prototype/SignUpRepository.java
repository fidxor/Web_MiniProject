package com.ringcook.prototype;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SignUpRepository extends JpaRepository<user_info, Integer> {
}
