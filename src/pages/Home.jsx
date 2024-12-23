import ListaPosts from "../componentes/ListPosts";
import ListCategories from "../componentes/ListCategorias";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListaPosts url={"/posts"}/>
    </main>
  );
};

export default Home;
