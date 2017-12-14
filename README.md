tplawesome is a light and easy to use template engine.

The only thing it does is replacing {{keys}} from an HTML template with formatted JSON data

## Requirements

Awesome requirements :D 

## Documentation

As this project is a single javascript function, you can either import the file directly or copy it in your project.

## Usage examples

Here are some examples of what you could do with tplawesome :

* Basic
```tplawesome("Hello {{name}}!", [{"name":"John", }]); // returns "Hello John!"```

* From an HTML file (with a jQuery ajax call)
```html
<article>
	<header>
		<h1>{{title}}</h1>
		<p>Article #{{id}} Published on <time pubdate="pubdate">{{date}}</time></p>
	</header>
	<p>...</p>
</article>
```

```javascript
$.ajax({
    url:"your/awesome/template.html", 
    success: function(tpl){
      $("body").append(tplawesome(tpl, [{"id":"84684", "title":"What a nice day!", "date":"2014-04-04", }]));
    }
});
```

