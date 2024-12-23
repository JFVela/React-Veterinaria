import { useParams } from "react-router-dom";
import ListaPosts from "../componentes/ListPosts";

const SubCategoria = () => {
    const { subcategoria } = useParams();
    
    return (
        <ListaPosts url={`/posts?subcategoria=${subcategoria}`} />
    );
};

export default SubCategoria;