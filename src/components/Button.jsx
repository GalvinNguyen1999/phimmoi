const Button = ({ children, color, className }) => {
  return <button className={`${className} border px-2 py-1 rounded-lg hover:text-white shadow-sm`}>{children}</button>
}

export default Button
