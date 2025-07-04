interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`container mx-auto my-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
