---
title: User Territory Filter
description: Filters records by User Territory
---

This filter's value can be used in other Reporting Block Layout's filters with the name `Territory2.Id`. E.g. `filters:Call2_vod__c/Territory_vod__c = $FILTER:Territory2.Id`.

All custom parameters available on [Record Filter](/reports/record-filter) can be used, in addition to the ones listed below.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| territoryInLabel | String | Text to display instead of the name of the Territory. Can be a Veeva Message. To customise the text for non-Territory records, use Record Filters noneOption custom parameter. |
