// let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let GREY = "#7f7f7f";
let WHITE = "#FFF";
//？？？L70的比较暗，尽量不要用。L90可能太亮了，也少用
//C20及以上的纯度太高了，尽量少用，或者只有个别需要特别醒目的再用
//H210和H240比较接近蓝色，也尽量不用。尤其是H240特别尽量不用
//避免使用大红大橙，以防和报错信息混淆
let L70_C05_H000 = "#ba929d"; // #ba929d
let L70_C05_H030 = "#bc938c"; // #bc938c
let L70_C05_H060 = "#b69880"; // #b69880
let L70_C05_H090 = "#aa9e7b"; // #aa9e7b
let L70_C05_H120 = "#9aa381"; // #9aa381
let L70_C05_H150 = "#89a88e"; // #89a88e
let L70_C05_H180 = "#7ca99f"; // #7ca99f
let L70_C05_H210 = "#7aa7b0"; // #7aa7b0
let L70_C05_H240 = "#83a3bb"; // #83a3bb
let L70_C05_H270 = "#929ebe"; // #929ebe
let L70_C05_H300 = "#a398ba"; // #a398ba
let L70_C05_H330 = "#b194ad"; // #b194ad
let L70_C10_H000 = "#d2849c"; // #d2849c
let L70_C10_H030 = "#d58679"; // #d58679
let L70_C10_H060 = "#cc8f5c"; // #cc8f5c
let L70_C10_H090 = "#b79c51"; // #b79c51
let L70_C10_H120 = "#96a85e"; // #96a85e
let L70_C10_H150 = "#6fb07d"; // #6fb07d
let L70_C10_H180 = "#4bb3a1"; // #4bb3a1
let L70_C10_H210 = "#43afc1"; // #43afc1
let L70_C10_H240 = "#60a7d6"; // #60a7d6
let L70_C10_H270 = "#869bdd"; // #869bdd
let L70_C10_H300 = "#a890d4"; // #a890d4
let L70_C10_H330 = "#c287bc"; // #c287bc
let L70_C15_H000 = "#e7729b"; // #e7729b
let L70_C15_H030 = "#ed7665"; // #ed7665
let L70_C15_H060 = "#e18528"; // #e18528
let L70_C15_H090 = "#c39900"; // #c39900
let L70_C15_H120 = "#93ab2c"; // #93ab2c
let L70_C15_H150 = "#4cb86a"; // #4cb86a
let L70_C15_H180 = "#00bba2"; // #00bba2
let L70_C15_H210 = "#00b5ce"; // #00b5ce
let L70_C15_H240 = "#26a9f1"; // #26a9f1
let L70_C15_H270 = "#7a97fb"; // #7a97fb
let L70_C15_H300 = "#ad87ed"; // #ad87ed
let L70_C15_H330 = "#d179ca"; // #d179ca
let L70_C20_H000 = "#fb5c99"; // #fb5c99
let L70_C20_H030 = "#ff614d"; // #ff614d
let L70_C20_H060 = "out of gamut";
let L70_C20_H090 = "out of gamut";
let L70_C20_H120 = "out of gamut";
let L70_C20_H150 = "#00bf54"; // #00bf54
let L70_C20_H180 = "#00bba2"; // #00bba2
let L70_C20_H210 = "#00b5ce"; // #00b5ce
let L70_C20_H240 = "out of gamut";
let L70_C20_H270 = "out of gamut";
let L70_C20_H300 = "out of gamut";
let L70_C20_H330 = "#e068d8"; // #e068d8
let L70_C25_H000 = "#ff4698"; // #ff4698
let L70_C25_H030 = "#ff5843"; // #ff5843
let L70_C25_H060 = "out of gamut";
let L70_C25_H090 = "out of gamut";
let L70_C25_H120 = "out of gamut";
let L70_C25_H150 = "#00c248"; // #00c248
let L70_C25_H180 = "out of gamut";
let L70_C25_H210 = "out of gamut";
let L70_C25_H240 = "out of gamut";
let L70_C25_H270 = "out of gamut";
let L70_C25_H300 = "out of gamut";
let L70_C25_H330 = "#ee50e6"; // #ee50e6

