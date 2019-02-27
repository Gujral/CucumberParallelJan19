#Author       :  QACult
#Scenario     :  Create and delete bookmark from Box app
#Application  :  Box
Feature: Create Delete Bookmark Feature

  Background: 
   Given start browser "firefox" on node port 5556

  @bookmarkDataTableScenario
  Scenario Outline: Create and delete multiple bookmarks using DataTable
    Given user want to Launch to the Box App
    Then user verify the "<title1>" in the app
    When user enter the "<name>" and "<password>" and Login to the app
    Then user verify the "<title>" in the app
    When user create multiple new bookmark and verifies the "<Message>" success message as below:
      | dcfolder.com | good   |
      | fridge.com   | best   |
      | garage.com   | better |
    When user deletes multiple bookmarks and verifies the "<DeleteMessage>" deletion message
    When user logout of the application
    Then user verify the "<title1>" in the app

    Examples: 
      | name                | password    | title                       | title1       | Message                                                  | DeleteMessage                     |
      | gujral608@gmail.com | Welcome@123 | All Files \| Powered by Box | Box \| Login | A bookmark for "bookmarkEntry" was created successfully. | Item successfully moved to trash. |
