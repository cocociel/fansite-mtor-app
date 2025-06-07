import { TagButton } from './TagButton'
import { MEMBERS } from '../constants/Members';

export default function TagButtonGroup() {
  return (
    <div className="flex flex-wrap">
      <TagButton name={"#" + MEMBERS['MTOR'].name} color={MEMBERS['MTOR'].color} />
      <TagButton name={"#" + MEMBERS['SHION'].name} color={MEMBERS['SHION'].color} />
      <TagButton name={"#" + MEMBERS['LAPIS'].name} color={MEMBERS['LAPIS'].color} />
      <TagButton name={"#" + MEMBERS['LIGHT'].name} color={MEMBERS['LIGHT'].color} />
      <TagButton name={"#" + MEMBERS['MELT'].name} color={MEMBERS['MELT'].color} />
      <TagButton name={"#" + MEMBERS['MIKASA'].name} color={MEMBERS['MIKASA'].color} />
      <TagButton name={"#" + MEMBERS['ROSE'].name} color={MEMBERS['ROSE'].color} />
    </div>
  );
}