let DFLT = "default";
let TRANSPARENT = "#00000000";
let BLACK = "#000";
let WHITE = "#FFF";
let DEBUG_RED = "#ff0000";
let DEBUG_GREEN = "#00ff00";
let DEBUG_PINK = "#ff00ff";
let DEBUG_BLUE = "#00ffff";

import grey from "./palette-greyscales.js";
import colour from "./palette-coloursBRIGHT.js";

let inputBack = grey.G98;
let editorBack = grey.G96;
let panelsBack1 = grey.G94;
let panelsBack2 = grey.G92;
let panelsBack3 = grey.G90;
let panelsBack4 = grey.G88;
let panelsBack5 = grey.G86;
let panelsBack6 = grey.G84;
let panelsBack7 = grey.G82;
let panelsBack8 = grey.G80;
let popUpPanelsBack = panelsBack3;

let crucialFore = grey.G08;
let mainFore = grey.G16;
let secondaryFore = grey.G40;
let dimFore = grey.G58;
let unimportantFore = grey.G78;
let whiteFore = grey.G98;

let shadow = "#44444466";
let placeholder = "#999999cc";
let sliderNormal = "#00000022";
let hover = "#00000011";
let hoverDarker = "#00000033";
let click = "#00000055";
let inputBorder = grey.G76;
let dropInto = "#99999944";
let dropBetween = "#444444bb";
let buttonBack = grey.G34;
let buttonHover = grey.G42;
let buttonForeground = grey.G98;
let buttonBorder = grey.G54;
let buttonSecondary = grey.G46;
let buttonSecondaryHover = grey.G54;

let keyboardLabel = grey.G94;
let preformatText = grey.G84;

let hyperlinkFore = "#2266a4"; //oklch(0.50 0.12 250)
let hyperlinkHover = "#3275b4"; //oklch(0.55 0.12 250)

let addLight = "#40cc6d"; //oklch(0.75 0.18 150)
let addLightTRANSPARENT = "#40cc6d44";
let modifyLight = "#c8ae00"; //oklch(0.75 0.18 100)
let deleteLight = "#ff76a9"; //oklch(0.75 0.18 0)
let deleteLightTRANSPARENT = "#ff76a944";

let gitAdd = "#21763c"; //oklch(0.5 0.12 150)
let gitModify = "#746300"; //oklch(0.5 0.12 100)
let gitDelete = "#984260"; //oklch(0.5 0.12 0)
let gitRename = "#0090b1"; //oklch(0.6 0.12 220)
let gitUntrack = "#688e3b"; //oklch(0.6 0.12 130)
let gitIgnore = "#959595";
let gitConflict = "#a067ac"; //oklch(0.6 0.12 320)
let gitSubmodule = "#495da7"; //oklch(0.5 0.12 270)
let SourceControlGraphRef = "#888";
let SourceControlGraphRemote = "#444";

let errorLight = "#ff9d9e"; //oklch(0.80 0.12 20)
let errorDark = "#d64651"; //oklch(0.60 0.18 20)
let warningLight = "#e7b375"; //oklch(0.80 0.10 70)
let warningDark = "#b76c00"; //oklch(0.60 0.15 70)
let infoLight = "#8cc3fc"; //oklch(0.80 0.10 250)
let infoDark = "#2784d5"; //oklch(0.60 0.15 250)
let hintLight = "#9bce90"; //oklch(0.80 0.10 140)
let hintDark = "#499537"; //oklch(0.60 0.15 140)

let selectActive = "#5285ff"; //oklch(0.65 0.20 265)
let selectActiveTRANSPARENT1 = "#5285ffbb";
let selectActiveTRANSPARENT2 = "#5285ff66";
let selectActiveTRANSPARENT3 = "#5285ff22";
let selectInactive = "#b1bed8"; //oklch(0.80 0.05 265)
let selectInactiveTRANSPARENT1 = "#b1bed8bb";
let selectInactiveTRANSPARENT2 = "#b1bed866";

let findMatchAllSolid = "#9076f3"; //oklch(0.65 0.18 290)
let findMatchAllTRANSPARENT1 = "#9076f377";
let findMatchAllTRANSPARENT2 = "#9076f322";
let findMatchAllFore = "#6647c0"; //oklch(0.50 0.18 290)

let wordHighlightWriteSOLID = "#839d00"; //oklch(0.65 0.18 120)
let wordHighlightWriteTRANSPARENT = "#839d0077";
let wordHighlightReadSOLID = "#00a1c9"; //oklch(0.65 0.18 220)
let wordHighlightReadTRANSPARENT = "#00a1c977";
let wordHighlightTextSOLID = "#00ac4e"; //oklch(0.65 0.18 150)
let wordHighlightTextTRANSPARENT = "#00ac4e77"; //oklch(0.65 0.18 150)
let unicodeHighlight = "#e26500"; //oklch(0.65 0.18 50)
let BracketMatchStrong = "#fb2af4bb"; //oklch(0.7 0.3 330)
let whitespaceCharacter = "#9bce9077"; //=hintLight

let lineHighlightBackground = "#00000011";
let editorRulerLine = "#00000011";
let IndentGuide = "#00000022";
let IndentGuideActive = "#00000033";
let UnusedCodeOpacity = "#00000088";

