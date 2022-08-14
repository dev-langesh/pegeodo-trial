import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "../components/home/Home";
import { setBestSellingPlants } from "../src/features/plants/bestSellingPlants";
import { setOfferPlants } from "../src/features/plants/offerPlantsSlice";
import { setSpecialOffer } from "../src/features/plants/specialOfferSlice";

export default function Index({ offer, bestSellingProducts, specialOffers }) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(specialOffers);
    dispatch(setOfferPlants(offer));
    dispatch(setBestSellingPlants(bestSellingProducts));
    dispatch(setSpecialOffer(specialOffers));
  }, [offer, bestSellingProducts]);
  return <Home />;
}

export async function getStaticProps() {
  const offer = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/plants/offers`
  );
  const bestSellingProducts = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/plants/bestSellingPlants`
  );
  const specialOffers = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/specialOffers`
  );

  console.log(specialOffers.data);

  return {
    props: {
      offer: offer.data,
      bestSellingProducts: bestSellingProducts.data,
      specialOffers: specialOffers.data,
    },
    revalidate: 60 * 60,
  };
}
