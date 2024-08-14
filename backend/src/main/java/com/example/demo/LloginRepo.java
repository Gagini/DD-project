	package com.example.demo;
	
	import org.springframework.data.jpa.repository.JpaRepository;
	
	import com.example.demo.LoginEntity;
	
	public interface LloginRepo extends JpaRepository<LoginEntity,Integer>{
	
		LoginEntity findByEmail(String email);
	
	}
