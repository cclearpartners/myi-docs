---
title: Recent Key Messages
description: Displays a list of key messages.
---

Shows Key Messages based on submitted Call2_vod__c. 

### Configuration
Requires a List View on Call2_Key_Message_vod__c with at least the following fields:
 - Product_vod__c.Name
 - Key_Message_vod__c.Name
 - Call2_vod__c.Name (does not need to be displayed, but required to filter on call dates and status)

### Custom Parameters

| Name                | Type  | Description |
|---------------------|-------|-------------|
| hideCLM     | Boolean  | Optional. Will not show the key messages where a Closed Loop Marketing slide is included. |
