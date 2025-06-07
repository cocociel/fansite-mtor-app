import { MEMBERS } from '../constants/Members';

/**
 * アーティストの物理名を論理名に変換する
 * @param artist アーティストの物理名（例: 'MTOR', 'SHION'）
 * @returns アーティストの論理名（例: 'めておら', '心音'）
 */
export const convertToJapaneseName = (artist: string): string => {
  // 物理名を大文字に変換して検索
  const member = MEMBERS[artist.toUpperCase()];
  return member ? member.nameJapanese : artist;
}; 