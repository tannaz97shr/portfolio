interface DescriptionProps {
  children: React.ReactNode;
}

function Description({ children }: DescriptionProps) {
  return (
    <div className="text-secondary-teal font-semibold mt-4 mb-8">
      {children}
    </div>
  );
}

export default Description;
