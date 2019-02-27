package com.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.driver.DriverInstance;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginBoxSteps {
	WebDriver driver;
	WebDriverWait wait;
	static DriverInstance instance;
	
	{
		instance = DriverInstance.getInstance();
		driver = instance.getDriver();
		wait = instance.getWait();
	}
	
	@Given("^user want to Launch to the Box App$")
	public void launchBoxApp() throws Throwable {
		driver.get("https://app.box.com");
	}	
	
	
	@When("^user enter the \"([^\"]*)\" and \"([^\"]*)\" and Login to the app$")
	public void loginToApp(String uName, String pwd) throws Throwable {
	   wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='login-email']"))).sendKeys(uName);
	   wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[id='login-submit']"))).click();
	   wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[id='password-login']"))).sendKeys(pwd);
	   wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("button[id='login-submit-password']"))).click();
	}

	
}
