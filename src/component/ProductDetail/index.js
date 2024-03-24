import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataDetail } from "../../redux/actions";
import "./ProductDetail.scss";
import Button from "react-bootstrap/Button";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { image, title, price, description, category } = product;
  console.log(title);
  const dispatch = useDispatch();
  const fetchAPIDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error:", err);
      });

    console.log(res);
    dispatch(getDataDetail(res.data));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (productId && productId !== "") fetchAPIDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="wrapper">
      {Object.keys(product).length !== 0 ? (
        <div className="content">
          <div className="image">
            <img src={image} alt={title} className="image_detail" />
          </div>

          <div className="line">
            <div className="word">AND</div>
          </div>

          <div className="info">
            <div className="title_detail">{title}</div>
            <span className="price_detail">${price}</span>
            <div className="category_detail">{category}</div>
            <div className="description_detail">{description}</div>
            <Button variant="danger">Add to cart</Button>{" "}
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </div>
  );
}

export default ProductDetail;
