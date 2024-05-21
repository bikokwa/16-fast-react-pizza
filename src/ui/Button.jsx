import { Link } from "react-router-dom"

function Button({children, disabled, to}) {
  const className = "bg-yellow-400 uppercase font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed text-stone-800 px-4 py-3 inline-block tracking-wide sm:px-6 sm:py-4"

  if (to) return <Link to={to} className={className}>{children}</Link>
   
  return <button disabled={disabled} className={className}>{children}</button>
} 

export default Button