import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
features = {"E:/A Selenium Thorough/Java-WorkSpace/CucumberParallelJan19/CucumberParallelJan19/src/test/resources/features/CreateDeleteUsingDataTables.feature"},
plugin = {"json:target/cucumber-parallel/2.json", "html:target/cucumber-parallel/2.html"},
monochrome = false,
 tags = {"@bookmarkExampleScenario,@bookmarkDataTableScenario"}, glue = { "com.stepDefinition" })
public class Parallel02IT {
}
