 var url = context.getVariable("target.url")
 var customerId = context.getVariable("google.dialogflow.session.parameters.cust_id")
 context.setVariable("target.url", url + "/" + customerId);
 var df = context.getVariable("google.dialogflow")
 var lang = context.getVariable("google.dialogflow.session")
 var num2 = context.getVariable("google.dialogflow.fulfillment.tag")
 print(df)
 print(lang)
 print(num2)