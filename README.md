# VueAssignment
Vue.js Assignment 3 for COMP602


![Screenshot_6](https://github.com/SandalBandit/VueAssignment/assets/119099353/bae4e979-49d0-4f5a-822d-9705129df40d)


CODE SCREENSHOTS
VUE.JS LIBRARY -

![Screenshot_Code1](https://github.com/SandalBandit/VueAssignment/assets/119099353/1f6b53e8-1bf3-4b13-9b47-66c46ac03611)

This script tag is necessary because it ensures that the Vue.js library is loaded and ready for use in the code I write. After successfully loading the Vue.js library, I can begin using its features and creating Vue.js code, such as building components, configuring data binding, and managing user interactions.

The <script> code underlined above specifies the URL or location which the Vue.js library is being loaded from.

VUE.JS APP COMPONENTS & TEMPLATES -
 
![Screenshot_Code2](https://github.com/SandalBandit/VueAssignment/assets/119099353/21278bc6-b79f-4853-8e36-ee6952342810)

This piece of code acts as a container for the Vue application.

Inside the "app" container, I have two Vue components being used: "products-component" and "footer-component". These components are inserted as custom HTML tags within the "app" container.

The first component, "products-component", is represented by the <products-component></products-component> tag. It is responsible for displaying a section of the webpage related to products. The actual implementation of this component is in my Vue Templates section of code.

The second component, "footer-component", is represented by the <footer-component></footer-component> tag. This component represents the footer section of my products page. Like the "products-component", the implementation of this component is in my Vue Templates section of code.


![Screenshot_Code3](https://github.com/SandalBandit/VueAssignment/assets/119099353/d5d50584-cfc1-405f-93bf-d4148af90813)


This piece of code is the Templates. Vue will render the necessary components and replace the tags with the real content defined in these Templates when the component tags are used within the "app" container.

  
![Screenshot_Code4](https://github.com/SandalBandit/VueAssignment/assets/119099353/6e136f05-928d-4302-999f-c13574542fe9)

In this code contains the main Vue Component script code.

The "products-component" is defined with Vue.component('products-component'). It has a template property referring to the element with the id '#products-template' which is under the Vue Templates section of my HTML code. 
It also has a data property returning an object with a products array, containing information about different products. Each product is represented as an object with the properties, 'id', 'name', 'price', and 'image'.

These properties store specific details about each product, such as its identifier, name, price, and the image file path.


The "products-component" has a methods property with an addToCart() method, which currently redirects to './cart.html'.
No actual cart functionality.


The "footer-component" is defined similarly with Vue.component('footer-component'). It has a template property referring to the element with the id '#footer-template' which is under the Vue Templates section of my HTML code.

Lastly, the Vue instance is created by calling new Vue({...}). The instance is bound to the HTML element with the id "#app". This connection allows the Vue components to be rendered within the "app" element on my products page.
 
