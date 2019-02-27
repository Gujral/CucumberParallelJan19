package com.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.driver.DriverInstance;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginExampleSteps {
	WebDriver driver;
	WebDriverWait wait;
	
	public LoginExampleSteps() {
		DriverInstance instance = DriverInstance.getInstance();
		driver = instance.getDriver();
		wait = instance.getWait();
	}


	
	@When("^user logout of the application$")
	public void logoutApp() throws Throwable {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='avatar '][@role='presentation']"))).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'Log Out')]"))).click();
		System.out.println("Loggedout from application");
	}
		
	@Then("^user verify the \"([^\"]*)\" in the app$")
	public void verifyAppTitle(String title) throws Throwable {
		Assert.assertTrue("Page title is wrong",wait.until(ExpectedConditions.titleIs(title)));
	}


}
