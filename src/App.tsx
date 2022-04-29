import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Home from "./pages/home";
import Pagination from "./components/pagination";
import GetList from "./api/getList";
import CreateList from "./api/createList";

import CalcPaginNumbers from "./components/pagination/CalcPaginNumbers";

const mockItem = {
  id: 12,
  name: "Sri Lankan Airways",
  country: "Sri Lanka",
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
  slogan: "From Sri Lanka",
  head_quaters: "Katunayake, Sri Lanka",
  website: "www.srilankaairways.com",
  established: "1990",
};

function App() {
  const [paginNumbers, setPaginNumbers] = useState<number>();
  const show = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const { data: productsLimited = [] } = useQuery(
    ["GET-LIST", { page: currentPage, size: show }],
    () => GetList({ page: currentPage, size: show })
  );

  const mutation = useMutation((newTodo) => {
    return fetch("https://api.instantwebtools.net/v1/airlines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((json) => console.log("json :>> ", json));
  });
  // const [list, setList] = useState(productsLimited);

  // paginList({ list, setList });

  useEffect(() => {
    if (productsLimited.length <= show) {
      const pageNumber = Math.ceil(productsLimited.length / show);
      setPaginNumbers(pageNumber);
    }
    setPaginNumbers(5);
  }, [currentPage]);

  const handleAddItem = (item: any) => {
    console.log("test :>> ");
    mutation.mutate(item);
  };

  return (
    <div>
      <Home list={productsLimited} onAddItem={handleAddItem} />
      <Pagination
        paginNumbers={paginNumbers}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
