---
title: "Insights+ Connected App Documentation"
description: Guide on how to create a connected app in order to access the insights+ API.
date: 2024-04-10T08:15:49.824Z
---
# Insights+ Connected App Documentation

To have access to the Insights+ API you need to authorize yourself. To do this we recommend the use of a Connected App. This Connected App defines i.e. which protocol is used for authentication and de access scope.
This document guides you, step by step, through a setup that in the end provides you with a working solution. Each section shows the minimal steps and settings. If you know what you are doing, feel free to adjust the settings to your needs. 

## Creat the Insights+ App
Depending on the Salesforce version, a connected app can be created from Setup. Go to the App Manager and create a new Connected App.

|Setting|Value|
|-----|------|
|Connected App Name | Insights API Authorization (Or a name that suits you) |
|API Name |  Insights Authorization (Or an API name that suits you)
|Contact Email | <Your Admin/Responsible Email> |

In the API (Enable OAuth Settings) section, enable the OAuth Settings.

|Setting|Value|
|-----|------|
|Callback URL | <URL to your applicatioin calling the Insights+ API> |
|Selected OAuth Scopes |  1. Manage user data via API(api) <br> 2. Perform requests at any time (refresh_token, offline_access)|
|Require Proof Key for Code Exchange (PKCE) | Checked |
|Require Secred for Web Server Flow | Checked |
|Require Secred for Refresh Token Flow | Checked |

Other settings can be kept to default values. Save the Connected App. Next the policies for the connected app will be set.

![Create the Insights+ App](/static/img/I+Connected-App.png "Connected App Example")

## Configure policies for the Connected App
From Setup, go to ‘Manage Connected Apps’ and select your newly created app. Click on ‘Edit Policies’ and set the following fields.

|Setting|Value|
|-----|------|
|Permitted Users | Admin approved users are pre-authorized|
|IP Relaxation |Relax IP restrictions|
|Refresh Token Policy |	Refresh token is valid until revoke |

In the session policies section
|Setting|Value|
|-----|------|
|Timeout Value | 30 minutes |

As a user (calling the API), to be able to have access via the connected app we just created, access must be given to the connected app and the Apex class defining the API. 

![Insights+ Connected App Policies](/static/img/I+Connected-app-pol.png "Connected App Policies")

## Manage App Access
Create or re-use an existing Permission Set to grand access to the connected app and API related Apex classes. To avoid the permission to be overwritten by future deploys, we recommend creating a new Permission Set specifically for this purpose. 

### Assign Connected App
Go to the permission set’s ‘Assigned Connected Apps’ section, click edit and add the ‘Insights+ Authorization’ app to the ‘Enabled Connected Apps’ column. Click Save.

### Apex Class Access
Go to the permission set’s ‘Apex Class Access’ section, click edit and add the ‘Insights_Rest_API’ class to the ‘Enabled Apex Classes’ list.

### User Access
To give a user or API-user access to the connected add, assign the Permission Set (Manage App Access) to the user.

## Consumer Details
Your consumer details are needed to authorize your application with the Connected App and inherently get access to the Insights+ API.
While logged in as the API consuming user, in Setup, go to the ‘App Manager’. Next, look for the connected app we just created and in the right dropdown menu click ‘View’.

Now in the ‘API (Enable OAuth Settings)’ section click on the ‘Manage Consumer Details’ button. 
![Insights+ Connected App Consumer Details](/static/img/I+Connected-App-Con-Det.png "Insights+ Connected App Consumer Details")

This (after email code verification) will bring you to a page where you should be able to find your ‘Client Key’ and ‘Consumer Details’. 
![Insights+ Connected App Consumer Keys](/static/img/I+Connected-app-Con-Key.png "Insights+ Connected App Consumer Keys")

## API Authentication
For authentication we recommend using the [OAuth 2.0 web server flow](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm&type=5). 

