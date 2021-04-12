---
title: "Translations: A Comprehensive Guide"
description: How to manage multiple languages.
date: 2021-04-12
order: 2021-04-12T09:15:38.889Z
---

There are two ways for admins to manage translations: Salesforce's Translation Workbench and Veeva Messages.

## Salesforce

### Translation Workbench

The most sophisticated standard way for admins to manage object and field labels.

## Veeva Messages

Useful for translations unrelated to object and field labels. Can also be used for object and field labels that cannot be changed org-wide in the Translation Workbench. Must be in the MyInsights category.

Veeva Messages can be used as Tab and Report titles, as well as in custom-developed Reports.

### Report Titles

The Chart Title Veeva Message field of a Reporting Block Layout can refer to a Veeva Message or a placeholder.

To use a Veeva Message, write the message's name: `my_message_name`.

Placeholders start with a `$` and are replaced. Available placeholders:

- $OBJECT_NAME: The translated name of the object the associated listview is based on
- $OBJECT_NAME_PLURAL: The pluralised version of the object's translated name
- $NONE: The report has no title and the entire title section is removed. This means that the report cannot have any filters or other elements that would appear in the title section. The advantage is that this saves vertical space.
- $EMPTY: The report has no title, but the title section is preserved so that filters can be included.

$EMPTY and $NONE are important because while a block might not need a title in the context of a user's dashboard, the admin needs to be able to identify it. These tokens make that possible.

## Tab Titles

To translate a Tab's title, write a Veeva Message's name in the Message Key field.

