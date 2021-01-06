package com.dsdeliveryproject.dsdelivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsdeliveryproject.dsdelivery.dto.ProductDTO;
import com.dsdeliveryproject.dsdelivery.services.ProductService;

// Informs that the class is a REST controller
@RestController
@RequestMapping(value = "/products") /* Way */
public class ProductController {

	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
