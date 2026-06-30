import { Grid, LinearProgress, Rating } from "@mui/material";
import Reviews_RatingCard from "../Reviews_RatingCard/Reviews_RatingCard";
import { grey } from "@mui/material/colors";
import { mens_Shirt } from "../../Data/mens_Shirts";
import HomePageCard from "../HomePageCards/HomeProductCard";
import { useNavigate } from "react-router-dom";
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const navigate=useNavigate();
  const HandleAddtoCart=()=>{
    navigate('/cart');
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
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
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
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
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="row-span-2 aspect-3/4 w-full  rounded-lg object-cover max-lg:hidden"
                />
              </div>
              <div>
                <div className="flex flex-wrap justify-center gap-3 mt-2 ">
                  {product.images.map((item) => (
                    <div key={item.alt} className="w-20 h-20">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className=" object-cover object-center w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product info */}
          <section className=" grid grid-cols-1 lg:grid-cols-1 p-4">
            <div className="px-4 pt-10 pb-16 sm:px-6  lg:gap-x-8 lg:px-8 lg:pt-4 lg:pb-24">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold pb-2 tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              {/* Options */}
              <div className=" mt-4 lg:row-span-3 lg:mt-2">
                <h2 className="sr-only">Product information</h2>
                <div className="flex gap-3 items-center">
                  <p className="text-2xl tracking-tight text-gray-900">
                    {product.price}
                  </p>
                  <p className="text-2xl  text-gray-800 opacity-50 line-through">
                    $300
                  </p>
                  <p className="text-xl  text-green-500">80% off</p>
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
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <fieldset aria-label="Choose a color" className="mt-4">
                      <div className="flex items-center gap-x-3">
                        {product.colors.map((color) => (
                          <div
                            key={color.id}
                            className="flex rounded-full outline -outline-offset-1 outline-black/10"
                          >
                            <input
                              defaultValue={color.id}
                              defaultChecked={color === product.colors[0]}
                              name="color"
                              type="radio"
                              aria-label={color.name}
                              className={classNames(
                                color.classes,
                                "size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3",
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </fieldset>
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
                      <div className="grid grid-cols-12 gap-3">
                        {product.sizes.map((size) => (
                          <label
                            key={size.name}
                            aria-label={size.name}
                            className="group relative flex items-center justify-center rounded-full w-12 border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              defaultValue={size.id}
                              defaultChecked={size === product.sizes[2]}
                              name="size"
                              type="radio"
                              disabled={!size.inStock}
                              className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span className="text-sm font-medium text-gray-900  uppercase group-has-checked:text-white">
                              {size.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <button 
                  onClick={HandleAddtoCart}
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                  >
                    Add to bag
                  </button>
                </form>
              </div>
            </div>
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
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
              <HomePageCard product={item}/>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
