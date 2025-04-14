// let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let GREY10 = "#030303"; //按照oklch色域 #030303
let GREY15 = "#0b0b0b";
let GREY20 = "#161616";
let GREY25 = "#222222";
let GREY30 = "#2e2e2e";
let GREY35 = "#3a3a3a";
let GREY40 = "#484848";
let GREY45 = "#555555";
let GREY50 = "#636363";
let GREY55 = "#717171";
let GREY60 = "#808080";
let GREY65 = "#8f8f8f";
let GREY70 = "#9e9e9e";
let GREY75 = "#aeaeae";
let GREY80 = "#bebebe";
let GREY85 = "#cecece";
let GREY90 = "#dedede";
let GREY95 = "#eeeeee";
let WHITE = "#FFF";

let errorStrong = "#ff3b3b";

//H220和H240比较接近蓝色，尽量不用
//避免使用大红大橙，以防和报错信息混淆
//内置：红，340、0、20、40
//自写-可复用（函数、对象）：黄，60、80、100、120
//自写-不可复用（数值、字符串）：绿，140、160、180、200
//蓝，220、240、260
//紫，280、300、320
import colour from "./color_palette.js";

import fs from "fs";

// 动态生成JSON的函数
function generateTokenColors(rules) {
	return {
		$schema: "vscode://schemas/color-theme",
		name: "Universal Code Highlight - ZQT Theme",
		"//description": "通用的代码高亮",
		include: "./theme-ZQT_interface.json",
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
	{ scopes: "comment", color: GREY50 },
	{ scopes: "invalid", color: errorStrong },
	{ scopes: "constant.numeric", color: colour.L72_C12_H200 }, //自写-不可复用
	{ scopes: "constant.character", color: colour.L72_C12_H160 }, //内置
	{ scopes: "constant.language", color: colour.L72_C14_H000 }, //内置
	{ scopes: "entity", color: colour.L72_C14_H060 }, //自写-可复用
	{ scopes: "entity.name.function", color: colour.L72_C14_H060 }, //自写-可复用
	{ scopes: "entity.name.tag", color: colour.L72_C14_H060 }, //内置
	{ scopes: "entity.other.attribute-name", color: colour.L72_C14_H060 }, //内置
	{ scopes: "keyword", color: colour.L72_C14_H020 }, //内置
	{ scopes: "keyword.control", color: colour.L72_C14_H020 }, //内置
	{ scopes: "keyword.operator", color: colour.L72_C14_H040 }, //内置
	{ scopes: "meta", color: colour.L72_C12_H240 },//元
	{ scopes: "punctuation", color: GREY80 },//元
	{ scopes: "punctuation.definition.comment", color: GREY50 },//元
	{ scopes: "storage", color: colour.L72_C10_H340 }, //内置
	{ scopes: "string", color: colour.L72_C08_H160 }, //自写-不可复用
	{ scopes: "string.regexp", color: WHITE },//半自写
	{ scopes: "string.interpolated", color: colour.L72_C14_H160 },//半自写
	{ scopes: "support", color: colour.L72_C14_H000 }, //内置
	{ scopes: "support.function", color: colour.L72_C14_H000 }, //内置
	{ scopes: "variable", color: colour.L72_C08_H070 }, //自写-可复用
	{ scopes: "variable.parameter", color: colour.L72_C08_H080 }, //自写-可复用
	{ scopes: "variable.language", color: colour.L72_C08_H080 }, //内置
];

// 生成JSON对象
const jsonData = generateTokenColors(colorRules);

// 将JSON写入文件（同步写法，适合简单脚本）
// fs.writeFileSync(	"theme-ZQT_codeHighlightUniversal.json",	JSON.stringify(jsonData, null, "\t"),	"utf8");

function saveObjectToTxtFile(obj, filePath) {
	// 将对象转换为格式化的JSON字符串
	const content = JSON.stringify(obj, null, "\t");

	// 写入文件
	fs.writeFile(filePath, content, (err) => {
		if (err) {
			console.error("写入文件出错:", err);
		} else {
			console.log("对象已成功保存到文件");
		}
	});
}

saveObjectToTxtFile(jsonData, "./theme-ZQT_codeHighlightUniversal.json");
// saveObjectToTxtFile(jsonObject, "./_ZQT.json");
// // console.log(jsonObject);
