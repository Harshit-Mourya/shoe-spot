import { createServer } from "miragejs";
import { products } from "./sampleData.js";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      // Products route
      this.get("/products", () => {
        return products; // Return products from sampleData.js
      });

      // Route to get products by category
      this.get("/sneakers", (schema, request) => {
        return products.filter((product) => product.category === "Sneakers");
      });
      this.get("/loafers", (schema, request) => {
        return products.filter((product) => product.category === "Loafers");
      });
      this.get("/sandals", (schema, request) => {
        return products.filter((product) => product.category === "Sandals");
      });
      this.get("/slides", (schema, request) => {
        return products.filter((product) => product.category === "Slides");
      });
      this.get("/oxfords", (schema, request) => {
        return products.filter((product) => product.category === "Oxfords");
      });
      this.get("/derbyshoes", (schema, request) => {
        return products.filter((product) => product.category === "DerbyShoes");
      });
      this.get("/mojaris", (schema, request) => {
        return products.filter((product) => product.category === "Mojaris");
      });
      this.get("/sports", (schema, request) => {
        return products.filter((product) => product.category === "Sports");
      });
    },
  });
}
