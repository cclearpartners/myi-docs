---
title: List View Custom Parameters
description: Custom Parameters that can be used on the List View object
date: 2021-01-03T02:54:54.912Z
order: 2
---

These custom parameters can be set either on a List View or on a Reporting Block Layout. The ones set on Reporting Block Layout override the ones set on List View.

## fieldsInclude

When the block's listview is executed, the specified fields are queried ONLY for users in the given countries.

One token specifies one object API name, a comma-separated list of country codes and a comma-separated list of field API names. These 3 parts are separated by a dash (-). Tokens are separated by a slash (/).

The list of fields is optional. If omitted, the entire object is queried ONLY for users in the given countries.

Example usage: `fieldsInclude:Account-US,BR-Field_1_vod__c,Field_2_vod__c/Call2_vod__c-MX-Field_3;`

This means that when querying Account, only the US and Brazil will get Field 1 and Field 2, while only Mexico will get Field 3.

Example usage: `fieldsInclude:Clinical_Trial_vod__c-US``

This means that ony the US will query for Clinical Trial.

## fieldsExclude

When the block's listview is executed, the specified fields are queried for users all countries EXCEPT in the given countries. Cf. `fieldsInclude` for syntax rules.

Example usage: `fieldsExclude:Account-US,BR-Field_1_vod__c,Field_2_vod__c/Call2_vod__c-MX-Field_3;`

This means that when querying Account, all countries will get Field 1 and Field 2 except the US and Brazil. All countries will get Field 3 except Mexico.

## filters

Use this to narrow down query results. The format is: `Object_API_Name/WHERE CLAUSE,Object_API_Name/WHERE CLAUSE`. Multiple filters must be separated by a comma.

Example: `filters:Product_vod__c/Product_Type_vod__c='Sample' OR Approved=$TRUE,Call2_vod__c/Status='Submitted_vod' AND Call_Date_vod__c >= $LAST_N_DAYS:60 AND Account_vod__c=$ACCOUNT_ID`

### Keywords

Keywords are used to make the queries more powerful and handle values that are not [cross-platform](https://support.veeva.com/hc/en-us/articles/360021663794-Why-do-HTML-Reports-Work-Differently-on-Different-Platforms-?source=search). When the query is executed, keywords are replaced by actual values.

- `$ACCOUNT_ID`: In an Account dashboard, refers to the ID of the current Account.
- `$ACCOUNT_PLAN_ID`: In an Account Plan dashboard, refers to the ID of the current Account Plan.
- `$IN`: Specifies a list of possible matches. Matches are separated by a pipe character: **|**. Example: `Status_vod__c $IN(Saved_vod|Submitted_vod|Pending_vod)`.
- `$LAST_N_DAYS`: Specifies how many days to go back. Optionally the date type can be defined: DATE (default) or TIME (DATETIME type). 
Example: `$LAST_N_DAYS:30` is 30 days ago, `$LAST_N_DAYS:30:TIME` is 30 days ago but as a DateTime.
- `$NULL`: Specifies an empty field.
- `$PROFILE_ID`: The ID of the current user's Profile.
- `$START_OF_YEAR`: For a date field, the first day of the current year. Useful for YTD queries when combined with `$TODAY`.
- `$TODAY`: For a date field, today's date.
- `$TRUE`, `$FALSE`
- `$USER_ID`: The current user's ID.

## limit

A number. Limits the number of results for the query on the list view's main object.

## recordTypes

Specifies the developer names of Record Types the query should include. If no object is specified, the associated listview's main object is used.

Example usage: `recordTypes:Professional_vod,Multi_Channel_Activitiy_vod__c/Email_vod`

Here, Email_vod is a record type on Multi Channel Activity. Professional_vod defaults to a record type on the listview's main object.

## requiredLookups

This is a comma-separated list of lookup field names that specifies which lookups are required. Similar to an INNER JOIN in SQL.

This can be used when the lookup is optional and you only want the ones that are filled in.

This also filters out records that are linked to parent records that are not synced to the user's iPad, such as Sent Emails linked to a template the rep does not have access to, or Calls to an Account outside of the rep's territory.

Make sure that any lookup fields used here are also in your List View!

For example, the Product Metrics object has a Location lookup field. First add a List View Definition for the Location field and then the Name field on the reference object. To retain only the records that are linked to a Location, add the following custom parameter: `requiredLookups:Location_vod__c;`. Any Product Metrics record where `Location_vod__c` is empty will be filtered out. Any Product Metrics record where `Location_vod__c` is filled in but the record is not available (for example, due to sharing rules or because it was not synced to the Veeva app) will also be filtered out.
