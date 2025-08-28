---
title: Reporting Block Layout Custom Parameters
description: Details of all available standard custom parameters
date: 2021-01-02T00:00:00.000Z
order: 1
---

These custom parameters are applicable to all Reporting Block Layouts.

### allowChunkedQueries

Allows queries containing more than 100,000 characters to be executed online. This custom parameter should only be used as a last resort, if there are no other ways to make the query more focused. This is because overly long queries generally indicate that the query is insufficiently filtered or contains duplicate IDs.

| Value | Effect |
|-------|--------|
| true  | Enables online queries with 100,000+ characters. |
| false | Disables support. Useful when it is set at RBL-level but not necessary at LVA-level. |
| Number| Sets chunk size. Should only be necessary in very advanced cases. Defaults to 3000. |

Examples: 

- `allowChunkedQueries;`
- `allowChunkedQueries:false;`
- `allowChunkedQueries:1500;`

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

### fieldsExcludeWithoutFls

Silently remove List View Definitions for fields the user does not have FLS for. Can be set at any level, from dashboard to List View Association, depending on desired scope.

Example usage: `fieldsExcludeWithoutFls`

Note: For lookups, only the field on the last object is checked.

### filterStyle

Sets the look of the report's filters. Defaults to light, can also be primary.

### flsExclude

The Reporting Block Layout will be displayed ONLY to users who do NOT have access to the specified field.

This is useful, for example, when progressively rolling out a new report that uses a new field, to continue showing the old version to users who don't have access to it yet.

The advantage over countriesExclude, is that this is more dynamic: as soon as a user is granted FLS the report will disappear, without requiring the list of excluded countries to be updated.

Example: `flsExclude:Account.My_Field` means that only users without access to `My_Field` on the Account object will see this Reporting Block Layout.

### flsInclude

The Reporting Block Layout will be displayed ONLY to users who have access to the specified field.

This is useful, for example, when progressively rolling out a new report that uses a new field, to show the new version to users who already have access to it, while providing a fallback to those who don't.

The advantage over countriesInclude, is that this is more dynamic: as soon as a user is granted FLS this report will appear, without requiring the list of excluded countries to be updated.

Example: `flsInclude:Account.My_Field` means that only users with access to `My_Field` on the Account object will see this Reporting Block Layout.

### groupBy

Override the groupBy set in listview. A comma-separated list of field API names.

Example: `groupBy:Opened_vod__c,Account.Name`

### hideBelow

Hides the Reporting Block Layout when its List View has fewer than the given number of records.The report can still be displayed when, for example, the user changes a filter and the tab is re-rendered.

Example: `hideBelow:3` will not display the report when there are less than 3 records.

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

## offlineOnly

The Reporting Block Layout will only be shown offline (iPad, Windows app, iPhone).

Example: `offlineOnly;`

## onlineOnly

The Reporting Block Layout will only be shown online (desktop browser).

Example: `onlineOnly;`

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

### rowWrap

Can be used in combination with `rowStyle:filters`. Set this once per row, on any Reporting Block Layout.

| Value | Effect |
|-------|--------|
| false| Prevents the reports from wrapping onto the next row. |

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

### width

Sets the width of one or more reports as a percentage of the dashboard's width. Any report that does not have an assigned width takes up the space available to it. Only use this custom parameter when you do not want to divide space equally between reports.

#### Single Report

To set the width of a single report, use width in the Reporting Block Layout's custom parameters: `width:40%;`. Reports in the same row without a width assignment will divide the remaining space equally.

#### Multiple Reports

To set the width of multiple reports in a tab, use width in the Tab's custom parameters:

Use the slash (/) to assign widths to different columns. If each row in the tab has 4 columns, you can set them all like this: `width:20%/30%/10%/40%;`.

You can assign widths to specific rows: `width:1-20%/80%,2-50%/25%/25%;`. Here, only reports in the first and second rows have widths assigned.

You can set a default for all rows, then override it for a row with a different number of columns: `width:30%/70%,3-50%/25%/25%;`. Here, reports in the third row are assigned different widths to reports in all other rows.

To set only some columns of a row, leave either side of the slash blank. `width:50%/` will set the first column of every row to 50%. The other reports will fill the remaining space equitably. `width:2-/30%//20%` assigns widths to the second and fourth columns of the second row.

|Parameter Part | Type |Explanation|
|-----------|-----|------|
|1-n         | Number | (Optional) Defines the row on wich the width has to be applied, if not specified the widths are applied to all rows|
|50%//50%   | Percent | Defines the widths for each column, each separated by a '/'. If no separation is defined, the width is applied to all columns. i.e. width:1-50% |


