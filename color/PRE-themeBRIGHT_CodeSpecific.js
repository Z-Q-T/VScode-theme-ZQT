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
	{ scopes: "keyword.other.important.css", color: colour.L54_C18_H030 },
	{ scopes: ["punctuation.definition.heading.markdown", "punctuation.definition.bold.markdown","punctuation.definition.raw.markdown","punctuation.definition.markdown","punctuation.definition.table.markdown","punctuation.separator.table.markdown","punctuation.definition.list.begin.markdown","punctuation.definition.metadata.markdown","punctuation.definition.link.title.begin.markdown","punctuation.definition.link.title.end.markdown"], color: grey.G80 },
	{ scopes: ["meta.separator.markdown","markup.underline.link.markdown"], color: grey.G60 },
	{ scopes: "heading.1.markdown", color: colour.L58_C18_H010 },
	{ scopes: "heading.2.markdown", color: colour.L56_C16_H020 },
	{ scopes: "heading.3.markdown", color: colour.L54_C14_H030 },
	{ scopes: "heading.4.markdown", color: colour.L52_C12_H040 },
	{ scopes: "markup.bold.markdown", color: colour.L50_C10_H280 },
	{ scopes: ["markup.inline.raw.string.markdown","markup.fenced_code.block.markdown"], color: colour.L52_C10_H160 },
	{ scopes: "markup.table.markdown", color: colour.L52_C10_H100 },
	{ scopes: "string.other.link.title.markdown", color: colour.L52_C12_H240 },
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

saveObjectToTxtFile(jsonData, "./color/theme-ZQT-BRIGHT_codeSpecific.json");
// saveObjectToTxtFjsonObject, "./_ZQT.json");
// // console.loonObject);
