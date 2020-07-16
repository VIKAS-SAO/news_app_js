 


  async function fetcher(){
const url = 'https://gnews.io/api/v3/search?q=example&token=57ffd4c4e19719fb2d42dfb06e993ef4'
     var data =  await ( await fetch(url)).json(); 
         // console.log(data.articles) 

         for(var index=0;index<data.articles.length;index++){
                    
                // console.log( document.querySelector('body').innerHTML)
                var item = data.articles[index]
                var image='image_default.png';
                if(item.image!=null){
                    image = item.image;
                } 
            document.body.innerHTML+= `  
           <a href="${item.url}" > <div class="head" style="background-image:url(${ image})">
                    <div class="title" >${item.title}</div>  
            </div> </a> 
            <div  class="desc"  >
                    ${item.description}
            </div>  
            ` 
         }
        
 
              
          
          //console.log(document.body) 
        

 }

 fetcher()

 














































 
// fetch("https://devru-times-of-india.p.rapidapi.com/feeds/feedurllist.cms?catagory=city", {
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-host": "devru-times-of-india.p.rapidapi.com",
// 		"x-rapidapi-key": "eaa5769072mshf767d60b0bafc16p1fc4c7jsnc4adf6145e2d"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });



// fetch("https://sportspage-feeds.p.rapidapi.com/games", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
// 		"x-rapidapi-key": "eaa5769072mshf767d60b0bafc16p1fc4c7jsnc4adf6145e2d"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// }); 