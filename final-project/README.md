## CMSC 100 | U2L | AY '23-'24
## FINAL PROJECT | Farm-To-Table

**Group 3**
- Evangelista, Pauline Joy
- Lacabe, Nicole
- Maranan, Arl Jethro
- Paleracio, Arianne Mae


**Overview:**
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


**How To Run:**
1. Clone this project in your local machine.
2. Open two terminals and go to the directory of the project. On one terminal, go to backend/farm-api, then on the other, go to the root (final-project).
3. Run 'node server.js' on the terminal at farm-api, then 'npm run dev' on the terminal at the root.
4. On your browser, type 'localhost:5173'. You should be able to see the sign-up page.

For customers:
1. Create an account on the sign-up page, then log-in using your username and password. You will be redirected to the shop.
2. Select 'Add To Cart' to fill the shopping cart, then click 'Checkout' to see your order summary. Click 'Place Order' to send it to the admin for confirmation.
3. You can view the status of your orders in the 'Orders' tab, and cancel them if you wish to. You can also view and edit your profile in the 'Profile' tab, as well as view your history of purchases.
4. Once your order is confirmed, the order will be colored green and the status will display 'Confirmed (ready for delivery).'

For the admin:
1. Click 'Login as Admin' on the sign-up page, then log-in using your credentials. You will be redirected to the admin dashboard, namely 'User Accounts,' 'Product Listings,' 'Order Fulfillment,' and 'Sales Reports.'
2. In 'User Accounts,' you will be able to view all users.
3. In 'Product Listings,' you will be able to view, edit, and delete all products.
4. In 'Order Fulfillment,' you will be able to approve all pending orders. Once 'Confirm Approval' is clicked, the order status will be changed to 'Confirmed.'
5. In 'Sales Reports,' you will be able to view all confirmed orders per week, month, or year, as well as the sales income of individual products.