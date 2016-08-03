var searchField = $('#searchTerm').val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  	'api-key': "fa607c4986f24638bedb37201c733c0c",
  	'q': + searchField,
		'begin_date': "20050101",
		'end_date': "20160101"
});
$.ajax({
	url: url,
	method: 'GET',
}).done(function(result) {
	console.log(result);
	var articles = result.response.docs;
		
	$.each(articles, function(key) {
		var $articleDiv = $('<div>')
			.append($('<h1>').html(articles[key].headline.main))
			.append(articles[key].lead_paragraph);
		$articleDiv.appendTo('#topArticles');
	});		
	
	

}).fail(function(err) {
  throw err;
});