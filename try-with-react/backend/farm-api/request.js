// sample lang to kasi tinest ko sa mongodb ko hehe
import needle from 'needle';

// needle.post('http://localhost:3000/save-user', {
//     firstName: "First Name",
//     middleName: "Middle",
//     lastName: "Last",
//     userType: "customer",
//     email: "email@up.edu.ph",
//     password: "wonwoomylabs"
// }, (err, res) =>{
//     console.log(res.body)
// })

// needle.post('http://localhost:3000/save-product', {
//     productID: "1",
//     productName: "Chicken Feeds",
//     productDescription: "tiktilaok",
//     productType: 3,
//     productQuantity: 10,
//     productPrice: 500  
// }, (err, res) =>{
//     console.log(res.body)
// })

needle.post('http://localhost:3001/save-order', {
    transactionID: "ABC1",
    productIDs: ["1", "2", "3"],
    orderQuantity: [5,4,3],
    orderStatus: 0,            // (Int: 0 Pending / 1 Completed / 2 Canceled )
    email: "adpaleracio@up.edu.ph",
    dateOrdered: "2024-05-04T18:00:00Z",
    time: "2024-05-04T18:00:00Z"
}, (err, res) =>{
    console.log(res.body)
})

// needle.post('http://localhost:3001/save-order', {
//     transactionID: "ABC2",
//     productIDs: ["1", "2"],
//     orderQuantities: [6,7],
//     orderStatus: 0,            // (Int: 0 Pending / 1 Completed / 2 Canceled )
//     email: "adpaleracio@up.edu.ph",
//     dateOrdered: "2024-05-04T18:00:00Z",
//     time: "2024-05-04T18:00:00Z"
// }, (err, res) =>{
//     console.log(res.body)
// })

// needle.post('http://localhost:3001/save-order', {
//     transactionID: "ABC3",
//     productIDs: ["1", "3"],
//     orderQuantities: [2,5],
//     orderStatus: 0,            // (Int: 0 Pending / 1 Completed / 2 Canceled )
//     email: "adpaleracio@up.edu.ph",
//     dateOrdered: "2024-05-04T18:00:00Z",
//     time: "2024-05-04T18:00:00Z"
// }, (err, res) =>{
//     console.log(res.body)
// })

// needle.post('http://localhost:3001/save-order', {
//     transactionID: "ABC4",
//     productIDs: ["2"],
//     orderQuantities: [4],
//     orderStatus: 0,            // (Int: 0 Pending / 1 Completed / 2 Canceled )
//     email: "adpaleracio@up.edu.ph",
//     dateOrdered: "2024-05-04T18:00:00Z",
//     time: "2024-05-04T18:00:00Z"
// }, (err, res) =>{
//     console.log(res.body)
// })



//updating a product
// needle.post('http://localhost:3000/update-qty', {
//     productID: "1"
// }, (err, res) =>{
//    console.log(res.body)
// })


// needle.post('http://localhost:3000/update-status', {
//     transactionID: "ABC",
//     orderStatus: 1
// }, (err, res) =>{
//    console.log(res.body)
// })

// deleting a product
// needle.post('http://localhost:3000/remove-product', { 
//     productID: "1"                           
// }, (err, res) => {
//     console.log(res.body)
// })


// needle.get('http://localhost:3000/get-all-products', (err, res) =>{
//     console.log(res.body)
// })

// needle.get('http://localhost:3000/get-all-orders', (err, res) =>{
//     console.log(res.body)
// })