---
title: Custom Parameters Reference
description: Details of all available standard custom parameters
---

## General Custom Parameters

### collapsable

Causes the Panel to be collapsed and revealed via a toggle. Here is an example of both states:

![Collapsed and revealed panels](/static/img/custom-parameter-collapsable.png "Collapsed and revealed panels")

|Value|Effect|
|-----|------|
|false |Default. Panel is not collapsable. No toggle is displayed.|
|true |Panel has a toggle and is first displayed in a collapsed state|

Example usage: `collapsable:true;`

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

When the block's listview is executed, the specified fields are queried ONLY for users in the given countries.

One token specifies one object API name, a comma-separated list of country codes and a comma-separated list of field API names. These 3 parts are separated by a dash (-). Tokens are separated by a slash (/).

The list of fields is optional. If omitted, the entire object is queried ONLY for users in the given countries.

Example usage: `fieldsInclude:Account-US,BR-Field_1_vod__c,Field_2_vod__c/Call2_vod__c-MX-Field_3;`

This means that when querying Account, only the US and Brazil will get Field 1 and Field 2, while only Mexico will get Field 3.

Example usage: `fieldsInclude:Clinical_Trial_vod__c-US``

This means that ony the US will query for Clinical Trial.

### fieldsExclude

When the block's listview is executed, the specified fields are queried for users all countries EXCEPT in the given countries. Cf. `fieldsInclude` for syntax rules.

Example usage: `fieldsExclude:Account-US,BR-Field_1_vod__c,Field_2_vod__c/Call2_vod__c-MX-Field_3;`

This means that when querying Account, all countries will get Field 1 and Field 2 except the US and Brazil. All countries will get Field 3 except Mexico.

### filters

Use this to narrow down query results. The format is: `Object_API_Name/Field_API_Name='value'`. Multiple filters (even for the same object), must be separated by a comma.

Example: Product_vod__c/Product_Type_vod__c='Sample',Call2_vod__c/Status='Submitted_vod'

Limitations:
- Only supports text, picklist values and numbers
- Does not support queries with values that are not [cross-platform](https://support.veeva.com/hc/en-us/articles/360021663794-Why-do-HTML-Reports-Work-Differently-on-Different-Platforms-?source=search).

### labels

Relabel object fields. The format is OBJECT_NAME/FIELD_NAME=VALUE. `VALUE` can be plain text or a translation key.

Example: Account/Name=Acc Holder,Product_vod__c/Status_vod__c=status_translation_key;

### limit

A number. Limits the number of results of the list view's main object.

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

Specifies the developer names of Record Types the query should include. If no object is specified, the associated listview's main object is used.

Example usage: `recordTypes:Professional_vod,Multi_Channel_Activitiy_vod__c/Email_vod`

Here, Email_vod is a record type on Multi Channel Activity. Professional_vod defaults to a record type on the listview's main object.

### showHighlight

The block's highlight value will not be displayed when this is set to `false`. Defaults to `true`.

Example usage: `showHighlight:false`

### useTranslationWorkbenchLabels

Indicates that Translation Workbench labels should be used for listview fields when available. The default behaviour is to use the default Veeva labels.

Disadvantages of using the Translation Workbench labels:

1. If multiple objects have fields with the same label, the resulting table will have columns with the same name
2. The wrong label may be used if there are several fields from the same lookup object.

Example usage: `useTranslationWorkbenchLabels:true;`

### weight

Adapts the size of the report. Optional, defaults to 1. The size of the report relative to the other reports.

## Listview-based Reports

### Counter

#### counterIconClasses

CSS classes used to generate the Counter's icon.
Example: `fas fa-check-circle`

#### counterSubtitle

Associate a listview to the report to define its data.

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
