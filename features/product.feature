Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline:  Validate product sort by price <sortBy>
    Given I login as 'standard_user'
    When I sort products by '<sortBy>'
    Then I log details of elements with test id "inventory-item-name"

  Examples:
    # TODO: extend the datatable to paramterize this test
    | sortBy | 
    | Price (high to low)| 
    | Price (low to high) |
	  | Name (A to Z)| 
    | Name (Z to A)|