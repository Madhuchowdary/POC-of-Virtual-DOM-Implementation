# Small-POC-of-Virtual-DOM-Implementation
POC shows how to implement virtual DOM concept into our day to day work with out using react or any other libraries

Frameworks such as React and Vue use the virtual DOM concept to make more performant updates to the DOM. Virtual DOM is nothing but copy of actual DOM which stays in menmory. Ususlly when a change like position or opacity etc occurs to actual DOM element it may trigger repaint activity some times reflow as well.  which is costly operation , many udates to DOM will slow down our site . So to solve this issue a concept called virtual DOM is used to minimise the updateds to actual DOM . Here we are doing changes to virtual DOM and will combine all the cnnages in a batch and  finallywill apply them to actual DOM at one shot  . As virtual DOM updation is in memory and not contributes to view updation it is fast .libraries like react will have a diff algorithem of virtual dom to identiy what changes are made to DOM and first update the virtual DOM with new updates later same changes will get applied to actual DOM at one shot.  

In this POC one of technique to minimize the DOM updates is used with out using any library.

Performance can be improved by updating all DOM elements in a single operation. Adding each element one at a time causes up to twentyone reflows — one when the ul is appended, ten for each li and ten for the text. However, a single reflow can be implemented using a DOM fragment and building the nodes in memory first(virtual DOM)
