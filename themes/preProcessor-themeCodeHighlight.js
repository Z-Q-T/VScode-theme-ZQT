// let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let GREY = "#7f7f7f";
let WHITE = "#FFF";
//？？？L70的比较暗，尽量不要用。L90可能太亮了，也少用
//C20及以上的纯度太高了，尽量少用，或者只有个别需要特别醒目的再用
//？？H210和H240比较接近蓝色，也尽量不用。尤其是H240特别尽量不用
//避免使用大红大橙，以防和报错信息混淆
//内置关键词：红。自写关键词（数值、字符串）：绿。中间关键词（函数、对象）：黄。元：蓝
let L70_C05_H000 = "#ba929d"; // #ba929d
let L70_C05_H020 = "#bc9392"; // #bc9392
let L70_C05_H040 = "#bb9587"; // #bb9587
let L70_C05_H060 = "#b69880"; // #b69880
let L70_C05_H080 = "#af9c7c"; // #af9c7c
let L70_C05_H100 = "#a5a07c"; // #a5a07c
let L70_C05_H120 = "#9aa381"; // #9aa381
let L70_C05_H140 = "#8ea789"; // #8ea789
let L70_C05_H160 = "#84a894"; // #84a894
let L70_C05_H180 = "#7ca99f"; // #7ca99f
let L70_C05_H200 = "#7aa8ab"; // #7aa8ab
let L70_C05_H220 = "#7ca6b4"; // #7ca6b4
let L70_C05_H240 = "#83a3bb"; // #83a3bb
let L70_C05_H260 = "#8d9fbe"; // #8d9fbe
let L70_C05_H280 = "#989cbe"; // #989cbe
let L70_C05_H300 = "#a398ba"; // #a398ba
let L70_C05_H320 = "#ad95b2"; // #ad95b2
let L70_C05_H340 = "#b593a8"; // #b593a8
let L70_C10_H000 = "#d2849c"; // #d2849c
let L70_C10_H020 = "#d68585"; // #d68585
let L70_C10_H040 = "#d4896e"; // #d4896e
let L70_C10_H060 = "#cc8f5c"; // #cc8f5c
let L70_C10_H080 = "#bf9752"; // #bf9752
let L70_C10_H100 = "#ada052"; // #ada052
let L70_C10_H120 = "#96a85e"; // #96a85e
let L70_C10_H140 = "#7dae72"; // #7dae72
let L70_C10_H160 = "#62b289"; // #62b289
let L70_C10_H180 = "#4bb3a1"; // #4bb3a1
let L70_C10_H200 = "#40b1b7"; // #40b1b7
let L70_C10_H220 = "#4aadc9"; // #4aadc9
let L70_C10_H240 = "#60a7d6"; // #60a7d6
let L70_C10_H260 = "#7a9fdd"; // #7a9fdd
let L70_C10_H280 = "#9297dc"; // #9297dc
let L70_C10_H300 = "#a890d4"; // #a890d4
let L70_C10_H320 = "#ba8ac5"; // #ba8ac5
let L70_C10_H340 = "#c886b2"; // #c886b2
let L70_C15_H000 = "#e7729b"; // #e7729b
let L70_C15_H020 = "#ed7477"; // #ed7477
let L70_C15_H040 = "#eb7a52"; // #eb7a52
let L70_C15_H060 = "#e18528"; // #e18528
let L70_C15_H080 = "#ce9200"; // #ce9200
let L70_C15_H100 = "#b59f00"; // #b59f00
let L70_C15_H120 = "#93ab2c"; // #93ab2c
let L70_C15_H140 = "#68b457"; // #68b457
let L70_C15_H160 = "#23ba7d"; // #23ba7d
let L70_C15_H180 = "#00bba2"; // #00bba2
let L70_C15_H200 = "#00b7c0"; // #00b7c0
let L70_C15_H220 = "#00b2dd"; // #00b2dd
let L70_C15_H240 = "#26a9f1"; // #26a9f1
let L70_C15_H260 = "#659dfb"; // #659dfb
let L70_C15_H280 = "#8d92f9"; // #8d92f9
let L70_C15_H300 = "#ad87ed"; // #ad87ed
let L70_C15_H320 = "#c77dd8"; // #c77dd8
let L70_C15_H340 = "#da76bb"; // #da76bb
let L70_C20_H000 = "#fb5c99"; // #fb5c99
let L70_C20_H020 = "#ff5d69"; // #ff5d69
let L70_C20_H040 = "#ff6728"; // #ff6728
//let L70_C20_H060 = "out of gamut";
//let L70_C20_H080 = "out of gamut";
//let L70_C20_H100 = "out of gamut";
//let L70_C20_H120 = "out of gamut";
let L70_C20_H140 = "#4dba30"; // #4dba30
let L70_C20_H160 = "#00bf75"; // #00bf75
let L70_C20_H180 = "#00bba2"; // #00bba2
let L70_C20_H200 = "#00b7c0"; // #00b7c0
let L70_C20_H220 = "#00b2dd"; // #00b2dd
//let L70_C20_H240 = "out of gamut";
//let L70_C20_H260 = "out of gamut";
//let L70_C20_H280 = "out of gamut";
//let L70_C20_H300 = "out of gamut";
let L70_C20_H320 = "#d36dea"; // #d36dea
let L70_C20_H340 = "#eb63c5"; // #eb63c5
let L75_C05_H000 = "#caa1ac"; // #caa1ac
let L75_C05_H020 = "#cca2a1"; // #cca2a1
let L75_C05_H040 = "#cba496"; // #cba496
let L75_C05_H060 = "#c6a78f"; // #c6a78f
let L75_C05_H080 = "#bfab8b"; // #bfab8b
let L75_C05_H100 = "#b5af8b"; // #b5af8b
let L75_C05_H120 = "#a9b390"; // #a9b390
let L75_C05_H140 = "#9eb698"; // #9eb698
let L75_C05_H160 = "#93b8a3"; // #93b8a3
let L75_C05_H180 = "#8cb9af"; // #8cb9af
let L75_C05_H200 = "#89b8ba"; // #89b8ba
let L75_C05_H220 = "#8bb6c4"; // #8bb6c4
let L75_C05_H240 = "#92b3cb"; // #92b3cb
let L75_C05_H260 = "#9cafce"; // #9cafce
let L75_C05_H280 = "#a7abce"; // #a7abce
let L75_C05_H300 = "#b2a7ca"; // #b2a7ca
let L75_C05_H320 = "#bda4c2"; // #bda4c2
let L75_C05_H340 = "#c5a2b8"; // #c5a2b8
let L75_C10_H000 = "#e293ab"; // #e293ab
let L75_C10_H020 = "#e69494"; // #e69494
let L75_C10_H040 = "#e5987d"; // #e5987d
let L75_C10_H060 = "#dd9f6b"; // #dd9f6b
let L75_C10_H080 = "#cfa761"; // #cfa761
let L75_C10_H100 = "#bdb062"; // #bdb062
let L75_C10_H120 = "#a6b86e"; // #a6b86e
let L75_C10_H140 = "#8cbe81"; // #8cbe81
let L75_C10_H160 = "#72c298"; // #72c298
let L75_C10_H180 = "#5cc3b0"; // #5cc3b0
let L75_C10_H200 = "#53c1c7"; // #53c1c7
let L75_C10_H220 = "#5bbdda"; // #5bbdda
let L75_C10_H240 = "#70b6e7"; // #70b6e7
let L75_C10_H260 = "#89afed"; // #89afed
let L75_C10_H280 = "#a1a7ec"; // #a1a7ec
let L75_C10_H300 = "#b7a0e4"; // #b7a0e4
let L75_C10_H320 = "#ca99d6"; // #ca99d6
let L75_C10_H340 = "#d995c2"; // #d995c2
let L75_C15_H000 = "#f982aa"; // #f982aa
let L75_C15_H020 = "#ff8386"; // #ff8386
let L75_C15_H040 = "#fc8a61"; // #fc8a61
let L75_C15_H060 = "#f2943c"; // #f2943c
let L75_C15_H080 = "#dfa11a"; // #dfa11a
let L75_C15_H100 = "#c4af1c"; // #c4af1c
let L75_C15_H120 = "#a2bb40"; // #a2bb40
let L75_C15_H140 = "#77c566"; // #77c566
let L75_C15_H160 = "#3dca8d"; // #3dca8d
let L75_C15_H180 = "#00ccb2"; // #00ccb2
let L75_C15_H200 = "#00c9d2"; // #00c9d2
let L75_C15_H220 = "#00c2ef"; // #00c2ef
//let L75_C15_H240 = "out of gamut";
//let L75_C15_H260 = "out of gamut";
//let L75_C15_H280 = "out of gamut";
let L75_C15_H300 = "#bd96fe"; // #bd96fe
let L75_C15_H320 = "#d78de8"; // #d78de8
let L75_C15_H340 = "#ec86cc"; // #ec86cc
let L75_C20_H000 = "#ff71a9"; // #ff71a9
let L75_C20_H020 = "#ff797f"; // #ff797f
let L75_C20_H040 = "#ff7f4c"; // #ff7f4c
//let L75_C20_H060 = "out of gamut";
//let L75_C20_H080 = "out of gamut";
//let L75_C20_H100 = "out of gamut";
//let L75_C20_H120 = "out of gamut";
let L75_C20_H140 = "#5ecb43"; // #5ecb43
let L75_C20_H160 = "#00d281"; // #00d281
let L75_C20_H180 = "#00cdb2"; // #00cdb2
let L75_C20_H200 = "#00c9d2"; // #00c9d2
//let L75_C20_H220 = "out of gamut";
//let L75_C20_H240 = "out of gamut";
//let L75_C20_H260 = "out of gamut";
//let L75_C20_H280 = "out of gamut";
//let L75_C20_H300 = "out of gamut";
let L75_C20_H320 = "#e47dfb"; // #e47dfb
let L75_C20_H340 = "#fd73d5"; // #fd73d5
let L80_C05_H000 = "#dab1bc"; // #dab1bc
let L80_C05_H020 = "#dcb2b0"; // #dcb2b0
let L80_C05_H040 = "#dbb4a6"; // #dbb4a6
let L80_C05_H060 = "#d7b79e"; // #d7b79e
let L80_C05_H080 = "#cfbb9a"; // #cfbb9a
let L80_C05_H100 = "#c5bf9a"; // #c5bf9a
let L80_C05_H120 = "#b9c39f"; // #b9c39f
let L80_C05_H140 = "#adc6a8"; // #adc6a8
let L80_C05_H160 = "#a3c8b3"; // #a3c8b3
let L80_C05_H180 = "#9bc9bf"; // #9bc9bf
let L80_C05_H200 = "#98c8ca"; // #98c8ca
let L80_C05_H220 = "#9bc6d4"; // #9bc6d4
let L80_C05_H240 = "#a1c3db"; // #a1c3db
let L80_C05_H260 = "#abbfdf"; // #abbfdf
let L80_C05_H280 = "#b7bbde"; // #b7bbde
let L80_C05_H300 = "#c2b7da"; // #c2b7da
let L80_C05_H320 = "#cdb4d2"; // #cdb4d2
let L80_C05_H340 = "#d5b2c8"; // #d5b2c8
let L80_C10_H000 = "#f3a3bb"; // #f3a3bb
let L80_C10_H020 = "#f8a4a3"; // #f8a4a3
let L80_C10_H040 = "#f6a88d"; // #f6a88d
let L80_C10_H060 = "#eeae7b"; // #eeae7b
let L80_C10_H080 = "#e0b771"; // #e0b771
let L80_C10_H100 = "#cdc072"; // #cdc072
let L80_C10_H120 = "#b5c87d"; // #b5c87d
let L80_C10_H140 = "#9bce90"; // #9bce90
let L80_C10_H160 = "#82d2a8"; // #82d2a8
let L80_C10_H180 = "#6dd3c0"; // #6dd3c0
let L80_C10_H200 = "#64d1d7"; // #64d1d7
let L80_C10_H220 = "#6ccdea"; // #6ccdea
let L80_C10_H240 = "#80c7f8"; // #80c7f8
let L80_C10_H260 = "#98bffe"; // #98bffe
let L80_C10_H280 = "#b1b7fd"; // #b1b7fd
let L80_C10_H300 = "#c7aff5"; // #c7aff5
let L80_C10_H320 = "#dba9e6"; // #dba9e6
let L80_C10_H340 = "#eaa4d2"; // #eaa4d2
let L80_C15_H000 = "#ff92ba"; // #ff92ba
let L80_C15_H020 = "#ff9798"; // #ff9798
let L80_C15_H040 = "#ff9c75"; // #ff9c75
let L80_C15_H060 = "#ffa44e"; // #ffa44e
let L80_C15_H080 = "#f0b135"; // #f0b135
let L80_C15_H100 = "#d5bf36"; // #d5bf36
let L80_C15_H120 = "#b2cb52"; // #b2cb52
let L80_C15_H140 = "#87d576"; // #87d576
let L80_C15_H160 = "#52db9c"; // #52db9c
let L80_C15_H180 = "#00dcc1"; // #00dcc1
let L80_C15_H200 = "#00dae4"; // #00dae4
let L80_C15_H220 = "#00d3ff"; // #00d3ff
//let L80_C15_H240 = "out of gamut";
//let L80_C15_H260 = "out of gamut";
//let L80_C15_H280 = "out of gamut";
//let L80_C15_H300 = "out of gamut";
let L80_C15_H320 = "#e89cf9"; // #e89cf9
let L80_C15_H340 = "#fd95dc"; // #fd95dc
//let L80_C20_H000 = "out of gamut";
//let L80_C20_H020 = "out of gamut";
//let L80_C20_H040 = "out of gamut";
//let L80_C20_H060 = "out of gamut";
//let L80_C20_H080 = "out of gamut";
//let L80_C20_H100 = "out of gamut";
let L80_C20_H120 = "#aecf00"; // #aecf00
let L80_C20_H140 = "#6fdb55"; // #6fdb55
let L80_C20_H160 = "#00e390"; // #00e390
let L80_C20_H180 = "#00dfc2"; // #00dfc2
let L80_C20_H200 = "#00dae5"; // #00dae5
//let L80_C20_H220 = "out of gamut";
//let L80_C20_H240 = "out of gamut";
//let L80_C20_H260 = "out of gamut";
//let L80_C20_H280 = "out of gamut";
//let L80_C20_H300 = "out of gamut";
//let L80_C20_H320 = "out of gamut";
let L80_C20_H340 = "#ff88e3"; // #ff88e3
let L85_C05_H000 = "#ebc1cc"; // #ebc1cc
let L85_C05_H020 = "#edc1c0"; // #edc1c0
let L85_C05_H040 = "#ecc4b6"; // #ecc4b6
let L85_C05_H060 = "#e7c7ae"; // #e7c7ae
let L85_C05_H080 = "#dfcbaa"; // #dfcbaa
let L85_C05_H100 = "#d5cfaa"; // #d5cfaa
let L85_C05_H120 = "#c9d3af"; // #c9d3af
let L85_C05_H140 = "#bdd6b8"; // #bdd6b8
let L85_C05_H160 = "#b2d8c3"; // #b2d8c3
let L85_C05_H180 = "#abd9cf"; // #abd9cf
let L85_C05_H200 = "#a8d8db"; // #a8d8db
let L85_C05_H220 = "#aad6e5"; // #aad6e5
let L85_C05_H240 = "#b1d3ec"; // #b1d3ec
let L85_C05_H260 = "#bbcfef"; // #bbcfef
let L85_C05_H280 = "#c7cbef"; // #c7cbef
let L85_C05_H300 = "#d2c7ea"; // #d2c7ea
let L85_C05_H320 = "#ddc4e3"; // #ddc4e3
let L85_C05_H340 = "#e5c2d8"; // #e5c2d8
let L85_C10_H000 = "#ffb2cb"; // #ffb2cb
let L85_C10_H020 = "#ffb4b3"; // #ffb4b3
let L85_C10_H040 = "#ffb89c"; // #ffb89c
let L85_C10_H060 = "#ffbe8a"; // #ffbe8a
let L85_C10_H080 = "#f0c781"; // #f0c781
let L85_C10_H100 = "#ddd081"; // #ddd081
let L85_C10_H120 = "#c5d88d"; // #c5d88d
let L85_C10_H140 = "#abdea0"; // #abdea0
let L85_C10_H160 = "#92e2b7"; // #92e2b7
let L85_C10_H180 = "#7ee3d0"; // #7ee3d0
let L85_C10_H200 = "#76e2e7"; // #76e2e7
let L85_C10_H220 = "#7dddfb"; // #7dddfb
//let L85_C10_H240 = "out of gamut";
//let L85_C10_H260 = "out of gamut";
//let L85_C10_H280 = "out of gamut";
//let L85_C10_H300 = "out of gamut";
let L85_C10_H320 = "#ebb9f7"; // #ebb9f7
let L85_C10_H340 = "#fbb4e2"; // #fbb4e2
//let L85_C15_H000 = "out of gamut";
//let L85_C15_H020 = "out of gamut";
//let L85_C15_H040 = "out of gamut";
let L85_C15_H060 = "#ffb973"; // #ffb973
let L85_C15_H080 = "#ffc249"; // #ffc249
let L85_C15_H100 = "#e5cf4b"; // #e5cf4b
let L85_C15_H120 = "#c1dc63"; // #c1dc63
let L85_C15_H140 = "#97e686"; // #97e686
let L85_C15_H160 = "#65ebac"; // #65ebac
let L85_C15_H180 = "#22edd1"; // #22edd1
let L85_C15_H200 = "#00eaf4"; // #00eaf4
//let L85_C15_H220 = "out of gamut";
//let L85_C15_H240 = "out of gamut";
//let L85_C15_H260 = "out of gamut";
//let L85_C15_H280 = "out of gamut";
//let L85_C15_H300 = "out of gamut";
//let L85_C15_H320 = "out of gamut";
let L85_C15_H340 = "#ffa8eb"; // #ffa8eb
//let L85_C20_H000 = "out of gamut";
//let L85_C20_H020 = "out of gamut";
//let L85_C20_H040 = "out of gamut";
//let L85_C20_H060 = "out of gamut";
//let L85_C20_H080 = "out of gamut";
//let L85_C20_H100 = "out of gamut";
let L85_C20_H120 = "#bedf0d"; // #bedf0d
let L85_C20_H140 = "#7fec66"; // #7fec66
let L85_C20_H160 = "#00f49f"; // #00f49f
let L85_C20_H180 = "#00f2d2"; // #00f2d2
//let L85_C20_H200 = "out of gamut";
//let L85_C20_H220 = "out of gamut";
//let L85_C20_H240 = "out of gamut";
//let L85_C20_H260 = "out of gamut";
//let L85_C20_H280 = "out of gamut";
//let L85_C20_H300 = "out of gamut";
//let L85_C20_H320 = "out of gamut";
//let L85_C20_H340 = "out of gamut";

