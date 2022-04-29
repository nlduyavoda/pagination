import clsx from "clsx";

export default function Pagination({
  paginNumbers,
  currentPage,
  onSetCurrentPage,
}: any) {
  return (
    <div className="fixed flex bottom-0 left-[50%] translate-x-[-50%]">
      {Array.from(Array(paginNumbers).keys()).map((number) => {
        return (
          <div
            key={number}
            className={clsx(
              "h-10 w-10 flex justify-center items-center m-2 rounded-lg text-white cursor-pointer",
              currentPage === number + 1 ? "bg-red-500" : "bg-gray-500"
            )}
            onClick={() => {
              onSetCurrentPage(number + 1);
            }}
          >
            {number + 1}
          </div>
        );
      })}
    </div>
  );
}
