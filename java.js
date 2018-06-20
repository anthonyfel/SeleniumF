import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Salesforce {

	public static void main(String[] args) throws InterruptedException {
 
		//selenium code -
		//Set system property to Chrome webdriver
		System.setProperty("webdriver.chrome.driver", "/Users/anthonyfel/Documents/Selenium Work/chromedriver");
		//Create Driver Object Class name = X, X driver - new X();
		WebDriver driver =new ChromeDriver();
		
		driver.get("https://www.path2usa.com/travel-companions");
		
		driver.findElement(By.xpath("//input[@id='travel_date']")).click();
		
		Thread.sleep(3000);
	
		List<WebElement> Mnth=driver.findElements(By.cssSelector("[class='datepicker-days'][class='datepicker-switch']"));
		int Mcnt = driver.findElements(By.cssSelector("[class='datepicker-days'][class='datepicker-switch']")).size();
		
		for (int j=0; j<Mcnt; j++)
		{
			
			String temptextM = Mnth.get(j).getText();
			if (temptextM.equalsIgnoreCase("May"))
			{
				Mnth.get(j).click();
		
			}
		}
		
		Thread.sleep(3000);

		List<WebElement> Dates= driver.findElements(By.cssSelector(".day"));
		int count = driver.findElements(By.cssSelector(".day")).size();
		for (int i=0; i<count; i++)
		{
			
			String temptext = driver.findElements(By.cssSelector(".day")).get(i).getText();
			if (temptext.equalsIgnoreCase("29"))
			{
				driver.findElements(By.cssSelector(".day")).get(i).click();
				break;
			}
		}	
		
		driver.close();
		
	}
