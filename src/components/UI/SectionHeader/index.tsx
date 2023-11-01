interface HeaderProps {
  children: React.ReactNode;
  id?: string;
}

function Header({ children, id }: HeaderProps) {
  return (
    <div
      id={id && id}
      className="drop-shadow-xl text-3xl font-semibold text-primary-teal mt-10 mb-8"
    >
      {children}
    </div>
  );
}

export default Header;
