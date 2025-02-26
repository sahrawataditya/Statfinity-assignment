import Link from "next/link";

const NotFoundPage = () => {
  function handleClick() {
    // if (typeof window !== "undefined") {
    //   window.location.replace("/");
    // }
    // window.history.back();
  }
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <div className="max-w-[240px] w-full flex flex-col gap-3 items-center justify-center">
        <h3 className="text-6xl font-extrabold">404</h3>
        <span className="block sm:text-3xl text-xl">Page not found</span>
        <Link
          href={"/"}
          className="text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
        >
          Go Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
