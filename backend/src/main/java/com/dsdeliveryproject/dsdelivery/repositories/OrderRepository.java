package com.dsdeliveryproject.dsdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dsdeliveryproject.dsdelivery.entities.Order;

// Makes OrderRepository have all the basic operations to access the Order database
public interface OrderRepository extends JpaRepository<Order, Long> {

	// Returns only orders that are pending and that are sorted only for an instant

	/* Performs the query in the database */
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrdersWithProducts();
}
