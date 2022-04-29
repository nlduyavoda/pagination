export const paginList = ({ list, setList }: any) => {
  const paginList = async (list: any, number: number, currentPage: number) => {
    const data = await list.slice(
      currentPage * number - number,
      currentPage * number
    );
    setList(data);
  };
};
