import Color from "colorjs.io";
import fs from "fs"; // 引入文件系统模块

let lightnessArray = [0.46, 0.48, 0.50, 0.52];
let chromaArray = ["08", "10", "12", "14", "16"];
let hueArray = [
	"000",
	"010",
	"020",
	"030",
	"040",
	"050",
	"060",
	"070",
	"080",
	"090",
	"100",
	"110",
	"120",
	"130",
	"140",
	"150",
	"160",
	"170",
	"180",
	"190",
	"200",
	"210",
	"220",
	"230",
	"240",
	"250",
	"260",
	"270",
	"280",
	"290",
	"300",
	"310",
	"320",
	"330",
	"340",
	"350",
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
		hexColors.push(`L${Math.round(L * 100)}_C${C}_H${H}: "${hexColor}", // ${hexColor}`);
	} else {
		hexColors.push(`//L${Math.round(L * 100)}_C${C}_H${H}: "out of gamut",`);
	}
}
hexColors.push("}");
// 将结果写入本地 txt 文件
fs.writeFileSync("./themes/palette-coloursBRIGHT.js", hexColors.join("\n"), "utf-8");

console.log("HEX色值已写入文件");
