package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {

	@Autowired
	LoginService sus;
	
	@Autowired
	LloginRepo sur;
	
	@PostMapping("/reg")
	public LoginEntity post(@RequestBody LoginEntity data) {
		return sus.postData(data);
	}
	
	@PostMapping("/login")
    public LoginEntity loginUser(@RequestBody LoginEntity loginDetails) {
		LoginEntity user= sur.findByEmail(loginDetails.getEmail());
        if (user != null && user.getPassword().equals(loginDetails.getPassword())) {
            return user;
        } else {
            throw new RuntimeException("Invalid login credentials");
        }
    }
	
	@GetMapping("/get")
	public List<LoginEntity> getData(){
		return sus.getAllData();
	}
}
