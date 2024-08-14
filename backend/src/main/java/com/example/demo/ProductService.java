package com.example.demo;
//

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class ProductService {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    public List<Product> getAllProducts() {
//        return productRepository.findAll();
//    }
//
//    public Product getProductById(Long id) {
//        return productRepository.findById(id).orElse(null);
//    }
//
//    public Product saveProduct(Product product) {
//        return productRepository.save(product);
//    }
//
//    public Product updateProduct(Long id, Product product) {
//        Optional<Product> optionalProduct = productRepository.findById(id);
//        if (optionalProduct.isPresent()) {
//            Product existingProduct = optionalProduct.get();
//            existingProduct.setName(product.getName());
//            existingProduct.setPrice(product.getPrice());
//            existingProduct.setRating(product.getRating());
//            existingProduct.setColour(product.getColour());
//            existingProduct.setBrand(product.getBrand());
//            existingProduct.setDescription(product.getDescription());
//            existingProduct.setCategory(product.getCategory());
//            return productRepository.save(existingProduct);
//        } else {
//            return null; // Or throw an exception if product not found
//        }
//    }
//    
//    public void deleteProduct(Long id) {
//        productRepository.deleteById(id);
//    }
//}

// import com.example.demo.Product;
//import com.example.demo.ProductRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class ProductService {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    public List<Product> findAll() {
//        return productRepository.findAll();
//    }
//
//    public Optional<Product> findById(Long id) {
//        return productRepository.findById(id);
//    }
//
//    public Product save(Product product) {
//        return productRepository.save(product);
//    }
//
//    public void deleteById(Long id) {
//        productRepository.deleteById(id);
//    }
//}

import com.example.demo.Product;
import com.example.demo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
