import React, { useEffect, useState } from 'react';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [selectedOrderProducts, setSelectedOrderProducts] = useState([]);

  const handleStatusUpdate = async () => {
    try {
      const response = await fetch('http://localhost:3001/update-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transactionID: selectedOrder.transactionID,
          orderStatus: 1,
        }),
      });
  
      if (response.ok) {
        setOrders(prevOrders => prevOrders.filter(order => order.transactionID !== selectedOrder.transactionID));
        setSelectedOrder({});
        setSelectedOrderProducts([]);
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

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

  const totalProductCount = (productArray) => {
    let count = 0;

    for (let i = 0; i < productArray.length; i++) {
      count += productArray[i];
    }

    return count;
  }

  const totalSales = (productCounts, productsArray) => {
    let total = 0;

    productsArray.map((product, index) => {
      total += product.productPrice * productCounts[index];
    })

    return total;
  }

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
                order.orderStatus == 0 ? 
                <tr key={index}>
                  <td>{order.transactionID}</td>
                  <td>{order.dateOrdered}</td>
                  <td>{order.orderStatus}</td>
                  <td>
                    <button onClick={() => handleApproveClick(order)}>Approve</button>
                  </td>
                </tr> : null
              ))}
            </tbody>
          </table>
        </div>
        {Object.keys(selectedOrder).length > 0 && (
          <div className="approval-div">
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
                      <td>₱{product.productPrice}.00</td>
                      <td>{selectedOrder.orderQuantity[index]}</td>
                      <td>₱{product.productPrice * selectedOrder.orderQuantity[index]}.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3>Total Products: {totalProductCount(selectedOrder.orderQuantity)}</h3>
            <h3>Total Sales: ₱{totalSales(selectedOrder.orderQuantity, selectedOrderProducts)}.00</h3>
            <button onClick={handleStatusUpdate}>Confirm and Approve</button>
          </div>
        )}
      </main>
    </>
  );
}
