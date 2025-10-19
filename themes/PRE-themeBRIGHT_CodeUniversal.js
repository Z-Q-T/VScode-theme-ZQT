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


//support的颜色在对应原颜色的基础上，L+2，C+6
let commentColour = grey.G74;
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	//函数
	{ scopes: ["entity.name.function","meta.selector.css","meta.function-call"], color: colour.L52_C18_H350 }, //函数名：calcAll()
	{ scopes: "support.function", color: colour.L56_C18_H350 }, //print()
	//变量名
	{ scopes: ["variable","meta.function-call.arguments"], color: colour.L52_C14_H170 }, //combinations、targetvalue //
	{ scopes: ["support.variable","support.type.property-name.css","entity.other.attribute-name.html"], color: colour.L56_C16_H170 }, //???
	{ scopes: "variable.language", color: colour.L56_C16_H170 }, //this
	{ scopes: ["variable.other.property","entity.other.attribute-name.pseudo-element.css","entity.other.attribute-name.pseudo-class.css","meta.attribute"], color: colour.L56_C12_H110 }, 
	{ scopes: "support.variable.property", color: colour.L58_C12_H110 }, //.length
	//值
	{ scopes: ["string","constant.numeric","meta.item-access.arguments"], color: colour.L50_C14_H300 }, //数值：423、1.67；字符串："bienzu"、"32i4hen9 "
	{ scopes: ["string.regexp","string.interpolated", "string.template","constant.character","punctuation.definition.entity","support.constant.property-value.css"], color: colour.L54_C18_H300 }, ///(\w+ab)/、$(pwd)、`date`、&lt;、&ensp;、\031
	{ scopes: "constant.language", color: colour.L58_C18_H300 }, //true、False、undefined
	//控制语句
	{ scopes: "keyword.control", color: colour.L56_C12_H060 }, //for、while、else、return
	//类型 
	{ scopes: "storage.type", color: colour.L56_C16_H240 }, //var、let、const、function
	{ scopes: "support.type", color: colour.L56_C18_H240 }, //float()
	// { scopes: "entity.name.type", color: colour.L52_C16_H260 }, //这是啥？不知道
	//运算符
	{ scopes: "keyword.operator", color: colour.L54_C12_H000 }, //运算符：+、-、*、/、||、==
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
