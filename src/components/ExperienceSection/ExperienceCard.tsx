function ExperienceCard() {
  return (
    <div className="flex flex-col md:flex-row h-56 md:h-44 w-full rounded-lg overflow-hidden mb-4">
      <div className="flex grow-[1] bg-secondary-navy">Left</div>
      <div className="flex grow-[2] bg-primary-navy">Right</div>
    </div>
  );
}

export default ExperienceCard;
