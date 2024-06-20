---
title: Accounts In Territory Filter
description: Filters report data on Accounts that are inside or outside of the user's territory
---

This report provides a list of Account IDs that can be used to filter other Reporting Block Layouts.

For example, in a tab containing both the Accounts In Territory Filter and a Table of Calls, the following could be set in the Table's Filters field:

`Call2_vod__c/Account_vod__c IN $FILTER:Account.Id`

## Configuration

### Custom Parameters

| Name                | Type    | Description |
|---------------------|---------|-------------|
| territoryOutLabel   | String  | Defaults to `no` |
| territoryInLabel    | String  | Defaults to `yes` |
| territoryInSelected | Boolean | When set to true, the in territory option is selected by default |