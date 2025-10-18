// let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let WHITE = "#FFF";

let errorDark = "#d64651"; //oklch(0.60 0.18 20)

import grey from "./palette-greyscales.js";
import colour from "./palette-coloursBRIGHT.js";

import fs from "fs";

// 动态生成JSON的函数
function generateTokenColors(rules) {
	return {
		$schema: "vscode://schemas/color-theme",
		name: "Universal Code Highlight - ZQT BRIGHT Theme",
		"//description": "通用的代码高亮",
		// include: "./theme-ZQT_interface.json",
		tokenColors: rules.map((rule) => ({
			scope: rule.scopes, // 支持字符串或数组
			settings: {
				foreground: rule.color,
			},
		})),
	};
}


//运算符-控制：橙红
//函数：蓝
//变量：绿
//值-类型：紫红
//support的颜色在对应原颜色的基础上，L+2，C+6
let commentColour = grey.G74;
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	//函数//蓝
	{ scopes: "entity.name.function", color: colour.L50_C17_H020 }, //函数名：calcAll()
	{ scopes: "support.function", color: colour.L54_C17_H020 }, //print()
	//变量名//绿
	{ scopes: "variable.language", color: colour.L54_C17_H170 }, //this
	{ scopes: "variable", color: colour.L50_C17_H170 }, //combinations、targetvalue //
	{ scopes: "support.variable", color: colour.L54_C17_H170 }, //???
	{ scopes: "variable.other.property", color: colour.L50_C16_H140 }, 
	{ scopes: "support.variable.property", color: colour.L54_C16_H140 }, //.length
	// { scopes: "variable.parameter", color: colour.L52_C15_H140 }, //def cmpt(s, A, t):
	//值
	{ scopes: "constant.language", color: colour.L54_C18_H330 }, //true、False、undefined
	{ scopes: "constant.numeric", color: colour.L50_C17_H330 }, //数值：423、1.67
	{ scopes: "string", color: colour.L50_C17_H330 }, //字符串："bienzu"、"32i4hen9"
	{ scopes: "string.regexp", color: colour.L54_C18_H330 }, // /(\w+ab)/
	{ scopes: ["string.interpolated", "string.template"], color: colour.L54_C18_H330 }, //$(pwd)、`date`
	{ scopes: ["constant.character","punctuation.definition.entity"], color: colour.L54_C18_H330 }, //&lt;、&ensp;、\031
	//控制语句
	{ scopes: "keyword.control", color: colour.L54_C18_H250 }, //for、while、else、return
	//类型 
	{ scopes: "storage.type", color: colour.L52_C17_H300 }, //var、let、const、function
	{ scopes: "support.type", color: colour.L54_C18_H300 }, //float()
	// { scopes: "entity.name.type", color: colour.L52_C16_H260 }, //这是啥？不知道
	//运算符
	{ scopes: "keyword.operator", color: colour.L54_C16_H220 }, //运算符：+、-、*、/、||、==
	//标点
	{ scopes: "punctuation.definition", color: colour.L50_C18_H000 }, //""、<>
	{ scopes: "punctuation.separator", color: grey.G54 }, //,、;
	//其他
	{ scopes: "comment", color: commentColour }, //
	{ scopes: "punctuation.definition.comment", color: commentColour }, //
	{ scopes: "invalid", color: errorDark }, //
	// { scopes: "keyword", color: colour.L52_C18_H000 },//未明确指定的
	// { scopes: "storage", color: colour.L52_C18_H000 }, //
	// { scopes: "support", color: colour.L52_C18_H000 },
	// { scopes: "entity", color: colour.L50_C16_H200 },
	// { scopes: "meta", color: colour.L50_C15_H240 },
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

saveObjectToTxtFile(jsonData, "./themes/theme-ZQT-BRIGHT_codeUniversal.json");
// saveObjectToTxtFjsonObject, "./_ZQT.json");
// // console.loonObject);
