---
title: List View Custom Parameters
description: Custom Parameters that can be used on the List View object
date: 2021-01-03T02:54:54.912Z
order: 2
---

These custom parameters can be set either on a List View or on a Reporting Block Layout. The ones set on Reporting Block Layout override the ones set on List View.

## distinct

After the List View's query is executed, records containing the same value in the specified field are discarded. The distinct field must be included in the List View Definitions.

Examples:

`distinct:Name`

`distinct:Account_vod__c.Name`

## fieldsInclude

When the Reporting Block Layout's List View is executed, the specified fields are queried ONLY for users in the given countries.

One token specifies one object API name, a comma-separated list of country codes and a comma-separated list of field API names. These 3 parts are separated by a dash (-). Tokens are separated by a slash (/).

The list of fields is optional. If omitted, the entire object is queried ONLY for users in the given countries.

Example usage: `fieldsInclude:Account-US,BR-Field_1_vod__c,Field_2_vod__c/Call2_vod__c-MX-Field_3;`

This means that when querying Account, only the US and Brazil will get Field 1 and Field 2, while only Mexico will get Field 3.

Example usage: `fieldsInclude:Clinical_Trial_vod__c-US`

This means that ony the US will query for Clinical Trial.

## fieldsExclude

When the Reporting Block Layout's List View is executed, the specified fields are queried for users all countries EXCEPT in the given countries. Cf. `fieldsInclude` for syntax rules.

Example usage: `fieldsExclude:Account-US,BR-Field_1_vod__c,Field_2_vod__c/Call2_vod__c-MX-Field_3;`

This means that when querying Account, all countries will get Field 1 and Field 2 except the US and Brazil. All countries will get Field 3 except Mexico.

## filters

Use this to narrow down query results. The format is: `Object_API_Name/WHERE CLAUSE,Object_API_Name/WHERE CLAUSE`. Multiple filters must be separated by a comma. Make sure that there are no spaces around the Object's API name.

Example: `filters:Product_vod__c/Product_Type_vod__c='Sample' OR Approved=$TRUE,Call2_vod__c/Status='Submitted_vod' AND Call_Date_vod__c >= $LAST_N_DAYS:60 AND Account_vod__c=$ACCOUNT_ID`

### Keywords

