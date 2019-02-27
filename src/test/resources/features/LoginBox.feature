#Author       :  QACult
#Scenario     :  Login and Logout from Box app
#Application  :  Box
@Scenario
Feature: Login to the Box App

  Background: 
    Given start browser "firefox" on node port 5555

  @boxScenario1
  Scenario: Login into box scenario1
    Given user want to Launch to the Box App
    Then user verify the "Box | Login" in the app
    When user enter the "gujral608@gmail.com" and "Welcome@123" and Login to the app
    Then user verify the "All Files | Powered by Box" in the app
    When user logout of the application
    Then user verify the "Box | Login" in the app

  @boxScenario2
  Scenario: Login into box scenario2
    Given user want to Launch to the Box App
    Then user verify the "Box | Login" in the app
    When user enter the "nancydhingra131@gmail.com" and "nancy131" and Login to the app
    Then user verify the "All Files | Powered by Box" in the app
    When user logout of the application
    Then user verify the "Box | Login" in the app
