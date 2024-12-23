import axios from "axios";
export const api = axios.create({
    //API SUBIDA A VECEL
    baseURL: "https://alura-api-veterinaria.vercel.app", 
    //Api Local
    // baseURL: "http://localhost:5000",

});

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    // console.log(respuesta);
    setData(respuesta.data);
}