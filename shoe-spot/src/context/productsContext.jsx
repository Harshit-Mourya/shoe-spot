import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";

export const productsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoeKeys, setShoeKeys] = useState([]);
  const [shoeTypes, setShoeTypes] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const filterProducts = async (filter = "all", cost) => {
    setLoading(true);

    try {
      const response = await axios.get(`/api/${filter.toLowerCase()}`, {
        params: { cost },
      });
      setProducts(response.data);
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
      const response = await axios.get(`/api/category`, {
        params: { category },
      });
      setProducts(response.data);
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
        const response = await axios.get("/api/initialFetch");
        console.log(response.data);
        const { products, shoeKeys, shoeTypes } = response.data;
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

      filterProducts,
      filterProductsByCategory,
    }),
    [products, error, loading]
  );

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
