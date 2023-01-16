const posts = [
    {
        id:4,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        heart:'heart'
    },
    {
        id:5,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        heart:'heart'
    },
        {
            id:6,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        heart:'heart'
    }
]

let isLiked=false

function postGenerate(){
   posts.map(post =>
   document.getElementById('post').innerHTML+=`
   <div class='containerr'>
         <div class='user'>
                        <img class='user-img' src=${post.avatar}>
                        
                        <div>
                            <h3>${post.name}</h3>
                            <p>${post.location}<p>
                        </div>
                            
                </div>
                    
                <img  ondblclick={likeAdd(${post.likes},${post.id})} class='user-post' src='${post.post}'>
                <div class='icon'>
                    <img id=${post.id+1} onclick={likeAdd(${post.likes},${post.id})}
                            src='images/icon-heart.png'>
                            <img src='images/icon-comment.png'>
                            <img src='images/icon-dm.png'>
                </div>
                <div class="comment-like">
                        <h2 id=${post.id-2}> ${post.likes} likes</h2>
                        <p><span>${post.username}</span> ${post.comment}</p>
                </div> 
        </div>`)

  

}
postGenerate()

/*****************Add Like****&***Change heart image***** */

function likeAdd(like,id){
    console.log('cliked')
    
    isLiked = !isLiked
    console.log(isLiked)
if(isLiked){
    document.getElementById(id-2).innerText=`${like +1} likes`
    document.getElementById(id+1).src='images/heart.png'
    
}else{
    document.getElementById(id-2).innerText=`${like} likes`
    document.getElementById(id+1).src='images/icon-heart.png'
    
}
 
}