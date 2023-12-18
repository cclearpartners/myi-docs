---
title: Environment Variables
description: Description of what Environment Variables are and how to configure them.
date: 2023-12-18T00:00:00.000Z
order: 8
---

## Intro
Environment Variables are introduced to enable the administrator to use environment specific values in a custom parameter i.e. test vs production usernames in a includeUsers custom parameter.
The variables configured by the administrator can be picked directly used or picked up by a developer to perform a custom calculation if needed.

## Configuration
An administrator can configure environment variables via the 'Insights+ Environment Variables' tab in the Insights+ app.
The variable can be configured by filling in this simple form. When configuring keep in mind that the variable api name will always AUTOMATICALLY be proceeded with **$ENV:**. As an admin you only name fill in the variable name.
i.e.

![Environment Variable config](/static/img/EnvironmentVarConfigForm.png "Environment Variable config")

When the form is saved, a new environment variable is created.
Below you can see the result of the previous example. The Api name includes the $ENV:, whereas the variable name does not.

![Environment Variable config](/static/img/EnvironmentVarResult.png "Environment Variable result")

## Use
The newly created variable name can now be used in a custom parameter like you would use any other variable.
i.e. usersInclude:$ENV:My_First_Variable;

