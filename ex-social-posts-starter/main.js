// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
const postsList = document.querySelector("#container");
let posts = [
    {
        postId: 1,
        postAuthor: "Giulio Cesare",
        postAuthorImage: "https://picsum.photos/200/200?random=1",
        postDate: "11/05/2022",
        postText: "ciao",
        postImage: "https://picsum.photos/100/100?random=1",
        postLikes: 100,
    },
    {
        postId: 2,
        postAuthor: "Giulio Cesare",
        postAuthorImage: "https://picsum.photos/200/200?random=1",
        postDate: "11/05/2022",
        postText: "ciao",
        postImage: "https://picsum.photos/100/100?random=1",
        postLikes: 100,
    },
    {
        postId: 3,
        postAuthor: "Giulio Cesare",
        postAuthorImage: "https://picsum.photos/200/200?random=1",
        postDate: "11/05/2022",
        postText: "ciao",
        postImage: "https://picsum.photos/100/100?random=1",
        postLikes: 100,
    }
]
postsGeneration(posts,postsList);
function postsGeneration(posts,postsList){
    for(let i = 0;i < posts.length;i++){
        // console.log(posts.postAuthorImage);
        postsList.innerHTML +=
         `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].postAuthorImage}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].postAuthor}</div>
                        <div class="post-meta__time">${posts[i].postDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].postText}</div>
            <div class="post__image">
                <img src="${posts[i].postImage}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${i}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].postLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
        let likeButton = document.querySelectorAll(".like-button");
        let likeCounter = document.querySelectorAll("#like-counter-1");
        console.log(likeButton);
        console.log(likeCounter);
        likeButton[i].addEventListener("click", function(){
        event.preventDefault();
        if(likeButton.classList.contains("like-button--liked")){
            likeButton.innerHTML = posts[i].postLikes -= 1;
            likeCounter.classList.remove("like-button--liked");
        }else{
            likeButton.classList.add("like-button--liked");
            likeCounter.innerHTML = posts[i].postLikes += 1;
            console.log(posts[i].likes);
        }
    })
    }
    
}