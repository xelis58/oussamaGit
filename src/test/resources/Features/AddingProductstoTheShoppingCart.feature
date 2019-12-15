
Feature: Tek School Scenarios for adding products to the shopping cart

  Background: 
    Given User is on TekSchool page
    And User Click on Test Environment link
    And User should see Test Environment page

  @SDET_005
  Scenario Outline: SDET2019AUG_SDET_005_Execution
    When User click on a product category on the blue bar menu we can use the link: - Show All Desktop -
    And User click on: - Add to cart -, beneath the picture of the '<n>' th product in the list
    Then User should see a message 'Success: You have added'
		When Users click on a product category on the blue bar menu we can use the link :  - Show All Desktop -
    And User click on a product s picture of the '<n>' th product in the list
    Then User should see a product detailed list with a blue button : - Add to cart - on the right side
    And User click on the blue button : Add to cart
    Then User should see a message 'Success: You have added'
    

	Examples:
      | n  |
      | 1	 |
      | 2	 |
      | 3	 |
      