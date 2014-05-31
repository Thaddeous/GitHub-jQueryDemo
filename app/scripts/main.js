'use strict';

// var gives a name to the below function where we are
		// creating a template to be reusable 
var showRepos = _.template ($('.showRepos').text());

// passing repoData provided by the getJSON through the function repoData
// what are you doing at Grandmas house? (choreslist)
function renderRepo(repoData) {

	// we are using forEach to look over all information
	// (list of chores) look at all
	repoData.forEach(function(repo) {
		
		// render sets the data out and gets it ready
		// the whole reason we have a function is to get an answer
		// the answer to the for Each function is called rendered. 
		var rendered = showRepos(repo);
		
		// append (appendix) directly relates to what your doing. 
		// like a book on cats wouldnt have an appendix of dog info/data
		$('.repo-container').append(rendered);
	});
}
// "getJSON" is the jQuery or Ajax thing that is pulling info into my js file.
// .done tells the line that its done reading and can then run the other data so
// that no errors log to the screen. Once its done we are basically saying move on 
// to the next line which is a function. That function is our main function which we called
// data and are telling our js.file to "run data" (essentially?).
// go to grandmas house (heres how to get there) onc youve gotten there do something. 
$.getJSON('https://api.github.com/users/thaddeous/repos?client_id=fb4ae8de02da978f9ef8&client_secret=1523ebb3f72512aeeec8b19bad5b0f3918e77778').done(function(data){
	renderRepo(data);
});


function getUserInfo(data) {
    var userInfo = _.template($('.getUserInfo').text());
    var rendered = userInfo(data);
    $('.right-banner-container-body').append(rendered);
}



$.getJSON('https://api.github.com/users/thaddeous?client_id=fb4ae8de02da978f9ef8&client_secret=1523ebb3f72512aeeec8b19bad5b0f3918e77778').done(function(data){
	getUserInfo(data);
});





