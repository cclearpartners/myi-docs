---
title: Synthetic Fields
description: Information on synthetic fields.
date: 2023-12-19T00:00:00.000Z
order: 9
---

Synthetic fields allow an administrator to configure non-CRM fields in listviews.
This non-crm fields can be picked up by a developer to i.e. fill the values with the results of a possibly complicated calculation that is not done in CRM.
In the resulting report, the synthetic field will behave like any other configured listview definition.

## Configuration

A synthetic field can be added in the same way a normal listview definition is added. To indicate it is a synthetic field, you flip the switch in the form.
As an administrator, you have to agree with the developer on the field name. Once the field name is decided, the API-name has to be specified in the 'sObject Field'-field in the form.
Next, you set the field type of the synthetic field, this can be: TEXT, PICKLIST, NUMBER or BOOLEAN. This field type will determine how the field is displayed in the report.
As you can see in the screenshot, you can further configure the synthetic field as you would any other listview definition.

![Synthetic field input form](/static/img/synthetic-field-input.png "Synthetic field input form")

