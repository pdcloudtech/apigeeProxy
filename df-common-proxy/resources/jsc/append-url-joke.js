 var url = context.getVariable("target.url")
 var type = context.getVariable("google.dialogflow.session.parameters.joke-type")
 context.setVariable("target.url", url + "/" + type);
 var df = context.getVariable("google.dialogflow")
 var lang = context.getVariable("google.dialogflow.session")
 var num2 = context.getVariable("google.dialogflow.fulfillment.tag")
// print(JSON.stringify(df, null, 3))
 print(lang)
 print(num2)