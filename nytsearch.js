var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "fa607c4986f24638bedb37201c733c0c",
  'q': "economics"
});
$.ajax({
	url: url,
	method: 'GET',
}).done(function(result) {
	console.log(result);
}).fail(function(err) {
  throw err;
});