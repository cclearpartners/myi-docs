---
title: Timeline
description: Display interactions per channel
---

Gives an overview of activity, split by channel, in a given time period. When an activity is clicked, its details are shown in a table in a modal.

An activity owned by someone other than the current user is shown smaller.

When more than one activity occurred for the same channel on the same day, it is shown as a diamond instead of as a circle.

List View Associations are used to define the channels that are shown.

Works well with a [Period Filter](/reports/period-filter) or a Date Range Filter to narrow the timeline's range.

![Timeline](/static/img/report-timeline.png "Timeline")

## List View Associations

Each List View Association is a channel on the timeline. Use the List View Association's List View to determine which data is displayed for the channel.

The List View Association's Order field determines the order of the channels on the timeline. Lower numbers are displayed on top, higher numbers are displayed lower down.

### Labelling

By default, the channel's label is the plural name of the List View's object.

The Title field can be used to customise the channel's label. This is useful when you wish to use a Veeva Message, or several channels are based on the same object. You may use:

- a Veeva Message
- an object name, with the following syntax: `$LABEL:Object_Name.Field_Name`. Example: `$LABEL:Sent_Email_vod__c`.
- a plural object name: `$LABEL_PLURAL:Object_Name`. Example: `$LABEL_PLURAL:Sent_Email_vod__c`.
- a field name, with the following syntax: `$LABEL:Object_Name.Field_Name`. Example: `$LABEL:Call2_vod__c.Call_Channel_vod__c`.
- a picklist value, with the following syntax: `$LABEL:Object_Name.Field_Name.Picklist_Value`. Example: `$LABEL:Call2_vod__c.Call_Channel_vod__c.Phone`.

## Custom Parameters

In addition to the custom parameters listed below, all [Table](/reports/table) custom parameters can be used to customise the table shown in the modal.

| Name                | Type  | Description |
|---------------------|-------|-------------|
| counter     | boolean | Optional. Defaults to false. When set, a second column is added on the Y-axis that shows the number of interactions for each channel. |
| dateField    | String | Optional. When there is more than one DATE or DATETIME field in the List View, use this custom parameter to say which one must be used to place the data point on the timeline. For a field on the main object, use the field's name, e.g. `dateField:Start_Date_vod__c`. For a field on a lookup object, use the full path to the field, e.g. `dateField:Medical_Event_vod__c.End_Date_vod__c` or `dateField:Lookup_Field_1.Lookup_Field_2.Call_Date_vod__c`. |
| details | String | Optional. Defaults to auto. table: Always show the details in a pop-up table, even if there is only one record. |