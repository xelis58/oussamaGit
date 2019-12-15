package pageObjects;


import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.Base;

public class ShoppingCartPageObject extends Base {
	
	
	public ShoppingCartPageObject() {
		PageFactory.initElements(driver, this);
	}

//	@FindBy(how = How.XPATH, using = "//a[text()='Desktops']")
//	private WebElement bigCategoryDesktop;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='Laptops & Notebooks']")
//	private WebElement bigCategoryLaptopsNotebooks;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='Components']")
//	private WebElement bigCategoryComponents;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='Tablets']")
//	private WebElement bigCategoryTablets;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='Software']")
//	private WebElement bigCategorySoftware;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='Phones & PDAs']")
//	private WebElement bigCategoryPhonesPDAs;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='Cameras']")
//	private WebElement bigCategoryCameras;
//	
//	@FindBy(how = How.XPATH, using = "//a[text()='MP3 Players']")
//	private WebElement bigCategoryMP3Players;
	
	@FindBy(how = How.XPATH, using = "//a[text() = 'Desktops']")
	private WebElement DesktopLink;
	
	@FindBy(how = How.XPATH, using = "//a[text() = 'Show All Desktops']")
	private WebElement ShowAllDesktopLink;
	
	@FindBy(how = How.XPATH, using = "//img[@class = 'img-responsive']")
	private List<WebElement> products;
	
	@FindBy(how = How.XPATH, using = "//span[text()='Add to Cart']")
	private static List<WebElement> addToCart;
	
	@FindBy(how = How.XPATH, using = "//button[text()='Add to Cart']")
	private WebElement blueButtonAddToCart;
	
	@FindBy(how = How.XPATH, using = "//*[text()=' Success: You have added ']")
	private WebElement messageAddingToCartSuccessful;
	
	private static int n;
	
	public void clickOnShowAllDesktopLink() {
		try {
			Actions actions = new Actions(driver);
			actions.moveToElement(DesktopLink).build().perform();
			ShowAllDesktopLink.click();
		}
		catch(ElementNotInteractableException e){
			Actions actions = new Actions(driver);
			actions.moveToElement(DesktopLink).build().perform();
			ShowAllDesktopLink.sendKeys(Keys.ENTER);
					}
	}
	
	public void clickingOnTheLabelAddToCart(int n) {
		try {
		Assert.assertEquals(true, addToCart.get(n).isDisplayed());
		addToCart.get(n).click();
		}
		catch(ElementNotInteractableException e){
			Assert.assertEquals(true, addToCart.get(n).isDisplayed());
			addToCart.get(n).sendKeys(Keys.ENTER);
		}
	}
	
	public void clickingOnTheProductImagesintheList() {
				
		try {
			Assert.assertEquals(true, products.get(n).isDisplayed());
			products.get(n).click();
			}
			catch(ElementNotInteractableException e){
				Assert.assertEquals(true, products.get(n).isDisplayed());
				products.get(n).sendKeys(Keys.ENTER);
			}
	
	}
		
	public boolean message(int n) {
		boolean confirmationtext = messageAddingToCartSuccessful.isDisplayed();
		if(confirmationtext == false)
		{driver.navigate().back();}
		return confirmationtext;
	}
	
	public boolean checkingTheExistanceOfTheBlueButton() {
		boolean confirmationButton = blueButtonAddToCart.isDisplayed();
		return confirmationButton;
	}
	
	public void clickTheBlueButtonAddToCart() {
		try {
			blueButtonAddToCart.click();
		}
		catch(ElementNotInteractableException e){
			blueButtonAddToCart.sendKeys(Keys.ENTER);
					}
	}
}
