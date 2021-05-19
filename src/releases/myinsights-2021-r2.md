---
title: MyInsights+ 2021 R2
description: Conversion to DX, Reference Field Enforcement and Bugfixes
date: 2021-05-19T20:04:41.863Z
---
## Conversion to DX

Conversion to DX will allow us to work from the repository, and our first step to move our logic into the year 2021. This will allow our customers to have a clearer view on what we are deploying in their SFDC orgs. Instead of extensive XML files, we will provide a more structured view in smaller XML files.  

In the future, this will enable us to create packages that can be deployed similar to the packages you can find in the Salesforce AppExchange.

## Remove "Displayed On" field from Listview

The 'Displayed On' field was not used by developers, admins or users so this is removed from the Listview. This will have a positive impact on the user experience.

## \*Reference field enforcement 

It is now required to enter a field in the reference. It is possible to confirm the reference field before the sub options actually appear, giving us an empty reference.

## \*Listview definition

When changing a listview definition that is a reference field to a regular field, not all fields are cleared first. When editing an existing Listview Definition, all previously entered data should be cleared first.

The problem now is that some values stick on the record: Reference SObject Field and Reference SObject Name(e.g. first selecting a reference field and afterwards changing this to another fieldtype)



## Bugfixes

* When a field which was marked as display: false is edited, it automatically is set to display true.
* The admin is not  able to create a Reporting Block Layout without a Type.