//TODO下面的颜色还没调过
let statusBarDebuggingBackground = "#d4cba6";//oklch(0.84 0.05 95)
let extensionStar = "#dea62dff";
let extensionPreRelease = "#de2dc1ff";
let extensionVerified = "#129123ff";
let foldArea = "#00a0cc2f";
let foldHint = "#00a0cc";
let linkEdit = "#33ffff5f";
let commentRangeForeground = "#686868";

let jsonObject = {
	//Contrast colors
	//The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.

	["$schema"]: "vscode://schemas/color-theme",
	["name"]: "User Interface Colours - ZQT BRIGHT Theme",
	["//description"]: "编辑器的界面外观",
	["include"]: "theme-ZQT-BRIGHT_codeSpecific.json",
	["colors"]: {
		//Contrast colors
		//这个不需要
		["contrastActiveBorder"]: DFLT,
		["contrastBorder"]: DFLT,

		//Base colors
		["focusBorder"]: selectActive,
		["foreground"]: mainFore,
		["disabledForeground"]: dimFore,
		["widget.border"]: DFLT,
		["widget.shadow"]: shadow,
		["selection.background"]: selectActiveTRANSPARENT1, //这个对编辑器和终端里的选择无效
		["descriptionForeground"]: secondaryFore,
		["errorForeground"]: errorDark,
		["icon.foreground"]: mainFore,
		["sash.hoverBorder"]: selectActiveTRANSPARENT2,

		//Window border
		//The theme colors for VS Code window border.
		//这个不需要
		["window.activeBorder"]: DFLT,
		["window.inactiveBorder"]: DFLT,
		//The window border colors are only supported on macOS and Linux (not Windows) and only when the custom title bar is enabled (["window.titleBarStyle"]: "custom").

		//Text colors
		//Colors inside a text document, such as the welcome page.
		["textBlockQuote.background"]: DEBUG_RED,
		["textBlockQuote.border"]: DFLT,
		["textCodeBlock.background"]: preformatText,
		["textLink.activeForeground"]: hyperlinkHover,
		["textLink.foreground"]: hyperlinkFore,
		["textPreformat.foreground"]: mainFore,
		["textPreformat.background"]: preformatText,
		["textSeparator.foreground"]: DEBUG_BLUE,

		//Action colors
		//A set of colors to control the interactions with actions across the workbench.
		//copilot界面最下面的几个按钮属于这几个
		["toolbar.hoverBackground"]: hover,
		["toolbar.hoverOutline"]: DFLT,
		["toolbar.activeBackground"]: DFLT,
		["editorActionList.background"]: popUpPanelsBack,
		["editorActionList.foreground"]: DFLT,
		["editorActionList.focusBackground"]: hover,
		["editorActionList.focusForeground"]: DFLT,

		//Button control
		//A set of colors for button widgets such as Open Folder button in the Explorer of a new window.
		["button.background"]: buttonBack,
		["button.foreground"]: buttonForeground,
		["button.hoverBackground"]: buttonHover,
		["button.border"]: buttonBorder,
		["button.separator"]: buttonBorder,
		["button.secondaryForeground"]: buttonForeground,
		["button.secondaryBackground"]: buttonSecondary,
		["button.secondaryHoverBackground"]: buttonSecondaryHover,
		["checkbox.background"]: inputBack,
		["checkbox.foreground"]: mainFore,
		["checkbox.border"]: inputBorder,
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
		["dropdown.background"]: inputBack,
		["dropdown.listBackground"]: DFLT,
		["dropdown.border"]: inputBorder,
		["dropdown.foreground"]: mainFore,

		//Input control
		//Colors for input controls such as in the Search view or the Find/Replace dialog.
		["input.placeholderForeground"]: placeholder,
		["input.background"]: inputBack,
		["input.foreground"]: mainFore,
		["input.border"]: inputBorder,
		["inputOption.activeBackground"]: DFLT,
		["inputOption.activeBorder"]: selectActive,
		["inputOption.activeForeground"]: DFLT,
		["inputOption.hoverBackground"]: DFLT,
		["inputValidation.errorBackground"]: errorLight,
		["inputValidation.errorForeground"]: mainFore,
		["inputValidation.errorBorder"]: errorDark,
		["inputValidation.infoBackground"]: infoLight,
		["inputValidation.infoForeground"]: mainFore,
		["inputValidation.infoBorder"]: infoDark,
		["inputValidation.warningBackground"]: warningLight,
		["inputValidation.warningForeground"]: mainFore,
		["inputValidation.warningBorder"]: warningDark,

		//Scrollbar control
		["scrollbar.shadow"]: shadow,
		["scrollbarSlider.activeBackground"]: click,
		["scrollbarSlider.background"]: sliderNormal,
		["scrollbarSlider.hoverBackground"]: hoverDarker,

		//Badge
		//Badges are small information labels, for example, search results count.

		["badge.foreground"]: whiteFore,
		["badge.background"]: infoDark,

		//Progress bar
		["progressBar.background"]: infoDark,

		//Lists and trees
		//Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
		["list.activeSelectionBackground"]: selectActiveTRANSPARENT3,
		["list.activeSelectionForeground"]: mainFore,
		["list.activeSelectionIconForeground"]: DFLT,
		["list.inactiveSelectionBackground"]: panelsBack1,
		["list.inactiveSelectionForeground"]: DFLT,
		["list.inactiveSelectionIconForeground"]: DFLT,
		["list.focusBackground"]: selectActiveTRANSPARENT2,
		["list.focusForeground"]: DFLT,
		["list.focusOutline"]: selectActive,
		["list.focusHighlightForeground"]: findMatchAllFore,
		["list.focusAndSelectionOutline"]: DFLT,
		["list.inactiveFocusBackground"]: selectInactiveTRANSPARENT2,
		["list.inactiveFocusOutline"]: selectInactive,
		["list.dropBackground"]: dropInto,
		["list.dropBetweenBackground"]: dropBetween,
		["list.highlightForeground"]: findMatchAllFore,
		["list.hoverBackground"]: hover,
		["list.hoverForeground"]: DFLT,
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
		["tree.indentGuidesStroke"]: IndentGuideActive,
		["tree.inactiveIndentGuidesStroke"]: IndentGuide,
		["tree.tableColumnsBorder"]: DFLT,
		["tree.tableOddRowsBackground"]: DFLT,

		//Activity Bar
		//The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
		["activityBar.background"]: panelsBack5,
		["activityBar.dropBorder"]: dropBetween,
		["activityBar.foreground"]: mainFore,
		["activityBar.inactiveForeground"]: secondaryFore,
		["activityBar.border"]: DFLT,
		["activityBarBadge.background"]: infoDark,
		["activityBarBadge.foreground"]: whiteFore,
		["activityBar.activeBorder"]: selectActive,
		["activityBar.activeBackground"]: panelsBack3,
		["activityBar.activeFocusBorder"]: DFLT,
		["activityBarTop.foreground"]: DEBUG_PINK,
		["activityBarTop.activeBorder"]: DEBUG_BLUE,
		["activityBarTop.inactiveForeground"]: DFLT,
		["activityBarTop.dropBorder"]: dropBetween,
		["activityBarTop.background"]: DEBUG_GREEN,
		["activityBarTop.activeBackground"]: DFLT,
		["activityWarningBadge.foreground"]: whiteFore,
		["activityWarningBadge.background"]: warningDark,
		["activityErrorBadge.foreground"]: whiteFore,
		["activityErrorBadge.background"]: errorDark,

		//Profiles
		["profileBadge.background"]: DEBUG_GREEN,
		["profileBadge.foreground"]: DFLT,
		["profiles.sashBorder"]: DFLT,

		//Side Bar
		//The Side Bar contains views like the Explorer and Search.
		["sideBarTitle.foreground"]: DFLT,
		["sideBarTitle.background"]: panelsBack3,
		["sideBarTitle.border"]: DFLT,
		["sideBar.background"]: panelsBack3,
		["sideBar.foreground"]: DFLT,
		["sideBar.border"]: DFLT,
		["sideBarSectionHeader.background"]: panelsBack7,
		["sideBarSectionHeader.foreground"]: DFLT,
		["sideBarSectionHeader.border"]: DFLT,
		["sideBar.dropBackground"]: dropInto,
		["sideBarActivityBarTop.border"]: DEBUG_RED,
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
		["minimap.chatEditHighlight"]: DFLT, //TODO
		["minimapSlider.background"]: DFLT,
		["minimapSlider.hoverBackground"]: DFLT,
		["minimapSlider.activeBackground"]: DFLT,
		["minimapGutter.addedBackground"]: addLight,
		["minimapGutter.modifiedBackground"]: modifyLight,
		["minimapGutter.deletedBackground"]: deleteLight,
		["editorMinimap.inlineChatInserted"]: DFLT, //TODO

		//Editor Groups & Tabs
		//Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
		["editorGroup.border"]: unimportantFore,
		["editorGroup.dropBackground"]: dropInto,
		["editorGroupHeader.noTabsBackground"]: DEBUG_RED,
		["editorGroupHeader.tabsBackground"]: panelsBack5,
		["editorGroupHeader.tabsBorder"]: TRANSPARENT,
		["editorGroupHeader.border"]: TRANSPARENT,
		["editorGroup.emptyBackground"]: grey.G94,
		["editorGroup.focusedEmptyBorder"]: DFLT,
		["editorGroup.dropIntoPromptForeground"]: DFLT,
		["editorGroup.dropIntoPromptBackground"]: DFLT,
		["editorGroup.dropIntoPromptBorder"]: DFLT,
		["tab.border"]: unimportantFore,
		["tab.activeBackground"]: panelsBack1,
		["tab.activeForeground"]: mainFore,
		["tab.inactiveBackground"]: panelsBack5,
		["tab.inactiveForeground"]: mainFore,
		["tab.unfocusedActiveBackground"]: panelsBack3,
		["tab.unfocusedActiveForeground"]: mainFore,
		["tab.unfocusedInactiveBackground"]: panelsBack5,
		["tab.unfocusedInactiveForeground"]: mainFore,
		["tab.activeBorderTop"]: selectActive,
		["tab.activeBorder"]: DFLT,
		["tab.unfocusedActiveBorderTop"]: TRANSPARENT,
		["tab.unfocusedActiveBorder"]: DFLT,
		["tab.selectedBorderTop"]: DFLT,
		["tab.selectedBackground"]: selectActiveTRANSPARENT3,
		["tab.selectedForeground"]: DFLT,
		["tab.dragAndDropBorder"]: dropBetween,
		["tab.lastPinnedBorder"]: DFLT, //TODO
		["tab.hoverBackground"]: hover,
		["tab.unfocusedHoverBackground"]: DFLT,
		["tab.hoverForeground"]: DFLT,
		["tab.unfocusedHoverForeground"]: DFLT,
		["tab.hoverBorder"]: DFLT,
		["tab.unfocusedHoverBorder"]: DFLT,
		["tab.activeModifiedBorder"]: DEBUG_GREEN,
		["tab.inactiveModifiedBorder"]: DFLT,
		["tab.unfocusedActiveModifiedBorder"]: DFLT,
		["tab.unfocusedInactiveModifiedBorder"]: DFLT,
		["editorPane.background"]: DFLT,
		["sideBySideEditor.horizontalBorder"]: DEBUG_PINK,
		["sideBySideEditor.verticalBorder"]: DFLT,

		//Editor colors
		//The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed. These colors are defined by the Color Theme but can also be customized with the editor.tokenColorCustomizations setting. See Customizing a Color Theme for details on updating a Color Theme and the available token types.
		//All other editor colors are listed here:
		//主编辑器区域的颜色
		["editor.background"]: editorBack,
		["editor.foreground"]: mainFore,
		["editorLineNumber.foreground"]: unimportantFore,
		["editorLineNumber.activeForeground"]: dimFore,
		["editorLineNumber.dimmedForeground"]: hintLight,
		["editorCursor.foreground"]: BLACK,
		["editorCursor.background"]: WHITE,
		["editorMultiCursor.primary.foreground"]: BLACK,
		["editorMultiCursor.primary.background"]: WHITE,
		["editorMultiCursor.secondary.foreground"]: grey.G50,
		["editorMultiCursor.secondary.background"]: WHITE,
		["editor.placeholder.foreground"]: placeholder,
		["editor.compositionBorder"]: DFLT,
		//Selection colors are visible when selecting one or more characters. In addition to the selection also all regions with the same content are highlighted.
		["editor.selectionBackground"]: selectActiveTRANSPARENT1,
		["editor.selectionForeground"]: DFLT,
		["editor.inactiveSelectionBackground"]: selectInactiveTRANSPARENT2,
		["editor.selectionHighlightBackground"]: selectActiveTRANSPARENT3,
		["editor.selectionHighlightBorder"]: DFLT,
		//Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.
		["editor.wordHighlightStrongBackground"]: TRANSPARENT,
		["editor.wordHighlightStrongBorder"]: wordHighlightWriteSOLID,
		["editor.wordHighlightBackground"]: TRANSPARENT,
		["editor.wordHighlightBorder"]: wordHighlightReadSOLID,
		["editor.wordHighlightTextBackground"]: TRANSPARENT,
		["editor.wordHighlightTextBorder"]: wordHighlightTextSOLID,
		//Find colors depend on the current find string in the Find/Replace dialog.
		["editor.findMatchBackground"]: selectActiveTRANSPARENT1,
		["editor.findMatchForeground"]: DFLT,
		["editor.findMatchBorder"]: DFLT,
		["editor.findMatchHighlightForeground"]: DFLT,
		["editor.findMatchHighlightBackground"]: findMatchAllTRANSPARENT1,
		["editor.findMatchHighlightBorder"]: DFLT,
		["editor.findRangeHighlightBackground"]: findMatchAllTRANSPARENT2,
		["editor.findRangeHighlightBorder"]: DFLT,

		//Search colors are used in the search viewlet's global search results.
		["search.resultsInfoForeground"]: secondaryFore,
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
		["editorWatermark.foreground"]: DEBUG_RED,

		//The color for unicode highlights
		["editorUnicodeHighlight.border"]: unicodeHighlight,
		["editorUnicodeHighlight.background"]: DFLT,

		//The link color is visible when clicking on a link.
		["editorLink.activeForeground"]: hyperlinkHover,

		//The range highlight is visible when selecting a search result.
		["editor.rangeHighlightBackground"]: findMatchAllTRANSPARENT2,
		["editor.rangeHighlightBorder"]: DFLT,

		//The symbol highlight is visible when navigating to a symbol via a command such as Go to Definition.
		["editor.symbolHighlightBackground"]: findMatchAllTRANSPARENT1,
		["editor.symbolHighlightBorder"]: DFLT,

		//To see the editor white spaces, enable Toggle Render Whitespace.
		["editorWhitespace.foreground"]: whitespaceCharacter,

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
		["editorInlayHint.background"]: DEBUG_GREEN,
		["editorInlayHint.foreground"]: DFLT,
		["editorInlayHint.typeForeground"]: DFLT,
		["editorInlayHint.typeBackground"]: DFLT,
		["editorInlayHint.parameterForeground"]: DFLT,
		["editorInlayHint.parameterBackground"]: DFLT,

		//To see editor rulers, define their location with "editor.rulers"
		["editorRuler.foreground"]: editorRulerLine,
		["editor.linkedEditingBackground"]: DEBUG_BLUE,

		//CodeLens:
		["editorCodeLens.foreground"]: DFLT, //TODO

		//Lightbulb:
		["editorLightBulb.foreground"]: DFLT, //TODO
		["editorLightBulbAutoFix.foreground"]: DFLT,
		["editorLightBulbAi.foreground"]: DFLT,

		//Bracket matches:
		["editorBracketMatch.background"]: TRANSPARENT,
		["editorBracketMatch.border"]: BracketMatchStrong,

		//Bracket pair colorization:
		["editorBracketHighlight.foreground1"]: colour.L76_C10_H220, //TODO
		["editorBracketHighlight.foreground2"]: colour.L76_C10_H100,
		["editorBracketHighlight.foreground3"]: colour.L76_C10_H340,
		["editorBracketHighlight.foreground4"]: colour.L76_C10_H180,
		["editorBracketHighlight.foreground5"]: colour.L76_C10_H060,
		["editorBracketHighlight.foreground6"]: colour.L76_C10_H300,
		["editorBracketHighlight.unexpectedBracket.foreground"]: errorDark,

		//Bracket pair guides:
		["editorBracketPairGuide.activeBackground1"]: colour.L70_C08_H220, //TODO
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
		["editorOverviewRuler.border"]: dimFore,
		["editorOverviewRuler.findMatchForeground"]: findMatchAllTRANSPARENT1,
		["editorOverviewRuler.rangeHighlightForeground"]: findMatchAllTRANSPARENT2,
		["editorOverviewRuler.selectionHighlightForeground"]: selectActiveTRANSPARENT1,
		["editorOverviewRuler.wordHighlightStrongForeground"]: wordHighlightWriteTRANSPARENT,
		["editorOverviewRuler.wordHighlightForeground"]: wordHighlightReadTRANSPARENT,
		["editorOverviewRuler.wordHighlightTextForeground"]: wordHighlightTextTRANSPARENT,
		["editorOverviewRuler.modifiedForeground"]: modifyLight,
		["editorOverviewRuler.addedForeground"]: addLight,
		["editorOverviewRuler.deletedForeground"]: deleteLight,
		["editorOverviewRuler.errorForeground"]: errorLight,
		["editorOverviewRuler.warningForeground"]: warningLight,
		["editorOverviewRuler.infoForeground"]: infoLight,
		["editorOverviewRuler.bracketMatchForeground"]: BracketMatchStrong,
		["editorOverviewRuler.inlineChatInserted"]: DFLT, //TODO
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
		["editorGutter.commentRangeForeground"]: DEBUG_BLUE,
		["editorGutter.commentGlyphForeground"]: DFLT,
		["editorGutter.commentUnresolvedGlyphForeground"]: DFLT,
		["editorGutter.foldingControlForeground"]: buttonBack,
		["editorGutter.itemGlyphForeground"]: DFLT,
		["editorGutter.itemBackground"]: DFLT,

		//The editor comments widget can be seen when reviewing pull requests:
		["editorCommentsWidget.resolvedBorder"]: DFLT, //TODO
		["editorCommentsWidget.unresolvedBorder"]: DFLT,
		["editorCommentsWidget.rangeBackground"]: DFLT,
		["editorCommentsWidget.rangeActiveBackground"]: DFLT,
		["editorCommentsWidget.replyInputBackground"]: DFLT,

		//Editor inline edits can be seen when using Copilot to suggest the next change to make:
		["inlineEdit.gutterIndicator.primaryBorder"]: DFLT, //TODO
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
		["diffEditor.border"]: DFLT,
		["diffEditor.diagonalFill"]: DEBUG_PINK,
		["diffEditor.insertedTextBackground"]: addLightTRANSPARENT,
		["diffEditor.insertedTextBorder"]: TRANSPARENT,
		["diffEditor.removedTextBackground"]: deleteLightTRANSPARENT,
		["diffEditor.removedTextBorder"]: TRANSPARENT,
		["diffEditor.insertedLineBackground"]: addLightTRANSPARENT,
		["diffEditor.removedLineBackground"]: deleteLightTRANSPARENT,
		["diffEditorGutter.insertedLineBackground"]: TRANSPARENT,
		["diffEditorGutter.removedLineBackground"]: TRANSPARENT,
		["diffEditorOverview.insertedForeground"]: DFLT,
		["diffEditorOverview.removedForeground"]: DFLT,
		["diffEditor.unchangedRegionBackground"]: DFLT, //TODO
		["diffEditor.unchangedRegionForeground"]: DFLT,
		["diffEditor.unchangedRegionShadow"]: shadow,
		["diffEditor.unchangedCodeBackground"]: DFLT,
		["diffEditor.move.border"]: DFLT,
		["diffEditor.moveActive.border"]: DFLT,
		["multiDiffEditor.headerBackground"]: DFLT,
		["multiDiffEditor.background"]: DEBUG_RED,
		["multiDiffEditor.border"]: DFLT,

		//Chat colors
		["chat.requestBorder"]: DFLT, //TODO
		["chat.requestBackground"]: DEBUG_RED,
		["chat.slashCommandBackground"]: DFLT,
		["chat.slashCommandForeground"]: DFLT,
		["chat.avatarBackground"]: DFLT,
		["chat.avatarForeground"]: DFLT,
		["chat.editedFileForeground"]: DFLT,
		["chat.linesAddedForeground"]: DFLT,
		["chat.linesRemovedForeground"]: DFLT,
		["chat.requestCodeBorder"]: DFLT,
		["chat.requestBubbleBackground"]: DFLT,
		["chat.requestBubbleHoverBackground"]: DFLT,
		["chat.checkpointSeparator"]: DFLT,

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
		["editorWidget.background"]: popUpPanelsBack,
		["editorWidget.border"]: DFLT,
		["editorWidget.resizeBorder"]: DFLT,
		["editorSuggestWidget.background"]: DFLT, //TODO
		["editorSuggestWidget.border"]: DFLT,
		["editorSuggestWidget.foreground"]: DFLT,
		["editorSuggestWidget.focusHighlightForeground"]: DFLT,
		["editorSuggestWidget.highlightForeground"]: DFLT,
		["editorSuggestWidget.selectedBackground"]: DFLT,
		["editorSuggestWidget.selectedForeground"]: DFLT,
		["editorSuggestWidget.selectedIconForeground"]: DFLT,
		["editorSuggestWidgetStatus.foreground"]: DFLT,
		["editorHoverWidget.foreground"]: DFLT, //TODO
		["editorHoverWidget.background"]: DFLT,
		["editorHoverWidget.border"]: DFLT,
		["editorHoverWidget.highlightForeground"]: DFLT,
		["editorHoverWidget.statusBarBackground"]: DFLT,
		["editorGhostText.border"]: DFLT,
		["editorGhostText.background"]: DFLT,
		["editorGhostText.foreground"]: hintLight, //TODO
		["editorStickyScroll.background"]: DFLT,
		["editorStickyScroll.border"]: DFLT,
		["editorStickyScroll.shadow"]: shadow,
		["editorStickyScrollHover.background"]: hover,

		//The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.
		["debugExceptionWidget.background"]: DFLT, //TODO
		["debugExceptionWidget.border"]: DFLT,

		//The editor marker view shows when navigating to errors and warnings in the editor (Go to Next Error or Warning command).
		["editorMarkerNavigation.background"]: DFLT, //TODO
		["editorMarkerNavigationError.background"]: DFLT,
		["editorMarkerNavigationWarning.background"]: DFLT,
		["editorMarkerNavigationInfo.background"]: DFLT,
		["editorMarkerNavigationError.headerBackground"]: DFLT,
		["editorMarkerNavigationWarning.headerBackground"]: DFLT,
		["editorMarkerNavigationInfo.headerBackground"]: DFLT,

		//Peek view colors
		//Peek views are used to show references and declarations as a view inside the editor.
		["peekView.border"]: DFLT,
		["peekViewEditor.background"]: panelsBack1,
		["peekViewEditorGutter.background"]: DFLT,
		["peekViewEditor.matchHighlightBackground"]: findMatchAllTRANSPARENT1,
		["peekViewEditor.matchHighlightBorder"]: DFLT,
		["peekViewResult.background"]: panelsBack3,
		["peekViewResult.fileForeground"]: mainFore,
		["peekViewResult.lineForeground"]: mainFore,
		["peekViewResult.matchHighlightBackground"]: findMatchAllTRANSPARENT2,
		["peekViewResult.selectionBackground"]: selectActiveTRANSPARENT3,
		["peekViewResult.selectionForeground"]: mainFore,
		["peekViewTitle.background"]: panelsBack3,
		["peekViewTitleDescription.foreground"]: secondaryFore,
		["peekViewTitleLabel.foreground"]: DFLT,
		["peekViewEditorStickyScroll.background"]: DFLT,
		["peekViewEditorStickyScrollGutter.background"]: DFLT,

		//Merge conflicts colors
		//Merge conflict decorations are shown when the editor contains special diff ranges.
		//Merge ranges
		["merge.currentHeaderBackground"]: DFLT, //TODO
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
		["panel.background"]: panelsBack3,
		["panel.border"]: TRANSPARENT,
		["panel.dropBorder"]: dropBetween,
		["panelTitle.activeBorder"]: selectActive,
		["panelTitle.activeForeground"]: crucialFore,
		["panelTitle.inactiveForeground"]: mainFore,
		["panelTitle.border"]: TRANSPARENT,
		["panelTitleBadge.background"]: DFLT,
		["panelTitleBadge.foreground"]: DFLT,
		["panelInput.border"]: inputBorder,
		["panelSection.border"]: DFLT, //TODO
		["panelSection.dropBackground"]: DFLT,
		["panelSectionHeader.background"]: DFLT,
		["panelSectionHeader.foreground"]: DFLT,
		["panelStickyScroll.background"]: DFLT,
		["panelStickyScroll.border"]: DFLT,
		["panelStickyScroll.shadow"]: shadow,
		["panelSectionHeader.border"]: DFLT,
		["outputView.background"]: panelsBack1,
		["outputViewStickyScroll.background"]: DFLT,

		//Status Bar colors
		//The Status Bar is shown in the bottom of the workbench.
		["statusBar.background"]: panelsBack6,
		["statusBar.foreground"]: mainFore,
		["statusBar.border"]: TRANSPARENT,
		["statusBar.debuggingBackground"]: statusBarDebuggingBackground,
		["statusBar.debuggingForeground"]: mainFore,
		["statusBar.debuggingBorder"]: TRANSPARENT,
		["statusBar.noFolderBackground"]: panelsBack2,
		["statusBar.noFolderForeground"]: mainFore,
		["statusBar.noFolderBorder"]: TRANSPARENT,
		["statusBar.focusBorder"]: selectActive,
		["statusBarItem.activeBackground"]: click,
		["statusBarItem.hoverForeground"]: DFLT,
		["statusBarItem.hoverBackground"]: hover,
		["statusBarItem.prominentForeground"]: mainFore,
		["statusBarItem.prominentBackground"]: warningLight,
		["statusBarItem.prominentHoverForeground"]: DFLT,
		["statusBarItem.prominentHoverBackground"]: DFLT,
		["statusBarItem.remoteBackground"]: panelsBack8,
		["statusBarItem.remoteForeground"]: mainFore,
		["statusBarItem.remoteHoverBackground"]: hover,
		["statusBarItem.remoteHoverForeground"]: DFLT,
		["statusBarItem.errorBackground"]: errorLight,
		["statusBarItem.errorForeground"]: mainFore,
		["statusBarItem.errorHoverBackground"]: hover,
		["statusBarItem.errorHoverForeground"]: DFLT,
		["statusBarItem.warningBackground"]: warningLight,
		["statusBarItem.warningForeground"]: mainFore,
		["statusBarItem.warningHoverBackground"]: hover,
		["statusBarItem.warningHoverForeground"]: DFLT,
		["statusBarItem.compactHoverBackground"]: hoverDarker,
		["statusBarItem.focusBorder"]: DFLT,
		["statusBarItem.offlineBackground"]: DFLT,
		["statusBarItem.offlineForeground"]: DFLT,
		["statusBarItem.offlineHoverForeground"]: DFLT,
		["statusBarItem.offlineHoverBackground"]: DFLT,
		//Prominent items stand out from other Status Bar entries to indicate importance. One example is the Toggle Tab Key Moves Focus command change mode indicator.

		//Title Bar colors
		["titleBar.activeBackground"]: panelsBack6,
		["titleBar.activeForeground"]: mainFore,
		["titleBar.inactiveBackground"]: panelsBack8,
		["titleBar.inactiveForeground"]: mainFore,
		["titleBar.border"]: DFLT,

		//Menu Bar colors
		["menubar.selectionForeground"]: DFLT,
		["menubar.selectionBackground"]: hover,
		["menubar.selectionBorder"]: DFLT,
		["menu.foreground"]: mainFore,
		["menu.background"]: popUpPanelsBack,
		["menu.selectionForeground"]: DFLT,
		["menu.selectionBackground"]: hover,
		["menu.selectionBorder"]: DFLT,
		["menu.separatorBackground"]: unimportantFore,
		["menu.border"]: DFLT,

		//Command Center colors
		["commandCenter.foreground"]: DFLT,
		["commandCenter.background"]: panelsBack2,
		["commandCenter.activeForeground"]: DFLT,
		["commandCenter.activeBackground"]: panelsBack2,
		["commandCenter.border"]: inputBorder,
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
		["notificationCenterHeader.background"]: panelsBack5,
		["notificationToast.border"]: DFLT,
		["notifications.foreground"]: DFLT,
		["notifications.background"]: popUpPanelsBack,
		["notifications.border"]: DFLT,
		["notificationLink.foreground"]: DFLT,
		["notificationsErrorIcon.foreground"]: errorDark,
		["notificationsWarningIcon.foreground"]: warningDark,
		["notificationsInfoIcon.foreground"]: infoDark,

		//Banner colors
		//The banner appears below the title bar and spans the entire width of the workbench when visible.
		["banner.background"]: infoDark,
		["banner.foreground"]: whiteFore,
		["banner.iconForeground"]: whiteFore,

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
		["extensionIcon.starForeground"]: extensionStar,
		["extensionIcon.verifiedForeground"]: extensionVerified,
		["extensionIcon.preReleaseForeground"]: extensionPreRelease,
		["extensionIcon.sponsorForeground"]: DFLT, //TODO
		["extensionIcon.privateForeground"]: DFLT,

		//Quick picker colors
		["pickerGroup.border"]: unimportantFore,
		["pickerGroup.foreground"]: secondaryFore,
		["quickInput.background"]: popUpPanelsBack,
		["quickInput.foreground"]: mainFore,
		["quickInputList.focusBackground"]: panelsBack6,
		["quickInputList.focusForeground"]: DFLT,
		["quickInputList.focusIconForeground"]: DFLT,
		["quickInputTitle.background"]: panelsBack6,

		//Keybinding label colors
		//Keybinding labels are shown when there is a keybinding associated with a command. An example of the keybinding label can be seen in the Command Palette:
		//Usages of the keybinding label include (but are not limited to):
		//	The Command Palette
		//	The Keyboard Shortcuts editor
		//	The Keyboard Shortcuts recorder modal
		//	The "feature contribution" section of an extension's marketplace page
		//The following customizations are available:
		["keybindingLabel.background"]: keyboardLabel,
		["keybindingLabel.foreground"]: mainFore,
		["keybindingLabel.border"]: dimFore,
		["keybindingLabel.bottomBorder"]: dimFore,

		//Keyboard shortcut table colors
		["keybindingTable.headerBackground"]: DFLT,
		["keybindingTable.rowsBackground"]: DFLT,

		//Integrated Terminal colors
		["terminal.background"]: inputBack,
		["terminal.border"]: DFLT,
		["terminal.foreground"]: mainFore,
		["terminal.ansiBlack"]: "#0b0b0b", //oklch(0.15 0 360)
		["terminal.ansiWhite"]: "#717171", //oklch(0.55 0 360)
		["terminal.ansiRed"]: "#b14f42", //oklch(0.55 0.13 30)
		["terminal.ansiYellow"]: "#8f6c00", //oklch(0.55 0.13 90)
		["terminal.ansiGreen"]: "#298646", //oklch(0.55 0.13 150)
		["terminal.ansiCyan"]: "#008396", //oklch(0.55 0.13 210)
		["terminal.ansiBlue"]: "#546bbd", //oklch(0.55 0.13 270)
		["terminal.ansiMagenta"]: "#9b5295", //oklch(0.55 0.13 330)
		["terminal.ansiBrightBlack"]: "#8f8f8f", //oklch(0.65 0 360)
		["terminal.ansiBrightWhite"]: "#cecece", //oklch(0.85 0 360)
		["terminal.ansiBrightRed"]: "#fa8978", //oklch(0.75 0.14 30)
		["terminal.ansiBrightYellow"]: "#d0a92d", //oklch(0.75 0.14 90)
		["terminal.ansiBrightGreen"]: "#65c67d", //oklch(0.75 0.14 150)
		["terminal.ansiBrightCyan"]: "#00c5de", //oklch(0.75 0.14 210)
		["terminal.ansiBrightBlue"]: "#8ca8ff", //oklch(0.75 0.14 270)
		["terminal.ansiBrightMagenta"]: "#df8cd8", //oklch(0.75 0.14 330)
		["terminal.selectionBackground"]: selectActiveTRANSPARENT1,
		["terminal.selectionForeground"]: DFLT,
		["terminal.inactiveSelectionBackground"]: selectInactiveTRANSPARENT2,
		["terminal.findMatchBackground"]: selectActiveTRANSPARENT1,
		["terminal.findMatchBorder"]: DFLT,
		["terminal.findMatchHighlightBackground"]: findMatchAllTRANSPARENT1,
		["terminal.findMatchHighlightBorder"]: DFLT,
		["terminal.hoverHighlightBackground"]: hover,
		["terminalCursor.background"]: WHITE,
		["terminalCursor.foreground"]: BLACK,
		["terminal.dropBackground"]: dropInto,
		["terminal.tab.activeBorder"]: DFLT,
		["terminalCommandDecoration.defaultBackground"]: hintDark,
		["terminalCommandDecoration.successBackground"]: infoDark, 
		["terminalCommandDecoration.errorBackground"]: errorDark,
		["terminalOverviewRuler.cursorForeground"]: DFLT,//TODO
		["terminalOverviewRuler.findMatchForeground"]: DFLT,
		["terminalStickyScroll.background"]: DEBUG_PINK,
		["terminalStickyScroll.border"]: DEBUG_RED,
		["terminalStickyScrollHover.background"]: DEBUG_GREEN,
		["terminal.initialHintForeground"]: DEBUG_BLUE,
		["terminalOverviewRuler.border"]: unimportantFore,
		["terminalCommandGuide.foreground"]: hoverDarker,
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
		["debugToolBar.background"]: DFLT, //TODO
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
		["testing.runAction"]: DFLT, //TODO
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
		["welcomePage.progress.background"]: inputBack,
		["welcomePage.progress.foreground"]: infoDark,
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
		//Note:These colors are for the GUI settings editor which can be opened with the Preferences: Open Settings (UI) command.
		["settings.headerForeground"]: mainFore,
		["settings.modifiedItemIndicator"]: modifyLight,
		["settings.dropdownBackground"]: DFLT,
		["settings.dropdownForeground"]: DFLT,
		["settings.dropdownBorder"]: DFLT,
		["settings.dropdownListBorder"]: DFLT,
		["settings.checkboxBackground"]: DFLT,
		["settings.checkboxForeground"]: DFLT,
		["settings.checkboxBorder"]: DFLT,
		["settings.rowHoverBackground"]: hover,
		["settings.textInputBackground"]: DFLT,
		["settings.textInputForeground"]: DFLT,
		["settings.textInputBorder"]: DFLT,
		["settings.numberInputBackground"]: DFLT,
		["settings.numberInputForeground"]: DFLT,
		["settings.numberInputBorder"]: DFLT,
		["settings.focusedRowBackground"]: selectActiveTRANSPARENT3,
		["settings.focusedRowBorder"]: selectActive,
		["settings.headerBorder"]: DFLT,
		["settings.sashBorder"]: DFLT,
		["settings.settingsHeaderHoverForeground"]: DFLT,

		//Breadcrumbs colors
		//The theme colors for breadcrumbs navigation:
		//选项卡标签和编辑器中间的那一小条
		["breadcrumb.foreground"]: dimFore,
		["breadcrumb.background"]: panelsBack1,
		["breadcrumb.focusForeground"]: mainFore,
		["breadcrumb.activeSelectionForeground"]: crucialFore,
		["breadcrumbPicker.background"]: DFLT,

		//Snippets colors
		//The theme colors for snippets:
		["editor.snippetTabstopHighlightBackground"]: DEBUG_PINK,
		["editor.snippetTabstopHighlightBorder"]: DFLT,
		["editor.snippetFinalTabstopHighlightBackground"]: DFLT,
		["editor.snippetFinalTabstopHighlightBorder"]: DFLT,

		//Symbol Icons colors
		//The theme colors for symbol icons that appears in the Outline view, breadcrumb navigation, and suggest widget:
		["symbolIcon.arrayForeground"]: DFLT, //TODO
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
		["debugIcon.breakpointForeground"]: DFLT, //TODO
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
		["charts.foreground"]: DFLT, //TODO
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
		["ports.iconRunningProcessForeground"]: DFLT, //TODO

		//Comments View colors
		["commentsView.resolvedIcon"]: DFLT, //TODO
		["commentsView.unresolvedIcon"]: DFLT,

		//Action Bar colors
		["actionBar.toggledBackground"]: DEBUG_RED,

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

import fs from "fs";

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
