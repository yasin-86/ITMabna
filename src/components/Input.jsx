function Input({
  type = "text",
  onChange,
  placeholder,
  value = null,
  name,
  className,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={`${className}`}
      name={name}
    />
  );
}

export default Input;
