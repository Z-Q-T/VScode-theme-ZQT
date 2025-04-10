let DFLT = "default";
let TRANSPARENT = "#00000000";
let shadow = "#000";

let backgroundLevel0 = "#1E1E1E";
let backgroundLevel1 = "#2a2a2a";
let backgroundLevel2 = "#333";
let foregroundLevel0 = "#EEE";
let foregroundLevel1 = "#dfdfdf";
let foregroundLevel2 = "#ccc";

let modified ="#ffe23de5";
let added ="#00ff80a9";
let deleted ="#ff46839f";
let untracked="#858585";
let ignored="#686868";
let conflicting="#aa45aa";
let submodule="#888dc2";

let error = "#ff3b3b";
let warning = "#f88f57";
let info="#0077ff";
let hint="#19d400";

let activeSelect = "#0084ffb6";
let inactiveSelect = "#536a7e63";
let otherSelect = "#613eff8c";

let drop = "#90909030";
let placeholder = "#A6A6A6";
let sliderNormal = "#ffffff20";
let sliderHover = "#ffffff30";
let sliderActive = "#ffffff45";
let sideBarBKG = "#252525";
let sideBarSectionHeaderBKG = "#444";
let sideBarSectionHeaderFRG = "#cfcfcf";
let findMatchCurrent = "#4375ff98";
let findMatchAll = "#8a24ce7f";
let editorGroupHeaderTabsBackground = "#303030";
let tabUnfocusedActiveBackground = "#252525";
let tabUnfocusedActiveForeground = "#7c7c7c";
let editorLineNumberForeground = "#666666";
let wordHighlightRead = "#c9b800dd";
let wordHighlightWrite = "#f1730bdd";
let hoverHighlightBackground = "#b4b4b436";
let lineHighlightBackground = "#ffffff16";
let rangeHighlightBackground = "#a724ff2f";
let findRangeHighlightBackground = "#ff990021";
let editorUnicodeHighlightBorder = "#6a6b423c";
let editorLinkActiveForeground = "#73ff009f";
let editorWhitespaceForeground = "#4692c55e";
let IndentGuide = "#404040";
let IndentGuideActive = "#686868";
let editorRulerForeground = "#333";
let BracketMatchBackground = "#ffffff00";
let BracketMatchBorder = "#4aacec";
let rangeHighlightForeground = "#7ccbff31";
let diffEditorInsertedTextBackground="#00ff8042";
let diffEditorRemovedTextBackground="#ff468348";
let UnusedCodeOpacity= "#00000085";
let commentRangeForeground="#686868";
let statusBarForeground= "#dddddd";
let statusBarBackground="#2359af";
let statusBarDebuggingForeground="#0f0f0f";
let statusBarDebuggingBackground= "#ceb32c";
let statusBarNoFolderBackground= "#444";
let statusBarItemRemoteBackground= "#1284ff99";
let statusBarItemRemoteForeground= "#FFF";
let statusBarItemProminentBackground= "#003847";
let statusBarItemProminentHoverBackground= "#003847";
let titleBarActiveForeground="#ddd";

