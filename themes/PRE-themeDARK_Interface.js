let DFLT = "default";
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

import colour from "./coloursDARK.js";

let shadow = "#000";
let drop = "#90909030";
let placeholder = "#7f7f7f";
let hover = "#ffffff30";
let click = "#ffffff50";
let foldArea = "#00a0cc2f";
let foldHint = "#00a0cc";

let addStrong = "#00c14a";//oklch(0.7 0.22 150)
let addStrongTRANSPARENT = "#02e36a7f";
let addSoft = "#69b27a";//oklch(0.7 0.11 150)
let addSoftTRANSPARENT = "#6edd8a3f";
let modifyStrong = "#d78d00";//oklch(0.7 0.16 75)
let modifySoft = "#bc9865";//oklch(0.7 0.08 75)
let modifySoftTRANSPARENT = "#edc8623f";
let deleteStrong = "#ff5199";//oklch(0.7 0.22 0)
let deleteStrongTRANSPARENT = "#ff51997f";
let deleteSoft = "#d6809c";//oklch(0.7 0.11 0)
let deleteSoftTRANSPARENT = "#f0769b3f";
let renameStrong = "#55b2ea";
let untrackStrong = "#94e301";
let ignoreStrong = "#848484";
let conflictStrong = "#b16edd";
let submoduleStrong = "#7b79e0";

let errorStrong = "#fc4734";//oklch(0.66 0.22 30)
let errorSoft = "#62160e"; //oklch(0.33 0.11 30)
// let errorTRANSPARENT = "#fc47347f"; //transparent是strong加半透明
let warningStrong = "#eada78";//oklch(0.88 0.12 100)
let warningSoft = "#5a532a";//oklch(0.44 0.06 100)
// let warningTRANSPARENT = "#FF9B197f";
let infoStrong = "#0080ff";
let infoSoft = "#193b7f";
// let infoTRANSPARENT = "#0080ff7f";
let hintStrong = "#36b348";
let hintSoft = "#1b5924";

let selectActiveStrong = "#3377ff";
// let selectActiveSoft = "#00427f";
let selectActiveTRANSPARENT = "#3377ffbf";
let selectOthersTRANSPARENT = "#3377ff5f";
let selectInactiveStrong = "#4d5e80";
// let selectInactiveSoft = "#445361";
let selectInactiveTRANSPARENT = "#4d5e805f";

let findMatchAllStrong = "#5f29ccbf";
let findMatchAllTRANSPARENT = "#5f29cc7f";
let rangeHighlight = "#5f29cc3f";
let findRangeHighlightBackground = "#5f29cc3f";

let linkEdit = "#33ffff5f";

let wordHighlightRead = "#00bde3bf";
let wordHighlightWrite = "#7ef10bbf";
let wordHighlightText = "#02d66cbf";
let unicodeHighlight = "#8080407f";
let BracketMatchStrong = "#ff00ffbf";
let BracketMatchTRANSPARENT = "#ff00ff3f";
let lineHighlightBackground = "#ffffff11";
let IndentGuide = "#7f7f7f3f";
let IndentGuideActive = "#7f7f7fbf";
let editorRulerLine = "#7f7f7f3f";
let UnusedCodeOpacity = "#00000085";

