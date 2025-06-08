import { MEMBERS } from '../constants/Members';
import { Chip, Avatar } from '@mui/material';

interface TagButtonGroupProps {
  onClick: (artists: string) => void;
}

export default function TagButtonGroup({ onClick }: TagButtonGroupProps) {
  return (
    <div className="flex flex-wrap gap-1">
      <Chip
        label={MEMBERS['MTOR'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['MTOR'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['MTOR'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['MTOR'].color, // 枠線を推しカラーにする
        }}
      />
      <Chip
        label={MEMBERS['SHION'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['SHION'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['SHION'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['SHION'].color, // 枠線を推しカラーにする
        }}
      />
      <Chip
        label={MEMBERS['ROSE'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['ROSE'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['ROSE'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['ROSE'].color, // 枠線を推しカラーにする
        }}
      />
      <Chip
        label={MEMBERS['LAPIS'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['LAPIS'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['LAPIS'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['LAPIS'].color, // 枠線を推しカラーにする
        }}
      />
      <Chip
        label={MEMBERS['MELT'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['MELT'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['MELT'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['MELT'].color, // 枠線を推しカラーにする
        }}
      />
      <Chip
        label={MEMBERS['MIKASA'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['MIKASA'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['MIKASA'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['MIKASA'].color, // 枠線を推しカラーにする
        }}
      />
      <Chip
        label={MEMBERS['LIGHT'].nameJapanese} // 表示名
        variant="outlined" // 枠のみ
        avatar={<Avatar src={MEMBERS['LIGHT'].icon} />} // アイコン
        onClick={(event) => onClick(MEMBERS['LIGHT'].name)} // クリックしたら親の検索に遷移
        clickable // クリック可能
        sx={{
          borderColor: MEMBERS['LIGHT'].color, // 枠線を推しカラーにする
        }}
      />
    </div>
  );
}