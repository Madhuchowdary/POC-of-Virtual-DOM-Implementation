# Small-POC-of-Virtual-DOM-Implementation
POC shows how to implement virtual DOM concept into our day to day work with out using react or any other libraries


In this POC one of technique to minimize the DOM updates is used with out using any library.

Performance can be improved by updating all DOM elements in a single operation. Adding each element one at a time causes up to twentyone reflows — one when the ul is appended, ten for each li and ten for the text. However, a single reflow can be implemented using a DOM fragment and building the nodes in memory first(virtual DOM).

Code pen URL to test this POC as below 
https://codepen.io/madhuchowdary/pen/XWdJarL
you can compare the time taken before and after using virtual DOM concept  .
