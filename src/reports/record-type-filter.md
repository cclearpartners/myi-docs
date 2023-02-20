---
title: Record Type Filter
description: A drop down of record types for a given object
---

Filters on the record types of the object.

Can be used in the `filters` custom parameter of other reports on the RecordTypeId field. If the object is Suggestion, e.g. `filters:Suggestion_vod__c/RecordTypeId=$FILTER;`.

## Custom Parameters

| Name    | Type    | Description |
|---------|---------|-------------|
| object  | String  | The API name of the filter's object. |
| types   | String[]| Optional. Restricts the filter to the given Record Type developer names. |
