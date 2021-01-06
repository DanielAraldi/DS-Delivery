package com.dsdeliveryproject.dsdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dsdeliveryproject.dsdelivery.dto.ProductDTO;
import com.dsdeliveryproject.dsdelivery.entities.Product;
import com.dsdeliveryproject.dsdelivery.repositories.ProductRepository;

// Informs that this class is a service component
@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;

	// Return a DTO (Data Transfer Objects), that is, it will only deliver the data
	// you send
	@Transactional(readOnly = true) /* Ensures connection to database */
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

}
