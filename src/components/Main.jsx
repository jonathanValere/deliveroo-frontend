import { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./Restaurant/Restaurant";
import Meals from "./Meals/Meals";

export default function Main() {
  // Déclaration des states ----
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Fonction requête axios ------
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--backend-deliveroo--lkcrzmx4xyh5.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  // ------------------
  // Requête avec UseEffect -----
  useEffect(() => {
    fetchData();
  }, []);

  // Render ------
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main>
      <Restaurant
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <Meals categories={data.categories} />
    </main>
  );
}
