// let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let WHITE = "#FFF";

let errorDark = "#ca545a";//oklch(0.6 0.15 20)

import grey from "./palette-greyscales.js";
import colour from "./palette-coloursBRIGHT.js";
// import colour from "./palette-coloursDARK.js";

import fs from "fs";

// 动态生成JSON的函数
function generateTokenColors(rules) {
	return {
		$schema: "vscode://schemas/color-theme",
		name: "Universal Code Highlight - ZQT DESIGN Theme",
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


//[10,30]的范围太接近大红色，避免使用高色度颜色
//通常的用亮度L48，特殊的可以用L50。L52只用于括号高亮
//一大长串的用色度C10，短的可以更饱和
//scopes里的token至少要有两个，单个的token宁愿不写（特殊的除外）
//越常见的色度越低，防止扎眼
//运算符-控制：橙红
//函数：黄
//变量：绿
//值-类型：紫红
//support的颜色在对应原颜色的基础上，L+2，C+6
let commentColour = grey.G70;
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	{ scopes: "comment", color: commentColour }, //
	{ scopes: "punctuation.definition.comment", color: commentColour }, //
	{ scopes: "invalid", color: errorDark }, //
	//函数
	{ scopes: "entity.name.function", color: colour.L50_C12_H300 }, //函数名：calcAll()
	{ scopes: "support.function", color: colour.L52_C16_H300 }, //print()
	//变量名
	{ scopes: "variable.language", color: colour.L52_C12_H160 }, //this
	{ scopes: "variable.parameter", color: colour.L52_C10_H140 }, //def cmpt(s, A, t):
	{ scopes: "variable.other.property", color: colour.L50_C10_H100 }, 
	{ scopes: "support.variable.property", color: colour.L52_C10_H100 }, //.length
	{ scopes: "variable", color: colour.L50_C10_H140 }, //combinations、targetvalue //
	{ scopes: "support.variable", color: colour.L52_C14_H140 }, //.length
	//值
	{ scopes: "constant.language", color: colour.L50_C16_H250 }, //true、False、undefined
	{ scopes: "constant.numeric", color: colour.L52_C12_H300 }, //数值：423、1.67
	{ scopes: "string", color: colour.L50_C10_H000 }, //字符串："bienzu"、"32i4hen9"
	{ scopes: "string.regexp", color: colour.L50_C14_H340 }, // /(\w+ab)/
	{ scopes: ["string.interpolated", "string.template"], color: colour.L50_C14_H340 }, //$(pwd)、`date`
	{ scopes: ["constant.character","punctuation.definition.entity"], color: colour.L50_C14_H340 }, //&lt;、&ensp;、\031
	//控制语句
	{ scopes: "keyword.control", color: colour.L50_C16_H000 }, //for、while、else、return
	//运算符
	{ scopes: "keyword.operator", color: colour.L52_C12_H040 }, //运算符：+、-、*、/、||、==
	//类型 
	{ scopes: "storage.type", color: colour.L50_C16_H280 }, //var、let、const、function
	{ scopes: "support.type", color: colour.L52_C14_H280 }, //float()
	{ scopes: "entity.name.type", color: colour.L52_C12_H260 }, //这是啥？不知道
	//标点
	{ scopes: "punctuation.definition", color: colour.L48_C10_H240 }, //""、<>
	{ scopes: "punctuation.separator", color: grey.G45 }, //,、;
	
	// { scopes: "keyword", color: colour.L52_C16_H000 },//未明确指定的
	// { scopes: "storage", color: colour.L52_C16_H000 }, //
	// { scopes: "support", color: colour.L52_C16_H000 },
	// { scopes: "entity", color: colour.L50_C12_H200 },
	// { scopes: "meta", color: colour.L50_C10_H240 },
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

saveObjectToTxtFile(jsonData, "./themes/theme-ZQT-DESIGN_codeUniversal.json");
// saveObjectToTxtFjsonObject, "./_ZQT.json");
// // console.loonObject);
