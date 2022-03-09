---
title: Custom Parameters Reference
description: Details of all available standard custom parameters
date: 2021-01-02T00:00:00.000Z
order: 1
---

## General Custom Parameters

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

### countriesInclude

The Reporting Block Layout will be displayed ONLY to users from the countries in this list.

Example usage: `countriesInclude:US,MX;`

### countriesExclude

The Reporting Block Layout will NOT be displayed to users from the countries in this list.

Example usage: `countriesExclude:BR`

### externalID

Identifies which custom report should handle this reporting block.

### groupBy

Override the groupBy set in listview. A comma-separated list of field API names.

Example: `groupBy:Opened_vod__c,Account.Name`

### fieldsInclude

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#fieldsinclude)

### fieldsExclude

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#fieldsexclude)

### filters

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#filters)

### labels

Relabel object fields. The format is OBJECT_NAME/FIELD_NAME=VALUE. `VALUE` can be plain text or a translation key.

Example: Account/Name=Acc Holder,Product_vod__c/Status_vod__c=status_translation_key;

### limit

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#limit)

### moreLimit

A number that limits how much data is displayed initially. The rest of the data is accessed by clicking on a button.

In a table, this will limit how many rows are displayed, but not how many rows are queried.

Example: moreLimit:4

### panelType

Determines the panel's background color.

Can be one of default, primary or info.

### profilesExclude

The Reporting Block Layout will NOT be displayed to users from the profiles in this list. Profiles take precedence over countries

Example usage: `profilesExclude:PROFILE_1,PROFILE_3;`

### profilesInclude

The Reporting Block Layout will be displayed ONLY to users from the profiles in this list.

Example usage: `profilesInclude:PROFILE_2,PROFILE_4;`

### theme

Indicates the UI theme to use. How this is interpreted is up to individual components.

### recordTypes

This has moved to [List View Custom Parameters](/references/custom-parameters-list-view/#recordtypes)

### showHighlight

The block's highlight value will not be displayed when this is set to `false`. Defaults to `true`.

Example usage: `showHighlight:false`

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

### useTranslationWorkbenchLabels

Indicates that Translation Workbench labels should be used for listview fields when available. The default behaviour is to use the default Veeva labels.

Disadvantages of using the Translation Workbench labels:

1. If multiple objects have fields with the same label, the resulting table will have columns with the same name
2. The wrong label may be used if there are several fields from the same lookup object.

Example usage: `useTranslationWorkbenchLabels:true;`

### weight

Adapts the size of the report. Optional, defaults to 1. The size of the report relative to the other reports.

## Home Page List View Reports

### Counter

#### counterIconClasses

CSS classes used to generate the Counter's icon.
Example: `fas fa-check-circle`

#### counterSubtitle

Associate a listview to the report to define its data.

### List View

#### frozenColumn

Since 2021 R1.

For very wide tables, allows one column to be frozen in place when scrolling horizontally. The column will stick to the left edge.

<video width="100%" controls>
  <source src="/static/video/custom-parameters-frozenColumn.mov" type="video/mp4">
</video>

The value is the name of the field if the field is on the main object, or the name of the lookup field on the main object, a dot and then the name of the field on the lookup object.

Example of a field on the main object: `frozenColumn:Account_Name_vod__c`

Example of a field on a lookup object: `frozenColumn:Account_vod__c.Name`

### Child_Accounts_vod__c

#### childAccountDirection

Controls the direction of the lookup when using Child_Accounts_vod__c in a listview.

|Value|Effect|
|-----|------|
|children|Default. Find accounts that belong to the current account|
|parents|Find accounts that the current account is a member of|
|both|Find accounts in both directions|

Example usage: `childAccountDirection:parents;`

## Account Info

Displays an account's details. Displays differently in Account Overview layout and in GDPR layout.

### Custom Parameters

#### showBestVisitTimes

Determines whether a calendar is made available

#### showConsentInfo


#### showEmailInfo

## Multi-Column Account Info 

External ID: accountInfoMultiColumn

### Custom Parameters

#### showBestVisitTimes

Determines whether a calendar is made available

#### showConsentInfo

#### showEmailInfo
