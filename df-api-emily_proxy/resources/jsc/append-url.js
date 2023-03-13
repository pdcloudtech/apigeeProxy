 var url = context.getVariable("target.url")
 var customerId = context.getVariable("google.dialogflow.df-pd-prefix.session.parameters.cust_id")
 context.setVariable("target.url", url + "/" + customerId);
 //context.setVariable("request.verb", "GET");