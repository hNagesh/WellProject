#------------------------------------------------------------------------------------
# Authors : Seena                                           Reviewed By:Devi & Adil
# Date : 31/03/2022                                     
# Last Updated By:
# Last Updated On:
# Feature Name: Login to Wellcertified Page
# Feature Description: Login to Wellcertified website with the username and password
#------------------------------------------------------------------------------------
Feature: F01-WELLCertified login

    #Scenario-1
    @RegressionTest
    Scenario: Login to application with Invalid user credentials
        Given User navigate to Wellcertified page
        When User verifies login page fields
        And User enters invalid username and password
        And User clicks on Sign IN button
        Then User verifes the error message for invalid credentials
        And User login must be unsuccessful

    #Scenario-2
    @SmokeTest
    Scenario: Login to application with valid user credentials
        Given User navigate to Wellcertified page
        When User enters username and password
        And User clicks on Sign IN button
        Then User login must be successful