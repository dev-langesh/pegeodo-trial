import axios from "axios";
import React, { useEffect } from "react";
import PlantDetails from "../../components/plant/PlantDetails";

export default function Plant({ data }) {
  const [plant, setPlant] = React.useState(data);
  useEffect(() => {
    setPlant(data);
  }, [data]);
  return <PlantDetails plant={plant} />;
}

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plants`);
  const paths = res.data.map((plant) => ({
    params: { id: plant._id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const res = await axios(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/plants/getById/${id}`
  );
  const data = res.data;
  return {
    props: { data },
  };
}
