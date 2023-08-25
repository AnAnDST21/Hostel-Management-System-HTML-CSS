const apikey="cd7c2dab674063d321c2503040e479e8";
const apiEndpoint="https://api.themoviedb.org/3";
const apiPaths ={
  fetchAllCategories:`${apiEndpoint}/movie/550?api_key=${apikey}`
}
function init(){
  fetchBuildAllSections();
}
function fetchAndBuildAllSection(){
  fetch(apiPaths.fetchAllCategories)
  .then(res=> res.json())
  .then(res=>{
    const categories= res.genres;
    if(Array.isArray(categories)&& categories.length){
      movies.forEach(category =>{
        fetchAndbuildMovieSection(category);
    });
    }
    //console.table(movies);
  })
  .catch(err=> console.error(err));
}
function fetchAndbuildMovieSection(category){
  console.log(category);
}
window.addEventListener('load', function(){
  init();
})
