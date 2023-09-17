interface BackdropProps {
  onClick: () => void;
}

function Backdrop({ onClick }: BackdropProps) {
  return (
    <div
      onClick={onClick}
      className="h-[100vh] w-[100vw] absolute top-0 bg-backdrop z-[5]"
    />
  );
}

export default Backdrop;
