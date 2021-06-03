---
title: MyInsights+ 2021 R2
description: Filters Custom Parameter Improvements, Conversion to DX and Bugfixes
date: 2021-05-19T20:04:41.863Z
---
## filters Custom Parameter

The filters custom parameter is now much more powerful. It can be used as a where clause, with AND, OR and groupings. There are also new keywords such as `$LAST_N_DAYS` and `$ACCOUNT_ID` that allow for much better queries.

See all the details in the [Custom Parameters Reference](/references/custom-parameters).

## Conversion to DX

DX is Salesforce's latest and greatest way of packaging code deployed to orgs. Instead of one, very large XML file, we will provide a clearer, more structured view in smaller XML files.

In the future, this will enable MyInsights+ packages to be deployed just like packages from the Salesforce AppExchange.

## Remove "Displayed On" field from Listview

The 'Displayed On' field had become obsolete, as it was not used by developers, admins or users. This will have a positive impact on the user experience.

## Bugfixes

* When editing a List View Definition whose Display checkbox was unchecked, it will now remain unchecked
* The Report Type is now mandatory when creating a Reporting Block Layout.
* The reference field is now mandatory for List View Definitions that refer to a lookup field.
* When switching a List View Definition from a lookup field to a non-lookup field, the Reference SObject Field and Reference SObject Name fields are now cleared.