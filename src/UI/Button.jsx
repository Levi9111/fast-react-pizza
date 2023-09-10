import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "uppercase text-sm font-semibold tracking-wide text-stone-800 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " " + " px-4 py-3 md:px-6 md:py-4 bg-yellow-500",
    small: base + " " + " py-2 md:px-3 md:py-2 text-xs bg-yellow-300",
    round: base + " " + " py-2 md:px-2.5 md:py-1 text-xs bg-yellow-300",
    secondary:
      "border-2 text-sm border-stone-300 uppercase font-semibold tracking-wide text-stone-500 inline-block rounded-full hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
