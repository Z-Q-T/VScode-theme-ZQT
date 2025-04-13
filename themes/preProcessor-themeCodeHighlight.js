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
//内置：红，340、0、20、40
//自写-可复用（函数、对象）：黄，60、80、100、120
//自写-不可复用（数值、字符串）：绿，140、160、180、200
//蓝，220、240、260
//紫，280、300、320
import colour from "./color_palette.js";

import fs from 'fs';

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
	{ scopes: "constant", color: colour.L74_C14_H180 },//自写-不可复用
	{ scopes: "constant.language.boolean", color: colour.L74_C14_H000 },//内置
	{ scopes: "decorator", color: WHITE },
	{ scopes: "entity", color: colour.L74_C14_H060 },//自写-可复用
	{ scopes: "enum", color: WHITE },
	{ scopes: "enumMember", color: WHITE },
	{ scopes: "event", color: WHITE },
	{ scopes: "function", color: WHITE },
	{ scopes: "interface", color: WHITE },
	{ scopes: "keyword", color: colour.L74_C14_H020 },//内置
	{ scopes: "keyword.operator", color: colour.L74_C14_H040 },//内置
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
	{ scopes: "storage", color: colour.L74_C10_H340 },//内置
	{ scopes: "string", color: colour.L74_C10_H160 },//自写-不可复用
	{ scopes: "struct", color: WHITE },
	{ scopes: "support", color: colour.L74_C14_H000 },//内置？
	{ scopes: "type", color: WHITE },
	{ scopes: "typeParameter", color: WHITE },
	{ scopes: "variable", color: colour.L74_C08_H080 },//自写-可复用
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