let L75_C05_H000 = "#caa1ac"; // #caa1ac
let L75_C05_H030 = "#cca39b"; // #cca39b
let L75_C05_H060 = "#c6a78f"; // #c6a78f
let L75_C05_H090 = "#baad8a"; // #baad8a
let L75_C05_H120 = "#a9b390"; // #a9b390
let L75_C05_H150 = "#98b79e"; // #98b79e
let L75_C05_H180 = "#8cb9af"; // #8cb9af
let L75_C05_H210 = "#89b7bf"; // #89b7bf
let L75_C05_H240 = "#92b3cb"; // #92b3cb
let L75_C05_H270 = "#a1adcf"; // #a1adcf
let L75_C05_H300 = "#b2a7ca"; // #b2a7ca
let L75_C05_H330 = "#c1a3bd"; // #c1a3bd
let L75_C10_H000 = "#e293ab"; // #e293ab
let L75_C10_H030 = "#e69688"; // #e69688
let L75_C10_H060 = "#dd9f6b"; // #dd9f6b
let L75_C10_H090 = "#c6ab60"; // #c6ab60
let L75_C10_H120 = "#a6b86e"; // #a6b86e
let L75_C10_H150 = "#7fc08c"; // #7fc08c
let L75_C10_H180 = "#5cc3b0"; // #5cc3b0
let L75_C10_H210 = "#55bfd1"; // #55bfd1
let L75_C10_H240 = "#70b6e7"; // #70b6e7
let L75_C10_H270 = "#95abee"; // #95abee
let L75_C10_H300 = "#b7a0e4"; // #b7a0e4
let L75_C10_H330 = "#d297cc"; // #d297cc
let L75_C15_H000 = "#f982aa"; // #f982aa
let L75_C15_H030 = "#fe8674"; // #fe8674
let L75_C15_H060 = "#f2943c"; // #f2943c
let L75_C15_H090 = "#d3a813"; // #d3a813
let L75_C15_H120 = "#a2bb40"; // #a2bb40
let L75_C15_H150 = "#5dc879"; // #5dc879
let L75_C15_H180 = "#00ccb2"; // #00ccb2
let L75_C15_H210 = "#00c6e2"; // #00c6e2
let L75_C15_H240 = "out of gamut";
let L75_C15_H270 = "out of gamut";
let L75_C15_H300 = "#bd96fe"; // #bd96fe
let L75_C15_H330 = "#e289db"; // #e289db
let L75_C20_H000 = "#ff71a9"; // #ff71a9
let L75_C20_H030 = "#ff7c68"; // #ff7c68
let L75_C20_H060 = "out of gamut";
let L75_C20_H090 = "out of gamut";
let L75_C20_H120 = "out of gamut";
let L75_C20_H150 = "#1dcf64"; // #1dcf64
let L75_C20_H180 = "#00cdb2"; // #00cdb2
let L75_C20_H210 = "#00c6e2"; // #00c6e2
let L75_C20_H240 = "out of gamut";
let L75_C20_H270 = "out of gamut";
let L75_C20_H300 = "out of gamut";
let L75_C20_H330 = "#f178e9"; // #f178e9
let L75_C25_H000 = "#ff71a9"; // #ff71a9
let L75_C25_H030 = "out of gamut";
let L75_C25_H060 = "out of gamut";
let L75_C25_H090 = "out of gamut";
let L75_C25_H120 = "out of gamut";
let L75_C25_H150 = "#00d451"; // #00d451
let L75_C25_H180 = "out of gamut";
let L75_C25_H210 = "out of gamut";
let L75_C25_H240 = "out of gamut";
let L75_C25_H270 = "out of gamut";
let L75_C25_H300 = "out of gamut";
let L75_C25_H330 = "#ff62f7"; // #ff62f7
let L80_C05_H000 = "#dab1bc"; // #dab1bc
let L80_C05_H030 = "#dcb2ab"; // #dcb2ab
let L80_C05_H060 = "#d7b79e"; // #d7b79e
let L80_C05_H090 = "#cabd9a"; // #cabd9a
let L80_C05_H120 = "#b9c39f"; // #b9c39f
let L80_C05_H150 = "#a8c7ad"; // #a8c7ad
let L80_C05_H180 = "#9bc9bf"; // #9bc9bf
let L80_C05_H210 = "#99c7d0"; // #99c7d0
let L80_C05_H240 = "#a1c3db"; // #a1c3db
let L80_C05_H270 = "#b1bddf"; // #b1bddf
let L80_C05_H300 = "#c2b7da"; // #c2b7da
let L80_C05_H330 = "#d1b3cd"; // #d1b3cd
let L80_C10_H000 = "#f3a3bb"; // #f3a3bb
let L80_C10_H030 = "#f7a597"; // #f7a597
let L80_C10_H060 = "#eeae7b"; // #eeae7b
let L80_C10_H090 = "#d7bb70"; // #d7bb70
let L80_C10_H120 = "#b5c87d"; // #b5c87d
let L80_C10_H150 = "#8ed09c"; // #8ed09c
let L80_C10_H180 = "#6dd3c0"; // #6dd3c0
let L80_C10_H210 = "#66cfe1"; // #66cfe1
let L80_C10_H240 = "#80c7f8"; // #80c7f8
let L80_C10_H270 = "#a4bbff"; // #a4bbff
let L80_C10_H300 = "#c7aff5"; // #c7aff5
let L80_C10_H330 = "#e3a6dd"; // #e3a6dd
let L80_C15_H000 = "#ff92ba"; // #ff92ba
let L80_C15_H030 = "#ff9a88"; // #ff9a88
let L80_C15_H060 = "#ffa44e"; // #ffa44e
let L80_C15_H090 = "#e3b831"; // #e3b831
let L80_C15_H120 = "#b2cb52"; // #b2cb52
let L80_C15_H150 = "#6ed889"; // #6ed889
let L80_C15_H180 = "#00dcc1"; // #00dcc1
let L80_C15_H210 = "#00d7f3"; // #00d7f3
let L80_C15_H240 = "out of gamut";
let L80_C15_H270 = "out of gamut";
let L80_C15_H300 = "out of gamut";
let L80_C15_H330 = "#f398eb"; // #f398eb
let L80_C20_H000 = "out of gamut";
let L80_C20_H030 = "out of gamut";
let L80_C20_H060 = "out of gamut";
let L80_C20_H090 = "out of gamut";
let L80_C20_H120 = "#aecf00"; // #aecf00
let L80_C20_H150 = "#3ce074"; // #3ce074
let L80_C20_H180 = "#00dfc2"; // #00dfc2
let L80_C20_H210 = "out of gamut";
let L80_C20_H240 = "out of gamut";
let L80_C20_H270 = "out of gamut";
let L80_C20_H300 = "out of gamut";
let L80_C20_H330 = "#ff88fa"; // #ff88fa
let L80_C25_H000 = "out of gamut";
let L80_C25_H030 = "out of gamut";
let L80_C25_H060 = "out of gamut";
let L80_C25_H090 = "out of gamut";
let L80_C25_H120 = "out of gamut";
let L80_C25_H150 = "#00e75b"; // #00e75b
let L80_C25_H180 = "#00dfc2"; // #00dfc2
let L80_C25_H210 = "out of gamut";
let L80_C25_H240 = "out of gamut";
let L80_C25_H270 = "out of gamut";
let L80_C25_H300 = "out of gamut";
let L80_C25_H330 = "out of gamut";
let L85_C05_H000 = "#ebc1cc"; // #ebc1cc
let L85_C05_H030 = "#edc2bb"; // #edc2bb
let L85_C05_H060 = "#e7c7ae"; // #e7c7ae
let L85_C05_H090 = "#dacda9"; // #dacda9
let L85_C05_H120 = "#c9d3af"; // #c9d3af
let L85_C05_H150 = "#b8d8bd"; // #b8d8bd
let L85_C05_H180 = "#abd9cf"; // #abd9cf
let L85_C05_H210 = "#a9d7e0"; // #a9d7e0
let L85_C05_H240 = "#b1d3ec"; // #b1d3ec
let L85_C05_H270 = "#c1cdef"; // #c1cdef
let L85_C05_H300 = "#d2c7ea"; // #d2c7ea
let L85_C05_H330 = "#e1c3de"; // #e1c3de
let L85_C10_H000 = "#ffb2cb"; // #ffb2cb
let L85_C10_H030 = "#ffb5a7"; // #ffb5a7
let L85_C10_H060 = "#ffbe8a"; // #ffbe8a
let L85_C10_H090 = "#e7cb80"; // #e7cb80
let L85_C10_H120 = "#c5d88d"; // #c5d88d
let L85_C10_H150 = "#9ee1ab"; // #9ee1ab
let L85_C10_H180 = "#7ee3d0"; // #7ee3d0
let L85_C10_H210 = "#77e0f2"; // #77e0f2
let L85_C10_H240 = "out of gamut";
let L85_C10_H270 = "out of gamut";
let L85_C10_H300 = "out of gamut";
let L85_C10_H330 = "#f4b6ed"; // #f4b6ed
let L85_C15_H000 = "out of gamut";
let L85_C15_H030 = "out of gamut";
let L85_C15_H060 = "#ffb973"; // #ffb973
let L85_C15_H090 = "#f4c947"; // #f4c947
let L85_C15_H120 = "#c1dc63"; // #c1dc63
let L85_C15_H150 = "#7fe998"; // #7fe998
let L85_C15_H180 = "#22edd1"; // #22edd1
let L85_C15_H210 = "out of gamut";
let L85_C15_H240 = "out of gamut";
let L85_C15_H270 = "out of gamut";
let L85_C15_H300 = "out of gamut";
let L85_C15_H330 = "#ffa8fc"; // #ffa8fc
let L85_C20_H000 = "out of gamut";
let L85_C20_H030 = "out of gamut";
let L85_C20_H060 = "out of gamut";
let L85_C20_H090 = "out of gamut";
let L85_C20_H120 = "#bedf0d"; // #bedf0d
let L85_C20_H150 = "#52f184"; // #52f184
let L85_C20_H180 = "#00f2d2"; // #00f2d2
let L85_C20_H210 = "out of gamut";
let L85_C20_H240 = "out of gamut";
let L85_C20_H270 = "out of gamut";
let L85_C20_H300 = "out of gamut";
let L85_C20_H330 = "out of gamut";
let L85_C25_H000 = "out of gamut";
let L85_C25_H030 = "out of gamut";
let L85_C25_H060 = "out of gamut";
let L85_C25_H090 = "out of gamut";
let L85_C25_H120 = "out of gamut";
let L85_C25_H150 = "#00f86c"; // #00f86c
let L85_C25_H180 = "#00f2d2"; // #00f2d2
let L85_C25_H210 = "out of gamut";
let L85_C25_H240 = "out of gamut";
let L85_C25_H270 = "out of gamut";
let L85_C25_H300 = "out of gamut";
let L85_C25_H330 = "out of gamut";
let L90_C05_H000 = "#fcd1dc"; // #fcd1dc
let L90_C05_H030 = "#fed2cb"; // #fed2cb
let L90_C05_H060 = "#f8d7be"; // #f8d7be
let L90_C05_H090 = "#ebddb9"; // #ebddb9
let L90_C05_H120 = "#d9e3bf"; // #d9e3bf
let L90_C05_H150 = "#c8e8cd"; // #c8e8cd
let L90_C05_H180 = "#bbe9df"; // #bbe9df
let L90_C05_H210 = "#b9e8f0"; // #b9e8f0
let L90_C05_H240 = "#c1e3fc"; // #c1e3fc
let L90_C05_H270 = "#d1ddff"; // #d1ddff
let L90_C05_H300 = "#e3d7fb"; // #e3d7fb
let L90_C05_H330 = "#f2d3ee"; // #f2d3ee
let L90_C10_H000 = "out of gamut";
let L90_C10_H030 = "out of gamut";
let L90_C10_H060 = "out of gamut";
let L90_C10_H090 = "#f8dc90"; // #f8dc90
let L90_C10_H120 = "#d5e89d"; // #d5e89d
let L90_C10_H150 = "#aef1bb"; // #aef1bb
let L90_C10_H180 = "#8ff4e0"; // #8ff4e0
let L90_C10_H210 = "out of gamut";
let L90_C10_H240 = "out of gamut";
let L90_C10_H270 = "out of gamut";
let L90_C10_H300 = "out of gamut";
let L90_C10_H330 = "#ffc6fe"; // #ffc6fe
let L90_C15_H000 = "out of gamut";
let L90_C15_H030 = "out of gamut";
let L90_C15_H060 = "out of gamut";
let L90_C15_H090 = "#ffd95a"; // #ffd95a
let L90_C15_H120 = "#d1ed74"; // #d1ed74
let L90_C15_H150 = "#90faa8"; // #90faa8
let L90_C15_H180 = "#43fee2"; // #43fee2
let L90_C15_H210 = "out of gamut";
let L90_C15_H240 = "out of gamut";
let L90_C15_H270 = "out of gamut";
let L90_C15_H300 = "out of gamut";
let L90_C15_H330 = "out of gamut";
let L90_C20_H000 = "out of gamut";
let L90_C20_H030 = "out of gamut";
let L90_C20_H060 = "out of gamut";
let L90_C20_H090 = "out of gamut";
let L90_C20_H120 = "#cef034"; // #cef034
let L90_C20_H150 = "out of gamut";
let L90_C20_H180 = "out of gamut";
let L90_C20_H210 = "out of gamut";
let L90_C20_H240 = "out of gamut";
let L90_C20_H270 = "out of gamut";
let L90_C20_H300 = "out of gamut";
let L90_C20_H330 = "out of gamut";
let L90_C25_H000 = "out of gamut";
let L90_C25_H030 = "out of gamut";
let L90_C25_H060 = "out of gamut";
let L90_C25_H090 = "out of gamut";
let L90_C25_H120 = "out of gamut";
let L90_C25_H150 = "out of gamut";
let L90_C25_H180 = "out of gamut";
let L90_C25_H210 = "out of gamut";
let L90_C25_H240 = "out of gamut";
let L90_C25_H270 = "out of gamut";
let L90_C25_H300 = "out of gamut";
let L90_C25_H330 = "out of gamut";

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
	{ scopes: "constant", color: L80_C15_H180 },
	{ scopes: "constant.language.boolean", color: L80_C15_H000 },
	{ scopes: "decorator", color: WHITE },
	{ scopes: "entity", color: L80_C10_H120 },
	{ scopes: "enum", color: WHITE },
	{ scopes: "enumMember", color: WHITE },
	{ scopes: "event", color: WHITE },
	{ scopes: "function", color: WHITE },
	{ scopes: "interface", color: WHITE },
	{ scopes: "keyword", color: L80_C15_H000 },
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
	{ scopes: "storage", color: L80_C15_H330 },
	{ scopes: "string", color: L80_C05_H150 },
	{ scopes: "struct", color: WHITE },
	{ scopes: "support", color: WHITE },
	{ scopes: "type", color: WHITE },
	{ scopes: "typeParameter", color: WHITE },
	{ scopes: "variable", color: L80_C10_H090 },
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
