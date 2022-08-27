// import data from './data.json' assert {type: jason}

let data = {
    "currentUser": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "./images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  }


const commentsArray = data.comments;

let commentHTML = "";
let replyHTML = "";
let commentSection = document.getElementById('comment-section');

// comments
for (let i=0; i<commentsArray.length; i++) {
    let comment = commentsArray[i];
    commentHTML += `<div id='${comment.id}' class="comment">
    <div id="header" class="header">
      <img src=${comment.user.image.png} alt="avatar" id="avatar" class="avatar">
      <span class="font-header text-color-dark-blue">${comment.user.username}</span>
      <span class="font-paragraph">${comment.createdAt}</span>
    </div>
    <p class="font-paragraph">${comment.content}</p>
    <div class="score font-header">
      <input class="text-color-light-grey-blue" type="button" value="+">
      <input class="text-color-moderate-blue" type="number" value='${comment.score}' name="score" id="score">
      <input class="text-color-light-grey-blue" type="button" value="-">
    </div>
    <button type="button">
      <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <span class="font-header text-color-moderate-blue">Reply</span>
    </button>
    </div>
    <div id='reply ${comment.id}' class="reply">
  </div>`

  commentSection.innerHTML = commentHTML;


  //replies
  let replies = document.getElementById(`reply ${comment.id}`);
  const replyArray = comment.replies;

  for (let i=0; i<replyArray.length; i++) {
    let reply = replyArray[i];
    replyHTML += `<aside></aside>
    <div id='${reply.id}' class="comment">
      <div id="header" class="header">
        <img src=${reply.user.image.png} alt="avatar" id="avatar" class="avatar">
        <span class="font-header text-color-dark-blue">${reply.user.username}</span>
        <span class="font-paragraph">${reply.createdAt}</span>
      </div>
      <p class="font-paragraph">${reply.content}</p>
      <div class="score font-header">
        <input class="text-color-light-grey-blue" type="button" value="+">
        <input class="text-color-moderate-blue" type="number" value='${reply.score}' name="score" id="score">
        <input class="text-color-light-grey-blue" type="button" value="-">
      </div>
      <button type="button">
        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
        <span class="font-header text-color-moderate-blue">Reply</span>
      </button>
      </div>
      <div id='reply ${reply.id}' class="reply">
    </div>`

    replies.innerHTML = replyHTML;
  }
}