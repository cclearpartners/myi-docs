---
title: List View Association Custom Parameters
description: Details of all available standard List View Association custom parameters
date: 2023-09-14T00:00:00.000Z
order: 5
---

List View Associations support all List View custom parameters in addition to the ones listed below.

## prefix

When there are multiple List View Associations with the role OneToOne or OneToMany that query the same object, it is necessary to give each one a unique prefix. Otherwise the data from one List View Association will overwrite the other.

## role

Can be one of:

- Custom: The report itself will decide what to do with the resultset.
- Filtering: The List View Association will run before the main List View and filter its query.
- OneToOne: the fields of the first record in the resultset will be added directly to the corresponding record.
- OneToMany: the resultset will be added to the corresponding record as an array.

