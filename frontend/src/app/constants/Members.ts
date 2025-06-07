// constants/Members.ts
// 1人
export type Member = {
    name: string; // 推しの物理名
    nameJapanese: string; // 推しの論理名
    color: string; // 推しのメンバーカラー HEX形式
};

// 定数全体
export type MemberMap = {
    [id: string]: Member;
};

// メンバー定数
export const MEMBERS: MemberMap = {
    'MTOR': { name: "mtor", nameJapanese: "めておら", color: "#888888" }, // 灰色
    'SHION': { name: "shion", nameJapanese: "心音", color: "#9b30ff" }, // むらさき色
    'ROSE': { name: "rose", nameJapanese: "ロゼ", color: "#ff2b2b" }, // 赤色
    'LAPIS': { name: "lapis", nameJapanese: "Lapis", color: "#30cfff" }, // 水色
    'MELT': { name: "melt", nameJapanese: "メルト・ダ・テンシ", color: "#ffffff" }, // 白色
    'MIKASA': { name: "mikasa", nameJapanese: "みかさくん", color: "#ff5bb5" }, // ピンク色
    'LIGHT': { name: "light", nameJapanese: "明雷らいと", color: "#ffe600" }, // 黄色
    'ROOT': { name: "root", nameJapanese: "るぅと", color: "#ffe600" }, // 黄色
    'TERUTO': { name: "teruto", nameJapanese: "てるとくん", color: "#ff5bb5" }, // ピンク色
} as const;

export type MemberType = typeof MEMBERS[keyof typeof MEMBERS]; 