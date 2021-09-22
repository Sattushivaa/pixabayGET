console.log('Hello World!');
function getImages(keyword = ''){
  container.innerHTML = '';
fetch('https://pixabay.com/api/?key=23486154-ada29a2174d82879d8b6b534c&q='+keyword+'&image_type=photo&pretty=true')
.then(e=>e.json())
.then(res=>{
  for(let i=0;i<res.hits.length;i+=2){
    container.innerHTML += `
    <ons-row>
      <ons-col class="col"><img src="${res.hits[i].previewURL}" /></ons-col>
      <ons-col class="col"><img src="${res.hits[i+1].previewURL||''}" alt='no image'></ons-col>
    </ons-row>
    `;
  }
  return res.hits;
}).then((dataImages)=>{
  let images = document.querySelectorAll('#container img');
  images.forEach((img,index)=>{
    let data = dataImages[index];
    img.addEventListener('click',()=>{
      img_data.style.bottom = '0px';
      img_title.innerText = data.tags;
      imageView.src = data.webformatURL;
      img_author.innerText = 'By : '+ data.user;
      img_views.innerText = data.views;
      img_likes.innerText = data.likes;
      img_downloads.innerText = data.downloads;
      let imageName = data.previewURL.split('/');
      imageName = imageName[imageName.length - 1];
     preview_size.href = data.previewURL;
     normal_size.href = data.webformatURL;
     large_size.href = data.largeImageURL;
     img_goToPage.href = data.pageURL;
    })
  })
});
}
getImages('');
img_close.addEventListener('click',()=>{
  img_data.style.bottom = '-1000px'
})
search_btn.addEventListener('click',()=>{
  getImages(search.value);
})