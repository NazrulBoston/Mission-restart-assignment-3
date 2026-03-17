
const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;