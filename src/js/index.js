import React from 'react';
import ReactDOM from "react-dom";

import App from './App';

import '../scss/app.scss';

ReactDOM.render( < App /> , document.getElementById("app"));

// var url2 = 'https://newsapi.org/v2/everything?' + 
//             'q=apple' + '&pageSize=2' + '&page=6' +
//             '&sortBy=popularity' + 
//             '&apiKey=beb15859411c43359276f35d0e3e56a3';



// fetch(new Request(url2))
//     .then(function(response) {
//         console.log(response.json());
//     })