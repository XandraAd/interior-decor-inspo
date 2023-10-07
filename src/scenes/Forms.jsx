/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
  const [email, setEmail] = useState("");
  let [value, setValue] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const isError = email === "";
  return (
    <>
      <Box marginTop={10}>
        <h3 className="request"> Send Us Your Contact Request</h3>
        <p className="para_request">
          Should you require any further information,kindly fill out the form
          provided below. <br />
          Our team will promptly get back to you with the requested details.
          Thank you for considering our services.
        </p>

        <br />
      <Box >
          <FormControl>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" />
            <FormHelperText>Please input full name here</FormHelperText>
          </FormControl>
          <FormControl isInvalid={isError}>
            <FormLabel>Your Email</FormLabel>
            <Input
              className="emailInput"
              type="email"
              value={email}
              onChange={handleEmailChange}
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
            value={value}
            onChange={handleInputChange}
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
