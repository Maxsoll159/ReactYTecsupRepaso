import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=50"
    );
    const data = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const getProductsId = async (id) => {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const data = response;
    return data;
  } catch (error) {
    return error;
  }
};
