import { Grid, LinearProgress, Rating } from "@mui/material";
import Reviews_RatingCard from "../Reviews_RatingCard/Reviews_RatingCard";
import { grey } from "@mui/material/colors";
import { mens_Shirt } from "../../Data/mens_Shirts";
import HomePageCard from "../HomePageCards/HomeProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../state/Products/Action";
import { useEffect, useState } from "react";
import { addcartitem } from "../../state/Cart/Action";


// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     {
//       id: "white",
//       name: "White",
//       classes: "bg-white checked:outline-gray-400",
//     },
//     {
//       id: "gray",
//       name: "Gray",
//       classes: "bg-gray-200 checked:outline-gray-400",
//     },
//     {
//       id: "black",
//       name: "Black",
//       classes: "bg-gray-900 checked:outline-gray-900",
//     },
//   ],
//   sizes: [
//     { name: "S", inStock: true },
//     { name: "M", inStock: true },
//     { name: "L", inStock: true },
//     { name: "XL", inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState({name: 'L', quantity: 10});

  console.log(selectedSize)

  const productt = useSelector(store => store.product)
  console.log(productt.product);

  const params = useParams();
  const dispatch = useDispatch();

  console.log(params.productId)

  useEffect(() => {
    dispatch(findProductById(params.productId))
  }, [params.productId])

  const navigate = useNavigate();

  const HandleAddtoCart = async () => {
    const data = {
        productId: params.productId,
        size: selectedSize.name
    };

    await dispatch(addcartitem(data));
    navigate("/cart");
};

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key={productt?.product?.id}>
              <div className="flex items-center">
                <a
                  href='#'
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {productt?.product?.brand}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {productt?.product?.brand}
              </a>
            </li>
          </ol>
        </nav>

        <section className=" grid grid-cols-1 lg:grid-cols-2 p-4 ">
          {/* Image gallery */}
          <div className=" grid lg:grid-cols-1  lg:h-80 lg:pt-4 ">
            <div className="max-w-120 lg:ml-75">
              <div>
                <img
                  src={productt?.product?.imageURL}
                  alt={""}
                  className="row-span-2 aspect-3/4 w-full  rounded-lg object-cover max-lg:hidden"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <section className=" grid grid-cols-1 lg:grid-cols-1 p-4">
            <div className="px-4 pt-10 pb-16 sm:px-6  lg:gap-x-8 lg:px-8 lg:pt-4 lg:pb-24">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold pb-2 tracking-tight text-gray-900 sm:text-3xl">
                  {productt?.product?.brand}
                </h1>
                <div className="space-y-2">
                  <p className="text-base text-gray-900">
                    {productt?.product?.description}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className=" mt-4 lg:row-span-3 lg:mt-2">
                <h2 className="sr-only">Product information</h2>
                <div className="flex gap-3 items-center">
                  <p className="text-2xl tracking-tight text-gray-900">
                    ${productt?.product?.discountedPrice}
                  </p>
                  <p className="text-2xl  text-gray-800 opacity-50 line-through">
                    ${productt?.product?.price}
                  </p>
                  <p className="text-xl  text-green-500">{productt?.product?.discountPercent}% off</p>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <Rating value={4.5} precision={0.5} readOnly />
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color : {productt?.product?.color.toUpperCase()}</h3>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <div className="grid grid-cols-12 gap-16">
                        {productt?.product?.sizes.map((size) => (
                          <label
                            key={size.name}
                            aria-label={size.name}
                            className="group  relative flex items-center justify-center rounded-full w-12 border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              defaultValue={size.name}
                              defaultChecked={size.name === "L"}
                              name="size"
                              type="radio"
                              disabled={size.quantity == 0}
                              onChange={() => setSelectedSize(size)}
                              className="absolute inset-0 appearance-none flex mx-120 focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span className="text-sm font-medium  text-gray-900  uppercase group-has-checked:text-white">
                              {size.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <button
                    onClick={HandleAddtoCart}
                    type="button"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
          </section>
        </section>

        <Grid
          container
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          className=" border border-gray-300 p-4"
        >
          <Grid item size={6} className="">
            <div className="mx-8">
              <h3 className="font-bold text-2xl p-4">
                Recent Reviews and ratings
              </h3>
              <Reviews_RatingCard />
            </div>
          </Grid>

          <Grid item size={6} className="mb-8">
            <h1 className="font-bold text-2xl p-4">Customer Reviews</h1>
            <div className="flex gap-3 px-4">
              <Rating value={4.5} precision={0.5} readOnly />
              <h1 className="font-bold">4.5 out of 5</h1>
            </div>

            <Grid className="mt-2">
              <div className="flex  items-center  ">
                <Grid size={1.5} className="">
                  <p className="font-bold text-gray-800 opacity-50 mx-4 ">
                    Excellent
                  </p>
                </Grid>
                <Grid size={6} className="">
                  <LinearProgress
                    variant="determinate"
                    sx={{ width: 1 / 2, bgcolor: grey }}
                    color="success"
                    value={60}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid className="mt-2">
              <div className="flex  items-center  ">
                <Grid size={1.5} className="">
                  <p className="font-bold text-gray-800 opacity-50 mx-4">
                    Very Good
                  </p>
                </Grid>
                <Grid size={6} className="">
                  <LinearProgress
                    variant="determinate"
                    sx={{ width: 1 / 2, bgcolor: grey }}
                    color="secondary"
                    value={35}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid className="mt-2">
              <div className="flex  items-center  ">
                <Grid size={1.5} className="">
                  <p className="font-bold text-gray-800 opacity-50 mx-4">
                    Good
                  </p>
                </Grid>
                <Grid size={6} className="">
                  <LinearProgress
                    variant="determinate"
                    sx={{ width: 1 / 2, bgcolor: grey }}
                    value={22}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid className="mt-2">
              <div className="flex  items-center  ">
                <Grid size={1.5} className="">
                  <p className="font-bold text-gray-800 opacity-50 mx-4">
                    Average
                  </p>
                </Grid>
                <Grid size={6} className="">
                  <LinearProgress
                    variant="determinate"
                    sx={{ width: 1 / 2 }}
                    color="inherit"
                    value={10}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid className="mt-2 ">
              <div className="flex  items-center  ">
                <Grid size={1.5} className="">
                  <p className="font-bold text-gray-800 opacity-50 mx-4">
                    Poor
                  </p>
                </Grid>
                <Grid size={6} className="">
                  <LinearProgress
                    variant="determinate"
                    sx={{ width: 1 / 2, bgcolor: grey }}
                    color="error"
                    value={5}
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Similar Products */}
        <section>
          <h1 className="font-bold text-2xl p-4 ml-4 mt-4">Similar Products</h1>
          <div className="flex flex-wrap mt-4">
            {mens_Shirt.map((item) => (
              <HomePageCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
