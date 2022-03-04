---
title: List View Custom Parameters
description: Custom Parameters that can be used on the List View object
date: 2021-01-03T02:54:54.912Z
order: 2
---

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

Example: `Product_vod__c/Product_Type_vod__c='Sample' OR Approved=$TRUE,Call2_vod__c/Status='Submitted_vod' AND Call_Date_vod__c >= $LAST_N_DAYS:60 AND Account_vod__c=$ACCOUNT_ID`

### Keywords

Keywords are used to make the queries more powerful. When the query is executed, they are replaced by actual values.

- `$ACCOUNT_ID`: In an Account dashboard, refers to the ID of the current Account.
- `$ACCOUNT_PLAN_ID`: In an Account Plan dashboard, refers to the ID of the current Account Plan.
- `$LAST_N_DAYS`: Specifies how many days to go back. Example: `$LAST_N_DAYS:30` is 30 days ago. 
- `$TRUE`, `$FALSE`
- `$NULL`: Specifies an empty field.
- `$TODAY`: For a date field, today's date.
- `$USER_ID`: The current user's ID.

Limitations:
- Does not support queries with values that are not [cross-platform](https://support.veeva.com/hc/en-us/articles/360021663794-Why-do-HTML-Reports-Work-Differently-on-Different-Platforms-?source=search).

