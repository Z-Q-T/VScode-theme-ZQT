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

import colour from "./palette-coloursBRIGHT.js";

import fs from "fs";

// 动态生成JSON的函数
function generateTokenColors(rules) {
	return {
		$schema: "vscode://schemas/color-theme",
		name: "Specific Code Highlight - ZQT BRIGHT Theme",
		"//description": "各个语言专有的代码高亮",
		include: "theme-ZQT-BRIGHT_codeUniversal.json",
		tokenColors: rules.map((rule) => ({
			scope: rule.scopes, // 支持字符串或数组
			settings: {
				foreground: rule.color,
			},
		})),
	};
}

//通常的用亮度L72，特殊的可以更亮
//一大长串的用色度C14，短的可以更饱和
//html、css、json、yaml、toml等由于不是编程语言，因此单独处理
//越常见的色度越低，防止扎眼
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	// { scopes: ["entity.name.tag","entity.name.tag.css"], color: colour.L76_C14_H280 }, 
	// { scopes: ["entity.name.tag.custom"], color: colour.L74_C17_H280 }, 
	// { scopes: "meta.attribute", color: colour.L74_C15_H130 }, 
	// { scopes: ["meta.attribute.class.html","entity.other.attribute-name.class.css"], color: colour.L74_C16_H080 }, 
	// { scopes: ["meta.attribute.id.html","entity.other.attribute-name.id.css"], color: colour.L74_C16_H040 }, 
	// { scopes: "punctuation.definition.entity.css", color: colour.L72_C06_H240 }, 
	// { scopes: "entity.other.attribute-name.css", color: colour.L74_C16_H150 }, 
	// { scopes: "entity.other.attribute-name.pseudo-element.css", color: colour.L76_C15_H310 }, 
	// { scopes: "entity.other.attribute-name.pseudo-class.css", color: colour.L74_C17_H110 }, 
	// { scopes: "support.type.property-name", color: colour.L74_C06_H130 }, 
	// { scopes: "support.type.vendored.property-name.css", color: colour.L74_C14_H170 }, 
	// { scopes: ["support.constant.property-value.css","constant.numeric.css"], color: colour.L74_C06_H340 }, 
	// { scopes: "support.function.misc.css", color: colour.L76_C15_H000 }, 
	// { scopes: ["variable.css","variable.argument.css"], color: colour.L74_C16_H020 }, 
	// { scopes: ["meta.function-call.python"], color: colour.L74_C15_H080 }, 
	// { scopes: ["meta.function-call.arguments.python"], color: colour.L76_C14_H140 }, 

	{ scopes: "keyword.other.important.css", color: colour.L76_C17_H220 },
];
//js、html、python都好了，再改一改css就好了

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

saveObjectToTxtFile(jsonData, "./themes/theme-ZQT-BRIGHT_codeSpecific.json");
// saveObjectToTxtFjsonObject, "./_ZQT.json");
// // console.loonObject);
