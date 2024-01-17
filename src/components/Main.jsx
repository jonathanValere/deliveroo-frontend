import { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "./Restaurant/Restaurant";
import Meals from "./Meals/Meals";

export default function Main() {
  // Déclaration des states ----
  const [data, setData] = useState({}); // State avec toutes les données récupérées du back
  const [isLoading, setIsLoading] = useState(true); // State dans l'attente d'une réponse de la requête

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
  // Requête avec UseEffect qui affichera toutes les données sur les catégories et repas proposés au lancement de l'application -----
  useEffect(() => {
    fetchData();
  }, []);

  // Render ------
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <main>
      {/* Affiche information sur le restaurant */}
      <Restaurant
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      {/* Affiche la section principale (catégories, repas, panier) */}
      <Meals categories={data.categories} />
    </main>
  );
}
