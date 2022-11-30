import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { any } from "zod";

const Home: NextPage = () => {
  const [items, setItems] = useState([
    {
      name: "McDonalds",
      category: "Restaurant",
    },
    {
      name: "Wendys",
      category: "Restaurant",
    },
    {
      name: "Cold Stone",
      category: "Dessert",
    },
    {
      name: "Mikes Pastry",
      category: "Dessert",
    },
    {
      name: "McDonalds",
      category: "Restaurant",
    },
    {
      name: "Walmart",
      category: "Store",
    },
  ]);
  const categories = ["Restaurant", "Dessert", "Store"];

  const [filtered, setFiltered] = useState<string[]>([]);
  const filteredItems = items.filter((item) =>
    filtered.some((f) => f == item.category)
  );

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}> Filters</h2>
        <div className="bg-red-500">
          <button onClick={() => setFiltered([])}>Clear</button>
        </div>
        <div className="flex space-x-5">
          {categories.map((element, index) => (
            <button
              className={`my-1 mx-2 flex flex-col justify-between rounded border border-solid border-black px-2 py-1 ${
                filtered.includes(element) && "bg-black text-white"
              }`}
              onClick={() => {
                if (filtered.some((f) => f == element)) {
                  setFiltered(filtered.filter((f) => f !== element));
                } else {
                  setFiltered([element, ...filtered]);
                }
              }}
              key={`filters-${index}`}
            >
              {element}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center">
          {(filteredItems.length > 0 ? filteredItems : items).map(
            (item, index) => (
              <div key={`items-${index}`} className="border">
                <p className="">{item.category}</p>
                <p className="m-5 flex justify-between">{item.name}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