let sliderNormal = "#ffffff20";
// let sliderActive = "#ffffff45";
// let hoverHighlightBackground = "#b4b4b436";
// let editorLinkActiveForeground = "#73ff009f";
let editorWhitespaceForeground = "#4692c55e";
let commentRangeForeground = "#686868";
// let statusBarForeground = "#dddddd";
// let statusBarBackground = "#2d3b53";
// let statusBarDebuggingForeground = "#0f0f0f";
let statusBarDebuggingBackground = "#ceb32c";
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
	["name"]: "User Interface Colours - ZQT DARK Theme",
	["//description"]: "编辑器的界面外观",
	["include"]: "theme-ZQT_codeSpecific.json",
	["colors"]: {
		["contrastActiveBorder"]: DFLT,
		["contrastBorder"]: DFLT,

		//Base colors

		["focusBorder"]: selectActiveStrong,
		["foreground"]: GREY90,
		["disabledForeground"]: GREY80,
		["widget.border"]: DFLT,
		["widget.shadow"]: shadow,
		["selection.background"]: selectActiveStrong,
		["descriptionForeground"]: GREY90,
		["errorForeground"]: errorStrong,
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

		["button.background"]: DFLT,
		["button.foreground"]: DFLT,
		["button.border"]: DFLT,
		["button.separator"]: DFLT,
		["button.hoverBackground"]: DFLT,
		["button.secondaryForeground"]: DFLT,
		["button.secondaryBackground"]: DFLT,
		["button.secondaryHoverBackground"]: DFLT,
		["checkbox.background"]: DFLT,
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

		["dropdown.background"]: DFLT,
		["dropdown.listBackground"]: DFLT,
		["dropdown.border"]: DFLT,
		["dropdown.foreground"]: DFLT,

		//Input control
		//Colors for input controls such as in the Search view or the Find/Replace dialog.

		["input.background"]: GREY35,
		["input.border"]: DFLT,
		["input.foreground"]: DFLT,
		["input.placeholderForeground"]: placeholder,
		["inputOption.activeBackground"]: DFLT,
		["inputOption.activeBorder"]: selectActiveStrong,
		["inputOption.activeForeground"]: DFLT,
		["inputOption.hoverBackground"]: DFLT,
		["inputValidation.errorBackground"]: errorSoft,
		["inputValidation.errorForeground"]: DFLT,
		["inputValidation.errorBorder"]: errorStrong,
		["inputValidation.infoBackground"]: infoSoft,
		["inputValidation.infoForeground"]: DFLT,
		["inputValidation.infoBorder"]: infoStrong,
		["inputValidation.warningBackground"]: warningSoft,
		["inputValidation.warningForeground"]: DFLT,
		["inputValidation.warningBorder"]: warningStrong,

		//Scrollbar control

		["scrollbar.shadow"]: shadow,
		["scrollbarSlider.activeBackground"]: click,
		["scrollbarSlider.background"]: sliderNormal,
		["scrollbarSlider.hoverBackground"]: hover,

		//Badge
		//Badges are small infoStrongrmation labels, for example, search results count.

		["badge.foreground"]: DFLT,
		["badge.background"]: DFLT,

		//Progress bar

		["progressBar.background"]: DFLT,

		//Lists and trees
		//Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.

		["list.activeSelectionBackground"]: DFLT,
		["list.activeSelectionForeground"]: DFLT,
		["list.activeSelectionIconForeground"]: DFLT,
		["list.dropBackground"]: DFLT,
		["list.focusBackground"]: DFLT,
		["list.focusForeground"]: DFLT,
		["list.focusHighlightForeground"]: DFLT,
		["list.focusOutline"]: DFLT,
		["list.focusAndSelectionOutline"]: DFLT,
		["list.highlightForeground"]: DFLT,
		["list.hoverBackground"]: hover,
		["list.hoverForeground"]: DFLT,
		["list.inactiveSelectionBackground"]: DFLT,
		["list.inactiveSelectionForeground"]: DFLT,
		["list.inactiveSelectionIconForeground"]: DFLT,
		["list.inactiveFocusBackground"]: DFLT,
		["list.inactiveFocusOutline"]: DFLT,
		["list.invalidItemForeground"]: DFLT,
		["list.errorForeground"]: errorStrong,
		["list.warningForeground"]: warningStrong,
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

		["activityBar.background"]: GREY30,
		["activityBar.dropBorder"]: DFLT,
		["activityBar.foreground"]: DFLT,
		["activityBar.inactiveForeground"]: DFLT,
		["activityBar.border"]: DFLT,
		["activityBarBadge.background"]: infoStrong,
		["activityBarBadge.foreground"]: DFLT,
		["activityBar.activeBorder"]: selectActiveStrong,
		["activityBar.activeBackground"]: GREY25,
		["activityBar.activeFocusBorder"]: DFLT,
		["activityBarTop.foreground"]: DFLT,
		["activityBarTop.activeBorder"]: DFLT,
		["activityBarTop.inactiveForeground"]: DFLT,
		["activityBarTop.dropBorder"]: DFLT,
		["activityBarTop.background"]: DFLT,
		["activityBarTop.activeBackground"]: DFLT,
		["activityWarningBadge.foreground"]: DFLT,
		["activityWarningBadge.background"]: warningStrong,
		["activityErrorBadge.foreground"]: DFLT,
		["activityErrorBadge.background"]: errorStrong,

		//Profiles

		["profileBadge.background"]: DFLT,
		["profileBadge.foreground"]: DFLT,
		["profiles.sashBorder"]: DFLT,

		//Side Bar
		//The Side Bar contains views like the Explorer and Search.

		["sideBar.background"]: GREY25,
		["sideBar.foreground"]: GREY90,
		["sideBar.border"]: DFLT,
		["sideBar.dropBackground"]: drop,
		["sideBarTitle.foreground"]: GREY95,
		["sideBarSectionHeader.background"]: GREY40,
		["sideBarSectionHeader.foreground"]: GREY95,
		["sideBarSectionHeader.border"]: DFLT,
		["sideBarActivityBarTop.border"]: DFLT,
		["sideBarTitle.background"]: DFLT,
		["sideBarTitle.border"]: DFLT,
		["sideBarStickyScroll.background"]: DFLT,
		["sideBarStickyScroll.border"]: DFLT,
		["sideBarStickyScroll.shadow"]: shadow,

		//Minimap
		//The Minimap shows a minified version of the current file.

		["minimap.findMatchHighlight"]: findMatchAllTRANSPARENT,
		["minimap.selectionHighlight"]: selectActiveTRANSPARENT,
		["minimap.errorHighlight"]: errorStrong,
		["minimap.warningHighlight"]: warningStrong,
		["minimap.background"]: DFLT,
		["minimap.selectionOccurrenceHighlight"]: DFLT,
		["minimap.foregroundOpacity"]: DFLT,
		["minimap.infoHighlight"]: infoStrong,
		["minimap.chatEditHighlight"]: DFLT,
		["minimapSlider.background"]: sliderNormal,
		["minimapSlider.hoverBackground"]: hover,
		["minimapSlider.activeBackground"]: click,
		["minimapGutter.addedBackground"]: addStrong,
		["minimapGutter.modifiedBackground"]: modifyStrong,
		["minimapGutter.deletedBackground"]: deleteStrong,
		["editorMinimap.inlineChatInserted"]: DFLT,

		//Editor Groups & Tabs
		//Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.

		["editorGroup.border"]: DFLT,
		["editorGroup.dropBackground"]: drop,
		["editorGroupHeader.noTabsBackground"]: GREY20,
		["editorGroupHeader.tabsBackground"]: GREY25,
		["editorGroupHeader.tabsBorder"]: DFLT,
		["editorGroupHeader.border"]: DFLT,
		["editorGroup.emptyBackground"]: DFLT,
		["editorGroup.focusedEmptyBorder"]: DFLT,
		["editorGroup.dropIntoPromptForeground"]: DFLT,
		["editorGroup.dropIntoPromptBackground"]: DFLT,
		["editorGroup.dropIntoPromptBorder"]: DFLT,
		["tab.activeBackground"]: GREY20,
		["tab.activeForeground"]: GREY95,
		["tab.inactiveBackground"]: GREY30,
		["tab.inactiveForeground"]: GREY95,
		["tab.unfocusedActiveBackground"]: GREY25,
		["tab.unfocusedActiveForeground"]: GREY85,
		["tab.unfocusedInactiveBackground"]: GREY30,
		["tab.unfocusedInactiveForeground"]: GREY85,
		["tab.border"]: DFLT,
		["tab.activeBorder"]: DFLT,
		["tab.selectedBorderTop"]: DFLT,
		["tab.selectedBackground"]: DFLT,
		["tab.selectedForeground"]: DFLT,
		["tab.dragAndDropBorder"]: DFLT,
		["tab.unfocusedActiveBorder"]: DFLT,
		["tab.activeBorderTop"]: selectActiveStrong,
		["tab.unfocusedActiveBorderTop"]: selectInactiveTRANSPARENT,
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

		["editor.background"]: GREY20,
		["editor.foreground"]: GREY90,
		["editorLineNumber.foreground"]: GREY50,
		["editorLineNumber.activeForeground"]: GREY70,
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

		["editor.selectionBackground"]: selectActiveTRANSPARENT,
		["editor.selectionForeground"]: DFLT,
		["editor.inactiveSelectionBackground"]: selectInactiveTRANSPARENT,
		["editor.selectionHighlightBackground"]: selectOthersTRANSPARENT,
		["editor.selectionHighlightBorder"]: DFLT,

		//Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.

		//occurrences

		["editor.wordHighlightBackground"]: TRANSPARENT,
		["editor.wordHighlightBorder"]: wordHighlightRead,
		["editor.wordHighlightStrongBackground"]: TRANSPARENT,
		["editor.wordHighlightStrongBorder"]: wordHighlightWrite,
		["editor.wordHighlightTextBackground"]: TRANSPARENT,
		["editor.wordHighlightTextBorder"]: wordHighlightText,

		//Find colors depend on the current find string in the Find/Replace dialog.
		//Find matches

		["editor.findMatchBackground"]: selectActiveTRANSPARENT,
		["editor.findMatchForeground"]: DFLT,
		["editor.findMatchHighlightForeground"]: DFLT,
		["editor.findMatchHighlightBackground"]: findMatchAllTRANSPARENT,
		["editor.findRangeHighlightBackground"]: findRangeHighlightBackground,
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

		["editorLink.activeForeground"]: selectActiveStrong,

		//The range highlight is visible when selecting a search result.

		["editor.rangeHighlightBackground"]: rangeHighlight,
		["editor.rangeHighlightBorder"]: DFLT,

		//The symbol highlight is visible when navigating to a symbol via a command such as Go to Definition.

		["editor.symbolHighlightBackground"]: DFLT,
		["editor.symbolHighlightBorder"]: DFLT,

		//To see the editor white spaces, enable Toggle Render Whitespace.

		["editorWhitespace.foreground"]: infoSoft,

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

		//To see the editor inline hintStrongs, set ["editor.inlineSuggest.enabled"]:

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
		["editorBracketHighlight.unexpectedBracket.foreground"]: errorStrong,

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
		["editorOverviewRuler.findMatchForeground"]: findMatchAllStrong,
		["editorOverviewRuler.rangeHighlightForeground"]: rangeHighlight,
		["editorOverviewRuler.selectionHighlightForeground"]: selectActiveTRANSPARENT,
		["editorOverviewRuler.wordHighlightForeground"]: wordHighlightRead,
		["editorOverviewRuler.wordHighlightStrongForeground"]: wordHighlightWrite,
		["editorOverviewRuler.wordHighlightTextForeground"]: wordHighlightText,
		["editorOverviewRuler.modifiedForeground"]: modifyStrong,
		["editorOverviewRuler.addedForeground"]: addStrong,
		["editorOverviewRuler.deletedForeground"]: deleteStrong,
		["editorOverviewRuler.errorForeground"]: errorStrong,
		["editorOverviewRuler.warningForeground"]: warningStrong,
		["editorOverviewRuler.infoForeground"]: infoStrong,
		["editorOverviewRuler.bracketMatchForeground"]: BracketMatchStrong,
		["editorOverviewRuler.inlineChatInserted"]: DFLT,
		["editorOverviewRuler.inlineChatRemoved"]: DFLT,

		//Errors and warningStrongs:

		["editorError.foreground"]: errorStrong,
		["editorError.border"]: DFLT,
		["editorError.background"]: DFLT,
		["editorWarning.foreground"]: warningStrong,
		["editorWarning.border"]: DFLT,
		["editorWarning.background"]: DFLT,
		["editorInfo.foreground"]: infoStrong,
		["editorInfo.border"]: DFLT,
		["editorInfo.background"]: DFLT,
		["editorHint.foreground"]: hintStrong,
		["editorHint.border"]: DFLT,
		["problemsErrorIcon.foreground"]: errorStrong,
		["problemsWarningIcon.foreground"]: warningStrong,
		["problemsInfoIcon.foreground"]: infoStrong,

		//Unused source code:

		["editorUnnecessaryCode.border"]: DFLT,
		["editorUnnecessaryCode.opacity"]: UnusedCodeOpacity,

		//The gutter contains the glyph margins and the line numbers:

		["editorGutter.background"]: DFLT,
		["editorGutter.modifiedBackground"]: modifyStrong,
		["editorGutter.addedBackground"]: addStrong,
		["editorGutter.deletedBackground"]: deleteStrong,
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

		["diffEditor.insertedTextBackground"]: addSoftTRANSPARENT,
		["diffEditor.insertedTextBorder"]: TRANSPARENT,
		["diffEditor.removedTextBackground"]: deleteSoftTRANSPARENT,
		["diffEditor.removedTextBorder"]: TRANSPARENT,
		["diffEditor.border"]: DFLT,
		["diffEditor.diagonalFill"]: DFLT,
		["diffEditor.insertedLineBackground"]: addSoftTRANSPARENT,
		["diffEditor.removedLineBackground"]: deleteSoftTRANSPARENT,
		["diffEditorGutter.insertedLineBackground"]: TRANSPARENT,
		["diffEditorGutter.removedLineBackground"]: TRANSPARENT,
		["diffEditorOverview.insertedForeground"]: DFLT,
		["diffEditorOverview.removedForeground"]: DFLT,
		["diffEditor.unchangedRegionBackground"]: GREY30,
		["diffEditor.unchangedRegionForeground"]: DFLT,
		["diffEditor.unchangedRegionShadow"]: shadow,
		["diffEditor.unchangedCodeBackground"]: GREY30,
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
		["editorWidget.background"]: GREY30,
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

		//The editor marker view shows when navigating to errorStrongs and warningStrongs in the editor (Go to Next Error or Warning command).

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
		["peekViewEditor.background"]: GREY30,
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

		["panel.background"]: GREY25,
		["panel.border"]: DFLT,
		["panel.dropBorder"]: drop,
		["panelTitle.activeBorder"]: selectActiveStrong,
		["panelTitle.activeForeground"]: GREY95,
		["panelTitle.inactiveForeground"]: GREY70,
		["panelTitle.border"]: GREY35,
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
		["outputView.background"]: GREY20,
		["outputViewStickyScroll.background"]: DFLT,

		//Status Bar colors
		//The Status Bar is shown in the bottom of the workbench.

		["statusBar.background"]: GREY30,
		["statusBar.foreground"]: GREY90,
		["statusBar.border"]: DFLT,
		["statusBar.debuggingBackground"]: statusBarDebuggingBackground,
		["statusBar.debuggingForeground"]: GREY20,
		["statusBar.debuggingBorder"]: DFLT,
		["statusBar.noFolderBackground"]: GREY20,
		["statusBar.noFolderForeground"]: GREY75,
		["statusBar.noFolderBorder"]: GREY35,
		["statusBar.focusBorder"]: selectActiveStrong,
		["statusBarItem.activeBackground"]: click,
		["statusBarItem.hoverForeground"]: DFLT,
		["statusBarItem.hoverBackground"]: hover,
		["statusBarItem.prominentForeground"]: warningStrong,
		["statusBarItem.prominentBackground"]: GREY35,
		["statusBarItem.prominentHoverForeground"]: warningStrong,
		["statusBarItem.prominentHoverBackground"]: hover,
		["statusBarItem.remoteBackground"]: GREY35,
		["statusBarItem.remoteForeground"]: DFLT,
		["statusBarItem.remoteHoverBackground"]: hover,
		["statusBarItem.remoteHoverForeground"]: DFLT,
		["statusBarItem.errorBackground"]: errorStrong,
		["statusBarItem.errorForeground"]: GREY20,
		["statusBarItem.errorHoverBackground"]: DFLT,
		["statusBarItem.errorHoverForeground"]: DFLT,
		["statusBarItem.warningBackground"]: warningStrong,
		["statusBarItem.warningForeground"]: GREY30,
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

		["titleBar.activeBackground"]: GREY30,
		["titleBar.activeForeground"]: GREY90,
		["titleBar.inactiveBackground"]: GREY35,
		["titleBar.inactiveForeground"]: GREY75,
		["titleBar.border"]: DFLT,

		//Menu Bar colors

		["menubar.selectionForeground"]: DFLT,
		["menubar.selectionBackground"]: hover,
		["menubar.selectionBorder"]: DFLT,
		["menu.foreground"]: GREY90,
		["menu.background"]: GREY30,
		["menu.selectionForeground"]: DFLT,
		["menu.selectionBackground"]: hover,
		["menu.selectionBorder"]: DFLT,
		["menu.separatorBackground"]: DFLT,
		["menu.border"]: DFLT,

		//Command Center colors

		["commandCenter.foreground"]: DFLT,
		["commandCenter.background"]: GREY35,
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
		["notificationCenterHeader.background"]: GREY35,
		["notificationToast.border"]: DFLT,
		["notifications.foreground"]: DFLT,
		["notifications.background"]: GREY30,
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
		["quickInput.background"]: GREY30,
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

		["keybindingLabel.background"]: GREY40,
		["keybindingLabel.foreground"]: GREY90,
		["keybindingLabel.border"]: DFLT,
		["keybindingLabel.bottomBorder"]: TRANSPARENT,

		//Keyboard shortcut table colors

		["keybindingTable.headerBackground"]: DFLT,
		["keybindingTable.rowsBackground"]: DFLT,

		//Integrated Terminal colors

		["terminal.background"]: GREY15,
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

		["gitDecoration.addedResourceForeground"]: addSoft,
		["gitDecoration.modifiedResourceForeground"]: modifySoft,
		["gitDecoration.deletedResourceForeground"]: deleteSoft,
		["gitDecoration.renamedResourceForeground"]: renameStrong,
		["gitDecoration.stageModifiedResourceForeground"]: modifyStrong,
		["gitDecoration.stageDeletedResourceForeground"]: deleteStrong,
		["gitDecoration.untrackedResourceForeground"]: untrackStrong,
		["gitDecoration.ignoredResourceForeground"]: ignoreStrong,
		["gitDecoration.conflictingResourceForeground"]: conflictStrong,
		["gitDecoration.submoduleResourceForeground"]: submoduleStrong,
		["git.blame.editorDecorationForeground"]: DFLT,

		//Source Control Graph colors

		["scmGraph.historyItemHoverLabelForeground"]: DFLT,
		["scmGraph.foreground1"]: DFLT,
		["scmGraph.foreground2"]: DFLT,
		["scmGraph.foreground3"]: DFLT,
		["scmGraph.foreground4"]: DFLT,
		["scmGraph.foreground5"]: DFLT,
		["scmGraph.historyItemHoverAdditionsForeground"]: DFLT,
		["scmGraph.historyItemHoverDeletionsForeground"]: DFLT,
		["scmGraph.historyItemRefColor"]: DFLT,
		["scmGraph.historyItemRemoteRefColor"]: DFLT,
		["scmGraph.historyItemBaseRefColor"]: DFLT,
		["scmGraph.historyItemHoverDefaultLabelForeground"]: DFLT,
		["scmGraph.historyItemHoverDefaultLabelBackground"]: DFLT,

		//Settings Editor colors
		//Note:

		["settings.headerForeground"]: DFLT,
		["settings.modifiedItemIndicator"]: modifyStrong,
		["settings.dropdownBackground"]: GREY30,
		["settings.dropdownForeground"]: DFLT,
		["settings.dropdownBorder"]: DFLT,
		["settings.dropdownListBorder"]: DFLT,
		["settings.checkboxBackground"]: GREY30,
		["settings.checkboxForeground"]: DFLT,
		["settings.checkboxBorder"]: DFLT,
		["settings.rowHoverBackground"]: hover,
		["settings.textInputBackground"]: GREY30,
		["settings.textInputForeground"]: DFLT,
		["settings.textInputBorder"]: DFLT,
		["settings.numberInputBackground"]: GREY30,
		["settings.numberInputForeground"]: DFLT,
		["settings.numberInputBorder"]: DFLT,
		["settings.focusedRowBackground"]: DFLT,
		["settings.focusedRowBorder"]: DFLT,
		["settings.headerBorder"]: DFLT,
		["settings.sashBorder"]: DFLT,
		["settings.settingsHeaderHoverForeground"]: DFLT,

		//Breadcrumbs colors
		//The theme colors for breadcrumbs navigation:

		["breadcrumb.foreground"]: GREY75,
		["breadcrumb.background"]: GREY20,
		["breadcrumb.focusForeground"]: GREY85,
		["breadcrumb.activeSelectionForeground"]: GREY90,
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
		["debugConsole.infoForeground"]: DFLT,
		["debugConsole.warningForeground"]: DFLT,
		["debugConsole.errorForeground"]: DFLT,
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

saveObjectToTxtFile(jsonObject, "./themes/theme-ZQT-DARK_interface.json");
// console.log(jsonObject);
