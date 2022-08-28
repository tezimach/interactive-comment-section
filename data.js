//import data from './data.json' assert {type: jason}

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

// function that returns your comment's template literal
  let commentTemplateYou = (el) => {
      return`<div id='${el.id}' class="comment">
      <div id="header" class="header">
        <img src=${el.user.image.png} alt="avatar" id="avatar" class="avatar">
        <span class="font-header text-color-dark-blue">${el.user.username}</span>
        <span class="font-header text-white bg-blue you">you</span>
        <span class="font-paragraph text-color-light-greysh-blue">${el.createdAt}</span>
      </div>
      <p class="font-paragraph text-color-light-greysh-blue">${el.content}</p>
      <div id="score" class="score font-header">
        <input class="increase" class="text-color-light-grey-blue" type="button" value="+">
        <input class="text-color-moderate-blue" type="number" value='${el.score}' name="score" id="score">
        <input class="decrease" class="text-color-light-grey-blue" type="button" value="-">
      </div>
      <div class="buttons">
        <button type="button" id="delete">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
          <span class="font-header">Delete</span>
        </button>
        <button type="button" id="edit">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
          <span class="font-header text-color-moderate-blue">Edit</span>
        </button>
      </div>
      </div>
      <div id='reply ${el.id}' class="reply">
    </div>`
  }

  // function that returns other's comment's template literal
  let commentTemplateOther = (el) => {
    return `<div id='${el.id}' class="comment">
    <div id="header" class="header">
      <img src=${el.user.image.png} alt="avatar" id="avatar" class="avatar">
      <span class="font-header text-color-dark-blue">${el.user.username}</span>
      <span class="font-paragraph text-color-light-greysh-blue">${el.createdAt}</span>
    </div>
    <p class="font-paragraph text-color-light-greysh-blue">${el.content}</p>
    <div id="score" class="score font-header">
      <input class="increase" class="text-color-light-grey-blue" type="button" value="+">
      <input class="text-color-moderate-blue" type="number" value='${el.score}' name="score" id="score">
      <input class="decrease" class="text-color-light-grey-blue" type="button" value="-">
    </div>
    <button type="button">
      <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <span class="font-header text-color-moderate-blue">Reply</span>
    </button>
    </div>
    <div id='reply ${el.id}' class="reply">
  </div>`
  }

const commentsArray = data.comments;
let commentHTML = "";
let replyHTML = "";
let commentSection = document.getElementById('comment-section');

//function that runs through array and 
//builds comments and replies based on it in html file
//by template literal.
const commentFunction = (array) => {
  for (let i=0; i<array.length; i++) {
    let comment = array[i];
    if (comment.id == 4) {
      commentHTML += commentTemplateYou(comment);
    }else {
      commentHTML += commentTemplateOther(comment);
  commentSection.innerHTML = commentHTML;
    }

  //replies
  let replies = document.getElementById(`reply ${comment.id}`);
  const replyArray = comment.replies;

  for (let i=0; i<replyArray.length; i++) {
    let reply = replyArray[i];
    if (reply.id == 4) {
      replyHTML += commentTemplateYou(reply);
    }else{
    replyHTML += commentTemplateOther(reply);
    }
    replies.innerHTML = replyHTML;
    }
  }
}

commentFunction(commentsArray);

//increase a score
const addButtons = document.getElementsByClassName("increase");
Array.from(addButtons).map((addScore)=>{
  addScore.addEventListener("click",(event)=>{
    let addButton = event.target;
    let scoreBox = addButton.nextElementSibling;
    scoreBox.value = parseInt(scoreBox.value) + 1;
  });
});

//decrease a score
const decreaseButtons = document.getElementsByClassName("decrease");
Array.from(decreaseButtons).map((lowerScore)=>{
  lowerScore.addEventListener("click",(event)=>{
    let decreaseButton = event.target;
    let scoreBox = decreaseButton.previousElementSibling;
    scoreBox.value = parseInt(scoreBox.value) - 1;
  });
});

    