const fs = require("fs");

// 方法2：动态生成JSON的函数
function generateTokenColors(rules) {
	return {
		$schema: "vscode://schemas/color-theme",
		name: "Universal Code Highlight - ZQT Theme",
		"//description": "通用的代码高亮",
		include: "./interface_ZQT.json",
		tokenColors: rules.map((rule) => ({
			scope: rule.scopes, // 支持字符串或数组
			settings: {
				foreground: rule.color,
			},
		})),
	};
}

// 定义规则数据
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	{ scopes: "class", color: WHITE },
	{ scopes: "comment", color: GREY },
	{ scopes: "constant", color: L75_C15_H180 },
	{ scopes: "constant.language.boolean", color: L75_C15_H000 },
	{ scopes: "decorator", color: WHITE },
	{ scopes: "entity", color: L75_C15_H080 },
	{ scopes: "enum", color: WHITE },
	{ scopes: "enumMember", color: WHITE },
	{ scopes: "event", color: WHITE },
	{ scopes: "function", color: WHITE },
	{ scopes: "interface", color: WHITE },
	{ scopes: "keyword", color: L75_C15_H020 },
	{ scopes: "keyword.operator", color: L75_C15_H040 },
	{ scopes: "label", color: WHITE },
	{ scopes: "macro", color: WHITE },
	{ scopes: "meta", color: WHITE },
	{ scopes: "method", color: WHITE },
	{ scopes: "namespace", color: WHITE },
	{ scopes: "number", color: WHITE },
	{ scopes: "operator", color: WHITE },
	{ scopes: "parameter", color: WHITE },
	{ scopes: "property", color: WHITE },
	{ scopes: "regexp", color: WHITE },
	{ scopes: "storage", color: L75_C15_H340 },
	{ scopes: "string", color: L75_C10_H180 },
	{ scopes: "struct", color: WHITE },
	{ scopes: "support", color: L75_C15_H060 },
	{ scopes: "type", color: WHITE },
	{ scopes: "typeParameter", color: WHITE },
	{ scopes: "variable", color: L75_C10_H140 },
];

// 生成JSON对象
const jsonData = generateTokenColors(colorRules);

// 将JSON写入文件（同步写法，适合简单脚本）
fs.writeFileSync(
	"codeHighlightUniversal_ZQT.json", // 文件名
	JSON.stringify(jsonData, null, "\t"), // 格式化JSON（2空格缩进）
	"utf8",
	(err) => {
		if (err) {
			console.error("写入文件出错:", err);
		} else {
			console.log("对象已成功保存到文件");
		}
	} // 文件编码
);

// saveObjectToTxtFile(jsonObject, "./_ZQT.json");
// // console.log(jsonObject);
