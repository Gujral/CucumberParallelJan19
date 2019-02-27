#Author       :  QACult
#Scenario     :  Login and Logout from Box app
#Application  :  Box
Feature: Login to the Box App

  Background: 
    Given start browser "firefox" on node port 5555

  @boxExampleScenario
  Scenario Outline: Login with Examples Table
    Given user want to Launch to the Box App
    Then user verify the "<title1>" in the app
    When user enter the "<name>" and "<password>" and Login to the app
    Then user verify the "<title>" in the app
    When user logout of the application
    Then user verify the "<title1>" in the app

    Examples: 
      | name                      | password    | title                       | title1       |
      | gujral608@gmail.com       | Welcome@123 | All Files \| Powered by Box | Box \| Login |
      | nancydhingra131@gmail.com | nancy131    | All Files \| Powered by Box | Box \| Login |
