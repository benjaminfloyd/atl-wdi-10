# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
1. User enters a "URL" in their browser
2. Browser makes a request for that URL
3. HTTP request is sent to the host & the machine waits to get a response back.
4. Host server processes the request: • headers, • GET, POST, PUT,... methods
5. browser receives the response with a html document.



### Question 2: What are the differences between a GET request and a POST request?

Get request is pulling information/data from the host server.

Post request is adding data to the host server.


### Question 3: What does `npm init` do?

This will ask you a bunch of questions, and then write a package.json for you

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
Create Read Update Delete
Post   Get  Put    Delete

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  
Put/Update

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
Update/put a 'name' to...

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

router.post('/menus', function (req, res) {
  res.redirect('/homepage');
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){ res.send(req.params.id)
  
}
```

### Question 9: What is MVC? How have we been using it so far? 
Model View Controller
We have been using the MVC to view and control data in express apps.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

router.get('/products' function(req, res){
  req.baseUrl?????
}
