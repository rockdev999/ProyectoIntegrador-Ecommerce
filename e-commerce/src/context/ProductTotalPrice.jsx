import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [subTotals, setSubtotals] = useState({});
  const [data, setData] = useState(() => {
    const storedProducts = localStorage.getItem("product");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const handleTotalUpdate = (productId, newSubtotal) => {
    setSubtotals((prevSubtotals) => {
      const updatedSubtotals = {
        ...prevSubtotals,
        [productId]: newSubtotal,
      };

      const newTotal = Object.values(updatedSubtotals).reduce(
        (sum, subtotal) => sum + subtotal,
        0
      );

      setTotal(newTotal);
      return updatedSubtotals;
    });
  };

  const addProduct = (img, title, price, id) => {
    setData((prevContent) => {
      const existingProductIndex = prevContent.findIndex(
        (product) => product.product.id === id
      );

      if (existingProductIndex !== -1) {
        const updatedContent = [...prevContent];
        const existingProduct = updatedContent[existingProductIndex];

        existingProduct.quantity = (existingProduct.quantity || 1) + 1;

        const newSubtotal =
          existingProduct.product.price * existingProduct.quantity;
        handleTotalUpdate(id, newSubtotal);

        localStorage.setItem("product", JSON.stringify(updatedContent));
        return updatedContent;
      } else {
        const info = { img, title, price, id, quantity: 1 };
        const updatedContent = [...prevContent, { product: info }];
        localStorage.setItem("product", JSON.stringify(updatedContent));

        handleTotalUpdate(id, price);
        return updatedContent;
      }
    });
  };

  const removeProduct = (productId) => {
    setData((prevContent) => {
      const updatedContent = prevContent.filter((product) => {
        return product.product.id !== productId;
      });

      localStorage.setItem("product", JSON.stringify(updatedContent));

      setSubtotals((prevSubtotals) => {
        const { [productId]: _, ...rest } = prevSubtotals;
        const newTotal = Object.values(rest).reduce(
          (sum, subtotal) => sum + subtotal,
          0
        );
        setTotal(newTotal);
        return rest;
      });

      return updatedContent;
    });
  };

  useEffect(() => {
    if (data && data.length > 0) {
      localStorage.setItem("product", JSON.stringify(data));
    }
  }, [data]);

  return (
    <ProductContext.Provider
      value={{
        total,
        setTotal,
        handleTotalUpdate,
        data,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
