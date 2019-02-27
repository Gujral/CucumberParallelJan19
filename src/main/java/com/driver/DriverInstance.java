package com.driver;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.CapabilityType.ForSeleniumServer;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverInstance {

	private static DriverInstance instance;
	private WebDriver driver;
	private WebDriverWait wait;

	private DriverInstance(String browser, int nodePort) {
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setBrowserName(browser);
		capabilities.setCapability("platform",Platform.WINDOWS);
		capabilities.setCapability(ForSeleniumServer.PROXYING_EVERYTHING, true);
		capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
		capabilities.setCapability(CapabilityType.SUPPORTS_ALERTS, true);
		capabilities.setCapability(CapabilityType.SUPPORTS_JAVASCRIPT, true);
		capabilities.setCapability("marionette", true);
//		if(browser.equalsIgnoreCase("firefox"))
//			driver = new FirefoxDriver();
//		if(browser.equalsIgnoreCase("chrome"))
//			driver = new ChromeDriver();
		try {
			driver = new RemoteWebDriver(new URL("http://localhost:"+nodePort+"/wd/hub"), capabilities);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		wait = new WebDriverWait(driver, 30);

	}

	public static void setInstance(String browser, int nodePort) {
		DriverInstance.instance = new DriverInstance(browser, nodePort);
	}

	public static DriverInstance getInstance() {
		return instance;
	}

	public WebDriver getDriver() {
		return driver;
	}

	public WebDriverWait getWait() {
		return wait;
	}

}
