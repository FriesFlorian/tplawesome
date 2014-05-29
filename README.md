tplawesome is a light and easy to use template engine.

The only thing it does is replacing {{keys}} from an HTML template with formatted JSON data

## Requirements

None

## Documentation

As this projects is a single javascript function, you wan either import the file directly or copy it in your project.

## Usage examples

Here are some examples of what you could do with tplawesome :

* Basic
```tplawesome("Hello {{name}}!", [{"name":"John", }]); // returns "Hello John!"```

* From an HTML file (with a jQuery ajax call)
```$.ajax({
    url:"your/awesome/template.html", 
    success: function(tpl){
      $("body").append(tplawesome(tpl, [{'id':"84684", 'title':"What a nice day!", 'date':"2014", }]));
    }
});```

