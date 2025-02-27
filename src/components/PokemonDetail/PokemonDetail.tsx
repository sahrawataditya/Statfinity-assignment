import Image from "next/image";
import Link from "next/link";

const PokemonDetail = ({ data }: { data: apiData.PokemonDetail }) => {
  return (
    <div className="w-full">
      <div className="rounded-lg border border-gray-100 py-3 shadow-xs mb-5">
        <div className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <h4 className="font-medium text-gray-900">Name</h4>
            <span className="text-gray-700 sm:col-span-2 capitalize">
              {data.name}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <h4 className="font-medium text-gray-900">Image</h4>
            <div className="w-[100px] relative aspect-[1/1]">
              <Image
                fill
                alt={`${data.name} Image`}
                src={data.sprites.front_default}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <h4 className="font-medium text-gray-900">Abilities</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {data.abilities.map((item, indx) => {
                const { ability } = item;
                return (
                  <span
                    key={indx}
                    className={`w-fit rounded-full ${
                      (indx + 1) % 2 === 0 ? "bg-blue-200" : " bg-blue-100"
                    } px-2.5 py-0.5 text-sm text-blue-700 capitalize whitespace-nowrap cursor-pointer`}
                  >
                    {ability.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <h4 className="font-medium text-gray-900">Types</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {data.types.map((item, indx) => {
                const { type } = item;
                return (
                  <span
                    key={indx}
                    className={`w-fit rounded-full ${
                      (indx + 1) % 2 === 0 ? "bg-green-200" : " bg-green-100"
                    } px-2.5 py-0.5 text-sm text-green-700 capitalize whitespace-nowrap cursor-pointer`}
                  >
                    {type.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <h4 className="font-medium text-gray-900">Stats</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {data.stats.map((item, indx) => {
                const { stat } = item;
                return (
                  <span
                    key={indx}
                    className={`w-fit rounded-full ${
                      (indx + 1) % 2 === 0 ? "bg-red-200" : " bg-red-100"
                    } px-2.5 py-0.5 text-sm text-red-700 capitalize whitespace-nowrap cursor-pointer`}
                  >
                    {stat.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <h4 className="font-medium text-gray-900">Moves</h4>
            <div className="flex gap-2 items-center flex-wrap">
              {data.moves.map((item, indx) => {
                const { move } = item;
                return (
                  <span
                    key={indx}
                    className={`w-fit rounded-full ${
                      (indx + 1) % 2 === 0 ? "bg-purple-200" : " bg-purple-100"
                    } px-2.5 py-0.5 text-sm text-purple-700 capitalize whitespace-nowrap cursor-pointer`}
                  >
                    {move.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center w-full"
      >
        Go Back
      </Link>
    </div>
  );
};

export default PokemonDetail;
