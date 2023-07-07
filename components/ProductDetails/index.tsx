/* ./components/productdetail/Product.tsx */
"use client";
import React, {
  Component,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";
import DetailsThumb from "./DetailsThumb";
import styles from "../../styles/modular/ProductDetails.module.css";
import Container from "../Container";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCartPlus, BsArrowReturnRight } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { GiReturnArrow } from 'react-icons/gi';
import QuantityInput from "./QuantityInput";
import StarReview from "./StarReview";
import HeartCheckboxComponent from "../HeartCheckboxComponent";

interface Product {
  _id: string;
  title: string;
  src: string[];
  description: string;
  price: string;
  colors: string[];
  count: number;
  delivery: string;
}

interface AppState {
  products: Product[];
  index: number;
}

interface ProductDetailsT {
  id: number;
  title: string;
  src: string[];
  description: string;
  price: number;
  colors: string[];
  rating : number;
  minDays: number;
  maxDays: number;
}

type Props = {};

const ProductDetails = ({}: Props) => {
  const [product, setProduct]: [ProductDetailsT, any] = useState({
    id: 1,
    title: "Turkish Moroccan Mosaic Table Lamp, 3 Globes Bohemian Bedside lamp",
    src: ["./Picture.png", "./Pic1.jpg", "./Pic2.webp", "./Pic3.webp"],
    description: "this is a product description",
    price: 45.5,
    rating: 4.3,
    colors: ["red", "black", "crimson", "teal"],
    minDays: 5,
    maxDays: 10,
  });

  const [quantity, setQuantity] = useState(1);

  const [index, setIndex] = useState(0);

  const myRef = useRef(null);
  const [openDescription, setOpenDescription] = useState(false);

  useEffect(() => {
    const images = myRef.current?.children;
    if (images) {
      images[index].className = "active";
    }
  }, [myRef]);

  const handleTab = (index_: number) => {
    setIndex(index_);
    const images = myRef.current?.children;
    if (images) {
      for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", "");
      }
      images[index_].className = "active";
    }
  };

  const formatDelivery = (minDays: number, maxDays: number) => {
    return `${minDays} - ${maxDays} business days`;
  };

  const handleStep = (step : number) => {
      let newQuantity = quantity + step;
      if (step < 0  ) {
        if (newQuantity <= 0) {
          setQuantity(1);
        }else {
          setQuantity(newQuantity)
        }
      }else{
        if (newQuantity > 10){
          setQuantity(10);
        }else{
          setQuantity(newQuantity)
        }
      }
  }

  return (
    <>
      <Container>
        <div className={`mx-auto ${styles.app} max-w-[1100px] my-16`}>
          <div className={"flex gap-11 "}>
            <div className={"flex flex-col items-center ml-4"} key={product.id}>
              <div className={styles["big-img"]+ " relative"}>
                <img src={product.src[index]} alt="" />
                <div className="absolute top-3 right-3 rounded-full p-1 bg-white">
                  <HeartCheckboxComponent  size="text-sm" />
                </div>
              </div>
              <DetailsThumb
                images={product.src}
                tab={handleTab}
                myRef={myRef}
              />
            </div>
            <div className={"flex flex-col gap-3 pt-12"}>
              <div className="">
                <h2 className="text-2xl font-semibold text-white mt-3 inter">
                  {product.title}
                </h2>
                <StarReview rating={product.rating} />
                <p className="text-white text-3xl font-semibold p-2 my-4">
                  {product.price} ETH
                </p>
              </div>

              <QuantityInput quantity={quantity} updateQuantity={handleStep} />

              <div className="flex items-center gap-3">
                <button
                  className={
                    "w-[250px] bg-orange py-3 px-8 text-white font-semibold rounded-md"
                  }
                >
                  BUY NOW
                </button>
                <FaCartPlus className="text-4xl text-white cursor-pointer transition-all hover:text-orange hover:scale-105" />
              </div>

              <button
                onClick={() => setOpenDescription(!openDescription)}
                className="flex items-center gap-3 text-white text-lg font-medium mt-5 mb-2"
              >
                Description{" "}
                {openDescription ? (
                  <HiOutlineChevronUp className="text-lg text-white" />
                ) : (
                  <HiOutlineChevronDown className="text-lg text-white" />
                )}{" "}
              </button>
              {openDescription && (
                <p className="text-white md:w-[550px] w-full mx-2 text-sm font-normal p-1 opacity-80 mb-5 max-h-[200px] overflow-y-auto">
                  {product.description} Pourquoi l'utiliser?
On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).





                </p>
              )}

              <div className={`flex items-center ${openDescription ? "" : "mt-6"}`}>
                <TbTruckDelivery className="text-5xl text-white " />
                <p className="text-lg text-white font-medium mx-2 w-[300px]">Delivery </p>
                <span className={"text-lg font-medium text-orange"}>
                  {formatDelivery(product.minDays, product.maxDays)}
                </span>
              </div>
              <div className={"flex items-center mb-4"}>
              <GiReturnArrow className="text-5xl text-white scale-x-[-1] " />
                <p className="text-lg text-white font-medium mx-2 w-[300px]">Product Exchange and Return  </p>
                <span className={"text-lg font-medium text-orange"}>
                Terms & Conditions
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

/* class App extends Component<{}, AppState> {
  private myRef = createRef<HTMLDivElement>();

  state: AppState = {
    products: [
      {
        _id: "1",
        title: "Moroccan Vintage Caftan AMAZIGH style",
        src: [

          "./Picture.png",
          "./Pic1.jpg",
          "./Pic2.webp",
          "./Pic3.webp",
        ],
        description: "Description",
        price: "45.50 ETH",
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
        delivery: "5 - 15 working days"
      }
    ],
    index: 0
  };

  handleTab = (index: number) => {
    this.setState({ index });
    const images = this.myRef.current?.children;
    if (images) {
      for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    }
  };

  componentDidMount() {
    const { index } = this.state;
    const images = this.myRef.current?.children;
    if (images) {
      images[index].className = "active";
    }
  }

  render() {
    const { products, index } = this.state;
    return (
      
    );
  }
}
 */
export default ProductDetails;
