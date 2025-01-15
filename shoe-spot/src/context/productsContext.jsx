import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://shoe-spot-backend.onrender.com";

export const productsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoeKeys, setShoeKeys] = useState([]);
  const [shoeTypes, setShoeTypes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shoeCategory, setShoeCategory] = useState("all");

  const filterProductsByPrice = async (costrange) => {
    setLoading(true);

    try {
      const response = await axios.get("/costrange", {
        params: { costrange: JSON.stringify(costrange), shoeCategory },
      });
      // console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(
        error?.response?.data?.message ||
          "Failed to fetch products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const filterProductsByCategory = async (category = "all") => {
    setLoading(true);

    try {
      const response = await axios.get(`/category`, {
        params: { category },
      });
      // console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(
        error?.response?.data?.message ||
          "Failed to fetch products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const searchProduct = async (searchTerm) => {
    setLoading(true);

    try {
      const response = await axios.get(`/search`, {
        params: { searchTerm },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(
        error?.response?.data?.message ||
          "Failed to fetch products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // console.log("Fetching products...");
        const response = await axios.get("/");
        const { products, shoeKeys, shoeTypes } = response.data;

        // console.log(response.data);
        // console.log({ products, shoeKeys, shoeTypes });
        setProducts(products);
        setShoeKeys(shoeKeys);
        setShoeTypes(shoeTypes);
      } catch (err) {
        setError(
          err?.response?.data?.message ||
            "Failed to fetch products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const value = useMemo(
    () => ({
      products,
      shoeKeys,
      shoeTypes,
      error,
      loading,
      searchProduct,
      filterProductsByPrice,
      filterProductsByCategory,
      setShoeCategory,
    }),
    [products, error, loading]
  );

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
