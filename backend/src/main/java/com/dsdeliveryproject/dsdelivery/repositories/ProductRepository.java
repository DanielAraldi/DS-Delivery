package com.dsdeliveryproject.dsdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsdeliveryproject.dsdelivery.entities.Product;

// Makes ProductRepository have all the basic operations to access the Product database
public interface ProductRepository extends JpaRepository<Product, Long> {

	// Sorting names ascending
	List<Product> findAllByOrderByNameAsc();
}
