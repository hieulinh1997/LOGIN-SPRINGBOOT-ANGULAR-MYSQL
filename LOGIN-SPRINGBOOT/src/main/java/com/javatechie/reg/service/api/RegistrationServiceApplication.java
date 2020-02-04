package com.javatechie.reg.service.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import com.javatechie.reg.service.api.dao.UserRepository;
import com.javatechie.reg.service.api.model.User;

import org.springframework.http.MediaType;
import java.util.List;
import java.util.Optional;

@Service
@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class RegistrationServiceApplication {

    @Autowired
    private UserRepository repository;
    
    @PostMapping("/register/api/v1/XXXXXXXXXX")
    public String register(@RequestBody User user) {
//    	user = new User("a","b",1,"c");
        repository.save(user);
        return "Hi " + user.getName() + " your Registration process successfully completed";
    }
    
//    @PostMapping("/login/api/v1/XXXXXXXXXX/{email}&{pass}")
//	public Boolean login(@PathVariable String email,@PathVariable String pass){
//
//    	System.out.print("\nLogin with pass: "+ pass);
//    	String mailData = repository.findByEmail(email).get(0).getEmail();
//    	String passData = repository.findByEmail(email).get(0).getPassword();
//    	if(email.compareTo(mailData) == 0 && pass.equals(passData) ) {
//    		return true;
//    	} else {
//    		return false;
//    	}
//	}
    
    @RequestMapping(value = "/login/api/v1/XXXXXXXXXX", //
            method = RequestMethod.POST, //
            produces = { MediaType.APPLICATION_JSON_VALUE, //
                    MediaType.APPLICATION_XML_VALUE })
    @ResponseBody
    public Boolean login(@RequestBody User user) {
    	String email = user.getEmail();
    	System.out.println("\n\nemail nhap vao: "+ email);
    	String pass = user.getPassword();
    	System.out.println("\nPassword nhap vao: "+ pass);
    	
    	String mailData = repository.findByEmail(email).get(0).getEmail();
    	System.out.println("\n\nEmail trong data: "+ mailData);
    	String passData = repository.findByEmail(email).get(0).getPassword();
    	System.out.println("\n\nPasss trong data: "+ passData);
    	
    	
    	if(email.compareTo(mailData) == 0 && pass.equals(passData) ) {
    		return true;
    	} else {
    		return false;
    	}

    }
    
    @GetMapping("/getAllUsers/api/v1/XXXXXXXXXX")
    public List<User> findAllUsers() {
//    	User user = new User("a","b",1,"c");
//    	repository.save(user);
        return repository.findAll();
    }

    @GetMapping("/findUser/api/v1/XXXXXXXXXX/{email}")
    public List<User> findUser(@PathVariable String email) {
        return repository.findByEmail(email);
    }

    @DeleteMapping("/cancel/api/v1/XXXXXXXXXX/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
        repository.deleteById(id);
        return repository.findAll();
    }

    public static void main(String[] args) {
        SpringApplication.run(RegistrationServiceApplication.class, args);
    }

}


