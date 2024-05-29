import { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';

const SalesProducts = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [soldProducts, setSold] = useState([]);
    const [totalSales, setTotalSales] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/get-all-orders')
            .then(response => response.json())
            .then(body => {
                setOrders(body);
            });

        fetch('http://localhost:3000/get-all-products')
            .then(response => response.json())
            .then(body => {
                setProducts(body);
            });
    }, []);

    useEffect(() => {
        const tempSold = [];
        let tempTotal = 0;
        for(const [i, order] of orders.entries()){                             // per order
            if(order.orderStatus === 1){                                       // per confirmed order
                for(const [index, id] of order.productIDs.entries()){          // per id of item
                    for(const p of products){                   // per product
                        if(id === p._id){                       // per ordered & confirmed order
                            const newSold = {
                                name: p.productName,
                                indivPrice: p.productPrice,
                                unitsSold: order.orderQuantity[index],
                            };
                            
                            tempTotal = tempTotal + (p.productPrice * order.orderQuantity[index]);

                            let flag = 0;
                            for(const sold of tempSold){
                                if(sold.name === newSold.name){
                                    flag++;
                                    sold.unitsSold = sold.unitsSold + newSold.unitsSold;
                                    break;
                                }
                            }
                            if(flag == 0){
                                tempSold.push(newSold);
                            }
                        }
                    }
                }
            }
        }
        setSold(tempSold);
        setTotalSales(tempTotal);
    }, [orders, products])

    return (
        <>
        <div className="product-summary-main">
            <button className="summary-back-btn"><Link to={`/root-admin/sales`} className="summary-back-text">&lt; Back To Sales Reports</Link></button>
            <p className="summary-title">Individual Product Sales Summary</p>
            <table className="product-summary-table">
                <tr>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Total Units Sold</th>
                    <th>Sales Income (in Php)</th>
                </tr>
                {soldProducts.map((item) =>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.indivPrice}</td>
                        <td>{item.unitsSold}</td>
                        <td>{item.indivPrice * item.unitsSold}</td>
                    </tr>
                )}
            </table>
            <br/>
            <br/>
            <span className="qty-label">Total Sales Income: </span>
            <span className="qty-value">Php {totalSales}.00</span><br /><br />
        </div>
        </>
    );
};

export default SalesProducts;
