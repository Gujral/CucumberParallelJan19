package com.stepDefinition;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.driver.DriverInstance;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateDeleteBookmarkSteps {
	WebDriver driver;
	WebDriverWait wait;
	int bookmarkVal; 
	String bookmarkEntry;
	List<String> noOfBookmarks;
	WebElement succcessMessageNotification;
	
	public  CreateDeleteBookmarkSteps() {
		DriverInstance instance = DriverInstance.getInstance();
		driver = instance.getDriver();
		wait = instance.getWait();
	}
	@When("^user create multiple new bookmark and verifies the \"([^\"]*)\"bookmarkEntry\"([^\"]*)\" success message as below:$")
	public void createMultipleBookmarks(String arg1, String arg2, DataTable dataTable) throws Throwable {
	
		WebElement newDropdownMenu = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[class*=\"create-dropdown-menu-toggle-button\"]:not([class*='upload-button'])")));
//		 List<String> dataList = dataTable.asList(String.class);
		List<List<String>> dataList = dataTable.raw();
		noOfBookmarks = new ArrayList<String>();
		Thread.sleep(3000);
		for(List<String> row:dataList){
			System.out.println("The datatable value is :"+row.size());
		
		System.out.println("aaaaaaa"+newDropdownMenu.getText());
		newDropdownMenu.click();
		WebElement bookmarkCreationLink = wait.until(
				ExpectedConditions.elementToBeClickable(By.cssSelector("li[aria-label=\"Create a new Bookmark\"]")));
		bookmarkCreationLink.click();
			WebElement titleBookmark = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("h2[class=\"modal-title\"]")));
		System.out.println("title bookmark:"+titleBookmark.getText());
		
	  
	   WebElement urlTextField = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[data-resin-target=\"urlinput\"]")));
	   WebElement descTextField = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[data-resin-target=\"descriptioninput\"]")));
	   
		   urlTextField.clear();
//			bookmarkVal = (int)(Math.random()*((1000-1)+1))+1;
			bookmarkEntry = "www."+ row.get(0);
			noOfBookmarks.add(bookmarkEntry);
			System.out.println("bookmark entry-"+bookmarkEntry);
			urlTextField.sendKeys(bookmarkEntry);
			descTextField.clear();
			descTextField.sendKeys(row.get(1));
			
			WebElement createButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button[data-resin-target=\"create\"]")));
			createButton.click();
			Thread.sleep(2000);
			System.out.println("arg1 = "+arg1);
			System.out.println("arg2 = "+arg2);
			succcessMessageNotification = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
			System.out.println(succcessMessageNotification.getText());
			String successMessageText = arg1+"\""+bookmarkEntry+"\""+arg2;
			System.out.println("The success message :"+successMessageText);
			Assert.assertTrue("bookmark not created succcessfully", succcessMessageNotification.getText().equals(successMessageText));
			wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
	   }
	   
	}
	
	@When("^user creates a new bookmark$")
	public void createNewBookmark() throws Throwable {
//****************************#Waiting for element to get stable*********************************************************
		Thread.sleep(3000);
//		wait.until(ExpectedConditions.attributeToBe(By.cssSelector("div[class=\"action-bar-actions\"]"), "class", "action-bar-actions"));
//		wait.until(ExpectedConditions.textToBe(By.cssSelector("button[class*=\"create-dropdown-menu-toggle-button\"]:not([class*='upload-button'])"),"New"));
//************************************************************************************************************************		
		WebElement newDropdownMenu = wait
				.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[class*=\"create-dropdown-menu-toggle-button\"]:not([class*='upload-button'])")));
		System.out.println("aaaaaaa"+newDropdownMenu.getText());
		newDropdownMenu.click();
		WebElement bookmarkCreationLink = wait.until(
				ExpectedConditions.elementToBeClickable(By.cssSelector("li[aria-label=\"Create a new Bookmark\"]")));
		bookmarkCreationLink.click();
			WebElement titleBookmark = wait
				.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("h2[class=\"modal-title\"]")));
		System.out.println(titleBookmark.getText());
		WebElement urlTextField = wait.until(
				ExpectedConditions.presenceOfElementLocated(By.cssSelector("input[data-resin-target=\"urlinput\"]")));
		bookmarkVal = (int)(Math.random()*((1000-1)+1))+1;
		bookmarkEntry = "www."+ bookmarkVal +".com"; 
		urlTextField.sendKeys(bookmarkEntry);
		WebElement createButton = wait
				.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button[data-resin-target=\"create\"]")));
		createButton.click();
	}

	@Then("^user verifies the \"([^\"]*)\"bookmarkEntry\"([^\"]*)\" success message$")
	public void verifySuccessMessage(String arg1, String arg3) throws Throwable {
		System.out.println("arg1 = "+arg1);
		System.out.println("arg3 = "+arg3);
		succcessMessageNotification = wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
		System.out.println(succcessMessageNotification.getText());
		String successMessageText = arg1+"\""+bookmarkEntry+"\""+arg3;
		System.out.println("The success message :"+successMessageText);
		Assert.assertTrue("bookmark not created succcessfully", succcessMessageNotification.getText().equals(successMessageText));
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
	}

	@When("^user deletes a bookmark$")
	public void deleteBookmark() throws Throwable {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@role='row' and .//a[@title='"+bookmarkEntry+"']]"))).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[data-resin-target=\"trash\"]"))).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='modal-actions']/button[contains(@class,'btn-primary')]"))).click();
	}
	
	@When("^user deletes multiple bookmarks and verifies the \"([^\"]*)\" deletion message$")
	public void deleteMultipleBookmarks(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 for(String str:noOfBookmarks) {
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@role='row' and .//a[@title='"+str+"']]"))).click();
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[data-resin-target=\"trash\"]"))).click();
			wait.until(ExpectedConditions.textToBe(By.xpath("//button[contains(@class,'btn-primary')]//span"), "Okay"));
			Thread.sleep(1000);
			wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(@class,'btn-primary')]"))).click();
			succcessMessageNotification = wait.until(
					ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
			System.out.println(succcessMessageNotification.getText());
			Assert.assertTrue("bookmark not deleted succcessfully", succcessMessageNotification.getText().contains(arg1));
			wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
	 }
	}

	@Then("^user verifies the \"([^\"]*)\" deletion message$")
	public void verifyDeleteMessage(String arg1) throws Throwable {
		succcessMessageNotification = wait.until(
				ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
		String text =succcessMessageNotification.getText();
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("div[class=\"notification info wrap\"]")));
		Assert.assertTrue("bookmark not deleted succcessfully", text.contains("Item successfully moved to trash."));
	}



}
