import axios from "axios";
import { useEffect, useState } from "react";

const useFetchProducts = () => {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                setProducts(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    return {products}
}

export default useFetchProducts;