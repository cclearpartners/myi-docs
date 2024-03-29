---
title: Synthetic Fields
description: Information on synthetic fields.
date: 2023-12-19T00:00:00.000Z
order: 9
---

Synthetic fields allow an administrator to configure non-CRM fields in List Views. In the resulting report, the synthetic field will behave like any other configured List View Definition.

This non-CRM field is picked up by a developer to i.e. fill the values with the results of a complex calculation that cannot be configured or with data queried from outside CRM.

## Configuration

A synthetic field is added in the same way as a normal List View Definition. To indicate it is a synthetic field, flip the switch in the form.

As an administrator, you have to agree beforehand with the developer on the field's name and entered in the 'sObject Field' field in the form.

Next, you set the field type of the synthetic field (TEXT, PICKLIST, NUMBER or BOOLEAN). This field type will determine how the field is displayed in the report.

As you can see in the screenshot, you can further configure the synthetic field as you would any other listview definition.

![Synthetic field input form](/static/img/synthetic-field-input.png "Synthetic field input form")

