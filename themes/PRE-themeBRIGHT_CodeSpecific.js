// let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let WHITE = "#FFF";

import grey from "./palette-greyscales.js";
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


const colorRules = [
	// { scopes: ["namespace", "class"], color: WHITE },//多个写在一起的写法
	{ scopes: ["entity.name.tag","entity.name.tag.css"], color: colour.L54_C10_H090 }, 
	{ scopes: ["entity.name.tag.custom"], color: colour.L56_C12_H090 }, 
	// { scopes: "meta.attribute", color: colour.L74_C15_H130 }, 
	// { scopes: ["meta.attribute.class.html","entity.other.attribute-name.class.css"], color: colour.L50_C14_H260 }, 
	// { scopes: ["meta.attribute.id.html","entity.other.attribute-name.id.css"], color: colour.L50_C14_H330 }, 
	// { scopes: "punctuation.definition.entity.css", color: colour.L72_C06_H240 }, 
	// { scopes: "entity.other.attribute-name.css", color: colour.L74_C16_H150 }, 
	// { scopes: "support.type.property-name", color: colour.L74_C06_H130 }, 
	// { scopes: "support.type.vendored.property-name.css", color: colour.L74_C14_H170 }, 
	// { scopes: ["support.constant.property-value.css","constant.numeric.css"], color: colour.L74_C06_H340 }, 
	// { scopes: "support.function.misc.css", color: colour.L76_C15_H000 }, 
	// { scopes: ["variable.css","variable.argument.css"], color: colour.L74_C16_H020 }, 
	// { scopes: ["meta.function-call.python"], color: colour.L74_C15_H080 }, 
	// { scopes: ["meta.function-call.arguments.python"], color: colour.L76_C14_H140 }, 

	{ scopes: "keyword.other.important.css", color: colour.L54_C18_H030 },
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
