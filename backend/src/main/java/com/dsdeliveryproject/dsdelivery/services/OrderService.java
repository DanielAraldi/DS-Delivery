package com.dsdeliveryproject.dsdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsdeliveryproject.dsdelivery.dto.OrderDTO;
import com.dsdeliveryproject.dsdelivery.entities.Order;
import com.dsdeliveryproject.dsdelivery.repositories.OrderRepository;

// Informs that this class is a service component
@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;

	// Return a DTO (Data Transfer Objects), that is, it will only deliver the data
	// you send
	@Transactional(readOnly = true) /* Ensures connection to database */
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

}
