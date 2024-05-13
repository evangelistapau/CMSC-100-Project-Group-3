Nicole L. Lacabe

CMSC 100 - U2L

*Code Description:*

App.jsx
- sets up the application by importing css file and components. 
defines arrays of products and navigation menu items. components renders a header, navigation menu, product display section, and footer. 
all products are mapped to the products component.
Uses Vite and React

App.css
- visual elements and layouting of the application

Components:
Footer.jsx
- displays additional information (copyright and contact details) at the bottom of the page.
renders two paragraphs styled with specific classes (footer-text) inside a container (footer-container)

Header.jsx
- header component that displays title/logo at the start/top of the page

Navigation.jsx
- navigation component responsible for rendering a navigation menu based on provided items.
each menu item is uniquely identified with a key derived from menu.id

Products.jsx
- products component used to render individual product cards. 
each card displays product details such as an image (product.image), name (product.name), price (product.price), and an "Add to Cart" button.

Cart.jsx
- cart component where the user can add items to cart and will show how many items are in the cart
takes cartItems and onRemoveFromCart as props, calculates the total number of items in the cart using reduce
has useState hook in App.jsx to manage cartItems state