---
title: Next Call Notes
description: Recap of previous calls
---

## List View

Based on Call object.

If the Call Date is not included, the details table (whether in a modal or directly in the report) will add it to the Next Call Notes field.

Check the Group By field on the OwnerId.Name List View Definition to distinguish the next and last calls done by the current user from calls done by other users.

## Custom Parameters

| Name | Type | Description |
|------|------|-------------|
| details | String | By default, the latest Next Call Note is displayed under the dates. To view more notes, set this to `modal` to display them in a modal table or `bottom` to display them in a table below the dates. |
| mineLast | String | Veeva Message for the user's last call |
| mineNext | String | Veeva Message for the user's next call |
| nextCallNotesField | String | API name of the Next Call Notes field. Defaults to `Next_Call_Notes_vod__c` |
| notMineLast | String | Veeva Message for the last call not by the user |
| notMineNext | String | Veeva Message for the next call not by the user |
