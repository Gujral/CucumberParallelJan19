$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/A Selenium Thorough/Java-WorkSpace/CucumberParallelJan19/CucumberParallelJan19/src/test/resources/features/CreateDeleteUsingDataTables.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author       :  QACult"
    },
    {
      "line": 2,
      "value": "#Scenario     :  Create and delete bookmark from Box app"
    },
    {
      "line": 3,
      "value": "#Application  :  Box"
    }
  ],
  "line": 4,
  "name": "Create Delete Bookmark Feature",
  "description": "",
  "id": "create-delete-bookmark-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Create and delete multiple bookmarks using DataTable",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-multiple-bookmarks-using-datatable",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@bookmarkDataTableScenario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user want to Launch to the Box App",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user verify the \"\u003ctitle1\u003e\" in the app",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter the \"\u003cname\u003e\" and \"\u003cpassword\u003e\" and Login to the app",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user verify the \"\u003ctitle\u003e\" in the app",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user create multiple new bookmark and verifies the \"\u003cMessage\u003e\" success message as below:",
  "rows": [
    {
      "cells": [
        "dcfolder.com",
        "good"
      ],
      "line": 16
    },
    {
      "cells": [
        "fridge.com",
        "best"
      ],
      "line": 17
    },
    {
      "cells": [
        "garage.com",
        "better"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user deletes multiple bookmarks and verifies the \"\u003cDeleteMessage\u003e\" deletion message",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user verify the \"\u003ctitle1\u003e\" in the app",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-multiple-bookmarks-using-datatable;",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "title",
        "title1",
        "Message",
        "DeleteMessage"
      ],
      "line": 24,
      "id": "create-delete-bookmark-feature;create-and-delete-multiple-bookmarks-using-datatable;;1"
    },
    {
      "cells": [
        "gujral608@gmail.com",
        "Welcome@123",
        "All Files | Powered by Box",
        "Box | Login",
        "A bookmark for \"bookmarkEntry\" was created successfully.",
        "Item successfully moved to trash."
      ],
      "line": 25,
      "id": "create-delete-bookmark-feature;create-and-delete-multiple-bookmarks-using-datatable;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 471357,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "start browser \"firefox\" on node port 5556",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 15
    },
    {
      "val": "5556",
      "offset": 37
    }
  ],
  "location": "CucumberHooks.browser_is(String,int)"
});
formatter.result({
  "duration": 34861532579,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create and delete multiple bookmarks using DataTable",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-multiple-bookmarks-using-datatable;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@bookmarkDataTableScenario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user want to Launch to the Box App",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user verify the \"Box | Login\" in the app",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enter the \"gujral608@gmail.com\" and \"Welcome@123\" and Login to the app",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user verify the \"All Files | Powered by Box\" in the app",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user create multiple new bookmark and verifies the \"A bookmark for \"bookmarkEntry\" was created successfully.\" success message as below:",
  "matchedColumns": [
    4
  ],
  "rows": [
    {
      "cells": [
        "dcfolder.com",
        "good"
      ],
      "line": 16
    },
    {
      "cells": [
        "fridge.com",
        "best"
      ],
      "line": 17
    },
    {
      "cells": [
        "garage.com",
        "better"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user deletes multiple bookmarks and verifies the \"Item successfully moved to trash.\" deletion message",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user verify the \"Box | Login\" in the app",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginBoxSteps.launchBoxApp()"
});
formatter.result({
  "duration": 7762980399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "LoginExampleSteps.verifyAppTitle(String)"
});
formatter.result({
  "duration": 34581461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gujral608@gmail.com",
      "offset": 16
    },
    {
      "val": "Welcome@123",
      "offset": 42
    }
  ],
  "location": "LoginBoxSteps.loginToApp(String,String)"
});
formatter.result({
  "duration": 7278120080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Files | Powered by Box",
      "offset": 17
    }
  ],
  "location": "LoginExampleSteps.verifyAppTitle(String)"
});
formatter.result({
  "duration": 25479816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A bookmark for ",
      "offset": 52
    },
    {
      "val": " was created successfully.",
      "offset": 82
    }
  ],
  "location": "CreateDeleteBookmarkSteps.createMultipleBookmarks(String,String,DataTable)"
});
formatter.result({
  "duration": 27535937148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item successfully moved to trash.",
      "offset": 50
    }
  ],
  "location": "CreateDeleteBookmarkSteps.deleteMultipleBookmarks(String)"
});
formatter.result({
  "duration": 25299359390,
  "status": "passed"
});
formatter.match({
  "location": "LoginExampleSteps.logoutApp()"
});
formatter.result({
  "duration": 1693583509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Box | Login",
      "offset": 17
    }
  ],
  "location": "LoginExampleSteps.verifyAppTitle(String)"
});
formatter.result({
  "duration": 7103295,
  "status": "passed"
});
});