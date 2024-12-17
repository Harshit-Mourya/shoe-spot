// import { createServer } from "miragejs";
// import { products, shoeKeys, shoeTypes } from "./sampleData.js";

// export function makeServer({ environment = "development" } = {}) {
//   return createServer({
//     environment,

//     routes() {
//       this.namespace = "api";

//       //Initial Fetch
//       this.get("/initialFetch", () => {
//         return {
//           products,
//           shoeKeys,
//           shoeTypes,
//         };
//       });

//       // Products route
//       this.get("/all", () => {
//         return products; // Return products from sampleData.js
//       });

//       // Route to get products by category

//       this.get("/category", (schema, request) => {
//         const params = request.queryParams;
//         const category = params.category;

//         if (category === "all") {
//           return products;
//         } else {
//           return products.filter((product) => product.category === category);
//         }
//       });

//       //To get products based on search
//       this.get("/search", (schema, request) => {
//         const { searchTerm } = request.queryParams; // Get the search term from query params

//         // If no search term is provided, return all products
//         if (!searchTerm) {
//           return products;
//         }

//         // Make the search term lowercase for case-insensitive search
//         const lowerSearchTerm = searchTerm.toLowerCase();

//         // Filter products by checking if the searchTerm exists in title, description, or category
//         const filteredProducts = products.filter((product) => {
//           return (
//             product.title.toLowerCase().includes(lowerSearchTerm) ||
//             product.description.toLowerCase().includes(lowerSearchTerm) ||
//             product.category.toLowerCase().includes(lowerSearchTerm)
//           );
//         });

//         return filteredProducts; // Return the filtered products
//       });

//       //To get products based on filter
//       this.get("/costrange", (schema, request) => {
//         const params = request.queryParams;
//         const cost = params.cost;
//         const shoeCategory = params.shoeCategory;

//         if (Array.isArray(cost) && cost.length === 2) {
//           const minCost = parseFloat(cost[0]);
//           const maxCost = parseFloat(cost[1]);

//           let filteredProducts = [];
//           if (shoeCategory === "all") {
//             filteredProducts = products;
//           } else {
//             filteredProducts = products.filter(
//               (product) => product.category === shoeCategory
//             );
//           }

//           return filteredProducts.filter((product) => {
//             return product.price >= minCost && product.price < maxCost;
//           });
//         } else {
//           return "Cost range invalid!";
//         }
//       });
//     },
//   });
// }
