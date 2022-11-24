---
title: Tab Custom Parameters
description: Details of all available standard tab custom parameters
date: 2022-10-19T00:00:00.000Z
order: 4
---

These custom parameters allow various tab-level controls, such as visibility.

### countriesExclude

The Tab will NOT be displayed to users from the countries in this list.

Example: `countriesExclude:BR;`

## countriesInclude

The Tab will be displayed ONLY to users from the countries in this list.

Example: `countriesInclude:US,MX;`

## hcoOnly

The Tab will be shown only to HCO accounts.

Example: `hcoOnly;`

### profilesExclude

The Tab will NOT be displayed to users from the profiles in this list. Profiles take precedence over countries

Example: `profilesExclude:PROFILE_1,PROFILE_3;`

### profilesInclude

The Tab will be displayed ONLY to users from the profiles in this list.

Example: `profilesInclude:PROFILE_2,PROFILE_4;`
