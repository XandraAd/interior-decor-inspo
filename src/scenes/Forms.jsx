/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import localStorage from "../LocalStorage"
import {
  Box,
  Button,
  Select,
  FormControl,
  Input,

  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";

const Forms = () => {
 const{email}=useState("")
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    message:"",
    topic:"",

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.value.reset()
  
    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
  
    // Optionally, reset form data or navigate to a different page
    setFormData({ name: "", email: "", message: "" });
  
    console.log("Form submitted successfully");
  };
  

  const isError = email === "";
  return (
    <>
      <Box marginTop={10}
      marginInline={10}
     >
        <h3 className="request"> Send Us Your Contact Request</h3>
        <p className="para_request">
          Should you require any further information,kindly fill out the form
          provided below. <br />
          Our team will promptly get back to you with the requested details.
          Thank you for considering our services.
        </p>

        <br />
      <Box onSubmit={handleSubmit}>
        
        <FormControl>
            <FormLabel>Your Name</FormLabel>
            <Input 
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
             id="name"
             required/>
            <FormHelperText>Please input full name here</FormHelperText>
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel>Your Email</FormLabel>
            <Input
              className="emailInput"
              type="email"
              name="email"
          value={formData.email}
              onChange={handleChange}
            />
            {!isError ? (
              <FormHelperText>
                Enter the email you would like to be contacted on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
          <br />
          <FormControl>
            <Select placeholder="Please select the topic of your contact">
              <option>General Information</option>
              <option>Quotation Request</option>
              <option>Other</option>
            </Select>
          </FormControl>
          <br />
          <Textarea
          name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            size="md"
          />
            <Button
            mt={4}
            colorScheme='purple'
            type='submit'
          >
            Submit
          </Button>
       
        
            </Box>
            
      </Box>
    </>
  );
};

export default Forms;
