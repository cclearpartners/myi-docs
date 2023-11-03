---
title: Reporting Block Layout Custom Parameters
description: Details of all available standard custom parameters
date: 2021-01-02T00:00:00.000Z
order: 1
---

These custom parameters are applicable to all Reporting Block Layouts.

### cellStyle

| Value | Effect |
|-------|--------|
| single| Makes all reports in the same cell (same row and same column) appear as if they are in the same report |

Example: `cellStyle:single;`

### collapsable

Causes the report to be collapsable via a toggle. Here is an example of both states:

![Collapsed and revealed panels](/static/img/custom-parameter-collapsable.png "Collapsed and revealed panels")

|Value|Effect|
|-----|------|
|false |Default. Panel is not collapsable. No toggle is displayed.|
|true |Panel has a toggle and is first displayed in a collapsed state|

Example usage: `collapsable;`

### collapsed

Causes the report to initially appear collapsed and revealable via a toggle.

Example usage: `collapsed;`

### collapseRows

Collapses the specified rows.

Example: `collapseRows:2,3,5` will collapse rows 2, 3 and 5, but will leave rows 1 and 4 unaffected.

In the previous example, if this is set on a Reporting Block Layout on row 1, it will be unaffected. If this is set on a Reporting Block Layout on row 2, then only the contents of the report will collapse, not the entire row.

### countriesInclude

The Reporting Block Layout will be displayed ONLY to users from the countries in this list.

Example usage: `countriesInclude:US,MX;`

### countriesExclude

The Reporting Block Layout will NOT be displayed to users from the countries in this list.

Example usage: `countriesExclude:BR`

### deferLoad

The Reporting Block Layout is not shown or loaded when the rest of dashboard loads.

### externalID

Identifies which custom report should handle this reporting block.

### filterStyle

Sets the look of the report's filters. Defaults to light, can also be primary.

### groupBy

Override the groupBy set in listview. A comma-separated list of field API names.

Example: `groupBy:Opened_vod__c,Account.Name`

### highlight

The block's highlight value will not be displayed when this is set to `false`. Defaults to `true`.

Example usage: `highlight:false`

### labels

Relabel object fields. The format is OBJECT_NAME/FIELD_NAME=VALUE. `VALUE` can be plain text or a translation key.

Example: Account/Name=Acc Holder,Product_vod__c/Status_vod__c=status_translation_key;

### limit

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#limit)

### moreLimit

A number that limits how much data is displayed initially. The rest of the data is accessed by clicking on a button.

In a table, this will limit how many rows are displayed, but not how many rows are queried.

Example: `moreLimit:4`

### panelType

Determines the panel's background color.

Can be one of default, primary or info.

### profilesExclude

The Reporting Block Layout will NOT be displayed to users from the profiles in this list. Profiles take precedence over countries

Example usage: `profilesExclude:PROFILE_1,PROFILE_3;`

### profilesInclude

The Reporting Block Layout will be displayed ONLY to users from the profiles in this list.

Example usage: `profilesInclude:PROFILE_2,PROFILE_4;`

### recordTypes

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#recordtypes)

### rowGroup

Makes reports on different rows appear as if they belong to a single group.

The best practice is to put the custom parameter on the first Reporting Block Layout of a row. It is typically used with `rowStyle:single;`

Example: `rowGroup:start;`

| Value | Effect |
|-------|--------|
| end | Closes the row group |
| middle | A row within the row group |
| start | Starts the row group |


### rowStyle

Set this once per row, on any Reporting Block Layout, to affect the row's styling, such as background color and margins.

| Value | Effect |
|-------|--------|
| filters| Suited for a row of filter reports. |
| single| Remove the margin between all the reports of the row so they appear to be one report. |

Example: `rowStyle:filters;`

### titleStyle

Sets how the report title is displayed.

| Value | Effect |
|-------|--------|
| primary| Default. |
| secondary| Smaller, dark, bold text. |

### theme

Indicates the UI theme to use. How this is interpreted is up to individual components.

### toc

Generates a floating menu containing all of the reports with this custom parameter.

In the menu, the name and the icon of each report is displayed.

Example usage: `toc:insight`

The following values can be used:

|Value      |Icon|
|-----------|------|
|insight    |lightbulb|
|table      |table|
|thumbs-up  |thumbs up|
|thumbs-down|thumbs down|
