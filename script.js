
const image = document.querySelector('img')
const h2 = document.querySelector('h2')
function toss(btn) {
  // console.log("toss" , btn);
  const randomNumber = Math.ceil(Math.random()*2)
  // console.log(randomNumber);
  if(btn === 'head' && randomNumber === 1 || btn === 'tail' && randomNumber === 2){
    // console.log("You won the toss");
    h2.innerHTML = 'You won the toss'
  }else{
    h2.innerHTML = 'You lost the toss'
  }
  if( randomNumber === 1){
    image.src = 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA0L2pvYjk2My1hLTA0NS1wLnBuZw.png'
  }else{
    image.src = 'https://media.istockphoto.com/id/1408378831/vector/thumbs-down-dislike-emoticon-emoji-cartoon-icon.jpg?s=612x612&w=0&k=20&c=0h5sVa26b5A05FkoPQ5YxmbQuxDyT-7ZryXQaEL7etI='
  }
}