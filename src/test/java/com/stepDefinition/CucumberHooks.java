package com.stepDefinition;

import java.util.ArrayList;

import org.openqa.selenium.WebDriver;

import com.driver.DriverInstance;
import com.github.mkolisnyk.cucumber.runner.AfterSuite;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class CucumberHooks {
	public static boolean newBrowser = false;
	public static String browserName;
	//ArrayList<WebDriver> browserList = new ArrayList<WebDriver>();
	@Given("^start browser \"([^\"]*)\" on node port (\\d+)$")
	public void browser_is(String browser, int nodePort) throws Throwable {
		if(browserName==null){
			DriverInstance.setInstance(browser,nodePort);
		//	browserList.add(DriverInstance.getInstance().getDriver());
			browserName = browser;
		}
		if(browserName!=null && !browserName.equals(browser)) {
			DriverInstance.setInstance(browser, nodePort);
		//	browserList.add(DriverInstance.getInstance().getDriver());
			browserName = browser;
		}
	System.out.println("Browser is "+browser+"---------");
		
	}
	
	@Before
	public void beforeScenario(Scenario sc) {
		System.out.println(sc.getName());
	}
	
	@AfterSuite
	public void afterSuite() {
		System.out.println("quitting browsers from ouytside");
//		for(WebDriver driver: browserList) {
//			System.out.println("quitting browsers");
//			driver.quit();
//		}
	}
	
}
