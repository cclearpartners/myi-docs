---
title: Dashboard Custom Parameters Reference
description: Details of all available standard dashboard custom parameters
date: 2021-01-03T00:00:00.000Z
order: 3
---

Dashboard-level custom parameters are automatically set on each report. They allow you to set a default configuration for all reports, while retaining the ability to override that configuration for a specific report.

## useMySetupProductsOnly

Signals that reports in this dashboard should only query for Products configured in the user's My Setup Products.

The value is a comma-separated list of countries to which this custom parameter applies.

Example: `useMySetupProductsOnly:US,FR,DE`
