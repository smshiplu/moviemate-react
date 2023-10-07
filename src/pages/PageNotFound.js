import { Link } from "react-router-dom";
import Image from "../assets/404.svg";
export const PageNotFound = ({docTitle}) => {
  return (
    <main>
      <section className="flex flex-col items-center gap-5 my-10">
        <h2 className="text-6xl font-bold text-slate-800 dark:text-slate-200">404, Oops!</h2>
        <img className="max-w-md" src={Image} alt="Page not found" />
        <Link to="/" className="text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Back Home</Link>
      </section>
    </main>
  )
}
