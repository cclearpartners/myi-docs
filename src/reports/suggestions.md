---
title: Suggestions
description: Displays actionable Suggestions
---

The Suggestions report is a fully-configurable way to pull in data from the Suggestion, Suggestion Feedback and Suggestion Tag objects. Suggestions that have not been actioned (executed, marked as complete or dismissed) display buttons so the user can act on them.

The report can be shown as a Table:

![Suggestions Table](/static/img/suggestions-table.png "Suggestions Table")

or as a Doughnut Chart:

![Suggestions Doughnut](/static/img/suggestions-doughnut.png "Suggestions Doughnut")

## Configuration

### Display Type

The List View and Doughnut Display Types are supported. When using Doughnut, make sure to have a Group By field.

Depending on the selected Display Type, all [Table](/reports/table) or [Doughnut Chart](/reports/doughnut-chart) custom parameters can be used.

### List Views

The main List View is required and must be on either Suggestion or Suggestion Feedback objects.

A Suggestion Tag List View Association may be used to add Suggestion Tag fields. These fields are added to the table (main or in a modal) and can also be used as Filter By and Group By fields. Column order is set across the main List View and the List View Association.

To show Suggestions that have been actioned, use the Suggestion Feedback object for the main List View.

To show open Suggestions, you may use something like the following: `filters:Suggestion_vod__c/$NULL_NUM(Actioned_vod__c) AND $NULL_NUM(Dismissed_vod__c) AND $NULL_NUM(Marked_As_Complete_vod__c) AND Expiration_Date_vod__c >=$TODAY`.

To only show certain types of suggestions, you can add the [recordTypes](/references/custom-parameters-list-view) custom parameter: `recordTypes:Suggestion_vod__c/Call_vod,Insight_vod`.

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| collapseAt          |Number | For the Title and Reason fields, the number of characters to show before collapsing the text. |
