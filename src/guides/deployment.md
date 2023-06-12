---
title: "Deploy the MyInsights+ Package to Your Org"
description: Learn how to install or update the MyInsights+ package
date: 2020-12-31
toc: true
---

## Package Overview

Here is an overview of everything that is included in the package:

### Objects

#### MyInsights+ Layout

Contains a dashboard's configuration, reports and list views.

- Master-detail relationship to MyInsights+ List View
- Master-detail relationship to MyInsights+ Tab
- Master-detail relationship to MyInsights+ Reporting Block Layout

#### MyInsights+ Reporting Block

Represent all the types of reports that can be added to a dashboard.

- External Identifier

#### MyInsights+ Tab

Visually groups a set of reports and contains tab-specific configuration.

- Child of MyInsights+ Layout

#### MyInsights+ Reporting Block Layout

Represents a report within a dashboard. Contains report-specific configuration.

- Child of MyInsights+ Layout
- Child of MyInsights+ Tab
- Lookup to MyInsights+ Reporting Block
- Lookup to MyInsights+ List View

#### MyInsights+ List View

Data source configuration for reports.

- Child of MyInsights+ Layout
- Master-detail relationship to MyInsights+ List View Definition

#### MyInsights+ List View Definition

A field within a List View

- Child of MyInsights+ List View

#### MyInsights+ List View Association

Links a Reporting Block Layout to multiple List Views.

- Lookup to MyInsights+ Reporting Block Layout
- Lookup to MyInsights+ List View

#### MyInsights+ Parameter

- To facilitate deployment, this object has an External Identifier which is used by the MyInsights+ Parameter Value.
- Lookup to MyInsights+ Reporting Block (via External Identifier).

#### MyInsights+ Parameter Value

- Lookup to MyInsights+ Reporting Block Layout
- Lookup to MyInsights+ Parameter (via External Identifier)

### Tabs

Only visible to users with the MyInsights+ Administrator permission set assigned.

|Name|Role|
|----|----|
|MyInsights+ Layouts|Provide access to the MyInsights+ Layout records|
|MyInsights+ Reporting Blocks|Provide access to the MyInsights+ Reporting Blocks records|
|MyInsights+ ListView|Provide access to the MyInsights+ ListView records|

### Permission Sets

|Name|Target Group|Role|
|----|------------|----|
|MyInsights+ Administrator|Salesforce admins who will create and manage the dashboards|Full CRUD rights to all MyInsights+ objects and fields. Access to the tabs, Visual Force pages and Apex classes|
|MyInsights+ End User|End users who will use the dashboards|Read access to all MyInsights+ objects and fields|

### Organization-Wide Default Settings

|Object|Setting|
|------|-------|
|MyInsights+ Admin|Public Read/Write|
|MyInsights+ Reporting Block|Public Read/Write|
|MyInsights+ Reporting Block Layout|Controlled by Parent|
|MyInsights+ List View|Controlled by Parent|
|MyInsights+ List View Definition|Controlled by Parent|
|MyInsights+ List View Association|Controlled by Parent|
|MyInsights+ Parameter|Public Read/Write|
|MyInsights+ Parameter Value|Controlled by Parent|

### Sharing Rules

If OWD settings are set to public, then no sharing rules are needed. Sharing rules are not part of the package.

### Visual Force Pages

Only visible to users with the MyInsights+ Administrator permission set assigned.

|Name|Role|
|----|----|
|MyInsights_Admin_NewEditPage|Allows multiple profiles to be assigned to a MyInsights Layout|
|MyInsights_List_View_NewEditPage|Allows any object (standard or custom) to be assigned to a List View|
|MyInsights_List_View_Def_NewEditPage|Allows List View Definitions to be created for any field on the List View's object or on an object accessible via lookup|
|MyInsights_Admin_DeepClone|Overwrites the default MyInsights+ Layout clone button to perform a clone of the object itself and all the attached children|

### Apex Classes

- MyInsights_UtilityClass
- MyInsights_Admin_newEditPage_Ext
- MyInsights_schemaSObjectTypeWrapper
- MyInsights_List_View_newEditPage_Ext
- MyInsights_List_View_Def_newEditPage_Ext
- MyInsights_MultiselectController
- MyInsights_MultiselectControllerTest
- MyInsights_PaginatedSelectList
- MyInsights_TriggerHandler
- MyInsights_TriggerHandlerTest
- MyInsights_Custom_Param_TriggerHandler
- MyInsights_Cust_Param_TriggerHandlerTest
- LWC_ccp_myi_ObjectPicklist_Controller
- LWC_ccp_myi_ObjectPicklist_CtrlTest
- LWC_ccp_MyiRBCustomParamForm_Controller
- LWC_ccp_myi_HtmlReports_Controller
- LWC_ccp_API_Backup_Controller
- LWC_ccp_myi_utility_Controller
- LWCPicklistEntry

### Apex Triggers

|Name|Trigger|Action|
|----|----|----|
|MyInsights_Admin_Trigger|after update, after insert|Updates the zip and framework version for the MyInsights+ Layout|
|MyInsights_HTML_Report_Trigger|after insert|Updates the zip version for the MyInsights+ Layout attached to the HTML Report|
|MyInsights_HTML_Report_Content_Document_Trigger|after insert,
    after update|Updates the zip version for the MyInsights+ Layout attached to the HTML Report (Lightning only)|
|MyInsights_Custom_Param_Value_Trigger| after insert, after update|Updates the MyInsights+ Reporting Block Layout custom parameterfield if the report specific parameter fields have changed|
|MyInsights_RBL_Trigger|after update,after insert|Updates the ReportingBlockLayout's Parameter Values if the custom parameter field is changed|