Keywords are used to make the queries more powerful and handle values that are not [cross-platform](https://support.veeva.com/hc/en-us/articles/360021663794-Why-do-HTML-Reports-Work-Differently-on-Different-Platforms-?source=search). When the query is executed, keywords are replaced by actual values.

- `$ACCOUNT_ID`: In an Account dashboard, refers to the ID of the current Account.
- `$ACCOUNT_PLAN_ID`: In an Account Plan dashboard, refers to the ID of the current Account Plan.
- `$ACTIVITY`: When there is an Activity Filter report in the same tab, use this to filter on the OwnerId when the Activity Filter is set to "Mine". When it is set to "All", this keyword is ignored. Example: `filters:Call2_vod__c/OwnerId=$ACTIVITY,My_Object__c/Real_Owner=$ACTIVITY AND Status = 'Done'`.
- `$CYCLE_PLAN_ID`: The current user's active Cycle Plan ID. Example: `filters:MC_Cycle_Plan_Target_vod__c/Cycle_Plan_vod__c = $CYCLE_PLAN_ID`.
- `$CYCLE_PLAN_IDS`: Use this when the current user has several active Cycle Plan. Example: `filters:MC_Cycle_Plan_Target_vod__c/Cycle_Plan_vod__c IN $CYCLE_PLAN_IDS`.
- `$CYCLE_PLAN_ID_15_DIGITS`: The current user's active Cycle Plan ID, shortened to 15 digits. This is useful when the Cycle Plan field is a formula field, such as the MC Cycle Plan Product object's Cycle Plan field. Example: `filters:MC_Cycle_Plan_Product_vod__c/Cycle_Plan_vod__c = $CYCLE_PLAN_ID_15_DIGITS`.
- `$CYCLE_PLAN_START_DATE $CYCLE_PLAN_END_DATE`: Sets date fields to the start or end the current user's active cycle plan. Example: `filters:Call2_vod__c/Call_Date_vod__c >= $CYCLE_PLAN_START_DATE AND Call_Date_vod__c <= $CYCLE_PLAN_END_DATE`
- `$FILTER`: When using tab filters such as [Record Filter](/reports/record-filter) or Picklist Filter, this allows you to use the filter's value in a where clause. Example: `filters:Call2_vod__c/Status_vod__c=$FILTER` will be replaced by the currently selected values of the tab filter on Call's Status field, or by nothing if no values have been selected. You can combine this keyword with other clauses: `filters:Call2_vod__c/Status_vod__c=$FILTER AND Call_Date_vod__c >= $START_DATE`. When using a filter on a different object than the filter's listview, use the `:object.field` suffix: `filters:My_Object/Payment_Status__c=$FILTER:Other_Object.Payment`.
- `$FILTER:ALL`: Is replaced by the currently selected values from all [Record Filter](/reports/record-filter) and Picklist Filter reports in the current tab. Example: if there are filters on Call Status and Call Name, `filters:Call2_vod__c/$FILTER:ALL` is equivalent to `SELECT * FROM Call2_vod__c WHERE Status IN (...) AND Name IN (...)`. This can also be used on multiple objects: `filters:Call2_vod__c/$FILTER:ALL,Account/$FILTER:ALL`. In this case, only the relevant filters will be applied to each object. You can combine this keyword with other clauses: `filters:Call2_vod__c/$FILTER:ALL AND Call_Date_vod__c >= $START_DATE`. NOTE: do not use `$FILTER` and `$FILTER:ALL` simultaneously on the same object in the same custom parameters.
- `IN`: Specifies a comma-separated list of values. Example: `filters:Call2_vod__c/Status_vod__c IN (Saved_vod,Submitted_vod,Pending_vod)`. NOTE: If one of the values contains a slash (/) character, put it first or add a space between it and the preceding comma. Example: `My_Object/Field__c IN (Other_Type, Meeting/Event)`
- `$LAST_N_DAYS`: For Date fields, specifies how many days to go back. Example: `$LAST_N_DAYS:30` is 30 days ago. Add the `:TIME` suffix when filtering on a DateTime field. Example: `Creation_Date_Time >= $LAST_N_DAYS:5:TIME`.
- `$LAST_N_MONTHS`: For Date fields, specifies how many months to go back. Example: `$LAST_N_MONTHS:3` is 3 months ago, starting from today: if today is July 15, then this is April 15. `$LAST_N_MONTHS:0` is the current month. To go to the beginning or end of the month use the `:START` or `:END` suffixes. Examples: `Sent_Date_vod__c >= $LAST_N_MONTHS:1:START AND Sent_Date_vod__c <= $LAST_N_MONTHS:1:END` defines a range from the first day to the last day of the previous month. Add the `:TIME` suffix when filtering on a DateTime field. Example: `Creation_Date_Time >= $LAST_N_MONTHS:5:TIME AND Creation_Date_Time <= $LAST_N_MONTHS:0:TIME:END`.
- `$LAST_N_QUARTERS`: For Date fields, specifies how many quarters to go back. Examples: `$LAST_N_QUARTERS:0:START` is the beginning of the current quarter. `$LAST_N_QUARTERS:0:END` is the end of the current quarter. For DateTime fields, use the `:TIME` suffix: `$LAST_N_QUARTERS:0:TIME:END`
- `$LAST_N_YEARS`: For Date fields, specifies how many years to go back. Examples: `$LAST_N_YEARS:1` is exactly one year ago. `$LAST_N_YEARS:0:START` is the beginning of this year. `$LAST_N_YEARS:1:END` is the end of last year. For DateTime fields, use the `:TIME` suffix: `$LAST_N_YEARS:0:TIME:END`
- `$MEMBER_IDS`: When the Account is an HCO, this contains all of its members. For example, to get Calls for all of an HCO's members, pair this with the noAccountId custom parameter: `filters:Call2_vod__c/Account_vod__c IN $MEMBER_IDS;noAccountId:Call2_vod__c;`.
- `$MY_SETUP_PRODUCT_IDS`: The list of IDs of the user's assigned My Setup Products. Example: `Call2_Detail_vod__c/Product_vod__c IN $MY_SETUP_PRODUCT_IDS`.
- `$NEXT_N_DAYS`: For Date fields, specifies how many days to go forward. Example: `$NEXT_N_DAYS:30` is 30 days in the future. Add the `:TIME` suffix when filtering on a DateTime field. Example: `Creation_Date_Time >= $NEXT_N_DAYS:5:TIME`.
- `$NEXT_N_MONTHS`: For Date fields, specifies how many months to go forward. Example: `$NEXT_N_MONTHS:3` is 3 months in the future, starting from today: if today is July 15, then this is September 15. `$NEXT_N_MONTHS:0` is the current month. To go to the beginning or end of the month use the `:START` or `:END` suffixes. Examples: `Sent_Date_vod__c >= $NEXT_N_MONTHS:1:START AND Sent_Date_vod__c <= $NEXT_N_MONTHS:1:END` defines a range from the first day to the last day of next month. Add the `:TIME` suffix when filtering on a DateTime field. Example: `Creation_Date_Time >= $NEXT_N_MONTHS:1:TIME AND Creation_Date_Time <= $NEXT_N_MONTHS:3:TIME:END`.
- `$NEXT_N_QUARTERS`: For Date fields, specifies how many quarters to go forward. Examples: `$NEXT_N_QUARTERS:1:START` is the beginning of the next quarter. `$NEXT_N_QUARTERS:1:END` is the end of the next quarter. For DateTime fields, use the `:TIME` suffix: `Creation_Date_Time <= $NEXT_N_QUARTERS:1:TIME:END`
- `$NEXT_N_YEARS`: For Date fields, specifies how many years to go forward. Examples: `$NEXT_N_YEARS:1:START` is the beginning of next year. `$NEXT_N_QUARTERS:1:END` is the end of next year. `$NEXT_N_QUARTERS:0:END` is the end of this year. For DateTime fields, use the `:TIME` suffix: `Creation_Date_Time <= $NEXT_N_YEARS:1:TIME:END`
- `$NULL`: Specifies an empty field. When the field is a Number field, you must use the `:NUM` suffix. Example: `filters:Suggestion_vod__c/Name=$NULL AND Actioned_Count_vod__c=$NULL:NUM`.
- `$OFFLINE_ACCOUNT_IDS`: All of the Accounts that are synced to the user's iPad. This may differ from the Accounts assigned to a User's territory. This is useful for online territory dashboards. Example: `Account_vod__c IN $OFFLINE_ACCOUNT_IDS`.
- `$PROFILE_ID`: The ID of the current user's Profile.
- `$START_DATE $END_DATE`: When a dashboard's date range has been set or there is a [Period Filter](/reports/period-filter/) or Date Range Filter report in the same tab, use these to filter on date fields. Example: `filters:Call2_vod__c/Call_Date_vod__c >= $START_DATE AND Call_Date_vod__c <= $END_DATE`. Use the `:TIME` suffix when filtering on a DateTime field: `filters:Sent_Email_vod__c/Sent_Date_Time >= $START_DATE:TIME`.
- `$START_OF_YEAR`: For a date field, the first day of the current year. Useful for YTD queries when combined with `$TODAY`. For DateTime fields, used the `:TIME` suffix. Example: `filters:Call2_vod__c/Call_Date_vod__c >= $START_OF_YEAR,Sent_Email_vod__c/Sent_Date_Time >= $START_OF_YEAR:TIME`.
- `$TODAY`: For a date field, today's date. Use the `:TIME` suffix for DateTime fields. Example: `filters:Call2_vod__c/Call_Date_vod__c=$TODAY,Sent_Email_vod__c/Email_Sent_Date__vod__c=$TODAY:TIME`.
- `$TRUE`, `$FALSE`: For boolean fields. Example: `filters:My_Object/Valid=$TRUE AND IsDeleted=$FALSE`.
- `$USER_ID`: The current user's ID. Example: `filters:Account/OwnerId=$USER_ID`.
- `$USER_COUNTRY_CODE`: The current user's country code. Note that single quotes are required. Example: `filters:Account/Country = '$USER_COUNTRY_CODE'`.

## limit

A number. Limits the number of results for the query on the list view's main object.

## globalCacheOrder

This is relevant only when the Global Cache checkbox is checked.

The globalCacheOrder custom parameter allows you to decide in which order objects must be cached. This is useful, for example, to cache Calls that are linked to already-cached Accounts. This increases the performance of caching.

## noAccountId

A comma-separated list of object API names. On an Account dashboard, queries on any of the given objects will not be filtered to the current Account. Mostly useful for HCO dashboards, in combination with the `$MEMBER_IDS` keyword. Example: `noAccountId:Call2_vod__c,Sent_Email_vod__c;`.

## recordTypes

Specifies the developer names of Record Types the query should include. If no object is specified, the associated listview's main object is used.

Example usage: `recordTypes:Professional_vod,Multi_Channel_Activitiy_vod__c/Email_vod`

Here, `Email_vod` is a record type on Multi Channel Activity. Professional_vod defaults to a record type on the listview's main object.

You can also exclude record types with an exclamation point.

Example usage: `recordTypes:!Professional_vod,Multi_Channel_Activitiy_vod__c/!Email_vod`

In this case, records with the record type of `Professional_vod` or `Email_vod` will be ignored.

## requiredLookups

**Make sure that any lookup fields used here are also List View Definitions in your List View!**

This is a comma-separated list of lookup field names that specifies which lookups are required. Similar to an INNER JOIN in SQL.

This can be used when the lookup is optional and you only want the ones that are filled in.

This also filters out records that are linked to parent records that are not synced to the user's iPad, such as Sent Emails linked to a template the rep does not have access to, or Calls to an Account outside of the rep's territory.

For example, the Product Metrics object has a Location lookup field. First add a List View Definition for the Location field and then the Name field on the reference object. To retain only the records that are linked to a Location, add the following custom parameter: `requiredLookups:Location_vod__c;`. Any Product Metrics record where `Location_vod__c` is empty will be filtered out. Any Product Metrics record where `Location_vod__c` is filled in but the record is not available (for example, due to sharing rules or because it was not synced to the Veeva app) will also be filtered out.
