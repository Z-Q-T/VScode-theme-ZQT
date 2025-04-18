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

let errorStrong = "#fc4734"; //oklch(0.66 0.22 30)

import colour from "./palette-color.js";

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

//[10,30]的范围太接近大红色，避免使用高色度颜色
//通常的用亮度L72，特殊的可以更亮
//一大长串的用色度C08，短的可以更饱和
//html和css由于不是编程语言，因此单独处理
//scopes里的token至少要有两个，单个的token宁愿不写（特殊的除外）
//越常见的色度越低，防止扎眼
//运算符-控制：橙红
//函数：黄
//变量：绿
//值-类型：紫红
let commentColour = GREY50;
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	{ scopes: "comment", color: commentColour }, //
	{ scopes: "punctuation.definition.comment", color: commentColour }, //
	{ scopes: "invalid", color: errorStrong }, //
	//函数
	{ scopes: "entity.name.function", color: colour.L72_C08_H080 }, //函数名：calcAll()
	{ scopes: "support.function", color: colour.L74_C12_H080 }, //print()
	//变量名
	{ scopes: "variable.language", color: colour.L74_C10_H160 }, //this
	{ scopes: "variable.parameter", color: colour.L74_C10_H130 }, //def cmpt(s, A, t):
	{ scopes: "variable", color: colour.L72_C06_H130 }, //combinations、targetvalue //
	{ scopes: "support.variable", color: colour.L74_C12_H130 }, //.length
	//值
	{ scopes: "constant.language", color: colour.L72_C14_H250 }, //true、False、undefined
	{ scopes: "constant.numeric", color: colour.L74_C14_H310 }, //数值：423、1.67
	{ scopes: "string", color: colour.L74_C10_H350 }, //字符串："bienzu"、"32i4hen9"
	{ scopes: "string.regexp", color: colour.L74_C14_H350 }, // /(\w+ab)/
	{ scopes: ["string.interpolated", "string.template"], color: colour.L72_C14_H350 }, //$(pwd)、`date`
	{ scopes: ["constant.character","punctuation.definition.entity"], color: colour.L74_C12_H350 }, //&lt;、&ensp;、\031
	//控制语句
	{ scopes: "keyword.control", color: colour.L72_C12_H020 }, //for、while、else、return
	//运算符
	{ scopes: "keyword.operator", color: colour.L74_C10_H060 }, //运算符：+、-、*、/、||、==
	//类型 
	{ scopes: "storage.type", color: colour.L72_C10_H290 }, //var、let、const、function
	{ scopes: "support.type", color: colour.L74_C14_H290 }, //float()
	{ scopes: "entity.name.type", color: colour.L74_C10_H260 }, //
	//标点
	{ scopes: "punctuation.definition", color: colour.L72_C08_H240 }, //""、<>
	{ scopes: "punctuation.separator", color: GREY80 }, //,、;
	
	{ scopes: "keyword", color: colour.L76_C14_H000 },//未明确指定的
	{ scopes: "storage", color: colour.L76_C14_H000 }, //
	{ scopes: "support", color: colour.L76_C14_H000 },
	// { scopes: "entity", color: colour.L72_C10_H200 },
	// { scopes: "meta", color: colour.L72_C06_H240 },
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
// saveObjectToTxtFjsonObject, "./_ZQT.json");
// // console.loonObject);
