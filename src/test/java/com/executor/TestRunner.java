package com.executor;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.driver.DriverInstance;
import com.github.mkolisnyk.cucumber.runner.AfterSuite;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features",
				glue="com.stepDefinition",
				tags="@bookmarkExampleScenario",
				monochrome=true
				)
//,tags={"@Scenario2"
public class TestRunner {
	
	@AfterSuite
	public void afterSuite() {
		System.out.println("quitting browsers from ouytside");
		DriverInstance.getInstance().getDriver().quit();
	}

}
