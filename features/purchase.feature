@wip
Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Given I login as 'standard_user'
    And I add the backpack to the cart
    And I navigate to the cart
    And I select Checkout
    And I fill in the First Name "Jane", Last Name "Doe", and Zip/Postal Code "12345"
    And I select Continue
    When I select Finish
    Then I should see the order success text "Thank you for your order!"
