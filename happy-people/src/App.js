import React, { useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, Button, Image } from "@chakra-ui/react";
import './App.css';
import logo from './images/ty.png';
import NavFrame from "./components/NavFrame/NavFrame";


function App() {
  return (
    <ChakraProvider>
      <NavFrame/> 
      <Image src={logo}/>
    </ChakraProvider>
  );
}

export default App;
