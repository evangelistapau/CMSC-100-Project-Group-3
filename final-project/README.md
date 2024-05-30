### CMSC 100 | U2L | AY '23-'24 | Final Project
**Group 3:**
- Evangelista, Pauline Joy
- Lacabe, Nicole
- Maranan, Arl Jethro
- Paleracio, Arianne Mae
<br>

**Overview:**<br>
This project, named 'Farm-To-Table,' utilizes ReactJS, NodeJS (with ExpressJS), and MongoDB Compass to create an e-commerce website aimed at bridging the gap between consumers and farmers. The website has two key users with the following features:

1. Customers
	- Shop - view all products for sale and place orders
	- Orders - view all orders, cancel pending orders
	- Profile - view and edit profile details, view purchase history

2. Admin
	- User Accounts - view all user details
	- Product Listings - view, edit, and delete products
	- Order Fulfillment - view and approve pending orders
	- Sales Reports - view weekly, monthly, and annual sales income, view sales income per product
<br>

**How To Run:**

1. Clone this project in your local machine.
2. Open two terminals and go to the directory of the project. On one terminal, go to backend/farm-api, then on the other, go to the root (final-project).
3. Run 'node server.js' on the terminal at farm-api, then 'npm run dev' on the terminal at the root.
4. On your browser, type 'localhost:5173'. You should be able to see the sign-up page.
![sign-up](https://drive.google.com/uc?export=view&id=1Ynwt8UaynTICKvvwOAgLFJclve0ww3QL)<br><br>

For customers:
1. Create an account on the sign-up page, then log-in using your username and password. You will be redirected to the shop.
![shop](https://drive.google.com/uc?export=view&id=1jdDIIBJqOIxbI2g3j3qfglVq1w1PiUKX)<br><br>
2. Select 'Add To Cart' to fill the shopping cart, then click 'Checkout' to see your order summary. Click 'Place Order' to send it to the admin for confirmation.
![summary](https://drive.google.com/uc?export=view&id=1nbueiLowfapANoV8ECkGbnGwafOshds-)<br><br>
3. You can view the status of your orders in the 'Orders' tab, and cancel them if you wish to. You can also view and edit your profile in the 'Profile' tab, as well as view your history of purchases.
![profile](https://drive.google.com/uc?export=view&id=1QuxBZ1R7lgudXz8fxvUf6r5FxUtXzos7)<br><br>
4. Once your order is confirmed, the order will be colored green and the status will display 'Confirmed (ready for delivery).'
![orders](https://drive.google.com/uc?export=view&id=1Y57ICza_VTZnwOzJJ9S5gaQttvNbi2y9)<br><br>

For the admin:
1. Click 'Login as Admin' on the sign-up page, then log-in using your credentials. You will be redirected to the admin dashboard.
![admin](https://drive.google.com/uc?export=view&id=1p4yPSZN2JZ7qt0SyQEPFHixQLtdyz-M5)<br><br>
2. In 'User Accounts,' you will be able to view all users.
![users](https://drive.google.com/uc?export=view&id=1OMs12mkDGqZK-ZuTSEAQmB4HzeUa1Bsp)<br><br>
3. In 'Product Listings,' you will be able to view, edit, and delete all products.
![products](https://drive.google.com/uc?export=view&id=1QYA2HsaNW58KBPYIFvCla4hLkiPsQ2iC)<br><br>
4. In 'Order Fulfillment,' you will be able to approve all pending orders. Once 'Confirm Approval' is clicked, the order status will be changed to 'Confirmed.'
![fulfill](https://drive.google.com/uc?export=view&id=1z3ibJo7H1Vt-7cw_621jsnc5gGTVL5eL)<br><br>
5. In 'Sales Reports,' you will be able to view all confirmed orders per week, month, or year, as well as the sales income of individual products.
![sales](https://drive.google.com/uc?export=view&id=1sWzMWaw2DGrj7rx7FBRjlqC8jQqxKInh)<br><br>