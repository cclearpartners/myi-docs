---
title: Tab Custom Parameters
description: Details of all available standard tab custom parameters
date: 2022-10-19T00:00:00.000Z
order: 4
---

These custom parameters allow various tab-level controls, such as visibility.

## activity

Sets the initial value for the [Activity Filter](/reports/activity-filter). Use `$ACTIVITY` in the [filters custom parameter](/references/custom-parameters-list-view#keywords) in the tab's Reporting Block Layouts to filter queries accordingly.

Can be: `mine` or `all`. Defaults to `mine`.

Example: `activity:all;`

## countriesExclude

The Tab will NOT be displayed to users from the countries in this list.

Example: `countriesExclude:BR;`

## countriesInclude

The Tab will be displayed ONLY to users from the countries in this list.

Example: `countriesInclude:US,MX;`

## hcoOnly

The Tab will be shown only to HCO accounts.

Example: `hcoOnly;`

## offlineOnly

The Tab will only be shown offline (iPad, Windows app, iPhone).

Example: `offlineOnly;`

### profilesExclude

The Tab will NOT be displayed to users from the profiles in this list. Profiles take precedence over countries

Example: `profilesExclude:PROFILE_1,PROFILE_3;`

### profilesInclude

The Tab will be displayed ONLY to users from the profiles in this list.

Example: `profilesInclude:PROFILE_2,PROFILE_4;`

### queryExclude

To dynamically exclude the tab, based on a query. If the query returns any results, it will not be shown. All the variables from the List View's filters custom parameter can be used.

Example: `Sent_Email_vod__c/Email_Sent_Date_vod__c < $TODAY` will exclude the tab if there were any emails sent before the current date.

### queryInclude

To dynamically include the tab, based on a query. The tab will only be shown if it returns at least one result. All the variables from the List View's filters custom parameter can be used.

### usersExclude

A list of usernames to hide this tab from. All other users can see the tab.

Example: `usersExclude:john.doe@myorg.prd,alice.keys@myorg.prd`

### usersInclude

A list of usernames to show this tab to. No other users can see the tab.

Example: `usersInclude:john.doe@myorg.prd,alice.keys@myorg.prd`

### $END_DATE
### $START_DATE

Set the tab's initial date range. Overrides the date range set at dashboard level. The date-related keywords described in the [List View Custom Parameters](/references/custom-parameters-list-view#keywords) are available: `$TODAY`, `$LAST_N_DAYS`, `$NEXT_N_MONTHS`, etc.

Example for YTD date range: `$START_DATE:$START_OF_YEAR;$END_DATE:$TODAY;`

### $FILTERS

Set initial values for the tab's filters. Can also be used at dashboard level, if all tabs need the same values.

Filter reports such as [Record Filter](/reports/record-filter) and [Picklist Filter](/reports/picklist-fiter) will show these values as selected when the dashboard first loads.

Reporting Block Layouts that use these filters in their filters custom parameter will use the values the first time they load.

To set a single value, identify the field with its object and field API names, separated by a dot. Then the equals sign and the value (with no quotes around it).

Example: `$FILTERS:Call2_vod__c.Status_vod__c=Submitted_vod`

To set multiple values, surround the values with parentheses and separate them with commas.

Example: `$FILTERS:Call2_vod__c.Status_vod__c=(Submitted_vod,Planned_vod)`

To set multiple fields, separate them with commas.

Example: `$FILTERS:Call2_vod__c.Status_vod__c=(Submitted_vod,Planned_vod),Product_vod__c.Name=Kerbopple`