### Apex Components

- MyInsights_MultiselectPicklist

### Aura Components

- Ccp_Myi_Listview_Definition_Upsert_Component
- Ccp_Myi_Listview_Upsert_Component

### LWC Components

- cpMyiGeneralInfo
- ccpMyiMultiLevelLookup
- ccpMyiObjectPicklist
- ccpMyiOldHtmlReports
- ccpMyiAllHtmlReports
- ccpMyiUpsertListview
- ccpMyiUpsertListviewDefinition
- ccpMyiRBCustomParameterForm
- ccpMyiRBCustomParameterField

### Custom Apps

#### MyInsights+ App

Provides an overview to the MyInsights+ administrator. It shows:
- An overview of all HTML Reports, with useful information like the deployed zip and last modification dates. 
- A list of HTML Reports that are older than 6 months and may require attention.
- A list of helpful links to several documentation pages.
- An Import tool for MyInsights+ Layouts

### Custom Labels
- MyInsights_Framework_General_Documentation
- MyInsights_Framework_General_Information
- MyInsights_Framework_Release_Notes_Current_Release
- MyInsights_Framework_Release_Notes_Current_Release_Link
- MyInsights_Framework_Version
- Old_HTML_Reports_Title
- Veeva_MyInsights_Configuration_Documentation

## Deployment

Follow these steps to install the package for the first time, or to update it.

1. Go to the [Workbench](https://workbench.developerforce.com) and login with your salesforce credentials.
2. In the navigation menu, go to Migration and click Deploy ![Deploy menu](/static/img/guide-deployment-deploy-menu.png "Deploy menu")
3. Choose the provided ZIP file, check Check Only and click Next. ![Check only](/static/img/guide-deployment-check-only.png "Check only")
4. Click Deploy. ![Check only](/static/img/guide-deployment-check-only-deploy.png "Check only")
5. The result should pop up and show ‘Success: true’. This can take some time. Page will be automatically refreshed every 6 seconds.
6. If the previous step was a success, go back to ‘Migration’ -> ‘Deploy’ with the setting ‘Rollback on Error’
7. Click Next and Deploy

## Post-Installation Steps

### VMobile Object Configurations (VMOCs)

Add the following VMOCs:

|Object|Where|Type|Device|Active|
|------|-----|----|------|------|
|MyInsights+ Layout (MyInsights_Admin__c)||Full Sync|iPad_vod|True|
|MyInsights+ Reporting Block (MyInsights_Reporting_Block__c)||Full Sync|iPad_vod|True|
|MyInsights+ Tab (MyInsights_Tab__c)||Full Sync|iPad_vod|True|
|MyInsights+ Reporting Block Layout (MyInsights_Reporting_Block_Lay_Out__c)||Full Sync|iPad_vod|True|
|MyInsights+ List View (MyInsights_List_View__c)||Full Sync|iPad_vod|True|
|MyInsights+ List View Definition (MyInsights_List_View_Definition__c)||Full Sync|iPad_vod|True|
|MyInsights+ List View Association (MyInsights_List_View_Association__c)||Full Sync|iPad_vod|True|

### Permission Set Assignment

The Permission Sets can either be added to a Permission Set Group or be assigned directly to users.

To assign the Permission Sets directly:

1. Go to Setup. ![Setup](/static/img/guide-deployment-ps-setup.png "Setup")
2. Go to the Permission Sets menu. ![Menu](/static/img/guide-deployment-ps-menu.png "Menu")
3. Select the MyInsights+ Administrator Permission Set. ![Selection](/static/img/guide-deployment-ps-selection.png "Selection")
4. Click Manage Assignments. ![Manage Assignments](/static/img/guide-deployment-ps-manage-assignments.png "Manage Assignments")
5. Click Add Assignments. ![Add Assignments](/static/img/guide-deployment-ps-add-assignments.png "Add Assignments")
6. Choose the users you wish to assign the Permission Set to. Click Assign. ![Assign](/static/img/guide-deployment-ps-assign.png "Assign")
7. Repeat steps 3 - 6 for the MyInsights+ End User Permission Set.

### Data Loads

1. Go to [Dataloader](https://dataloader.io).
2. Click on Login with Salesforce and enter your credentials.
3. Click on New Task and then on Import. ![New Task > Import](/static/img/guide-deployment-dataload-new-task.png "New Task > Import")
4. Set the Operation to Upsert. Search for "MyInsights+" and select MyInsights+ Reporting Block. ![Upsert](/static/img/guide-deployment-dataload-upsert.png "Upsert")
5. Click Next.
6. Upload the Reporting Block CSV file provided. ![CSV](/static/img/guide-deployment-dataload-csv.png "CSV")
7. Verify that all 4 columns are correctly mapped and click Next. ![Mappings](/static/img/guide-deployment-dataload-mappings.png "Mappings")
8. Verify that all settings are correct and click Save & Run. ![Run](/static/img/guide-deployment-dataload-run.png "Run")
9. The next screen shows the data load's status. There should be as many successes as there are Reporting Blocks. If there are any errors, contact the developers to resolve the issue. ![Run](/static/img/guide-deployment-dataload-success.png "Run")

Repeat steps 3 through 9 for the MyInsights+ Parameter object and CSV.

### Optional Steps

1. The first time the package is installed, please clear the Veeva Cache.
2. As users have been assigned a new permission set, they may need to do a full database refresh. Afterwards, a normal sync will be sufficient.

## Next Steps

You are now ready to [create your first dashboard](/guides/create-an-html-report-a-step-by-step-guide)!
