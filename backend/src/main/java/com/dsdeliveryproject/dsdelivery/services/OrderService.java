package com.dsdeliveryproject.dsdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsdeliveryproject.dsdelivery.dto.OrderDTO;
import com.dsdeliveryproject.dsdelivery.dto.ProductDTO;
import com.dsdeliveryproject.dsdelivery.entities.Order;
import com.dsdeliveryproject.dsdelivery.entities.OrderStatus;
import com.dsdeliveryproject.dsdelivery.entities.Product;
import com.dsdeliveryproject.dsdelivery.repositories.OrderRepository;
import com.dsdeliveryproject.dsdelivery.repositories.ProductRepository;

// Informs that this class is a service component
@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Autowired 
	private ProductRepository productRepository;

	// Return a DTO (Data Transfer Objects), that is, it will only deliver the data
	// you send
	@Transactional(readOnly = true) /* Ensures connection to database */
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		// Product association to order
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
