export type input = {
  page: number;
  size: number;
};
const productapi = "https://fakestoreapi.com/products?limit=20";

const airFlightApi = ({ page, size }: input) => {
  const url = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`;
  return url;
};

const GetList = async ({ page, size }: input) => {
  //product
  const responseData = fetch("https://fakestoreapi.com/products?limit=20")
    .then((res) => res.json())
    .then((json) => json);
  // airflight
  const resData2 = await fetch(airFlightApi({ page, size }))
    .then((res) => res.json())
    .then((json) => json);
  return resData2.data;
};

export default GetList;
