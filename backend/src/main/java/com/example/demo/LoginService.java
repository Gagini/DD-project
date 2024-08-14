package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

	@Autowired
	LloginRepo sur;
	public LoginEntity postData(LoginEntity data) {
		// TODO Auto-generated method stub
		return sur.save(data); 
	}
	public List<LoginEntity> getAllData() {
		// TODO Auto-generated method stub
		return sur.findAll();
	}

}