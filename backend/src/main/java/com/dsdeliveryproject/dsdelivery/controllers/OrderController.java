package com.dsdeliveryproject.dsdelivery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsdeliveryproject.dsdelivery.dto.OrderDTO;
import com.dsdeliveryproject.dsdelivery.services.OrderService;

// Informs that the class is a REST controller
@RestController
@RequestMapping(value = "/orders") /* Way */
public class OrderController {

	@Autowired
	private OrderService service;

	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll() {
		List<OrderDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
