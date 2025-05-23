import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export const getApi = async (url, setLoading,setData,fieldName) => {
  setLoading(true);
  try {
    const res = await axios.get(`${apiUrl}/${url}`);
    if (res.status === 200) {
      setData((data) => ({
      ...data,
      [fieldName]: res.data[fieldName],
      }));
    }
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    setLoading(false);
  }
};

