package com.dsdeliveryproject.dsdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsdeliveryproject.dsdelivery.entities.Order;

// Makes OrderRepository have all the basic operations to access the Order database
public interface OrderRepository extends JpaRepository<Order, Long> {

}
