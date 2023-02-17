---
title: Suggestions Record Type Legend
description: The legend for icons used for different types of Suggestions
---

## The types custom parameter

To restrict and order the displayed record types, use a comma-separated list of Suggestion record type Developer Names.

For example, `types:Email_vod,Insight_vod` will display only those two icons, in that order.

To customise the label of a record type, use the following format: RECORD_TYPE_DEVELOPER_NAME/OBJECT_API_NAME.FIELD_API_NAME/PICKLIST_VALUE_1/PICKLIST_VALUE_2/.../PICKLIST_VALUE_N.

For example: `types:Call_vod/Call2_vod__c.My_Call_Type__c/Online/Face to Face/Phone,Email_vod,Insight_vod` will replace the standard Call record type label with the 3 picklist value labels of the `My_Call_Type__c` field of the `Call2_vod__c` object.

## Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| types | String List | Optional. When not set, all Suggestion record types will be shown. |
