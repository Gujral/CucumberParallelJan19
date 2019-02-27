$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/cucumber-demo-workspace/CucumberParallelJan19/src/test/resources/features/LoginBox.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author       :  QACult"
    },
    {
      "line": 2,
      "value": "#Scenario     :  Login and Logout from Box app"
    },
    {
      "line": 3,
      "value": "#Application  :  Box"
    }
  ],
  "line": 5,
  "name": "Login to the Box App",
  "description": "",
  "id": "login-to-the-box-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "duration": 272045,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
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
  "duration": 2994455897,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login into box scenario1",
  "description": "",
  "id": "login-to-the-box-app;login-into-box-scenario1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@boxScenario1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user want to Launch to the Box App",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user verify the \"Box | Login\" in the app",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enter the \"gujral608@gmail.com\" and \"Welcome@123\" and Login to the app",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user verify the \"All Files | Powered by Box\" in the app",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user verify the \"Box | Login\" in the app",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginBoxSteps.launchBoxApp()"
});
formatter.result({
  "duration": 6014916894,
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
  "duration": 7822936,
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
  "duration": 6052028431,
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
  "duration": 6785446,
  "status": "passed"
});
formatter.match({
  "location": "LoginExampleSteps.logoutApp()"
});
formatter.result({
  "duration": 2015591535,
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
  "duration": 7805432,
  "status": "passed"
});
formatter.before({
  "duration": 55430,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
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
  "duration": 234484,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login into box scenario2",
  "description": "",
  "id": "login-to-the-box-app;login-into-box-scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@boxScenario2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user want to Launch to the Box App",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user verify the \"Box | Login\" in the app",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enter the \"nancydhingra131@gmail.com\" and \"nancy131\" and Login to the app",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user verify the \"All Files | Powered by Box\" in the app",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user logout of the application",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user verify the \"Box | Login\" in the app",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginBoxSteps.launchBoxApp()"
});
formatter.result({
  "duration": 1249603511,
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
  "duration": 7630754,
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
  "duration": 5281077590,
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
  "duration": 8656940,
  "status": "passed"
});
formatter.match({
  "location": "LoginExampleSteps.logoutApp()"
});
formatter.result({
  "duration": 2758447709,
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
  "duration": 4812936,
  "status": "passed"
});
});