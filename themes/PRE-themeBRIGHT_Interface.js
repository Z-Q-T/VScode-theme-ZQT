let DFLT = "default";
let TRANSPARENT = "#00000000";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let BLACK = "#000";
let WHITE = "#FFF";

import grey from "./palette-greyscales.js";
import colour from "./palette-coloursBRIGHT.js";

let shadow = "#44444466";
let drop = "#70707030";
let placeholder = "#9d9d9dff";
let sliderNormal = "#00000011";
let hover = "#00000022";
let click = "#00000055";
let buttonColour="#396fc8";//oklch(0.55 0.15 260)

let addLight = "#40cc6d";//oklch(0.75 0.18 150)
let addLightTRANSPARENT = "#40cc6d44";
let modifyLight = "#c8ae00";//oklch(0.75 0.18 100)
let deleteLight = "#ff76a9";//oklch(0.75 0.18 0)
let deleteLightTRANSPARENT = "#ff76a944";

let gitAdd = "#21763c";//oklch(0.5 0.12 150)
let gitModify = "#746300";//oklch(0.5 0.12 100)
let gitDelete = "#984260";//oklch(0.5 0.12 0)
let gitRename = "#0090b1";//oklch(0.6 0.12 220)
let gitUntrack = "#688e3b";//oklch(0.6 0.12 130)
let gitIgnore = "#959595";
let gitConflict = "#a067ac";//oklch(0.6 0.12 320)
let gitSubmodule = "#495da7";//oklch(0.5 0.12 270)
let SourceControlGraphRef = "#888";
let SourceControlGraphRemote = "#444";

let errorLight = "#eb7289"; //oklch(0.7 0.15 10)
let errorDark = "#cc4f6a";//oklch(0.6 0.16 10)
let warningLight = "#e18528";//oklch(0.7 0.15 60)
let warningDark = "#c26300";//oklch(0.6 0.16 60)
let infoLight = "#59a0f9";//oklch(0.7 0.15 255)
let infoDark = "#3280dd";//oklch(0.6 0.16 255)
let hintLight = "#5bb661";//oklch(0.7 0.15 145)
let hintDark = "#31983d";//oklch(0.6 0.16 145)

let selectActive = "#5285ff";//oklch(0.65 0.20 265)
let selectActiveTRANSPARENT1 = "#5285ffbb";
let selectActiveTRANSPARENT2 = "#5285ff77";
let selectActiveTRANSPARENT3 = "#5285ff22";
let selectInactive = "#b6becb";//oklch(0.80 0.02 265)
let selectInactiveTRANSPARENT1 = "#b6becbbb";
let selectInactiveTRANSPARENT2 = "#b6becb77";

let findMatchAllTRANSPARENT1 = "#9076f377";//oklch(0.65 0.18 290)
let findMatchAllTRANSPARENT2 = "#9076f322";

let wordHighlightWriteTRANSPARENT1 = "#839d00bb";//oklch(0.65 0.18 120)
let wordHighlightWriteTRANSPARENT2 = "#839d0011";
let wordHighlightReadTRANSPARENT1 = "#00a1c9bb";//oklch(0.65 0.18 220)
let wordHighlightReadTRANSPARENT2 = "#00a1c911";
let wordHighlightTextTRANSPARENT1 = "#00ac4ebb";//oklch(0.65 0.18 150)
let wordHighlightTextTRANSPARENT2 = "#00ac4e11";
let unicodeHighlight = "#e26500";//oklch(0.65 0.18 50)
let BracketMatchStrong = "#fb2af4bb";//oklch(0.7 0.3 330)
let lineHighlightBackground = "#00000011";
let editorRulerLine = "#00000011";
let IndentGuide = "#00000022";
let IndentGuideActive = "#00000033";
let UnusedCodeOpacity = "#00000088";

let foldArea = "#00a0cc2f";
let foldHint = "#00a0cc";

let linkEdit = "#33ffff5f";
let statusBarDebuggingBackground = "#ceb32c";
let commentRangeForeground = "#686868";
// let sliderActive = "#ffffff45";
// let hoverHighlightBackground = "#b4b4b436";
// let editorLinkActiveForeground = "#73ff009f";
let editorWhitespaceForeground = "#4692c55e";
// let statusBarForeground = "#dddddd";
// let statusBarBackground = "#2d3b53";
// let statusBarDebuggingForeground = "#0f0f0f";
// let statusBarNoFolderBackground = "#444";
// let statusBarItemRemoteBackground = "#1284ff99";
// let statusBarItemRemoteForeground = "#FFF";
let statusBarItemProminentForeground = "#eebbaa";
let statusBarItemProminentBackground = "#eebbaa";
// let statusBarItemProminentHoverBackground = "#003847";

