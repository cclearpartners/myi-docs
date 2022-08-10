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

NOTE: Since 2021.R2, Reporting Block Layout names are editable, instead of being auto-numbered. This makes them more easily identifiable in lists in Salesforce.

### Tab Titles

To translate a Tab's title, write a Veeva Message's name in the Message Key field.

### List View Definition Label

The List View Definition's Label field overrides the field's default label and can be hard-coded text, a Veeva Message or a placeholder. The latter two allow for translation, whereas hard-coded text cannot be translated.

To use a Veeva Message, write the message's name: `my_message_name`.

Placeholders start with a `$` and are replaced. Available placeholders:

- `$OBJECT_AND_FIELD`: Distinguish between multiple fields with the same name by adding the name of the object before the field name. If it's a Reference Object and the 'Use Main Object Label' is selected, the name of the Main Object is used in stead of the name of the Reference Object.
  **Example:**
  A list view with lookups to Account.Status and Product.Status. In a table, this would normally be shown as
  | Status | Status |
  | ------ | ------ |
  By setting `$OBJECT_AND_FIELD` on both List View Definition's Label fields, it becomes:
  | Account Status | Product Status |
  | ------ | ------ |

