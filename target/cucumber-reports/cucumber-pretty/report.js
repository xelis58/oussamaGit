$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/AddingProductstoTheShoppingCart.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Scenarios for adding products to the shopping cart",
  "description": "",
  "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "SDET2019AUG_SDET_005_Execution",
  "description": "",
  "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SDET_005"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on a product category on the blue bar menu we can use the link: - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on: - Add to cart -, beneath the picture of the \u0027\u003cn\u003e\u0027 th product in the list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Users click on a product category on the blue bar menu we can use the link :  - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on a product s picture of the \u0027\u003cn\u003e\u0027 th product in the list",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see a product detailed list with a blue button : - Add to cart - on the right side",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User click on the blue button : Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;",
  "rows": [
    {
      "cells": [
        "n"
      ],
      "line": 22,
      "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 23,
      "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 24,
      "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 25,
      "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4492960200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 4946796400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1131632800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 9441400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "SDET2019AUG_SDET_005_Execution",
  "description": "",
  "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SDET_005"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on a product category on the blue bar menu we can use the link: - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on: - Add to cart -, beneath the picture of the \u00271\u0027 th product in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Users click on a product category on the blue bar menu we can use the link :  - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on a product s picture of the \u00271\u0027 th product in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see a product detailed list with a blue button : - Add to cart - on the right side",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User click on the blue button : Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop()"
});
formatter.result({
  "duration": 6098360100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 60
    }
  ],
  "location": "ShoppingCartStepDefinition.user_click_on_Add_to_cart_beneath_the_picture_of_the_n_th_product_in_the_list(int)"
});
formatter.result({
  "duration": 5499657900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added",
      "offset": 27
    }
  ],
  "location": "ShoppingCartStepDefinition.user_should_see_a_message_Success_You_have_added(int)"
});
formatter.result({
  "duration": 1181000,
  "error_message": "cucumber.deps.com.thoughtworks.xstream.converters.ConversionException: Couldn\u0027t convert \"Success: You have added\" to an instance of: [class java.lang.Integer, int]\n---- Debugging information ----\n-------------------------------\r\n\tat cucumber.runtime.xstream.ConverterWithFormat.transform(ConverterWithFormat.java:31)\r\n\tat cucumber.runtime.xstream.ConverterWithNumberFormat.transform(ConverterWithNumberFormat.java:18)\r\n\tat cucumber.runtime.xstream.ConverterWithNumberFormat.transform(ConverterWithNumberFormat.java:8)\r\n\tat cucumber.api.Transformer.fromString(Transformer.java:91)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.SingleValueConverterWrapper.fromString(SingleValueConverterWrapper.java:41)\r\n\tat cucumber.runtime.ParameterInfo.convert(ParameterInfo.java:164)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:68)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n\tat ✽.Then User should see a message \u0027Success: You have added\u0027(Features/AddingProductstoTheShoppingCart.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.users_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 42
    }
  ],
  "location": "ShoppingCartStepDefinition.user_click_on_a_product_s_picture_of_the_n_th_product_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_should_see_a_product_detailed_list_with_a_blue_button_Add_to_cart_on_the_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_click_on_the_blue_button_Add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added",
      "offset": 27
    }
  ],
  "location": "ShoppingCartStepDefinition.user_should_see_a_message_Success_You_have_added(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3132179600,
  "status": "passed"
});
formatter.before({
  "duration": 3419660000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 4195442300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1100716900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 8250200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "SDET2019AUG_SDET_005_Execution",
  "description": "",
  "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SDET_005"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on a product category on the blue bar menu we can use the link: - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on: - Add to cart -, beneath the picture of the \u00272\u0027 th product in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Users click on a product category on the blue bar menu we can use the link :  - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on a product s picture of the \u00272\u0027 th product in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see a product detailed list with a blue button : - Add to cart - on the right side",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User click on the blue button : Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop()"
});
formatter.result({
  "duration": 6041301900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 60
    }
  ],
  "location": "ShoppingCartStepDefinition.user_click_on_Add_to_cart_beneath_the_picture_of_the_n_th_product_in_the_list(int)"
});
formatter.result({
  "duration": 5232307200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added",
      "offset": 27
    }
  ],
  "location": "ShoppingCartStepDefinition.user_should_see_a_message_Success_You_have_added(int)"
});
formatter.result({
  "duration": 319000,
  "error_message": "cucumber.deps.com.thoughtworks.xstream.converters.ConversionException: Couldn\u0027t convert \"Success: You have added\" to an instance of: [class java.lang.Integer, int]\n---- Debugging information ----\n-------------------------------\r\n\tat cucumber.runtime.xstream.ConverterWithFormat.transform(ConverterWithFormat.java:31)\r\n\tat cucumber.runtime.xstream.ConverterWithNumberFormat.transform(ConverterWithNumberFormat.java:18)\r\n\tat cucumber.runtime.xstream.ConverterWithNumberFormat.transform(ConverterWithNumberFormat.java:8)\r\n\tat cucumber.api.Transformer.fromString(Transformer.java:91)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.SingleValueConverterWrapper.fromString(SingleValueConverterWrapper.java:41)\r\n\tat cucumber.runtime.ParameterInfo.convert(ParameterInfo.java:164)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:68)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n\tat ✽.Then User should see a message \u0027Success: You have added\u0027(Features/AddingProductstoTheShoppingCart.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.users_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "ShoppingCartStepDefinition.user_click_on_a_product_s_picture_of_the_n_th_product_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_should_see_a_product_detailed_list_with_a_blue_button_Add_to_cart_on_the_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_click_on_the_blue_button_Add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added",
      "offset": 27
    }
  ],
  "location": "ShoppingCartStepDefinition.user_should_see_a_message_Success_You_have_added(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3088813500,
  "status": "passed"
});
formatter.before({
  "duration": 3461542100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 4202606000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1212152700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 7511700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "SDET2019AUG_SDET_005_Execution",
  "description": "",
  "id": "tek-school-scenarios-for-adding-products-to-the-shopping-cart;sdet2019aug-sdet-005-execution;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SDET_005"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on a product category on the blue bar menu we can use the link: - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on: - Add to cart -, beneath the picture of the \u00273\u0027 th product in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Users click on a product category on the blue bar menu we can use the link :  - Show All Desktop -",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User click on a product s picture of the \u00273\u0027 th product in the list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see a product detailed list with a blue button : - Add to cart - on the right side",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User click on the blue button : Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should see a message \u0027Success: You have added\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop()"
});
formatter.result({
  "duration": 5898054400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 60
    }
  ],
  "location": "ShoppingCartStepDefinition.user_click_on_Add_to_cart_beneath_the_picture_of_the_n_th_product_in_the_list(int)"
});
formatter.result({
  "duration": 5242439700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added",
      "offset": 27
    }
  ],
  "location": "ShoppingCartStepDefinition.user_should_see_a_message_Success_You_have_added(int)"
});
formatter.result({
  "duration": 561800,
  "error_message": "cucumber.deps.com.thoughtworks.xstream.converters.ConversionException: Couldn\u0027t convert \"Success: You have added\" to an instance of: [class java.lang.Integer, int]\n---- Debugging information ----\n-------------------------------\r\n\tat cucumber.runtime.xstream.ConverterWithFormat.transform(ConverterWithFormat.java:31)\r\n\tat cucumber.runtime.xstream.ConverterWithNumberFormat.transform(ConverterWithNumberFormat.java:18)\r\n\tat cucumber.runtime.xstream.ConverterWithNumberFormat.transform(ConverterWithNumberFormat.java:8)\r\n\tat cucumber.api.Transformer.fromString(Transformer.java:91)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.SingleValueConverterWrapper.fromString(SingleValueConverterWrapper.java:41)\r\n\tat cucumber.runtime.ParameterInfo.convert(ParameterInfo.java:164)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:68)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n\tat ✽.Then User should see a message \u0027Success: You have added\u0027(Features/AddingProductstoTheShoppingCart.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.users_click_on_a_product_category_on_the_blue_bar_menu_we_can_use_the_link_Show_All_Desktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 42
    }
  ],
  "location": "ShoppingCartStepDefinition.user_click_on_a_product_s_picture_of_the_n_th_product_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_should_see_a_product_detailed_list_with_a_blue_button_Add_to_cart_on_the_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShoppingCartStepDefinition.user_click_on_the_blue_button_Add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added",
      "offset": 27
    }
  ],
  "location": "ShoppingCartStepDefinition.user_should_see_a_message_Success_You_have_added(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1185805100,
  "status": "passed"
});
});