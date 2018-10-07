 'use strict'

 const createPostCard = function(postElement){

  //select element
  let divPost = document.querySelector('.post');
 
  //create element
  let img = document.createElement('img');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let a = document.createElement('a');
 
  //add class
  img.classList.add('post__image');
  h2.classList.add('post__title');
  p.classList.add('post__text');
  a.classList.add('button');
 
  //add atribute
  img.setAttribute('src', postElement.img);
  img.setAttribute('alt','post image');
  a.setAttribute('href', postElement.link);
 
  //paste textContent
  h2.textContent = postElement.title;
  p.textContent = postElement.text;
  a.textContent = 'Read more';
 
  //paste element
   divPost.append(img);
   img.after(h2);
   h2.after(p);
   p.after(a);
 
  }
 
    const posts = [
     {
       img: "https://placeimg.com/400/150/arch",
       title: "Post title 1",
       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
       link: 'link-1.com'
     },
     {
       img: "https://placeimg.com/400/150/nature",
       title: "Post title 2",
       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
       link: 'link-2.com'
     },
     {
       img: "https://placeimg.com/400/150/arch",
       title: "Post title 3",
       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
       link: 'link-3.com'
     }
   ];
 
   const createCards = function(posts){
         for(let i  of posts){
          createPostCard(i);
        }
 };
 

  createCards(posts);