---
title: List View Association Custom Parameters
description: Details of all available standard List View Association custom parameters
date: 2023-09-14T00:00:00.000Z
order: 5
---

List View Associations support all List View custom parameters in addition to the ones listed below.

### countriesInclude

The List View Association will be displayed ONLY to users from the countries in this list.

Example: `countriesInclude:US,MX;`

### countriesExclude

The List View Association will NOT be displayed to users from the countries in this list.

Example: `countriesExclude:BR`

### mode

#### COUNT

For OneToOne List View Associations. Adds a field containing the number of records in the LVA's query. In most reports, this field is shown automatically.

#### SUM

For OneToOne List View Assocations. Adds a field containing the sum of the values in a field of the LVA's query. The List View must only contain one List View Defintion. The List View Definition must be a Number. In most reports, this field is shown automatically.

## prefix

When there are multiple List View Associations with the role OneToOne or OneToMany that query the same object, it is necessary to give each one a unique prefix. Otherwise the data from one List View Association will overwrite the other.

### profilesExclude

The List View Association will NOT be displayed to users from the profiles in this list. Profiles take precedence over countries

Example: `profilesExclude:PROFILE_1,PROFILE_3;`

### profilesInclude

The List View Association will be displayed ONLY to users from the profiles in this list.

Example: `profilesInclude:PROFILE_2,PROFILE_4;`

### requiredAssociation

Set this to true if the main record should be filtered out when the List View Association has no associated records.

Example: `requiredAssociation;`

### requiredIfTabFiltered

Enables tab filters (eg. [Record Filter](/reports/record-filter), [Picklist Filter](/reports/picklist-filter)) to filter main List View records based on List View Association records.

It takes a comma-separated list of tab filter names.

Example: A table of Accounts, which also shows a field from Product Metrics, has a tab filter on a Product Metrics field. When no Product Metrics value is selected in the tab, all Accounts are shown. When the filter has a selected value, only Accounts with at least one Product Metrics matching that value are shown.

`requiredIfTabFiltered:Product_Metrics_vod__c.My_Field__c`

## Role

Can be one of:

- Custom: The report itself will decide what to do with the resultset.
- Filtering: The List View Association will run before the main List View and filter its query.
- OneToOne: the fields of the first record in the resultset will be added directly to the corresponding record.
- OneToMany: the resultset will be added to the corresponding record as an array.

