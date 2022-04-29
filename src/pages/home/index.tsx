export default function Home({ list,onAddItem }: any) {
  return (
    <div className="relative h-[200px] grid gap-[20px] grid-cols-5 mt-10 mx-10 ">
      <button onClick={onAddItem}>addItem</button>
      {list
        ? list.map((pro: any, index: number) => {
            return (
              <div className=" border-2 border-black rounded-lg" key={index}>
                {pro._id}
              </div>
            );
          })
        : "loading"}
    </div>
  );
}
