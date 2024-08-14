package com.example.demo;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface ProductRepository extends JpaRepository<Product, Long> {
//}





import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	
	  
	
}
