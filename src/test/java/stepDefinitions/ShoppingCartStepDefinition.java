package stepDefinitions;

import java.lang.annotation.Repeatable;

import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebElement;

import core.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.ShoppingCartPageObject;

public class ShoppingCartStepDefinition extends Base{

	ShoppingCartPageObject shoppingCartPageObject = new ShoppingCartPageObject();
	
	@When("^User click on a product category on the blue bar menu we can use the link: - Show All Desktop -$")
	public void user_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop() throws Throwable {
		shoppingCartPageObject.clickOnShowAllDesktopLink(); 
		Thread.sleep(5000);
	}

	@And("^User click on: - Add to cart -, beneath the picture of the '(.+)' th product in the list$")
	public void user_click_on_Add_to_cart_beneath_the_picture_of_the_n_th_product_in_the_list(int n) throws Throwable {
				
				shoppingCartPageObject.clickingOnTheLabelAddToCart(n);
				Thread.sleep(5000);
		}
	
	@Then("^User should see a message '(.+)'$")
	public void user_should_see_a_message_Success_You_have_added(int n) throws Throwable {
	   
		shoppingCartPageObject.message(n);
		Thread.sleep(5000);
	}

	@When("^Users click on a product category on the blue bar menu we can use the link :  - Show All Desktop -$")
	public void users_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop() throws Throwable {
		shoppingCartPageObject.clickOnShowAllDesktopLink();
	}

	@And("^User click on a product s picture of the '(.+)' th product in the list$")
	public void user_click_on_a_product_s_picture_of_the_n_th_product_in_the_list() throws Throwable {
		shoppingCartPageObject.clickingOnTheProductImagesintheList();
	}

	@Then("^User should see a product detailed list with a blue button : - Add to cart - on the right side$")
	public void user_should_see_a_product_detailed_list_with_a_blue_button_Add_to_cart_on_the_right_side() throws Throwable {
	    
		shoppingCartPageObject.checkingTheExistanceOfTheBlueButton();
	    
	}

	@And("^User click on the blue button : Add to cart$")
	public void user_click_on_the_blue_button_Add_to_cart() throws Throwable {

		shoppingCartPageObject.clickTheBlueButtonAddToCart();
	    
	}

	
}
