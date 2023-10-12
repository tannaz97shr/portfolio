interface SkillTagProps {
  name: string;
}

function SkillTag({ name }: SkillTagProps) {
  return (
    <div className="text-sm text-secondary-teal bg-tag-bg rounded-lg px-4 py-3 m-1">
      {name}
    </div>
  );
}

export default SkillTag;
