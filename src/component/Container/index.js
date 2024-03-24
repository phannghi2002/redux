import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/actions";
import { useEffect } from "react";
import Products from "../Products";
import "./Container.scss";

function Container() {
  const dispatch = useDispatch();
  const callAPI = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error:", err);
      });

    dispatch(getData(res.data));
    console.log(res.data);
  };

  useEffect(() => {
    callAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <h2 className="container">
      <Products />
    </h2>
  );
}

export default Container;
