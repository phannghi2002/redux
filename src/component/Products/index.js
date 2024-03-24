import { useSelector } from "react-redux";
import "./Products.scss";
import { Link } from "react-router-dom";

function Products() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(typeof products);

  let renderList;
  if (products) {
    renderList = products.map((product, key) => {
      const { id, title, price, category, image } = product;
      return (
        <Link to={`/product/${id}`} className="link" key={id}>
          <div className="_card">
            <img src={image} alt={title} className="img" />

            <div>
              <div className="title">{title}</div>
              <div className="price">{price}$</div>
              <div className="category">{category}</div>
            </div>
          </div>
        </Link>
      );
    });

    return <>{renderList}</>;
  }
  //   return <div>heh</div>;
}

export default Products;
