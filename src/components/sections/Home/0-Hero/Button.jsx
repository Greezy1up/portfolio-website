export const Button = ({ href = "#", title = "Button", variant = "filled" }) => {
  const base = `
    w-72 md:w-44 h-14
    flex items-center justify-center
    rounded-xl
    transition duration-200 ease-in-out
    transform hover:scale-105 hover:-translate-y-1
    hover:shadow-[0_4px_20px_rgba(239,68,68,0.3)]
    font-bold header text-xl md:text-2xl
  `;

  const filled = `
    bg-gradient-to-r from-red-900 to-rose-600
    border border-rose-600
    text-white
  `;

  const border = `
    border-2 border-red-400
    text-red-400
  `;

  return (
    <a
      href={href}
      className={`${base} ${variant === "filled" ? filled : border}`}
    >
      {title}
    </a>
  );
};

export default Button;
