$(document).ready(function (){
  
$('#searchButton').click(searchRepositories() )

function searchRepositories(){
  let term = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data)) }) 
    
}
  
  
});
