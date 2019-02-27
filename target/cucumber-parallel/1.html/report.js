$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/A Selenium Thorough/Java-WorkSpace/CucumberParallelJan19/CucumberParallelJan19/src/test/resources/features/CreateDeleteBookmark.feature");
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
  "name": "Create and delete bookmark using Examples",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@bookmarkExampleScenario"
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
  "name": "user creates a new bookmark",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the \"\u003cMessage\u003e\" success message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user deletes a bookmark",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user verifies the \"\u003cDeleteMessage\u003e\" deletion message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user verify the \"\u003ctitle1\u003e\" in the app",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples;",
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
      "line": 23,
      "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples;;1"
    },
    {
      "cells": [
        "qacult.demo@gmail.com",
        "testing123",
        "All Files | Powered by Box",
        "Box | Login",
        "A bookmark for \"bookmarkEntry\" was created successfully.",
        "Item successfully moved to trash."
      ],
      "line": 24,
      "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples;;2"
    },
    {
      "cells": [
        "nancydhingra131@gmail.com",
        "nancy131",
        "All Files | Powered by Box",
        "Box | Login",
        "A bookmark for \"bookmarkEntry\" was created successfully.",
        "Item successfully moved to trash."
      ],
      "line": 25,
      "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 553053,
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
  "name": "start browser \"firefox\" on node port 5555",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 15
    },
    {
      "val": "5555",
      "offset": 37
    }
  ],
  "location": "CucumberHooks.browser_is(String,int)"
});
formatter.result({
  "duration": 34825303078,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Create and delete bookmark using Examples",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@bookmarkExampleScenario"
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
  "name": "user enter the \"qacult.demo@gmail.com\" and \"testing123\" and Login to the app",
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
  "name": "user creates a new bookmark",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the \"A bookmark for \"bookmarkEntry\" was created successfully.\" success message",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user deletes a bookmark",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user verifies the \"Item successfully moved to trash.\" deletion message",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 20,
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
  "duration": 7671493874,
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
  "duration": 42851601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qacult.demo@gmail.com",
      "offset": 16
    },
    {
      "val": "testing123",
      "offset": 44
    }
  ],
  "location": "LoginBoxSteps.loginToApp(String,String)"
});
formatter.result({
  "duration": 6974258842,
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
  "duration": 51551181,
  "status": "passed"
});
formatter.match({
  "location": "CreateDeleteBookmarkSteps.createNewBookmark()"
});
formatter.result({
  "duration": 4613030165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A bookmark for ",
      "offset": 19
    },
    {
      "val": " was created successfully.",
      "offset": 49
    }
  ],
  "location": "CreateDeleteBookmarkSteps.verifySuccessMessage(String,String)"
});
formatter.result({
  "duration": 6703579536,
  "status": "passed"
});
formatter.match({
  "location": "CreateDeleteBookmarkSteps.deleteBookmark()"
});
formatter.result({
  "duration": 1331300908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item successfully moved to trash.",
      "offset": 19
    }
  ],
  "location": "CreateDeleteBookmarkSteps.verifyDeleteMessage(String)"
});
formatter.result({
  "duration": 5881854838,
  "status": "passed"
});
formatter.match({
  "location": "LoginExampleSteps.logoutApp()"
});
formatter.result({
  "duration": 1662307965,
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
  "duration": 18134853,
  "status": "passed"
});
formatter.before({
  "duration": 258776,
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
  "name": "start browser \"firefox\" on node port 5555",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 15
    },
    {
      "val": "5555",
      "offset": 37
    }
  ],
  "location": "CucumberHooks.browser_is(String,int)"
});
formatter.result({
  "duration": 291283,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Create and delete bookmark using Examples",
  "description": "",
  "id": "create-delete-bookmark-feature;create-and-delete-bookmark-using-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@bookmarkExampleScenario"
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
  "name": "user enter the \"nancydhingra131@gmail.com\" and \"nancy131\" and Login to the app",
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
  "name": "user creates a new bookmark",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verifies the \"A bookmark for \"bookmarkEntry\" was created successfully.\" success message",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user deletes a bookmark",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user verifies the \"Item successfully moved to trash.\" deletion message",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 20,
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
  "duration": 1387780381,
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
  "duration": 32557875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nancydhingra131@gmail.com",
      "offset": 16
    },
    {
      "val": "nancy131",
      "offset": 48
    }
  ],
  "location": "LoginBoxSteps.loginToApp(String,String)"
});
formatter.result({
  "duration": 5973452573,
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
  "duration": 12233477,
  "status": "passed"
});
formatter.match({
  "location": "CreateDeleteBookmarkSteps.createNewBookmark()"
});
formatter.result({
  "duration": 4437373419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A bookmark for ",
      "offset": 19
    },
    {
      "val": " was created successfully.",
      "offset": 49
    }
  ],
  "location": "CreateDeleteBookmarkSteps.verifySuccessMessage(String,String)"
});
formatter.result({
  "duration": 10162324861,
  "status": "passed"
});
formatter.match({
  "location": "CreateDeleteBookmarkSteps.deleteBookmark()"
});
formatter.result({
  "duration": 1609715693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item successfully moved to trash.",
      "offset": 19
    }
  ],
  "location": "CreateDeleteBookmarkSteps.verifyDeleteMessage(String)"
});
formatter.result({
  "duration": 5951397584,
  "status": "passed"
});
formatter.match({
  "location": "LoginExampleSteps.logoutApp()"
});
formatter.result({
  "duration": 1625783332,
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
  "duration": 7409549,
  "status": "passed"
});
});