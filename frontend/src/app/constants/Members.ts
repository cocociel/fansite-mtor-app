// constants/Members.ts
// 1人
export type Member = {
    name: string; // 推しの名前
    color: string; // 推しのメンバーカラー HEX形式
};

// 定数全体
export type MemberMap = {
    [id: string]: Member;
};

// メンバー定数
export const MEMBERS: MemberMap = {
    'MTOR': { name: "めておら", color: "#888888" }, // 灰色
    'SHION': { name: "心音", color: "#9b30ff" }, // むらさき色
    'ROSE': { name: "ロゼ", color: "#ff2b2b" }, // 赤色
    'LAPIS': { name: "Lapis", color: "#30cfff" }, // 水色
    'MELT': { name: "メルト・ダ・テンシ", color: "#ffffff" }, // 白色
    'MIKASA': { name: "みかさくん", color: "#ff5bb5" }, // ピンク色
    'LIGHT': { name: "明雷らいと", color: "#ffe600" } // 黄色
} as const;

export type MemberType = typeof MEMBERS[keyof typeof MEMBERS]; 