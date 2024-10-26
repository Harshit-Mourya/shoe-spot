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

      this.get("/category", (schema, request) => {
        const params = request.queryParams;
        const category = params.category;

        return products.filter((product) => product.category === category);
      });
      this.get("/costrange", (schema, request) => {
        const params = request.queryParams;
        const cost = params.cost;

        if (Array.isArray(cost) && cost.length === 2) {
          const minCost = parseFloat(cost[0]);
          const maxCost = parseFloat(cost[1]);

          return products.filter((product) => {
            return product.price >= minCost && product.price < maxCost;
          });
        }
      });
    },
  });
}