let jsonObject = {
	//Contrast colors
	//The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.

	["contrastActiveBorder"]: DFLT,
	["contrastBorder"]: DFLT,

	//Base colors

	["focusBorder"]: activeSelect,
	["foreground"]: foregroundLevel0,
	["disabledForeground"]: DFLT,
	["widget.border"]: DFLT,
	["widget.shadow"]: shadow,
	["selection.background"]: DFLT,
	["descriptionForeground"]: DFLT,
	["errorForeground"]: DFLT,
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

	["toolbar.hoverBackground"]: DFLT,
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

	["input.background"]: DFLT,
	["input.border"]: DFLT,
	["input.foreground"]: DFLT,
	["input.placeholderForeground"]: placeholder,
	["inputOption.activeBackground"]: DFLT,
	["inputOption.activeBorder"]: DFLT,
	["inputOption.activeForeground"]: DFLT,
	["inputOption.hoverBackground"]: DFLT,
	["inputValidation.errorBackground"]: DFLT,
	["inputValidation.errorForeground"]: DFLT,
	["inputValidation.errorBorder"]: DFLT,
	["inputValidation.infoBackground"]: DFLT,
	["inputValidation.infoForeground"]: DFLT,
	["inputValidation.infoBorder"]: DFLT,
	["inputValidation.warningBackground"]: DFLT,
	["inputValidation.warningForeground"]: DFLT,
	["inputValidation.warningBorder"]: DFLT,

	//Scrollbar control

	["scrollbar.shadow"]: shadow,
	["scrollbarSlider.activeBackground"]: sliderActive,
	["scrollbarSlider.background"]: sliderNormal,
	["scrollbarSlider.hoverBackground"]: sliderHover,

	//Badge
	//Badges are small information labels, for example, search results count.

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
	["list.hoverBackground"]: DFLT,
	["list.hoverForeground"]: DFLT,
	["list.inactiveSelectionBackground"]: DFLT,
	["list.inactiveSelectionForeground"]: DFLT,
	["list.inactiveSelectionIconForeground"]: DFLT,
	["list.inactiveFocusBackground"]: DFLT,
	["list.inactiveFocusOutline"]: DFLT,
	["list.invalidItemForeground"]: DFLT,
	["list.errorForeground"]: DFLT,
	["list.warningForeground"]: DFLT,
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

	["activityBar.background"]: DFLT,
	["activityBar.dropBorder"]: DFLT,
	["activityBar.foreground"]: DFLT,
	["activityBar.inactiveForeground"]: DFLT,
	["activityBar.border"]: DFLT,
	["activityBarBadge.background"]: DFLT,
	["activityBarBadge.foreground"]: DFLT,
	["activityBar.activeBorder"]: DFLT,
	["activityBar.activeBackground"]: DFLT,
	["activityBar.activeFocusBorder"]: DFLT,
	["activityBarTop.foreground"]: DFLT,
	["activityBarTop.activeBorder"]: DFLT,
	["activityBarTop.inactiveForeground"]: DFLT,
	["activityBarTop.dropBorder"]: DFLT,
	["activityBarTop.background"]: DFLT,
	["activityBarTop.activeBackground"]: DFLT,
	["activityWarningBadge.foreground"]: DFLT,
	["activityWarningBadge.background"]: DFLT,
	["activityErrorBadge.foreground"]: DFLT,
	["activityErrorBadge.background"]: DFLT,

	//Profiles

	["profileBadge.background"]: DFLT,
	["profileBadge.foreground"]: DFLT,
	["profiles.sashBorder"]: DFLT,

	//Side Bar
	//The Side Bar contains views like the Explorer and Search.

	["sideBar.background"]: sideBarBKG,
	["sideBar.foreground"]: DFLT,
	["sideBar.border"]: DFLT,
	["sideBar.dropBackground"]: drop,
	["sideBarTitle.foreground"]: DFLT,
	["sideBarSectionHeader.background"]: sideBarSectionHeaderBKG,
	["sideBarSectionHeader.foreground"]: sideBarSectionHeaderFRG,
	["sideBarSectionHeader.border"]: DFLT,
	["sideBarActivityBarTop.border"]: DFLT,
	["sideBarTitle.background"]: DFLT,
	["sideBarTitle.border"]: DFLT,
	["sideBarStickyScroll.background"]: DFLT,
	["sideBarStickyScroll.border"]: DFLT,
	["sideBarStickyScroll.shadow"]: shadow,

	//Minimap
	//The Minimap shows a minified version of the current file.

	["minimap.findMatchHighlight"]: findMatchAll,
	["minimap.selectionHighlight"]: activeSelect,
	["minimap.errorHighlight"]: error,
	["minimap.warningHighlight"]: warning,
	["minimap.background"]: DFLT,
	["minimap.selectionOccurrenceHighlight"]: DFLT,
	["minimap.foregroundOpacity"]: DFLT,
	["minimap.infoHighlight"]: info,
	["minimap.chatEditHighlight"]: DFLT,
	["minimapSlider.background"]: sliderNormal,
	["minimapSlider.hoverBackground"]: sliderHover,
	["minimapSlider.activeBackground"]: sliderActive,
	["minimapGutter.addedBackground"]: added,
	["minimapGutter.modifiedBackground"]: modified,
	["minimapGutter.deletedBackground"]: deleted,
	["editorMinimap.inlineChatInserted"]: DFLT,

	//Editor Groups & Tabs
	//Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.

	["editorGroup.border"]: DFLT,
	["editorGroup.dropBackground"]: drop,
	["editorGroupHeader.noTabsBackground"]: DFLT,
	["editorGroupHeader.tabsBackground"]: editorGroupHeaderTabsBackground,
	["editorGroupHeader.tabsBorder"]: DFLT,
	["editorGroupHeader.border"]: DFLT,
	["editorGroup.emptyBackground"]: DFLT,
	["editorGroup.focusedEmptyBorder"]: DFLT,
	["editorGroup.dropIntoPromptForeground"]: DFLT,
	["editorGroup.dropIntoPromptBackground"]: DFLT,
	["editorGroup.dropIntoPromptBorder"]: DFLT,
	["tab.activeBackground"]: DFLT,
	["tab.unfocusedActiveBackground"]: tabUnfocusedActiveBackground,
	["tab.activeForeground"]: DFLT,
	["tab.border"]: DFLT,
	["tab.activeBorder"]: DFLT,
	["tab.selectedBorderTop"]: DFLT,
	["tab.selectedBackground"]: DFLT,
	["tab.selectedForeground"]: DFLT,
	["tab.dragAndDropBorder"]: DFLT,
	["tab.unfocusedActiveBorder"]: DFLT,
	["tab.activeBorderTop"]: DFLT,
	["tab.unfocusedActiveBorderTop"]: DFLT,
	["tab.lastPinnedBorder"]: DFLT,
	["tab.inactiveBackground"]: DFLT,
	["tab.unfocusedInactiveBackground"]: DFLT,
	["tab.inactiveForeground"]: DFLT,
	["tab.unfocusedActiveForeground"]: tabUnfocusedActiveForeground,
	["tab.unfocusedInactiveForeground"]: DFLT,
	["tab.hoverBackground"]: sliderHover,
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

	["editor.background"]: backgroundLevel0,
	["editor.foreground"]: foregroundLevel1,
	["editorLineNumber.foreground"]: editorLineNumberForeground,
	["editorLineNumber.activeForeground"]: DFLT,
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

	["editor.selectionBackground"]: activeSelect,
	["editor.selectionForeground"]: DFLT,
	["editor.inactiveSelectionBackground"]: inactiveSelect,
	["editor.selectionHighlightBackground"]: otherSelect,
	["editor.selectionHighlightBorder"]: DFLT,

	//Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.

	//occurrences

	["editor.wordHighlightBackground"]: TRANSPARENT,
	["editor.wordHighlightBorder"]: wordHighlightRead,
	["editor.wordHighlightStrongBackground"]: TRANSPARENT,
	["editor.wordHighlightStrongBorder"]: wordHighlightWrite,
	["editor.wordHighlightTextBackground"]: DFLT,
	["editor.wordHighlightTextBorder"]: DFLT,

	//Find colors depend on the current find string in the Find/Replace dialog.
	//Find matches

	["editor.findMatchBackground"]: findMatchCurrent,
	["editor.findMatchForeground"]: DFLT,
	["editor.findMatchHighlightForeground"]: DFLT,
	["editor.findMatchHighlightBackground"]: findMatchAll,
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

	["editor.hoverHighlightBackground"]: hoverHighlightBackground,

	//The current line is typically shown as either background highlight or a border (not both).

	["editor.lineHighlightBackground"]: lineHighlightBackground,
	["editor.lineHighlightBorder"]: DFLT,

	//The color for the editor watermark

	["editorWatermark.foreground"]: DFLT,

	//The color for unicode highlights

	["editorUnicodeHighlight.border"]: editorUnicodeHighlightBorder,
	["editorUnicodeHighlight.background"]: DFLT,

	//The link color is visible when clicking on a link.

	["editorLink.activeForeground"]: editorLinkActiveForeground,

	//The range highlight is visible when selecting a search result.

	["editor.rangeHighlightBackground"]: rangeHighlightBackground,
	["editor.rangeHighlightBorder"]: DFLT,

	//The symbol highlight is visible when navigating to a symbol via a command such as Go to Definition.

	["editor.symbolHighlightBackground"]: DFLT,
	["editor.symbolHighlightBorder"]: DFLT,

	//To see the editor white spaces, enable Toggle Render Whitespace.

	["editorWhitespace.foreground"]: editorWhitespaceForeground,

	//To see the editor indent guides, set ["editor.guides.indentation"]:

	["editorIndentGuide.background"]: IndentGuide,
	["editorIndentGuide.background1"]: IndentGuide,
	["editorIndentGuide.background2"]: IndentGuide,
	["editorIndentGuide.background3"]: IndentGuide,
	["editorIndentGuide.background4"]: IndentGuide,
	["editorIndentGuide.background5"]: IndentGuide,
	["editorIndentGuide.background6"]: IndentGuide,
	["editorIndentGuide.activeBackground"]: IndentGuideActive,
	["editorIndentGuide.activeBackground1"]: IndentGuideActive,
	["editorIndentGuide.activeBackground2"]: IndentGuideActive,
	["editorIndentGuide.activeBackground3"]: IndentGuideActive,
	["editorIndentGuide.activeBackground4"]: IndentGuideActive,
	["editorIndentGuide.activeBackground5"]: IndentGuideActive,
	["editorIndentGuide.activeBackground6"]: IndentGuideActive,

	//To see the editor inline hints, set ["editor.inlineSuggest.enabled"]:

	["editorInlayHint.background"]: DFLT,
	["editorInlayHint.foreground"]: DFLT,
	["editorInlayHint.typeForeground"]: DFLT,
	["editorInlayHint.typeBackground"]: DFLT,
	["editorInlayHint.parameterForeground"]: DFLT,
	["editorInlayHint.parameterBackground"]: DFLT,

	//To see editor rulers, define their location with "editor.rulers"

	["editorRuler.foreground"]: editorRulerForeground,

	["editor.linkedEditingBackground"]: DFLT,

	//CodeLens:

	["editorCodeLens.foreground"]: DFLT,

	//Lightbulb:

	["editorLightBulb.foreground"]: DFLT,
	["editorLightBulbAutoFix.foreground"]: DFLT,
	["editorLightBulbAi.foreground"]: DFLT,

	//Bracket matches:

	["editorBracketMatch.background"]: BracketMatchBackground,
	["editorBracketMatch.border"]: BracketMatchBorder,

	//Bracket pair colorization:

	["editorBracketHighlight.foreground1"]: DFLT,
	["editorBracketHighlight.foreground2"]: DFLT,
	["editorBracketHighlight.foreground3"]: DFLT,
	["editorBracketHighlight.foreground4"]: DFLT,
	["editorBracketHighlight.foreground5"]: DFLT,
	["editorBracketHighlight.foreground6"]: DFLT,
	["editorBracketHighlight.unexpectedBracket.foreground"]: DFLT,

	//Bracket pair guides:

	["editorBracketPairGuide.activeBackground1"]: DFLT,
	["editorBracketPairGuide.activeBackground2"]: DFLT,
	["editorBracketPairGuide.activeBackground3"]: DFLT,
	["editorBracketPairGuide.activeBackground4"]: DFLT,
	["editorBracketPairGuide.activeBackground5"]: DFLT,
	["editorBracketPairGuide.activeBackground6"]: DFLT,
	["editorBracketPairGuide.background1"]: DFLT,
	["editorBracketPairGuide.background2"]: DFLT,
	["editorBracketPairGuide.background3"]: DFLT,
	["editorBracketPairGuide.background4"]: DFLT,
	["editorBracketPairGuide.background5"]: DFLT,
	["editorBracketPairGuide.background6"]: DFLT,

	//Folding:

	["editor.foldBackground"]: DFLT,
	["editor.foldPlaceholderForeground"]: placeholder,

	//Overview ruler:
	//This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.

	["editorOverviewRuler.background"]: DFLT,
	["editorOverviewRuler.border"]: DFLT,
	["editorOverviewRuler.findMatchForeground"]: DFLT,
	["editorOverviewRuler.rangeHighlightForeground"]: rangeHighlightForeground,
	["editorOverviewRuler.selectionHighlightForeground"]: DFLT,
	["editorOverviewRuler.wordHighlightForeground"]: wordHighlightRead,
	["editorOverviewRuler.wordHighlightStrongForeground"]: wordHighlightWrite,
	["editorOverviewRuler.wordHighlightTextForeground"]: DFLT,
	["editorOverviewRuler.modifiedForeground"]: modified,
	["editorOverviewRuler.addedForeground"]: added,
	["editorOverviewRuler.deletedForeground"]: deleted,
	["editorOverviewRuler.errorForeground"]: DFLT,
	["editorOverviewRuler.warningForeground"]: DFLT,
	["editorOverviewRuler.infoForeground"]: info,
	["editorOverviewRuler.bracketMatchForeground"]: DFLT,
	["editorOverviewRuler.inlineChatInserted"]: DFLT,
	["editorOverviewRuler.inlineChatRemoved"]: DFLT,

	//Errors and warnings:

	["editorError.foreground"]: error,
	["editorError.border"]: DFLT,
	["editorError.background"]: DFLT,
	["editorWarning.foreground"]: warning,
	["editorWarning.border"]: DFLT,
	["editorWarning.background"]: DFLT,
	["editorInfo.foreground"]: info,
	["editorInfo.border"]: DFLT,
	["editorInfo.background"]: DFLT,
	["editorHint.foreground"]: hint,
	["editorHint.border"]: DFLT,
	["problemsErrorIcon.foreground"]: DFLT,
	["problemsWarningIcon.foreground"]: DFLT,
	["problemsInfoIcon.foreground"]: DFLT,

	//Unused source code:

	["editorUnnecessaryCode.border"]: DFLT,
	["editorUnnecessaryCode.opacity"]: UnusedCodeOpacity,

	//The gutter contains the glyph margins and the line numbers:

	["editorGutter.background"]: DFLT,
	["editorGutter.modifiedBackground"]: modified,
	["editorGutter.addedBackground"]: added,
	["editorGutter.deletedBackground"]: deleted,
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

	//Diff editor colors
	//For coloring inserted and removed text, use either a background or a border color but not both.

	["diffEditor.insertedTextBackground"]: diffEditorInsertedTextBackground,
	["diffEditor.insertedTextBorder"]: DFLT,
	["diffEditor.removedTextBackground"]: diffEditorRemovedTextBackground,
	["diffEditor.removedTextBorder"]: DFLT,
	["diffEditor.border"]: DFLT,
	["diffEditor.diagonalFill"]: DFLT,
	["diffEditor.insertedLineBackground"]: DFLT,
	["diffEditor.removedLineBackground"]: DFLT,
	["diffEditorGutter.insertedLineBackground"]: DFLT,
	["diffEditorGutter.removedLineBackground"]: DFLT,
	["diffEditorOverview.insertedForeground"]: DFLT,
	["diffEditorOverview.removedForeground"]: DFLT,
	["diffEditor.unchangedRegionBackground"]: DFLT,
	["diffEditor.unchangedRegionForeground"]: DFLT,
	["diffEditor.unchangedRegionShadow"]: shadow,
	["diffEditor.unchangedCodeBackground"]: DFLT,
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
	["editorWidget.background"]: backgroundLevel1,
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
	["peekViewEditor.background"]: backgroundLevel1,
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

	["panel.background"]: backgroundLevel1,
	["panel.border"]: DFLT,
	["panel.dropBorder"]: drop,
	["panelTitle.activeBorder"]: DFLT,
	["panelTitle.activeForeground"]: DFLT,
	["panelTitle.inactiveForeground"]: DFLT,
	["panelTitle.border"]: DFLT,
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
	["outputView.background"]: DFLT,
	["outputViewStickyScroll.background"]: DFLT,

	//Status Bar colors
	//The Status Bar is shown in the bottom of the workbench.

	["statusBar.background"]: statusBarBackground,
	["statusBar.foreground"]: statusBarForeground,
	["statusBar.border"]: DFLT,
	["statusBar.debuggingBackground"]: statusBarDebuggingBackground,
	["statusBar.debuggingForeground"]: statusBarDebuggingForeground,
	["statusBar.debuggingBorder"]: DFLT,
	["statusBar.noFolderForeground"]: DFLT,
	["statusBar.noFolderBackground"]: statusBarNoFolderBackground,
	["statusBar.noFolderBorder"]: DFLT,
	["statusBarItem.activeBackground"]: DFLT,
	["statusBarItem.hoverForeground"]: DFLT,
	["statusBarItem.hoverBackground"]: DFLT,
	["statusBarItem.prominentForeground"]: DFLT,
	["statusBarItem.prominentBackground"]: statusBarItemProminentBackground,
	["statusBarItem.prominentHoverForeground"]: statusBarItemProminentHoverBackground,
	["statusBarItem.prominentHoverBackground"]: DFLT,
	["statusBarItem.remoteBackground"]: statusBarItemRemoteBackground,
	["statusBarItem.remoteForeground"]: statusBarItemRemoteForeground,
	["statusBarItem.remoteHoverBackground"]: DFLT,
	["statusBarItem.remoteHoverForeground"]: DFLT,
	["statusBarItem.errorBackground"]: DFLT,
	["statusBarItem.errorForeground"]: DFLT,
	["statusBarItem.errorHoverBackground"]: DFLT,
	["statusBarItem.errorHoverForeground"]: DFLT,
	["statusBarItem.warningBackground"]: DFLT,
	["statusBarItem.warningForeground"]: DFLT,
	["statusBarItem.warningHoverBackground"]: DFLT,
	["statusBarItem.warningHoverForeground"]: DFLT,
	["statusBarItem.compactHoverBackground"]: DFLT,
	["statusBarItem.focusBorder"]: DFLT,
	["statusBar.focusBorder"]: DFLT,
	["statusBarItem.offlineBackground"]: DFLT,
	["statusBarItem.offlineForeground"]: DFLT,
	["statusBarItem.offlineHoverForeground"]: DFLT,
	["statusBarItem.offlineHoverBackground"]: DFLT,

	//Prominent items stand out from other Status Bar entries to indicate importance. One example is the Toggle Tab Key Moves Focus command change mode indicator.
	//Title Bar colors

	["titleBar.activeBackground"]: DFLT,
	["titleBar.activeForeground"]: titleBarActiveForeground,
	["titleBar.inactiveBackground"]: DFLT,
	["titleBar.inactiveForeground"]: DFLT,
	["titleBar.border"]: DFLT,

	//Menu Bar colors

	["menubar.selectionForeground"]: DFLT,
	["menubar.selectionBackground"]: DFLT,
	["menubar.selectionBorder"]: DFLT,
	["menu.foreground"]: foregroundLevel1,
	["menu.background"]: backgroundLevel1,
	["menu.selectionForeground"]: DFLT,
	["menu.selectionBackground"]: DFLT,
	["menu.selectionBorder"]: DFLT,
	["menu.separatorBackground"]: DFLT,
	["menu.border"]: DFLT,

	//Command Center colors

	["commandCenter.foreground"]: DFLT,
	["commandCenter.activeForeground"]: DFLT,
	["commandCenter.background"]: DFLT,
	["commandCenter.activeBackground"]: DFLT,
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
	["notificationCenterHeader.background"]: DFLT,
	["notificationToast.border"]: DFLT,
	["notifications.foreground"]: DFLT,
	["notifications.background"]: backgroundLevel1,
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
	["quickInput.background"]: backgroundLevel1,
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

	["keybindingLabel.background"]: DFLT,
	["keybindingLabel.foreground"]: DFLT,
	["keybindingLabel.border"]: DFLT,
	["keybindingLabel.bottomBorder"]: DFLT,

	//Keyboard shortcut table colors

	["keybindingTable.headerBackground"]: DFLT,
	["keybindingTable.rowsBackground"]: DFLT,

	//Integrated Terminal colors

	["terminal.background"]: DFLT,
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

	["gitDecoration.addedResourceForeground"]: added,
	["gitDecoration.modifiedResourceForeground"]: modified,
	["gitDecoration.deletedResourceForeground"]: deleted,
	["gitDecoration.renamedResourceForeground"]: DFLT,
	["gitDecoration.stageModifiedResourceForeground"]: DFLT,
	["gitDecoration.stageDeletedResourceForeground"]: DFLT,
	["gitDecoration.untrackedResourceForeground"]: untracked,
	["gitDecoration.ignoredResourceForeground"]: ignored,
	["gitDecoration.conflictingResourceForeground"]: conflicting,
	["gitDecoration.submoduleResourceForeground"]: submodule,
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
	["settings.modifiedItemIndicator"]: modified,
	["settings.dropdownBackground"]: DFLT,
	["settings.dropdownForeground"]: DFLT,
	["settings.dropdownBorder"]: DFLT,
	["settings.dropdownListBorder"]: DFLT,
	["settings.checkboxBackground"]: DFLT,
	["settings.checkboxForeground"]: DFLT,
	["settings.checkboxBorder"]: DFLT,
	["settings.rowHoverBackground"]: DFLT,
	["settings.textInputBackground"]: backgroundLevel2,
	["settings.textInputForeground"]: DFLT,
	["settings.textInputBorder"]: DFLT,
	["settings.numberInputBackground"]: backgroundLevel2,
	["settings.numberInputForeground"]: DFLT,
	["settings.numberInputBorder"]: DFLT,
	["settings.focusedRowBackground"]: DFLT,
	["settings.focusedRowBorder"]: DFLT,
	["settings.headerBorder"]: DFLT,
	["settings.sashBorder"]: DFLT,
	["settings.settingsHeaderHoverForeground"]: DFLT,

	//Breadcrumbs colors
	//The theme colors for breadcrumbs navigation:

	["breadcrumb.foreground"]: DFLT,
	["breadcrumb.background"]: backgroundLevel1,
	["breadcrumb.focusForeground"]: foregroundLevel2,
	["breadcrumb.activeSelectionForeground"]: foregroundLevel1,
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
};

const fs = require("fs");

function saveObjectToTxtFile(obj, filePath) {
	// 将对象转换为格式化的JSON字符串
	const content = JSON.stringify(obj, null, 2);

	// 写入文件
	fs.writeFile(filePath, content, (err) => {
		if (err) {
			console.error("写入文件出错:", err);
		} else {
			console.log("对象已成功保存到文件");
		}
	});
}

saveObjectToTxtFile(jsonObject, "theme.json");
// console.log(jsonObject);
