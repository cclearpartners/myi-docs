---
title: Org Variables
description: What Org Variables are and how to configure them
date: 2023-12-18T00:00:00.000Z
order: 8
---

Org Variables enable the administrator to set org-specific values that can be used in a custom parameter. For example, to configure a list of test users in one org and production users in another org in the `usersInclude` custom parameter. Org Variables are shared by all Insights+ dashboards in the org.

NOTE: Org Variables are not included in the Export files produced by the Layout Migration Tool, so that they can be different across orgs.

Org Variables can be used directly in dashboard configuration or by a developer in custom code.

## Configuration

Go to the Insights+ Org Variables tab in the Insights+ app. Click on New to create a new variable, or Edit to modify an existing one.

![Org Variable config](/static/img/EnvironmentVarConfigForm.png "Org Variable config")

When the form is saved, a new Org Variable is created. The result is below:

![Org Variable config](/static/img/EnvironmentVarResult.png "Org Variable result")

NOTE: The automatically-generated API Name is prefixed with **$ENV:**, whereas the Variable Name is not. The API Name is what you will use in custom parameters.

## Use

The newly-created Org Variable's API Name can now be used in a custom parameter like any other variable/keyword: `usersInclude:$ENV:My_First_Variable;`. When the dashboard loads, it will be replaced by the contents of the Variable Value field.
