const photoWrapper=document.querySelector('.photo-wrapper')
const modal=document.querySelector('.modal')
const selectedImage=document.getElementById('selected-image')
const imageIndex=[1,2,3]
let selectedIndex=null;

imageIndex.forEach(i=>{
  const image=document.createElement('img')
  image.src=`./images/photo${i}.jpg`
  image.classList.add('galleryImg')
  photoWrapper.appendChild(image)

  image.addEventListener('click', ()=>{
    modal.style.transform='translateY(0)';
    selectedImage.src=`./images/photo${i}.jpg`;
    
  })
})

modal.addEventListener('click', ()=>{
  modal.style.transform='translateY(-100%)'
  selectedImage.src=''
})




