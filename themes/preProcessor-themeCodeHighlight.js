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

let errorStrong = "#fc4734";//oklch(0.66 0.22 30)


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

let entityCharacterColour = colour.L74_C12_H180;
let commentColour = GREY50;
//[10,30]的范围太接近大红色，避免使用高色度颜色
//通常的用亮度L72，特殊的可以更亮
//一大长串的用色度C08，短的可以更饱和
const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	{ scopes: "comment", color: commentColour },//done
	{ scopes: "punctuation.definition.comment", color: commentColour }, //done
	{ scopes: "constant.character", color: entityCharacterColour }, //done
	{ scopes: "punctuation.definition.entity", color: entityCharacterColour }, //done
	{ scopes: "invalid", color: errorStrong },//done

	{ scopes: "constant.language", color: colour.L72_C14_H270 }, //done
	{ scopes: "constant.numeric", color: colour.L72_C12_H210 }, //done
	{ scopes: "entity.name.function", color: colour.L74_C10_H040 }, //done
	{ scopes: "entity.name.tag", color: colour.L72_C08_H320 }, //done
	{ scopes: "entity.other.attribute-name", color: colour.L72_C08_H080 }, //done
	{ scopes: "entity", color: colour.L72_C10_H200 }, 
	{ scopes: "keyword.control", color: colour.L72_C12_H000 }, //done
	{ scopes: "keyword.operator", color: colour.L74_C10_H280 }, //done
	{ scopes: "keyword", color: colour.L72_C14_H250 },
	{ scopes: "meta", color: colour.L72_C06_H240 }, //done
	{ scopes: "punctuation.definition", color: colour.L76_C06_H080 },//done
	{ scopes: "punctuation.separator", color: GREY80 },//done
	{ scopes: "storage", color: colour.L72_C12_H320 }, //done
	{ scopes: "string.interpolated", color: colour.L74_C14_H160 }, //done
	{ scopes: "string.regexp", color: colour.L74_C14_H140 }, //done
	{ scopes: "string", color: colour.L72_C06_H150 }, //done
	{ scopes: "support.function", color: colour.L74_C12_H020 }, //done
	{ scopes: "support", color: colour.L74_C12_H100 }, 
	{ scopes: "variable.language", color: colour.L74_C10_H120 }, //done
	{ scopes: "variable.parameter", color: colour.L74_C10_H070 }, //done
	{ scopes: "variable", color: colour.L72_C08_H080 }, //done
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

saveObjectToTxtFile(jsonData, "./theme-ZQT_codeHighlightUniversal.json");
// saveObjectToTxtFjsonObject, "./_ZQT.json");
// // console.loonObject);
