import Color from "colorjs.io";
import fs from "fs"; // 引入文件系统模块

let hueArra = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
let lightnessArray = [0.7, 0.75, 0.8, 0.85, 0.9];
let chromaArray = [0.1, 0.15, 0.2, 0.25, 0.3];

let combinations = [];
let hexColors = [];

// 生成所有 OKLCH 组合
for (let L of lightnessArray) {
	for (let C of chromaArray) {
		for (let H of hueArra) {
			combinations.push([L, C, H]);
		}
	}
}

// 将每个 OKLCH 转换为 AdobeRGB HEX
for (let [L, C, H] of combinations) {
	const oklchColor = new Color("oklch", [L, C, H]);
	if (oklchColor.inGamut("a98rgb")) {
		const adobeRgbColor = oklchColor.to("a98rgb"); // 转换到 AdobeRGB 色域
		const hexColor = adobeRgbColor.to("srgb").toString({ format: "hex" }); // 转换为 HEX
		hexColors.push(`H: ${H}, L: ${L}, C: ${C} -> ${hexColor}`);
	}else {
		hexColors.push(`H: ${H}, L: ${L}, C: ${C} -> out of gamut`);
	}
}

// 将结果写入本地 txt 文件
fs.writeFileSync("hexColors.txt", hexColors.join("\n"), "utf-8");

console.log("HEX 色值已写入 hexColors.txt 文件");
