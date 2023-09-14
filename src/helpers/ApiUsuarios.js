import axios from "axios";

export const postLogin = async (body) => {
  try {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      body
    );
    const data = response;
    return data;
  } catch (error) {
    return error;
  }
};

export const getUsuario = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      config
    );
    const data = response;
    return data;
  } catch (error) {
    return error;
  }
};
