import { TagButton } from './TagButton'
import { MEMBERS } from '../constants/Members';

interface TagButtonGroupProps {
  onClick: (artists: string) => void;
}

export default function TagButtonGroup({ onClick }: TagButtonGroupProps) {
  return (
    <div className="flex flex-wrap">
      <TagButton member={MEMBERS['MTOR']} onClick={onClick} />
      <TagButton member={MEMBERS['SHION']} onClick={onClick} />
      <TagButton member={MEMBERS['LAPIS']} onClick={onClick} />
      <TagButton member={MEMBERS['LIGHT']} onClick={onClick} />
      <TagButton member={MEMBERS['MELT']} onClick={onClick} />
      <TagButton member={MEMBERS['MIKASA']} onClick={onClick} />
      <TagButton member={MEMBERS['ROSE']} onClick={onClick} />
    </div>
  );
}