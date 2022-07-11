#------------------------------------------------------------------------------------
# Authors : Seena                               Reviewed By:Devi and Adil
# Date : 07/05/2022                             Reviewed On: 
# Last Updated By:
# Last Updated On:
# Feature Name: WELL Health Safety Enrollment
# Feature Description: Enrolling WELL Health Safety project
#------------------------------------------------------------------------------------
Feature: F03-WELL Health Safety Enrollment
    
    #Scenario-1
    @RegressionTest
    Scenario:WELL Health Safety page validation
        Given User logged in to the WELL certified account
        When User clicks on WELL Health-Safety from top menu under projects
        And User clicks on Start a New Project button
        And User verifies Start a New Project options
        And User clicks on Enroll Now button
        And User redirects to Enroll now page
        And User verifies Enroll now page
        And User clicks on Enrollnow button
        And User verifies Enroll now fields
        And User clicks on continue button without entering the mandatory fields and verifies error meassage
        And User enter data to Organisation field
        And User checks the Owner information checkbox
        And User selects the Organisation
        And User selects the Organisation Industry
        And User enters data to Country, State, Street address, City and Postal Code fields
        And User checks the Billing address is same as owner address checkbox
        And User clicks on continue button
        And User will be redirected to Registration page successfully
        And User verifies the added organization data by clicking on back button
        And User checks the Registration checkbox
        And User selects yes or no for Is the Owner organization an IWBI member
        And User clicks on Registration continue button
        Then User redirects to Enrollment type page successfully

    #Scenario-2
    @RegressionTest
    Scenario: Validating Enrollment type page
        Given User is on Enrollment type page
        And User verifies fields on the Enrollment type page
        When User clicks on Type two Enroll now button
        Then User redirects to locations form page successfully
        
    #Scenario-3
    @RegressionTest
    Scenario: Validating locations form page
        Given User is on locations form page
        And User verifies fields on the locations form page
        When User enters size of all enrolling locations field
        And User clicks on continue btn without entering the mandatory fields and verifies error meassage
        And User selects describe your locations from the dropdown
        And User clicks on locations form page continue button
        Then User redirects to Fees Discounts page successfully

     #Scenario-4
     @RegressionTest
     Scenario: Validating Fees Discounts page
         Given User is on Fees Discounts page
         And User verifies fields on the Fees Discounts page
         When User checks the criteria checkbox
         And User clicks on continue button for fees and discount
         Then User redirects to Terms Conditions page successfully

    #Scenario-5
    @RegressionTest
    Scenario: Validating Terms Conditions page
        Given User is on Terms Conditions page
        And User verifies fields on the Terms Conditions page
        When User selects Yes or No for Is this participation considered public field
        And User checks the Terms & Conditions checkbox and clicks on continue button
        Then User redirects to Payment page successfully

    #Scenario-6
    @RegressionTest
    Scenario: Validating Payment page
        Given User is on Payment page
        And User verifies invoice form fields
        When User enters the Card Details
        And User clicks on pay now and complete enrollment button
        # Then User will be redirected to WELL Health Safety Dashboard page successfully

    #Scenario-7
    @SmokeTest
    Scenario: WELL Health Safety Enrollment
        Given User logged in to the WELL certified account
        When User clicks on Start a New Project button
        And User clicks on Enroll Now button
        Then User redirects to Enroll now page
        And User clicks on Enrollnow button
        And User enter data to Organisation field
        And User checks the Owner information checkbox
        And User selects the Organisation
        And User selects the Organisation Industry
        And User enters data to Country, State, Street address, City and Postal Code fields    
        And User checks the Billing address is same as owner address checkbox
        And User clicks on continue button
        And User will be redirected to Registration page successfully
        And User checks the Registration checkbox
        And User selects yes or no for Is the Owner organization an IWBI member
        And User clicks on Registration continue button
        And User redirects to Enrollment type page successfully
        And User clicks on Type two Enroll now button
        And User redirects to locations form page successfully
        And User enters size of all enrolling locations field
        And User selects describe your locations from the dropdown
        And User clicks on locations form page continue button
        And User redirects to Fees Discounts page successfully
        And User checks the criteria checkbox
        And User clicks on continue button for fees and discount
        And User is on Terms Conditions page
        And User selects Yes or No for Is this participation considered public field
        And User checks the Terms & Conditions checkbox and clicks on continue button
        And User redirects to Payment page successfully
        And User enters the Card Details
        And User clicks on pay now and complete enrollment button
        Then User will be redirected to WELL Health Safety Dashboard page successfully
        And Get the WELL Health-Safety project ID and store into Json





