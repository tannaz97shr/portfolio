interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <div className="drop-shadow-xl text-3xl font-semibold text-primary-teal mt-10 mb-8">
      {children}
    </div>
  );
}

export default Header;
