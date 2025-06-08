// constants/Members.ts
// 1人
export type Member = {
    name: string; // 推しの物理名
    nameJapanese: string; // 推しの論理名
    color: string; // 推しのメンバーカラー HEX形式
    icon: string; // 推しのメンバーカラー HEX形式
};

// 定数全体
export type MemberMap = {
    [id: string]: Member;
};

// メンバー定数
export const MEMBERS: MemberMap = {
    'MTOR': {
        name: "mtor",
        nameJapanese: "めておら",
        color: "#888888",
        icon: "/images/stpronline_icon_mtor_logo_360x.jpg"
    },
    'SHION': {
        name: "shion",
        nameJapanese: "心音",
        color: "#9b30ff",
        icon: "/images/stpronline_icon_mtor_shion_360x.jpg"
    },
    'ROSE': {
        name: "rose",
        nameJapanese: "ロゼ",
        color: "#ff2b2b",
        icon: "/images/stpronline_icon_mtor_rose_360x.jpg"
    }, // 赤色
    'LAPIS': {
        name: "lapis",
        nameJapanese: "Lapis",
        color: "#30cfff",
        icon: "/images/stpronline_icon_mtor_lapis_360x.jpg"
    }, // 水色
    'MELT': {
        name: "melt",
        nameJapanese: "メルト・ダ・テンシ",
        color: "#ffffff",
        icon: "/images/stpronline_icon_mtor_melt_360x.jpg"
    }, // 白色
    'MIKASA': {
        name: "mikasa",
        nameJapanese: "みかさくん",
        color: "#ff5bb5",
        icon: "/images/stpronline_icon_mtor_mikasa_360x.jpg"
    }, // ピンク色
    'LIGHT': {
        name: "light",
        nameJapanese: "明雷らいと",
        color: "#ffe600",
        icon: "/images/stpronline_icon_mtor_light_360x.jpg"
    }, // 黄色
    'ROOT': {
        name: "root",
        nameJapanese: "るぅと",
        color: "#ffe600",
        icon: ""
    }, // 黄色
    'TERUTO': {
        name: "teruto",
        nameJapanese: "てるとくん",
        color: "#ff5bb5",
        icon: ""
    }, // ピンク色
} as const;

export type MemberType = typeof MEMBERS[keyof typeof MEMBERS]; 