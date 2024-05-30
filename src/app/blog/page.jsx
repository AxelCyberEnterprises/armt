// "use Client"
// import React, { useEffect, useState } from "react";
// import "./page.css";

// async function fetchCategories() {
//   "use client"
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };

//   try {
//     const res = await fetch("http://127.0.0.1:1337/api/categories", options);
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.error(err);
//     return null; // Return null in case of error
//   }
// }

// const Page = () => {
//   const [categories, setCategories] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchCategories();
//       setCategories(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {categories?.data?.map((category) => (
//         <div key={category.id}>
//           {category.attributes.Title}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;








// // import React from "react"
// // import "./page.css"


// // async function fetchCategories() {
// //   const options = {
// //     headers: {
// //       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
// //     },
// //   };

// //   try {
// //     const res = await fetch("http://127.0.0.1:1337/api/categories", options);
// //     const response = await res.json();
// //     return response;
// //   } catch (err) {
// //     console.error(err);
// //   }
// // }



// // export default async function Page() {
// //   const categories = await fetchCategories();
// //   console.log(categories)
// //   // const blogs = await fetchBlogs();
  
// //   return (

// //     <div>
// //       {categories?.data?.map((category) => (
// //         <div key={categories.id}>
// //           {categories.data.attributes.Title}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
// // import React, { useState, useEffect } from 'react';

// // const MyComponent = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('http://127.0.0.1:1337/api/categories');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const jsonData = await response.json();
// //         setData(jsonData);
// //       } catch (error) {
// //         setError(error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

// //   return (
// //     <div>
// //       <h1>Data from API:</h1>
// //       <ul>
// //         {data.map(item => (
// //           <li key={item.id}>{item.name}</li> // Assuming API returns an array of objects with 'id' and 'name' fields
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default MyComponent;
