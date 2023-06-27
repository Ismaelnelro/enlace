import CardOng from './CardOng';

function PostSearch() {
  return (
    <div className="bg-[#FFDC72] pb-16">
      <h2 className="max-w-7xl mx-auto py-5 text-lg font-bold text-gray-800 px-4">
        Últimas búsquedas publicadas
      </h2>
      <div className=" max-w-7xl mx-auto grid xl:grid-cols-4 xl:gap-7 md:grid-cols-2 md:gap-7 mt-3 px-4">
        <CardOng />
      </div>
    </div>
  );
}

export default PostSearch;