let jsonObject = {
	//Contrast colors
	//The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.

	["$schema"]: "vscode://schemas/color-theme",
	["name"]: "User Interface Colours - ZQT BRIGHT Theme",
	["//description"]: "编辑器的界面外观",
	["include"]: "theme-ZQT-BRIGHT_codeSpecific.json",
	["colors"]: {
		["contrastActiveBorder"]: DFLT,
		["contrastBorder"]: DFLT,

		//Base colors

		["focusBorder"]: selectActive,
		["foreground"]: grey.G20,
		["disabledForeground"]: grey.G30,
		["widget.border"]: DFLT,
		["widget.shadow"]: shadow,
		["selection.background"]: selectActiveTRANSPARENT1,
		["descriptionForeground"]: grey.G20,
		["errorForeground"]: errorLight,
		["icon.foreground"]: DFLT,
		["sash.hoverBorder"]: DFLT,

		//Window border
		//The theme colors for VS Code window border.

		["window.activeBorder"]: DFLT,
		["window.inactiveBorder"]: DFLT,
		//The window border colors are only supported on macOS and Linux (not Windows) and only when the custom title bar is enabled (["window.titleBarStyle"]: "custom").

		//Text colors
		//Colors inside a text document, such as the welcome page.

		["textBlockQuote.background"]: DFLT,
		["textBlockQuote.border"]: DFLT,
		["textCodeBlock.background"]: DFLT,
		["textLink.activeForeground"]: DFLT,
		["textLink.foreground"]: DFLT,
		["textPreformat.foreground"]: DFLT,
		["textPreformat.background"]: DFLT,
		["textSeparator.foreground"]: DFLT,

		//Action colors
		//A set of colors to control the interactions with actions across the workbench.

		["toolbar.hoverBackground"]: hover,
		["toolbar.hoverOutline"]: DFLT,
		["toolbar.activeBackground"]: DFLT,
		["editorActionList.background"]: DFLT,
		["editorActionList.foreground"]: DFLT,
		["editorActionList.focusForeground"]: DFLT,
		["editorActionList.focusBackground"]: DFLT,

		//Button control
		//A set of colors for button widgets such as Open Folder button in the Explorer of a new window.

		["button.background"]: buttonColour,
		["button.foreground"]: DFLT,
		["button.border"]: DFLT,
		["button.separator"]: DFLT,
		["button.hoverBackground"]: DFLT,
		["button.secondaryForeground"]: DFLT,
		["button.secondaryBackground"]: DFLT,
		["button.secondaryHoverBackground"]: DFLT,
		["checkbox.background"]: grey.G95,
		["checkbox.foreground"]: DFLT,
		["checkbox.border"]: DFLT,
		["checkbox.selectBackground"]: DFLT,
		["checkbox.selectBorder"]: DFLT,
		["radio.activeForeground"]: DFLT,
		["radio.activeBackground"]: DFLT,
		["radio.activeBorder"]: DFLT,
		["radio.inactiveForeground"]: DFLT,
		["radio.inactiveBackground"]: DFLT,
		["radio.inactiveBorder"]: DFLT,
		["radio.inactiveHoverBackground"]: DFLT,

		//Dropdown control
		//A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.

		["dropdown.background"]: grey.G95,
		["dropdown.listBackground"]: DFLT,
		["dropdown.border"]: DFLT,
		["dropdown.foreground"]: DFLT,

		//Input control
		//Colors for input controls such as in the Search view or the Find/Replace dialog.

		["input.background"]: grey.G95,
		["input.border"]: DFLT,
		["input.foreground"]: DFLT,
		["input.placeholderForeground"]: placeholder,
		["inputOption.activeBackground"]: DFLT,
		["inputOption.activeBorder"]: selectActive,
		["inputOption.activeForeground"]: DFLT,
		["inputOption.hoverBackground"]: DFLT,
		["inputValidation.errorBackground"]: errorLight,
		["inputValidation.errorForeground"]: DFLT,
		["inputValidation.errorBorder"]: errorDark,
		["inputValidation.infoBackground"]: infoLight,
		["inputValidation.infoForeground"]: DFLT,
		["inputValidation.infoBorder"]: infoDark,
		["inputValidation.warningBackground"]: warningLight,
		["inputValidation.warningForeground"]: DFLT,
		["inputValidation.warningBorder"]: warningDark,

		//Scrollbar control

		["scrollbar.shadow"]: shadow,
		["scrollbarSlider.activeBackground"]: click,
		["scrollbarSlider.background"]: sliderNormal,
		["scrollbarSlider.hoverBackground"]: hover,

		//Badge
		//Badges are small information labels, for example, search results count.

		["badge.foreground"]: DFLT,
		["badge.background"]: DFLT,

		//Progress bar

		["progressBar.background"]: DFLT,

		//Lists and trees
		//Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.

		["list.activeSelectionBackground"]: selectActiveTRANSPARENT2,
		["list.activeSelectionForeground"]: grey.G20,
		["list.activeSelectionIconForeground"]: DFLT,
		["list.dropBackground"]: DFLT,
		["list.focusBackground"]: selectActiveTRANSPARENT3,
		["list.focusForeground"]: DFLT,
		["list.focusHighlightForeground"]: DFLT,
		["list.focusOutline"]: selectActive,
		["list.focusAndSelectionOutline"]: DFLT,
		["list.highlightForeground"]: DFLT,
		["list.hoverBackground"]: hover,
		["list.hoverForeground"]: DFLT,
		["list.inactiveSelectionBackground"]: selectInactiveTRANSPARENT1,
		["list.inactiveSelectionForeground"]: DFLT,
		["list.inactiveSelectionIconForeground"]: DFLT,
		["list.inactiveFocusBackground"]: DFLT,
		["list.inactiveFocusOutline"]: DFLT,
		["list.invalidItemForeground"]: DFLT,
		["list.errorForeground"]: errorDark,
		["list.warningForeground"]: warningDark,
		["listFilterWidget.background"]: DFLT,
		["listFilterWidget.outline"]: DFLT,
		["listFilterWidget.noMatchesOutline"]: DFLT,
		["listFilterWidget.shadow"]: shadow,
		["list.filterMatchBackground"]: DFLT,
		["list.filterMatchBorder"]: DFLT,
		["list.deemphasizedForeground"]: DFLT,
		["list.dropBetweenBackground"]: DFLT,
		["tree.indentGuidesStroke"]: DFLT,
		["tree.inactiveIndentGuidesStroke"]: DFLT,
		["tree.tableColumnsBorder"]: DFLT,
		["tree.tableOddRowsBackground"]: DFLT,

		//Activity Bar
		//The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.

		["activityBar.background"]: grey.G80,
		["activityBar.dropBorder"]: DFLT,
		["activityBar.foreground"]: grey.G20,
		["activityBar.inactiveForeground"]: grey.G40,
		["activityBar.border"]: DFLT,
		["activityBarBadge.background"]: infoDark,
		["activityBarBadge.foreground"]: DFLT,
		["activityBar.activeBorder"]: selectActive,
		["activityBar.activeBackground"]: grey.G85,
		["activityBar.activeFocusBorder"]: DFLT,
		["activityBarTop.foreground"]: DFLT,
		["activityBarTop.activeBorder"]: DFLT,
		["activityBarTop.inactiveForeground"]: DFLT,
		["activityBarTop.dropBorder"]: DFLT,
		["activityBarTop.background"]: DFLT,
		["activityBarTop.activeBackground"]: DFLT,
		["activityWarningBadge.foreground"]: DFLT,
		["activityWarningBadge.background"]: warningLight,
		["activityErrorBadge.foreground"]: DFLT,
		["activityErrorBadge.background"]: errorLight,

		//Profiles

		["profileBadge.background"]: DFLT,
		["profileBadge.foreground"]: DFLT,
		["profiles.sashBorder"]: DFLT,

		//Side Bar
		//The Side Bar contains views like the Explorer and Search.

		["sideBar.background"]: grey.G85,
		["sideBar.foreground"]: grey.G20,
		["sideBar.border"]: DFLT,
		["sideBar.dropBackground"]: drop,
		["sideBarTitle.foreground"]: grey.G15,
		["sideBarSectionHeader.background"]: grey.G75,
		["sideBarSectionHeader.foreground"]: grey.G15,
		["sideBarSectionHeader.border"]: DFLT,
		["sideBarActivityBarTop.border"]: DFLT,
		["sideBarTitle.background"]: DFLT,
		["sideBarTitle.border"]: DFLT,
		["sideBarStickyScroll.background"]: DFLT,
		["sideBarStickyScroll.border"]: DFLT,
		["sideBarStickyScroll.shadow"]: shadow,

		//Minimap
		//The Minimap shows a minified version of the current file.

		["minimap.findMatchHighlight"]: findMatchAllTRANSPARENT2,
		["minimap.selectionHighlight"]: selectActiveTRANSPARENT1,
		["minimap.errorHighlight"]: errorLight,
		["minimap.warningHighlight"]: warningLight,
		["minimap.background"]: DFLT,
		["minimap.selectionOccurrenceHighlight"]: DFLT,
		["minimap.foregroundOpacity"]: DFLT,
		["minimap.infoHighlight"]: infoLight,
		["minimap.chatEditHighlight"]: DFLT,
		["minimapSlider.background"]: sliderNormal,
		["minimapSlider.hoverBackground"]: hover,
		["minimapSlider.activeBackground"]: click,
		["minimapGutter.addedBackground"]: addLight,
		["minimapGutter.modifiedBackground"]: modifyLight,
		["minimapGutter.deletedBackground"]: deleteLight,
		["editorMinimap.inlineChatInserted"]: DFLT,

		//Editor Groups & Tabs
		//Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.

		["editorGroup.border"]: grey.G75,
		["editorGroup.dropBackground"]: drop,
		["editorGroupHeader.noTabsBackground"]: grey.G90,
		["editorGroupHeader.tabsBackground"]: grey.G85,
		["editorGroupHeader.tabsBorder"]: DFLT,
		["editorGroupHeader.border"]: DFLT,
		["editorGroup.emptyBackground"]: DFLT,
		["editorGroup.focusedEmptyBorder"]: DFLT,
		["editorGroup.dropIntoPromptForeground"]: DFLT,
		["editorGroup.dropIntoPromptBackground"]: DFLT,
		["editorGroup.dropIntoPromptBorder"]: DFLT,
		["tab.activeBackground"]: grey.G90,
		["tab.activeForeground"]: grey.G15,
		["tab.inactiveBackground"]: grey.G80,
		["tab.inactiveForeground"]: grey.G15,
		["tab.unfocusedActiveBackground"]: grey.G85,
		["tab.unfocusedActiveForeground"]: grey.G25,
		["tab.unfocusedInactiveBackground"]: grey.G80,
		["tab.unfocusedInactiveForeground"]: grey.G25,
		["tab.border"]: grey.G65,
		["tab.activeBorder"]: DFLT,
		["tab.selectedBorderTop"]: DFLT,
		["tab.selectedBackground"]: DFLT,
		["tab.selectedForeground"]: DFLT,
		["tab.dragAndDropBorder"]: DFLT,
		["tab.unfocusedActiveBorder"]: DFLT,
		["tab.activeBorderTop"]: selectActive,
		["tab.unfocusedActiveBorderTop"]: selectInactiveTRANSPARENT2,
		["tab.lastPinnedBorder"]: DFLT,
		["tab.hoverBackground"]: hover,
		["tab.unfocusedHoverBackground"]: DFLT,
		["tab.hoverForeground"]: DFLT,
		["tab.unfocusedHoverForeground"]: DFLT,
		["tab.hoverBorder"]: DFLT,
		["tab.unfocusedHoverBorder"]: DFLT,
		["tab.activeModifiedBorder"]: DFLT,
		["tab.inactiveModifiedBorder"]: DFLT,
		["tab.unfocusedActiveModifiedBorder"]: DFLT,
		["tab.unfocusedInactiveModifiedBorder"]: DFLT,
		["editorPane.background"]: DFLT,
		["sideBySideEditor.horizontalBorder"]: DFLT,
		["sideBySideEditor.verticalBorder"]: DFLT,

		//Editor colors
		//The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed. These colors are defined by the Color Theme but can also be customized with the editor.tokenColorCustomizations setting. See Customizing a Color Theme for details on updating a Color Theme and the available token types.

		//All other editor colors are listed here:

		["editor.background"]: grey.G90,
		["editor.foreground"]: grey.G20,
		["editorLineNumber.foreground"]: grey.G60,
		["editorLineNumber.activeForeground"]: grey.G40,
		["editorLineNumber.dimmedForeground"]: DFLT,
		["editorCursor.background"]: DFLT,
		["editorCursor.foreground"]: DFLT,
		["editorMultiCursor.primary.foreground"]: DFLT,
		["editorMultiCursor.primary.background"]: DFLT,
		["editorMultiCursor.secondary.foreground"]: DFLT,
		["editorMultiCursor.secondary.background"]: DFLT,
		["editor.placeholder.foreground"]: placeholder,
		["editor.compositionBorder"]: DFLT,

		//Selection colors are visible when selecting one or more characters. In addition to the selection also all regions with the same content are highlighted.

		["editor.selectionBackground"]: selectActiveTRANSPARENT1,
		["editor.selectionForeground"]: DFLT,
		["editor.inactiveSelectionBackground"]: selectInactiveTRANSPARENT2,
		["editor.selectionHighlightBackground"]: selectActiveTRANSPARENT3,
		["editor.selectionHighlightBorder"]: DFLT,

		//Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.

		//occurrences

		["editor.wordHighlightBackground"]: wordHighlightReadTRANSPARENT2,
		["editor.wordHighlightBorder"]: wordHighlightReadTRANSPARENT1,
		["editor.wordHighlightStrongBackground"]: wordHighlightWriteTRANSPARENT2,
		["editor.wordHighlightStrongBorder"]: wordHighlightWriteTRANSPARENT1,
		["editor.wordHighlightTextBackground"]: wordHighlightTextTRANSPARENT2,
		["editor.wordHighlightTextBorder"]: wordHighlightTextTRANSPARENT1,

		//Find colors depend on the current find string in the Find/Replace dialog.
		//Find matches

		["editor.findMatchBackground"]: selectActiveTRANSPARENT1,
		["editor.findMatchForeground"]: DFLT,
		["editor.findMatchHighlightForeground"]: DFLT,
		["editor.findMatchHighlightBackground"]: findMatchAllTRANSPARENT1,
		["editor.findRangeHighlightBackground"]: findMatchAllTRANSPARENT2,
		["editor.findMatchBorder"]: DFLT,
		["editor.findMatchHighlightBorder"]: DFLT,
		["editor.findRangeHighlightBorder"]: DFLT,

		//Search colors are used in the search viewlet's global search results.

		["search.resultsInfoForeground"]: DFLT,

		//Search Editor colors highlight results in a Search Editor. This can be configured separately from other find matches in order to better differentiate between different classes of match in the same editor.

		["searchEditor.findMatchBackground"]: DFLT,
		["searchEditor.findMatchBorder"]: DFLT,
		["searchEditor.textInputBorder"]: DFLT,

		//The hover highlight is shown behind the symbol for which a hover is shown.

		["editor.hoverHighlightBackground"]: hover,

		//The current line is typically shown as either background highlight or a border (not both).

		["editor.lineHighlightBackground"]: lineHighlightBackground,
		["editor.lineHighlightBorder"]: DFLT,

		//The color for the editor watermark

		["editorWatermark.foreground"]: DFLT,

		//The color for unicode highlights

		["editorUnicodeHighlight.border"]: unicodeHighlight,
		["editorUnicodeHighlight.background"]: DFLT,

		//The link color is visible when clicking on a link.

		["editorLink.activeForeground"]: selectActive,

		//The range highlight is visible when selecting a search result.

		["editor.rangeHighlightBackground"]: findMatchAllTRANSPARENT2,
		["editor.rangeHighlightBorder"]: DFLT,

		//The symbol highlight is visible when navigating to a symbol via a command such as Go to Definition.

		["editor.symbolHighlightBackground"]: DFLT,
		["editor.symbolHighlightBorder"]: DFLT,

		//To see the editor white spaces, enable Toggle Render Whitespace.

		["editorWhitespace.foreground"]: infoLight,

		//To see the editor indent guides, set ["editor.guides.indentation"]:

		// ["editorIndentGuide.background"]: IndentGuide,
		["editorIndentGuide.background1"]: IndentGuide,
		["editorIndentGuide.background2"]: IndentGuide,
		["editorIndentGuide.background3"]: IndentGuide,
		["editorIndentGuide.background4"]: IndentGuide,
		["editorIndentGuide.background5"]: IndentGuide,
		["editorIndentGuide.background6"]: IndentGuide,
		// ["editorIndentGuide.activeBackground"]: IndentGuideActive,
		["editorIndentGuide.activeBackground1"]: IndentGuideActive,
		["editorIndentGuide.activeBackground2"]: IndentGuideActive,
		["editorIndentGuide.activeBackground3"]: IndentGuideActive,
		["editorIndentGuide.activeBackground4"]: IndentGuideActive,
		["editorIndentGuide.activeBackground5"]: IndentGuideActive,
		["editorIndentGuide.activeBackground6"]: IndentGuideActive,

		//To see the editor inline hints, set "editor.inlineSuggest.enabled": true.

		["editorInlayHint.background"]: DFLT,
		["editorInlayHint.foreground"]: DFLT,
		["editorInlayHint.typeForeground"]: DFLT,
		["editorInlayHint.typeBackground"]: DFLT,
		["editorInlayHint.parameterForeground"]: DFLT,
		["editorInlayHint.parameterBackground"]: DFLT,

		//To see editor rulers, define their location with "editor.rulers"

		["editorRuler.foreground"]: editorRulerLine,
		["editor.linkedEditingBackground"]: linkEdit,

		//CodeLens:

		["editorCodeLens.foreground"]: DFLT,

		//Lightbulb:

		["editorLightBulb.foreground"]: DFLT,
		["editorLightBulbAutoFix.foreground"]: DFLT,
		["editorLightBulbAi.foreground"]: DFLT,

		//Bracket matches:

		["editorBracketMatch.background"]: TRANSPARENT,
		["editorBracketMatch.border"]: BracketMatchStrong,

		//Bracket pair colorization:

		["editorBracketHighlight.foreground1"]: colour.L76_C10_H220,
		["editorBracketHighlight.foreground2"]: colour.L76_C10_H100,
		["editorBracketHighlight.foreground3"]: colour.L76_C10_H340,
		["editorBracketHighlight.foreground4"]: colour.L76_C10_H180,
		["editorBracketHighlight.foreground5"]: colour.L76_C10_H060,
		["editorBracketHighlight.foreground6"]: colour.L76_C10_H300,
		["editorBracketHighlight.unexpectedBracket.foreground"]: errorDark,

		//Bracket pair guides:

		["editorBracketPairGuide.activeBackground1"]: colour.L70_C08_H220,
		["editorBracketPairGuide.activeBackground2"]: colour.L70_C08_H100,
		["editorBracketPairGuide.activeBackground3"]: colour.L70_C08_H340,
		["editorBracketPairGuide.activeBackground4"]: colour.L70_C08_H180,
		["editorBracketPairGuide.activeBackground5"]: colour.L70_C08_H060,
		["editorBracketPairGuide.activeBackground6"]: colour.L70_C08_H300,
		["editorBracketPairGuide.background1"]: DFLT,
		["editorBracketPairGuide.background2"]: DFLT,
		["editorBracketPairGuide.background3"]: DFLT,
		["editorBracketPairGuide.background4"]: DFLT,
		["editorBracketPairGuide.background5"]: DFLT,
		["editorBracketPairGuide.background6"]: DFLT,

		//Folding:

		["editor.foldBackground"]: foldArea,
		["editor.foldPlaceholderForeground"]: foldHint,

		//Overview ruler:
		//This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.

		["editorOverviewRuler.background"]: DFLT,
		["editorOverviewRuler.border"]: DFLT,
		["editorOverviewRuler.findMatchForeground"]: findMatchAllTRANSPARENT1,
		["editorOverviewRuler.rangeHighlightForeground"]: findMatchAllTRANSPARENT2,
		["editorOverviewRuler.selectionHighlightForeground"]: selectActiveTRANSPARENT1,
		["editorOverviewRuler.wordHighlightForeground"]: wordHighlightReadTRANSPARENT1,
		["editorOverviewRuler.wordHighlightStrongForeground"]: wordHighlightWriteTRANSPARENT1,
		["editorOverviewRuler.wordHighlightTextForeground"]: wordHighlightTextTRANSPARENT1,
		["editorOverviewRuler.modifiedForeground"]: modifyLight,
		["editorOverviewRuler.addedForeground"]: addLight,
		["editorOverviewRuler.deletedForeground"]: deleteLight,
		["editorOverviewRuler.errorForeground"]: errorLight,
		["editorOverviewRuler.warningForeground"]: warningLight,
		["editorOverviewRuler.infoForeground"]: infoLight,
		["editorOverviewRuler.bracketMatchForeground"]: BracketMatchStrong,
		["editorOverviewRuler.inlineChatInserted"]: DFLT,
		["editorOverviewRuler.inlineChatRemoved"]: DFLT,

		//Errors and warningLights:

		["editorError.foreground"]: errorDark,
		["editorError.border"]: DFLT,
		["editorError.background"]: DFLT,
		["editorWarning.foreground"]: warningLight,
		["editorWarning.border"]: DFLT,
		["editorWarning.background"]: DFLT,
		["editorInfo.foreground"]: infoLight,
		["editorInfo.border"]: DFLT,
		["editorInfo.background"]: DFLT,
		["editorHint.foreground"]: hintDark,
		["editorHint.border"]: hintDark,
		["problemsErrorIcon.foreground"]: errorLight,
		["problemsWarningIcon.foreground"]: warningLight,
		["problemsInfoIcon.foreground"]: infoLight,

		//Unused source code:

		["editorUnnecessaryCode.border"]: DFLT,
		["editorUnnecessaryCode.opacity"]: UnusedCodeOpacity,

		//The gutter contains the glyph margins and the line numbers:

		["editorGutter.background"]: DFLT,
		["editorGutter.modifiedBackground"]: modifyLight,
		["editorGutter.addedBackground"]: addLight,
		["editorGutter.deletedBackground"]: deleteLight,
		["editorGutter.commentRangeForeground"]: commentRangeForeground,
		["editorGutter.commentGlyphForeground"]: DFLT,
		["editorGutter.commentUnresolvedGlyphForeground"]: DFLT,
		["editorGutter.foldingControlForeground"]: DFLT,
		["editorGutter.itemGlyphForeground"]: DFLT,
		["editorGutter.itemBackground"]: DFLT,

		//The editor comments widget can be seen when reviewing pull requests:

		["editorCommentsWidget.resolvedBorder"]: DFLT,
		["editorCommentsWidget.unresolvedBorder"]: DFLT,
		["editorCommentsWidget.rangeBackground"]: DFLT,
		["editorCommentsWidget.rangeActiveBackground"]: DFLT,
		["editorCommentsWidget.replyInputBackground"]: DFLT,

		//Editor inline edits can be seen when using Copilot to suggest the next change to make:

		["inlineEdit.gutterIndicator.primaryBorder"]: DFLT,
		["inlineEdit.gutterIndicator.primaryForeground"]: DFLT,
		["inlineEdit.gutterIndicator.primaryBackground"]: DFLT,
		["inlineEdit.gutterIndicator.secondaryForeground"]: DFLT,
		["inlineEdit.gutterIndicator.secondaryBackground"]: DFLT,
		["inlineEdit.gutterIndicator.successfulForeground"]: DFLT,
		["inlineEdit.gutterIndicator.successfulBackground"]: DFLT,
		["inlineEdit.gutterIndicator.background"]: DFLT,
		["inlineEdit.originalBackground"]: DFLT,
		["inlineEdit.modifiedBackground"]: DFLT,
		["inlineEdit.originalChangedLineBackground"]: DFLT,
		["inlineEdit.originalChangedTextBackground"]: DFLT,
		["inlineEdit.modifiedChangedLineBackground"]: DFLT,
		["inlineEdit.modifiedChangedTextBackground"]: DFLT,
		["inlineEdit.originalBorder"]: DFLT,
		["inlineEdit.modifiedBorder"]: DFLT,
		["inlineEdit.tabWillAcceptModifiedBorder"]: DFLT,
		["inlineEdit.tabWillAcceptOriginalBorder"]: DFLT,

		//Diff editor colors
		//For coloring inserted and removed text, use either a background or a border color but not both.

		["diffEditor.insertedTextBackground"]: addLightTRANSPARENT,
		["diffEditor.insertedTextBorder"]: TRANSPARENT,
		["diffEditor.removedTextBackground"]: deleteLightTRANSPARENT,
		["diffEditor.removedTextBorder"]: TRANSPARENT,
		["diffEditor.border"]: DFLT,
		["diffEditor.diagonalFill"]: DFLT,
		["diffEditor.insertedLineBackground"]: addLightTRANSPARENT,
		["diffEditor.removedLineBackground"]: deleteLightTRANSPARENT,
		["diffEditorGutter.insertedLineBackground"]: TRANSPARENT,
		["diffEditorGutter.removedLineBackground"]: TRANSPARENT,
		["diffEditorOverview.insertedForeground"]: DFLT,
		["diffEditorOverview.removedForeground"]: DFLT,
		["diffEditor.unchangedRegionBackground"]: grey.G80,
		["diffEditor.unchangedRegionForeground"]: DFLT,
		["diffEditor.unchangedRegionShadow"]: shadow,
		["diffEditor.unchangedCodeBackground"]: grey.G80,
		["diffEditor.move.border"]: DFLT,
		["diffEditor.moveActive.border"]: DFLT,
		["multiDiffEditor.headerBackground"]: DFLT,
		["multiDiffEditor.background"]: DFLT,
		["multiDiffEditor.border"]: DFLT,

		//Chat colors

		["chat.requestBorder"]: DFLT,
		["chat.requestBackground"]: DFLT,
		["chat.slashCommandBackground"]: DFLT,
		["chat.slashCommandForeground"]: DFLT,
		["chat.avatarBackground"]: DFLT,
		["chat.avatarForeground"]: DFLT,
		["chat.editedFileForeground"]: DFLT,

		//Inline Chat colors

		["inlineChat.background"]: DFLT,
		["inlineChat.foreground"]: DFLT,
		["inlineChat.border"]: DFLT,
		["inlineChat.shadow"]: shadow,
		["inlineChatInput.border"]: DFLT,
		["inlineChatInput.focusBorder"]: DFLT,
		["inlineChatInput.placeholderForeground"]: placeholder,
		["inlineChatInput.background"]: DFLT,
		["inlineChatDiff.inserted"]: DFLT,
		["inlineChatDiff.removed"]: DFLT,

		//Panel Chat colors

		["interactive.activeCodeBorder"]: DFLT,
		["interactive.inactiveCodeBorder"]: DFLT,

		//Editor widget colors
		//The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.

		["editorWidget.foreground"]: DFLT,
		["editorWidget.background"]: grey.G85,
		["editorWidget.border"]: DFLT,
		["editorWidget.resizeBorder"]: DFLT,
		["editorSuggestWidget.background"]: DFLT,
		["editorSuggestWidget.border"]: DFLT,
		["editorSuggestWidget.foreground"]: DFLT,
		["editorSuggestWidget.focusHighlightForeground"]: DFLT,
		["editorSuggestWidget.highlightForeground"]: DFLT,
		["editorSuggestWidget.selectedBackground"]: DFLT,
		["editorSuggestWidget.selectedForeground"]: DFLT,
		["editorSuggestWidget.selectedIconForeground"]: DFLT,
		["editorSuggestWidgetStatus.foreground"]: DFLT,
		["editorHoverWidget.foreground"]: DFLT,
		["editorHoverWidget.background"]: DFLT,
		["editorHoverWidget.border"]: DFLT,
		["editorHoverWidget.highlightForeground"]: DFLT,
		["editorHoverWidget.statusBarBackground"]: DFLT,
		["editorGhostText.border"]: DFLT,
		["editorGhostText.background"]: DFLT,
		["editorGhostText.foreground"]: DFLT,
		["editorStickyScroll.background"]: DFLT,
		["editorStickyScroll.border"]: DFLT,
		["editorStickyScroll.shadow"]: shadow,
		["editorStickyScrollHover.background"]: DFLT,

		//The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.

		["debugExceptionWidget.background"]: DFLT,
		["debugExceptionWidget.border"]: DFLT,

		//The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).

		["editorMarkerNavigation.background"]: DFLT,
		["editorMarkerNavigationError.background"]: DFLT,
		["editorMarkerNavigationWarning.background"]: DFLT,
		["editorMarkerNavigationInfo.background"]: DFLT,
		["editorMarkerNavigationError.headerBackground"]: DFLT,
		["editorMarkerNavigationWarning.headerBackground"]: DFLT,
		["editorMarkerNavigationInfo.headerBackground"]: DFLT,

		//Peek view colors
		//Peek views are used to show references and declarations as a view inside the editor.
		//Peek view

		["peekView.border"]: DFLT,
		["peekViewEditor.background"]: grey.G80,
		["peekViewEditorGutter.background"]: DFLT,
		["peekViewEditor.matchHighlightBackground"]: DFLT,
		["peekViewEditor.matchHighlightBorder"]: DFLT,
		["peekViewResult.background"]: DFLT,
		["peekViewResult.fileForeground"]: DFLT,
		["peekViewResult.lineForeground"]: DFLT,
		["peekViewResult.matchHighlightBackground"]: DFLT,
		["peekViewResult.selectionBackground"]: DFLT,
		["peekViewResult.selectionForeground"]: DFLT,
		["peekViewTitle.background"]: DFLT,
		["peekViewTitleDescription.foreground"]: DFLT,
		["peekViewTitleLabel.foreground"]: DFLT,
		["peekViewEditorStickyScroll.background"]: DFLT,

		//Merge conflicts colors
		//Merge conflict decorations are shown when the editor contains special diff ranges.
		//Merge ranges

		["merge.currentHeaderBackground"]: DFLT,
		["merge.currentContentBackground"]: DFLT,
		["merge.incomingHeaderBackground"]: DFLT,
		["merge.incomingContentBackground"]: DFLT,
		["merge.border"]: DFLT,
		["merge.commonContentBackground"]: DFLT,
		["merge.commonHeaderBackground"]: DFLT,
		["editorOverviewRuler.currentContentForeground"]: DFLT,
		["editorOverviewRuler.incomingContentForeground"]: DFLT,
		["editorOverviewRuler.commonContentForeground"]: DFLT,
		["editorOverviewRuler.commentForeground"]: DFLT,
		["editorOverviewRuler.commentUnresolvedForeground"]: DFLT,
		["mergeEditor.change.background"]: DFLT,
		["mergeEditor.change.word.background"]: DFLT,
		["mergeEditor.conflict.unhandledUnfocused.border"]: DFLT,
		["mergeEditor.conflict.unhandledFocused.border"]: DFLT,
		["mergeEditor.conflict.handledUnfocused.border"]: DFLT,
		["mergeEditor.conflict.handledFocused.border"]: DFLT,
		["mergeEditor.conflict.handled.minimapOverViewRuler"]: DFLT,
		["mergeEditor.conflict.unhandled.minimapOverViewRuler"]: DFLT,
		["mergeEditor.conflictingLines.background"]: DFLT,
		["mergeEditor.changeBase.background"]: DFLT,
		["mergeEditor.changeBase.word.background"]: DFLT,
		["mergeEditor.conflict.input1.background"]: DFLT,
		["mergeEditor.conflict.input2.background"]: DFLT,

		//Panel colors
		//Panels are shown below the editor area and contain views like Output and Integrated Terminal.

		["panel.background"]: grey.G85,
		["panel.border"]: grey.G75,
		["panel.dropBorder"]: drop,
		["panelTitle.activeBorder"]: selectActive,
		["panelTitle.activeForeground"]: grey.G15,
		["panelTitle.inactiveForeground"]: grey.G40,
		["panelTitle.border"]: grey.G75,
		["panelTitleBadge.background"]: DFLT,
		["panelTitleBadge.foreground"]: DFLT,
		["panelInput.border"]: DFLT,
		["panelSection.border"]: DFLT,
		["panelSection.dropBackground"]: DFLT,
		["panelSectionHeader.background"]: DFLT,
		["panelSectionHeader.foreground"]: DFLT,
		["panelStickyScroll.background"]: DFLT,
		["panelStickyScroll.border"]: DFLT,
		["panelStickyScroll.shadow"]: shadow,
		["panelSectionHeader.border"]: DFLT,
		["outputView.background"]: grey.G85,
		["outputViewStickyScroll.background"]: DFLT,

		//Status Bar colors
		//The Status Bar is shown in the bottom of the workbench.

		["statusBar.background"]: grey.G80,
		["statusBar.foreground"]: grey.G20,
		["statusBar.border"]: DFLT,
		["statusBar.debuggingBackground"]: statusBarDebuggingBackground,
		["statusBar.debuggingForeground"]: grey.G90,
		["statusBar.debuggingBorder"]: DFLT,
		["statusBar.noFolderBackground"]: grey.G85,
		["statusBar.noFolderForeground"]: grey.G35,
		["statusBar.noFolderBorder"]: grey.G75,
		["statusBar.focusBorder"]: selectActive,
		["statusBarItem.activeBackground"]: click,
		["statusBarItem.hoverForeground"]: DFLT,
		["statusBarItem.hoverBackground"]: hover,
		["statusBarItem.prominentForeground"]: warningDark,
		["statusBarItem.prominentBackground"]: grey.G75,
		["statusBarItem.prominentHoverForeground"]: warningDark,
		["statusBarItem.prominentHoverBackground"]: hover,
		["statusBarItem.remoteBackground"]: grey.G75,
		["statusBarItem.remoteForeground"]: grey.G20,
		["statusBarItem.remoteHoverBackground"]: hover,
		["statusBarItem.remoteHoverForeground"]: DFLT,
		["statusBarItem.errorBackground"]: errorLight,
		["statusBarItem.errorForeground"]: grey.G90,
		["statusBarItem.errorHoverBackground"]: DFLT,
		["statusBarItem.errorHoverForeground"]: DFLT,
		["statusBarItem.warningBackground"]: warningLight,
		["statusBarItem.warningForeground"]: grey.G80,
		["statusBarItem.warningHoverBackground"]: DFLT,
		["statusBarItem.warningHoverForeground"]: DFLT,
		["statusBarItem.compactHoverBackground"]: DFLT,
		["statusBarItem.focusBorder"]: DFLT,
		["statusBarItem.offlineBackground"]: DFLT,
		["statusBarItem.offlineForeground"]: DFLT,
		["statusBarItem.offlineHoverForeground"]: DFLT,
		["statusBarItem.offlineHoverBackground"]: DFLT,

		//Prominent items stand out from other Status Bar entries to indicate importance. One example is the Toggle Tab Key Moves Focus command change mode indicator.
		//Title Bar colors

		["titleBar.activeBackground"]: grey.G80,
		["titleBar.activeForeground"]: grey.G20,
		["titleBar.inactiveBackground"]: grey.G75,
		["titleBar.inactiveForeground"]: grey.G35,
		["titleBar.border"]: DFLT,

		//Menu Bar colors

		["menubar.selectionForeground"]: DFLT,
		["menubar.selectionBackground"]: hover,
		["menubar.selectionBorder"]: DFLT,
		["menu.foreground"]: grey.G20,
		["menu.background"]: grey.G80,
		["menu.selectionForeground"]: DFLT,
		["menu.selectionBackground"]: hover,
		["menu.selectionBorder"]: DFLT,
		["menu.separatorBackground"]: DFLT,
		["menu.border"]: DFLT,

		//Command Center colors

		["commandCenter.foreground"]: DFLT,
		["commandCenter.background"]: grey.G75,
		["commandCenter.activeForeground"]: DFLT,
		["commandCenter.activeBackground"]: hover,
		["commandCenter.border"]: DFLT,
		["commandCenter.inactiveForeground"]: DFLT,
		["commandCenter.inactiveBorder"]: DFLT,
		["commandCenter.activeBorder"]: DFLT,
		["commandCenter.debuggingBackground"]: DFLT,

		//Notification colors
		//Notification toasts slide up from the bottom-right of the workbench.
		//Notification Toasts
		//Once opened in the Notification Center, they are displayed in a list with a header:
		//Notification Center

		["notificationCenter.border"]: DFLT,
		["notificationCenterHeader.foreground"]: DFLT,
		["notificationCenterHeader.background"]: grey.G75,
		["notificationToast.border"]: DFLT,
		["notifications.foreground"]: DFLT,
		["notifications.background"]: grey.G80,
		["notifications.border"]: DFLT,
		["notificationLink.foreground"]: DFLT,
		["notificationsErrorIcon.foreground"]: DFLT,
		["notificationsWarningIcon.foreground"]: DFLT,
		["notificationsInfoIcon.foreground"]: DFLT,

		//Banner colors
		//The banner appears below the title bar and spans the entire width of the workbench when visible.

		["banner.background"]: DFLT,
		["banner.foreground"]: DFLT,
		["banner.iconForeground"]: DFLT,

		//Extensions colors

		["extensionButton.prominentForeground"]: DFLT,
		["extensionButton.prominentBackground"]: DFLT,
		["extensionButton.prominentHoverBackground"]: DFLT,
		["extensionButton.background"]: DFLT,
		["extensionButton.foreground"]: DFLT,
		["extensionButton.hoverBackground"]: DFLT,
		["extensionButton.separator"]: DFLT,
		["extensionBadge.remoteBackground"]: DFLT,
		["extensionBadge.remoteForeground"]: DFLT,
		["extensionIcon.starForeground"]: DFLT,
		["extensionIcon.verifiedForeground"]: DFLT,
		["extensionIcon.preReleaseForeground"]: DFLT,
		["extensionIcon.sponsorForeground"]: DFLT,
		["extensionIcon.privateForeground"]: DFLT,

		//Quick picker colors

		["pickerGroup.border"]: DFLT,
		["pickerGroup.foreground"]: DFLT,
		["quickInput.background"]: grey.G80,
		["quickInput.foreground"]: DFLT,
		["quickInputList.focusBackground"]: DFLT,
		["quickInputList.focusForeground"]: DFLT,
		["quickInputList.focusIconForeground"]: DFLT,
		["quickInputTitle.background"]: DFLT,

		//Keybinding label colors
		//Keybinding labels are shown when there is a keybinding associated with a command. An example of the keybinding label can be seen in the Command Palette:
		//Usages of the keybinding label include (but are not limited to):
		//	The Command Palette
		//	The Keyboard Shortcuts editor
		//	The Keyboard Shortcuts recorder modal
		//	The "feature contribution" section of an extension's marketplace page
		//The following customizations are available:

		["keybindingLabel.background"]: grey.G70,
		["keybindingLabel.foreground"]: grey.G20,
		["keybindingLabel.border"]: DFLT,
		["keybindingLabel.bottomBorder"]: TRANSPARENT,

		//Keyboard shortcut table colors

		["keybindingTable.headerBackground"]: DFLT,
		["keybindingTable.rowsBackground"]: DFLT,

		//Integrated Terminal colors

		["terminal.background"]: grey.G90,
		["terminal.border"]: DFLT,
		["terminal.foreground"]: DFLT,
		["terminal.ansiBlack"]: DFLT,
		["terminal.ansiBlue"]: DFLT,
		["terminal.ansiBrightBlack"]: DFLT,
		["terminal.ansiBrightBlue"]: DFLT,
		["terminal.ansiBrightCyan"]: DFLT,
		["terminal.ansiBrightGreen"]: DFLT,
		["terminal.ansiBrightMagenta"]: DFLT,
		["terminal.ansiBrightRed"]: DFLT,
		["terminal.ansiBrightWhite"]: DFLT,
		["terminal.ansiBrightYellow"]: DFLT,
		["terminal.ansiCyan"]: DFLT,
		["terminal.ansiGreen"]: DFLT,
		["terminal.ansiMagenta"]: DFLT,
		["terminal.ansiRed"]: DFLT,
		["terminal.ansiWhite"]: DFLT,
		["terminal.ansiYellow"]: DFLT,
		["terminal.selectionBackground"]: DFLT,
		["terminal.selectionForeground"]: DFLT,
		["terminal.inactiveSelectionBackground"]: DFLT,
		["terminal.findMatchBackground"]: DFLT,
		["terminal.findMatchBorder"]: DFLT,
		["terminal.findMatchHighlightBackground"]: DFLT,
		["terminal.findMatchHighlightBorder"]: DFLT,
		["terminal.hoverHighlightBackground"]: DFLT,
		["terminalCursor.background"]: DFLT,
		["terminalCursor.foreground"]: DFLT,
		["terminal.dropBackground"]: DFLT,
		["terminal.tab.activeBorder"]: DFLT,
		["terminalCommandDecoration.defaultBackground"]: DFLT,
		["terminalCommandDecoration.successBackground"]: DFLT,
		["terminalCommandDecoration.errorBackground"]: DFLT,
		["terminalOverviewRuler.cursorForeground"]: DFLT,
		["terminalOverviewRuler.findMatchForeground"]: DFLT,
		["terminalStickyScroll.background"]: DFLT,
		["terminalStickyScroll.border"]: DFLT,
		["terminalStickyScrollHover.background"]: DFLT,
		["terminal.initialHintForeground"]: DFLT,
		["terminalOverviewRuler.border"]: DFLT,
		["terminalCommandGuide.foreground"]: DFLT,
		["terminalSymbolIcon.aliasForeground"]: DFLT,
		["terminalSymbolIcon.flagForeground"]: DFLT,
		["terminalSymbolIcon.optionForeground"]: DFLT,
		["terminalSymbolIcon.optionValueForeground"]: DFLT,
		["terminalSymbolIcon.methodForeground"]: DFLT,
		["terminalSymbolIcon.argumentForeground"]: DFLT,
		["terminalSymbolIcon.inlineSuggestionForeground"]: DFLT,
		["terminalSymbolIcon.fileForeground"]: DFLT,
		["terminalSymbolIcon.folderForeground"]: DFLT,

		//Debug colors

		["debugToolBar.background"]: DFLT,
		["debugToolBar.border"]: DFLT,
		["editor.stackFrameHighlightBackground"]: DFLT,
		["editor.focusedStackFrameHighlightBackground"]: DFLT,
		["editor.inlineValuesForeground"]: DFLT,
		["editor.inlineValuesBackground"]: DFLT,
		["debugView.exceptionLabelForeground"]: DFLT,
		["debugView.exceptionLabelBackground"]: DFLT,
		["debugView.stateLabelForeground"]: DFLT,
		["debugView.stateLabelBackground"]: DFLT,
		["debugView.valueChangedHighlight"]: DFLT,
		["debugTokenExpression.name"]: DFLT,
		["debugTokenExpression.value"]: DFLT,
		["debugTokenExpression.string"]: DFLT,
		["debugTokenExpression.boolean"]: DFLT,
		["debugTokenExpression.number"]: DFLT,
		["debugTokenExpression.error"]: DFLT,
		["debugTokenExpression.type"]: DFLT,

		//Testing colors

		["testing.runAction"]: DFLT,
		["testing.iconErrored"]: DFLT,
		["testing.iconFailed"]: DFLT,
		["testing.iconPassed"]: DFLT,
		["testing.iconQueued"]: DFLT,
		["testing.iconUnset"]: DFLT,
		["testing.iconSkipped"]: DFLT,
		["testing.iconErrored.retired"]: DFLT,
		["testing.iconFailed.retired"]: DFLT,
		["testing.iconPassed.retired"]: DFLT,
		["testing.iconQueued.retired"]: DFLT,
		["testing.iconUnset.retired"]: DFLT,
		["testing.iconSkipped.retired"]: DFLT,
		["testing.peekBorder"]: DFLT,
		["testing.peekHeaderBackground"]: DFLT,
		["testing.message.error.lineBackground"]: DFLT,
		["testing.message.info.decorationForeground"]: DFLT,
		["testing.message.info.lineBackground"]: DFLT,
		["testing.messagePeekBorder"]: DFLT,
		["testing.messagePeekHeaderBackground"]: DFLT,
		["testing.coveredBackground"]: DFLT,
		["testing.coveredBorder"]: DFLT,
		["testing.coveredGutterBackground"]: DFLT,
		["testing.uncoveredBranchBackground"]: DFLT,
		["testing.uncoveredBackground"]: DFLT,
		["testing.uncoveredBorder"]: DFLT,
		["testing.uncoveredGutterBackground"]: DFLT,
		["testing.coverCountBadgeBackground"]: DFLT,
		["testing.coverCountBadgeForeground"]: DFLT,
		["testing.message.error.badgeBackground"]: DFLT,
		["testing.message.error.badgeBorder"]: DFLT,
		["testing.message.error.badgeForeground"]: DFLT,

		//Welcome page colors

		["welcomePage.background"]: DFLT,
		["welcomePage.progress.background"]: DFLT,
		["welcomePage.progress.foreground"]: DFLT,
		["welcomePage.tileBackground"]: DFLT,
		["welcomePage.tileHoverBackground"]: DFLT,
		["welcomePage.tileBorder"]: DFLT,
		["walkThrough.embeddedEditorBackground"]: DFLT,
		["walkthrough.stepTitle.foreground"]: DFLT,

		//Git colors

		["gitDecoration.addedResourceForeground"]: gitAdd,
		["gitDecoration.modifiedResourceForeground"]: gitModify,
		["gitDecoration.deletedResourceForeground"]: gitDelete,
		["gitDecoration.renamedResourceForeground"]: gitRename,
		["gitDecoration.stageModifiedResourceForeground"]: gitModify,
		["gitDecoration.stageDeletedResourceForeground"]: gitDelete,
		["gitDecoration.untrackedResourceForeground"]: gitUntrack,
		["gitDecoration.ignoredResourceForeground"]: gitIgnore,
		["gitDecoration.conflictingResourceForeground"]: gitConflict,
		["gitDecoration.submoduleResourceForeground"]: gitSubmodule,
		["git.blame.editorDecorationForeground"]: DFLT,

		//Source Control Graph colors

		["scmGraph.historyItemHoverLabelForeground"]: DFLT,
		["scmGraph.foreground1"]: colour.L70_C10_H100,
		["scmGraph.foreground2"]: colour.L70_C10_H150,
		["scmGraph.foreground3"]: colour.L70_C10_H200,
		["scmGraph.foreground4"]: colour.L70_C10_H250,
		["scmGraph.foreground5"]: colour.L70_C10_H300,
		["scmGraph.historyItemHoverAdditionsForeground"]: DFLT,
		["scmGraph.historyItemHoverDeletionsForeground"]: DFLT,
		["scmGraph.historyItemRefColor"]: SourceControlGraphRef,
		["scmGraph.historyItemRemoteRefColor"]: SourceControlGraphRemote,
		["scmGraph.historyItemBaseRefColor"]: DEBUG_GREEN,
		["scmGraph.historyItemHoverDefaultLabelForeground"]: DFLT,
		["scmGraph.historyItemHoverDefaultLabelBackground"]: DFLT,

		//Settings Editor colors
		//Note:

		["settings.headerForeground"]: DFLT,
		["settings.modifiedItemIndicator"]: modifyLight,
		["settings.dropdownBackground"]: DFLT,
		["settings.dropdownForeground"]: DFLT,
		["settings.dropdownBorder"]: DFLT,
		["settings.dropdownListBorder"]: DFLT,
		["settings.checkboxBackground"]: DFLT,
		["settings.checkboxForeground"]: DFLT,
		["settings.checkboxBorder"]: DFLT,
		["settings.rowHoverBackground"]: hover,
		["settings.textInputBackground"]: grey.G95,
		["settings.textInputForeground"]: DFLT,
		["settings.textInputBorder"]: DFLT,
		["settings.numberInputBackground"]: grey.G95,
		["settings.numberInputForeground"]: DFLT,
		["settings.numberInputBorder"]: DFLT,
		["settings.focusedRowBackground"]: DFLT,
		["settings.focusedRowBorder"]: DFLT,
		["settings.headerBorder"]: DFLT,
		["settings.sashBorder"]: DFLT,
		["settings.settingsHeaderHoverForeground"]: DFLT,

		//Breadcrumbs colors
		//The theme colors for breadcrumbs navigation:

		["breadcrumb.foreground"]: grey.G35,
		["breadcrumb.background"]: grey.G90,
		["breadcrumb.focusForeground"]: grey.G25,
		["breadcrumb.activeSelectionForeground"]: grey.G20,
		["breadcrumbPicker.background"]: DFLT,

		//Snippets colors
		//The theme colors for snippets:

		["editor.snippetTabstopHighlightBackground"]: DFLT,
		["editor.snippetTabstopHighlightBorder"]: DFLT,
		["editor.snippetFinalTabstopHighlightBackground"]: DFLT,
		["editor.snippetFinalTabstopHighlightBorder"]: DFLT,

		//Symbol Icons colors
		//The theme colors for symbol icons that appears in the Outline view, breadcrumb navigation, and suggest widget:

		["symbolIcon.arrayForeground"]: DFLT,
		["symbolIcon.booleanForeground"]: DFLT,
		["symbolIcon.classForeground"]: DFLT,
		["symbolIcon.colorForeground"]: DFLT,
		["symbolIcon.constantForeground"]: DFLT,
		["symbolIcon.constructorForeground"]: DFLT,
		["symbolIcon.enumeratorForeground"]: DFLT,
		["symbolIcon.enumeratorMemberForeground"]: DFLT,
		["symbolIcon.eventForeground"]: DFLT,
		["symbolIcon.fieldForeground"]: DFLT,
		["symbolIcon.fileForeground"]: DFLT,
		["symbolIcon.folderForeground"]: DFLT,
		["symbolIcon.functionForeground"]: DFLT,
		["symbolIcon.interfaceForeground"]: DFLT,
		["symbolIcon.keyForeground"]: DFLT,
		["symbolIcon.keywordForeground"]: DFLT,
		["symbolIcon.methodForeground"]: DFLT,
		["symbolIcon.moduleForeground"]: DFLT,
		["symbolIcon.namespaceForeground"]: DFLT,
		["symbolIcon.nullForeground"]: DFLT,
		["symbolIcon.numberForeground"]: DFLT,
		["symbolIcon.objectForeground"]: DFLT,
		["symbolIcon.operatorForeground"]: DFLT,
		["symbolIcon.packageForeground"]: DFLT,
		["symbolIcon.propertyForeground"]: DFLT,
		["symbolIcon.referenceForeground"]: DFLT,
		["symbolIcon.snippetForeground"]: DFLT,
		["symbolIcon.stringForeground"]: DFLT,
		["symbolIcon.structForeground"]: DFLT,
		["symbolIcon.textForeground"]: DFLT,
		["symbolIcon.typeParameterForeground"]: DFLT,
		["symbolIcon.unitForeground"]: DFLT,
		["symbolIcon.variableForeground"]: DFLT,

		//Debug Icons colors

		["debugIcon.breakpointForeground"]: DFLT,
		["debugIcon.breakpointDisabledForeground"]: DFLT,
		["debugIcon.breakpointUnverifiedForeground"]: DFLT,
		["debugIcon.breakpointCurrentStackframeForeground"]: DFLT,
		["debugIcon.breakpointStackframeForeground"]: DFLT,
		["debugIcon.startForeground"]: DFLT,
		["debugIcon.pauseForeground"]: DFLT,
		["debugIcon.stopForeground"]: DFLT,
		["debugIcon.disconnectForeground"]: DFLT,
		["debugIcon.restartForeground"]: DFLT,
		["debugIcon.stepOverForeground"]: DFLT,
		["debugIcon.stepIntoForeground"]: DFLT,
		["debugIcon.stepOutForeground"]: DFLT,
		["debugIcon.continueForeground"]: DFLT,
		["debugIcon.stepBackForeground"]: DFLT,
		["debugConsole.infoForeground"]: infoDark,
		["debugConsole.warningForeground"]: warningDark,
		["debugConsole.errorForeground"]: errorDark,
		["debugConsole.sourceForeground"]: DFLT,
		["debugConsoleInputIcon.foreground"]: DFLT,

		//Notebook colors

		["notebook.editorBackground"]: DFLT,
		["notebook.cellBorderColor"]: DFLT,
		["notebook.cellHoverBackground"]: DFLT,
		["notebook.cellInsertionIndicator"]: DFLT,
		["notebook.cellStatusBarItemHoverBackground"]: DFLT,
		["notebook.cellToolbarSeparator"]: DFLT,
		["notebook.cellEditorBackground"]: DFLT,
		["notebook.focusedCellBackground"]: DFLT,
		["notebook.focusedCellBorder"]: DFLT,
		["notebook.focusedEditorBorder"]: DFLT,
		["notebook.inactiveFocusedCellBorder"]: DFLT,
		["notebook.inactiveSelectedCellBorder"]: DFLT,
		["notebook.outputContainerBackgroundColor"]: DFLT,
		["notebook.outputContainerBorderColor"]: DFLT,
		["notebook.selectedCellBackground"]: DFLT,
		["notebook.selectedCellBorder"]: DFLT,
		["notebook.symbolHighlightBackground"]: DFLT,
		["notebookScrollbarSlider.activeBackground"]: DFLT,
		["notebookScrollbarSlider.background"]: DFLT,
		["notebookScrollbarSlider.hoverBackground"]: DFLT,
		["notebookStatusErrorIcon.foreground"]: DFLT,
		["notebookStatusRunningIcon.foreground"]: DFLT,
		["notebookStatusSuccessIcon.foreground"]: DFLT,
		["notebookEditorOverviewRuler.runningCellForeground"]: DFLT,

		//Chart colors

		["charts.foreground"]: DFLT,
		["charts.lines"]: DFLT,
		["charts.red"]: DFLT,
		["charts.blue"]: DFLT,
		["charts.yellow"]: DFLT,
		["charts.orange"]: DFLT,
		["charts.green"]: DFLT,
		["charts.purple"]: DFLT,
		["chart.line"]: DFLT,
		["chart.axis"]: DFLT,
		["chart.guide"]: DFLT,

		//Ports colors

		["ports.iconRunningProcessForeground"]: DFLT,

		//Comments View colors

		["commentsView.resolvedIcon"]: DFLT,
		["commentsView.unresolvedIcon"]: DFLT,

		//Action Bar colors

		["actionBar.toggledBackground"]: DFLT,

		//Simple Find Widget colors

		["simpleFindWidget.sashBorder"]: DFLT,

		//Gauge colors

		["gauge.background"]: DFLT,
		["gauge.foreground"]: DFLT,
		["gauge.border"]: DFLT,
		["gauge.warningBackground"]: DFLT,
		["gauge.warningForeground"]: DFLT,
		["gauge.errorBackground"]: DFLT,
		["gauge.errorForeground"]: DFLT,
	},
};


import fs from 'fs';

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

saveObjectToTxtFile(jsonObject, "./themes/theme-ZQT-BRIGHT_interface.json");
// console.log(jsonObject);
