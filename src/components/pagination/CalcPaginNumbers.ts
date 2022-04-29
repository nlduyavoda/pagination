const CalcPaginNumbers = ({
  show,
  onSetPaginNumbers,
  productsLimited,
}: any) => {
  if (productsLimited.length <= show) {
    const pageNumber = Math.ceil(productsLimited.length / show);
    onSetPaginNumbers(pageNumber);
  }
  onSetPaginNumbers(5);
};
export default CalcPaginNumbers;
