import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/View-Button.png';

const Sales = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [orderToView, setOrderToView] = useState({});
    const [groupedOrders, setGroupedOrders] = useState({});
    const [weeklyClicked, setWeekly] = useState(true);
    const [monthlyClicked, setMonthly] = useState(false);
    const [annuallyClicked, setAnnually] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/get-all-orders')
            .then(response => response.json())
            .then(body => {
                setOrders(body);
                groupOrders(body, 'weekly');
            });

        fetch('http://localhost:3000/get-all-products')
            .then(response => response.json())
            .then(body => {
                setProducts(body);
            });
    }, []);

    const groupOrders = (orders, filterType) => {
        const grouped = {};

        orders.forEach(order => {
            const orderDate = new Date(order.dateOrdered);
            let groupKey;

            if (filterType === 'weekly') {
                const weekStart = new Date(orderDate.setDate(orderDate.getDate() - orderDate.getDay()));
                groupKey = `${weekStart.getFullYear()}-${weekStart.getMonth() + 1}-${weekStart.getDate()}`;
            } else if (filterType === 'monthly') {
                groupKey = `${orderDate.getFullYear()}-${orderDate.getMonth() + 1}`;
            } else if (filterType === 'annually') {
                groupKey = orderDate.getFullYear();
            }

            if (!grouped[groupKey]) {
                grouped[groupKey] = [];
            }
            grouped[groupKey].push(order);
        });

        setGroupedOrders(grouped);
    };

    const handleFilterClick = (filterType) => {
        setWeekly(filterType === 'weekly');
        setMonthly(filterType === 'monthly');
        setAnnually(filterType === 'annually');
        groupOrders(orders, filterType);
    };

    return (
        <>
            <div className="sales-main">
                <div className={`sales-order-list ${Object.keys(orderToView).length === 0 ? 'full-width' : ''}`}>
                    <p className="sales-order-title">Sales Reports</p>
                    <div className="view">
                        <span>View:</span>
                        <button onClick={() => handleFilterClick('weekly')} className={weeklyClicked ? "clicked" : "initial"}>Weekly</button>
                        <button onClick={() => handleFilterClick('monthly')} className={monthlyClicked ? "clicked" : "initial"}>Monthly</button>
                        <button onClick={() => handleFilterClick('annually')} className={annuallyClicked ? "clicked" : "initial"}>Annually</button>
                        <button className="indiv-prod-sales-btn">
                            <Link to={`/root-admin/sales-products`} className="indiv-prod-sales-text">View Individual Product Sales &gt;</Link>
                        </button><br/>
                    </div>
                    <br/><br/>
                    {Object.keys(groupedOrders).map(groupKey => {
                        const totalSales = groupedOrders[groupKey]
                        .filter(order => order.orderStatus === 1)
                        .reduce((total, order) => total + order.totalPrice, 0);

                    return (
                        <div key={groupKey}>
                            <h3 className="group-key">{groupKey}</h3>
                            <table className="sales-order-table">
                                <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Date Ordered</th>
                                        <th>Time Ordered</th>
                                        <th>View Order Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedOrders[groupKey].filter(order => order.orderStatus === 1).map((order, index) => (
                                        <tr key={index}>
                                            <td>{order.transactionID}</td>
                                            <td>{order.dateOrdered.slice(0, 10)}</td>
                                            <td>{order.timeOrdered}</td>
                                            <td>
                                                <button 
                                                    onClick={() => setOrderToView(order)}
                                                    className="view-button"
                                                >
                                                    <img src={logo} className="view-button-img" alt="View"/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h4 className="group-total-sales">Total Sales: Php {totalSales}.00</h4>
                        </div>
                        );
                    })}
                </div>
                {Object.keys(orderToView).length !== 0 && (
                    <div className={`sales-product-list ${Object.keys(orderToView).length === 0 ? 'hidden' : ''}`}>
                        <p className="sales-product-title">Products</p>
                        <div>
                            <table className="sales-product-table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Order Quantity</th>
                                        <th>Item Total Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderToView.productIDs && orderToView.productIDs.map((orderProductId, index1) => (
                                        products.map((product, index2) => (
                                            orderProductId === product._id ? (
                                                <tr key={index2}>
                                                    <td>{product.productName}</td>
                                                    <td>P{product.productPrice}</td>
                                                    <td>{orderToView.orderQuantity[index1]}</td>
                                                    <td>{product.productPrice * orderToView.orderQuantity[index1]}</td>
                                                </tr>
                                            ) : null
                                        ))
                                    ))}
                                </tbody>
                            </table>
                            <div className="sales-product-totals">
                                <div className="sales-product-total-items">
                                    <p>Total items: {orderToView.itemQuantity}</p>
                                </div>
                                <div className="sales-product-total-cost">
                                    <p>Total cost: P{orderToView.totalPrice}</p>
                                </div>
                            </div>
                            <div className="sales-product-buttons">
                                <button onClick={() => setOrderToView({})} className="cancel-approval">Back</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Sales;
