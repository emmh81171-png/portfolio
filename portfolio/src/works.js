export const works = [
    {
        id: "lp-1",
        "title": "塾の紹介サイト",
        "subCategories": [
            {
                "label": "制作範囲",
                "descriptions": [
                    "構成設計（情報整理／セクション設計）",
                    "HTML / CSS コーディング",
                    "JavaScript / jQuery によるUI制御",
                    "レスポンシブ対応（PC / SP）"
                ]
            },
            {
                "label": "実装ポイント",
                "descriptions": [
                    "セマンティックHTMLによる情報構造設計",
                    "ファーストビューの表示速度を意識した構成",
                    "CTA導線を意識したレイアウト設計"
                ]
            },
            {
                "label": "工夫した点",
                "descriptions": [
                    "修正・文言変更を想定したクラス設計（更新しやすい構造）",
                    "JavaScriptは最小限に抑え、保守性を重視",
                    "案件を想定し、実装粒度（命名・構造）を統一して構築"
                ]
            }
        ]
    },

    {
        id: "lp-2",
        "title": "化粧品サイト",
        "subCategories": [
            {
                "label": "制作範囲",
                "descriptions": [
                    "構成設計・セクション設計",
                    "HTML / CSS コーディング",
                    "JavaScript / jQuery によるUI制御",
                    "レスポンシブ対応（PC / SP）"
                ]
            },
            {
                "label": "実装ポイント",
                "descriptions": [
                    "スクロール位置に応じた UI 表現の制御",
                    "jQuery を用いたアニメーション実装",
                    "動きが過剰にならないよう配慮した演出設計"
                ]
            },
            {
                "label": "工夫した点",
                "descriptions": [
                    "UI の動きがユーザー操作を妨げないよう、表示タイミングを調整",
                    "処理負荷を抑えるため、アニメーション処理を最小限に設計",
                    "視覚的な演出と可読性のバランスを意識した実装"
                ]
            }

        ]
    },

    {
        id: "lp-3",
        "title": "脱毛プランサイト",
        "subCategories": [
            {
                "label": "制作範囲",
                "descriptions": [
                    "構成設計・セクション設計",
                    "HTML / CSS コーディング",
                    "CSS設計（共通化・再利用）",
                    "JavaScript / jQuery によるUI制御",
                    "レスポンシブ対応（PC / SP）"
                ]
            },
            {
                "label": "実装ポイント",
                "descriptions": [
                    "CSSの共通化によるスタイル管理",
                    "セクション追加を前提とした構造設計",
                    "デザイン変更に強いクラス設計"
                ]
            },
            {
                "label": "工夫した点",
                "descriptions": [
                    "再利用を意識したCSS設計により、修正コストを抑制",
                    "JavaScriptへの依存を抑え、安定した表示を優先",
                    "中長期運用を想定した構造・命名で実装"
                ]
            }

        ]
    },

    {
        id: "lp-4",
        "title": "農業向け製品サイト",
        tabs:[
            {
                id:"top",
                label:"TOP",
                sp:"/images/lp4_top_sp.png",
                pc:"/images/lp4_top_pc.png"
            },
            {
                id:"price",
                label:"PRICE",
                sp:"/images/lp4_price_sp.png",
                pc:"/images/lp4_price_pc.png"
            },
            {
                id:"faq",
                label:"FAQ",
                sp:"/images/lp4_faq_sp.png",
                pc:"/images/lp4_faq_pc.png"
            }
        ],
        "subCategories": [
            {
                "label": "制作範囲",
                "descriptions": [
                    "構成設計・セクション設計",
                    "HTML / CSS コーディング",
                    "JavaScript による補助的な UI 制御",
                    "レスポンシブ対応（PC / SP）"
                ]
            },
            {
                "label": "実装ポイント",
                "descriptions": [
                    "情報を整理し、ユーザーが迷わない構成設計",
                    "CSS の可読性を重視したスタイル設計",
                    "必要な箇所のみ JavaScript を使用した安定した実装"
                ]
            },
            {
                "label": "工夫した点",
                "descriptions": [
                    "修正・差し替えを想定したシンプルな構造設計",
                    "実務でのやり取りを想定し、理解しやすい命名を採用",
                    "表現と保守性のバランスを意識した実装"
                ]
            }
        ]
    }
];