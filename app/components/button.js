export const CustomButton = ({ children, ...props }) => {
  return (
    <button className={`${props.classnames} px-5   rounded-md py-2`}>
      {children}
    </button>
  );
};
