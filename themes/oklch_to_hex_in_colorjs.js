import Color from "colorjs.io";
import fs from "fs"; // 引入文件系统模块

let lightnessArray = [0.7, 0.72, 0.74, 0.76, 0.78];
let chromaArray = ["06", "08", "10", "12", "14"];
let hueArray = [
	"000",
	"020",
	"040",
	"060",
	"080",
	"100",
	"120",
	"140",
	"160",
	"180",
	"200",
	"220",
	"240",
	"260",
	"280",
	"300",
	"320",
	"340",
];
//TODO: 颜色改成20一档
let combinations = [];
let hexColors = [];

// 生成所有 OKLCH 组合
for (let L of lightnessArray) {
	for (let C of chromaArray) {
		for (let H of hueArray) {
			combinations.push([L, C, H]);
		}
	}
}
hexColors.push("export default { //默认导出模块");
// 将每个 OKLCH 转换为 AdobeRGB HEX
for (let [L, C, H] of combinations) {
	const oklchColor = new Color("oklch", [L, Number(C) / 100, Number(H)]);
	if (oklchColor.inGamut("a98rgb")) {
		const adobeRgbColor = oklchColor.to("a98rgb"); // 转换到 AdobeRGB 色域
		const hexColor = adobeRgbColor.to("srgb").toString({ format: "hex" }); // 转换为 HEX
		hexColors.push(`L${L * 100}_C${C}_H${H}: "${hexColor}", // ${hexColor}`);
	} else {
		hexColors.push(`//L${L * 100}_C${C}_H${H}: "out of gamut",`);
	}
}
hexColors.push("}");
// 将结果写入本地 txt 文件
fs.writeFileSync("color_palette.js", hexColors.join("\n"), "utf-8");

console.log("HEX 色值已写入 hexColors.txt 文件");
