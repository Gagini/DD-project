import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Delightful Delivers</span>{" "}
          Step into a world of wonder at our gift shop, where treasures await every corner. Discover a delightful array of unique presents, from handcrafted keepsakes to stylish home decor. Whether you're searching for the perfect birthday surprise, a thoughtful wedding gift, or a little something special for yourself, our curated collection has something to enchant everyone. Let the spirit of giving guide you as you explore our shelves brimming with possibilities, and find the ideal token to express your love, appreciation, or simply to brighten someone's day.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;

// import React, { useState } from 'react';
// // import './App.css';

// function App() {
//     const [productName, setProductName] = useState('');
//     const [productDescription, setProductDescription] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productImage, setProductImage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Here you would typically send the data to your server
//         console.log('Product added:', {
//             productName,
//             productDescription,
//             productPrice,
//             productImage
//         });

//         // Clear form fields after submission
//         setProductName('');
//         setProductDescription('');
//         setProductPrice('');
//         setProductImage('');

//         alert('Product added successfully!');
//     };

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>Admin Dashboard</h1>
//                 <nav>
//                     <ul>
//                         <li><a href="#add-product">Add Product</a></li>
//                         <li><a href="#manage-orders">Manage Orders</a></li>
//                         <li><a href="#view-customers">View Customers</a></li>
//                     </ul>
//                 </nav>
//             </header>
            
//             <main>
//                 <section id="add-product">
//                     <h2>Add New Product</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="product-name">Product Name:</label>
//                         <input
//                             type="text"
//                             id="product-name"
//                             value={productName}
//                             onChange={(e) => setProductName(e.target.value)}
//                             required
//                         />
                        
//                         <label htmlFor="product-description">Description:</label>
//                         <textarea
//                             id="product-description"
//                             value={productDescription}
//                             onChange={(e) => setProductDescription(e.target.value)}
//                             required
//                         ></textarea>
                        
//                         <label htmlFor="product-price">Price:</label>
//                         <input
//                             type="number"
//                             id="product-price"
//                             value={productPrice}
//                             onChange={(e) => setProductPrice(e.target.value)}
//                             required
//                         />
                        
//                         <label htmlFor="product-image">Image URL:</label>
//                         <input
//                             type="url"
//                             id="product-image"
//                             value={productImage}
//                             onChange={(e) => setProductImage(e.target.value)}
//                             required
//                         />
                        
//                         <button type="submit">Add Product</button>
//                     </form>
//                 </section>
                
//                 <section id="manage-orders">
//                     <h2>Manage Orders</h2>
//                     {/* Order management functionality will go here */}
//                 </section>
                
//                 <section id="view-customers">
//                     <h2>View Customers</h2>
//                     {/* Customer information functionality will go here */}
//                 </section>
//             </main>
            
//             <footer>
//                 <p>&copy; 2024 Customized Gift Shop</p>
//             </footer>
//         </div>
//     );
// }

// export default App;
