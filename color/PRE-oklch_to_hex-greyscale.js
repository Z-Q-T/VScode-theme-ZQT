import Color from "colorjs.io";
import fs from "fs"; // 引入文件系统模块

let lightnessArray = [0.02, 0.04, 0.06, 0.08, 0.10, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42, 0.44, 0.46, 0.48, 0.50, 0.52, 0.54, 0.56, 0.58, 0.60, 0.62, 0.64, 0.66, 0.68, 0.70, 0.72, 0.74, 0.76, 0.78, 0.80, 0.82, 0.84, 0.86, 0.88, 0.90, 0.92, 0.94, 0.96, 0.98];
let chromaArray = ["00"];
let hueArray = [
	"000"
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
		hexColors.push(`G${Math.round(L * 100)}: "${hexColor}", // ${hexColor}`);
	} else {
		hexColors.push(`//G${Math.round(L * 100)}: "out of gamut",`);
	}
}
hexColors.push("}");
// 将结果写入本地 txt 文件
fs.writeFileSync("./themes/palette-greyscales.js", hexColors.join("\n"), "utf-8");

console.log("HEX色值已写入文件");
