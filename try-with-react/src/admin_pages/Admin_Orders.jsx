import React, { useEffect, useState } from 'react';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [selectedOrderProducts, setSelectedOrderProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/get-all-orders')
      .then(response => response.json())
      .then(body => {
        setOrders(body);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/get-all-products')
      .then(response => response.json())
      .then(body => {
        setProducts(body);
      });
  }, []);

  // Function to handle approval button click
  const handleApproveClick = (order) => {
    let orderProducts = [];

    for (let i = 0; i < order.productIDs.length; i++){
      for (let j = 0; j < products.length; j++){
        if (products[j].productID == order.productIDs[i]){
          orderProducts = [...orderProducts, products[j]];
          break;
        }
      }
    }

    setSelectedOrder(order);
    setSelectedOrderProducts(orderProducts);
  };

  return (
    <>
      <main className='admin-main-page'>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order Transaction ID</th>
                <th>Date and Time Completed</th>
                <th>Status</th>
                <th>Approve?</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.transactionID}</td>
                  <td>{order.dateOrdered}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    <button onClick={() => handleApproveClick(order)}>Approve</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Conditional rendering of the div */}
        {Object.keys(selectedOrder).length > 0 && (
          <div className="approval-div">
            {/* <p>Order {selectedOrderId} approved!</p> */}
              <h3>Approval Confirmation for Order Transaction {selectedOrder.transactionID}</h3>
              <div>
                <p> Products: </p>
                <table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrderProducts.map((product, index) => (
                      <tr key={index}>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>{selectedOrder.orderQuantity[index]}</td>
                        <td>{product.productPrice * selectedOrder.orderQuantity[index]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
        )}
      </main>
    </>
  );
}
