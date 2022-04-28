import React, { useState } from "react";
import logo from "./logo.svg";
import { QueryClient, useQuery } from "react-query";
import Cart from "./components/cart";
// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Lap

const fetchApi = () => {
  const responseData = fetch("https://fakestoreapi.com/products?limit=20")
    .then((res) => res.json())
    .then((json) => json);
  return responseData;
};

function App() {
  const paginNumbers = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);
  const show = 3;
  const { data: productsLimited = [] } = useQuery("todos", () => fetchApi());
  const [list, setList] = useState(productsLimited);
  const paginList = async (list: any, number: number, currentPage: number) => {
    const data = await list.slice(
      currentPage * number - number,
      currentPage * number
    );
    setList(data);
  };

  paginList(productsLimited, show, currentPage);

  return (
    <div className="relative h-[200px] grid gap-[20px] grid-cols-5 mt-10 mx-10 ">
      {list
        ? list.map((pro: any, index: number) => {
            return (
              <div className=" border-2 border-black rounded-lg" key={index}>
                {pro.title}
              </div>
            );
          })
        : "loading"}

      <div className="fixed flex bottom-0 left-[50%] translate-x-[-50%]">
        {paginNumbers.map((number) => {
          return (
            <div
              className="h-10 w-10 flex justify-center items-center m-2 bg-gray-400 rounded-lg text-white cursor-pointer"
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
