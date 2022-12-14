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
      <div id='header-${el.id}' class="header">
        <img src=${el.user.image.png} alt="avatar" id='avatar-${el.id}' class="avatar">
        <span class="font-header text-color-dark-blue">${el.user.username}</span>
        <span class="font-header text-white bg-blue you">you</span>
        <span class="font-paragraph text-color-light-greysh-blue">${el.createdAt}</span>
      </div>
      <p id='p-${el.id}' class="font-paragraph text-color-light-greysh-blue">${el.content}</p>
      <div id='score-${el.id}' class="score font-header">
        <input class="increase" class="text-color-light-grey-blue" type="button" value="+">
        <input class="text-color-moderate-blue" type="number" value='${el.score}' name="score" id="score">
        <input class="decrease" class="text-color-light-grey-blue" type="button" value="-">
      </div>
      <div class="buttons">
        <button type="button" id='delete-${el.id}' class="delete">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
          <span class="font-header">Delete</span>
        </button>
        <button type="button" id='edit-${el.id}' class="edit">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
          <span class="font-header text-color-moderate-blue">Edit</span>
        </button>
      </div>
      </div>
      <div id='reply-${el.id}' class="reply">
    </div>`
  }

  // function that returns other's comment's template literal
  let commentTemplateOther = (el) => {
    return `<div id='${el.id}' class="comment">
    <div id='header-${el.id}' class="header">
      <img src=${el.user.image.png} alt="avatar" id='avatar-${el.id}' class="avatar">
      <span class="font-header text-color-dark-blue">${el.user.username}</span>
      <span class="font-paragraph text-color-light-greysh-blue">${el.createdAt}</span>
    </div>
    <p class="font-paragraph text-color-light-greysh-blue">${el.content}</p>
    <div id='score-${el.id}' class="score font-header">
      <input class="increase" class="text-color-light-grey-blue" type="button" value="+">
      <input class="text-color-moderate-blue" type="number" value='${el.score}' name="score" id="score">
      <input class="decrease" class="text-color-light-grey-blue" type="button" value="-">
    </div>
    <button type="button" class="reply-button">
      <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
      <span class="font-header text-color-moderate-blue">Reply</span>
    </button>
    </div>
    <div id='reply-${el.id}' class="reply">
  </div>`
  }

const commentsArray = data.comments;
let commentHTML = "";
let commentSection = document.getElementById('comment-section');


//comment generator function
const commentFunction = (array) => {
  for (let i=0; i<array.length; i++) {
    let comment = array[i];
    if (comment.id == 4) {
      commentHTML += commentTemplateYou(comment);
    }else {
      commentHTML += commentTemplateOther(comment);
    }
      commentSection.innerHTML = commentHTML;
  }
}

commentFunction(commentsArray);

//reply generator function
const returnReplyArray = (el) => {
  let replyArray = commentsArray[el].replies;
  let replyDiv = document.getElementById(`reply-${el + 1}`);
  let replyHTML = "";
  for (let i=0; i<replyArray.length; i++) {
    let reply = replyArray[i];
    if (reply.id == 4) {
      replyHTML += commentTemplateYou(reply);
    }else{
      replyHTML += commentTemplateOther(reply);
    }
    replyDiv.innerHTML = replyHTML;
    }
  }

  returnReplyArray(1);

let sendButton = document.getElementById("send");

const replyButtons = document.getElementsByClassName("reply-button");
Array.from(replyButtons).map((reply)=>{
  reply.addEventListener("click",(event)=>{
    let replyButton = event.target;
    let parentComment = replyButton.parentNode.closest("div");
    let userNameValue = parentComment.firstElementChild.firstElementChild.nextElementSibling.textContent;
    let textArea = document.getElementById("form-input");
    textArea.value = `@${userNameValue} `;
    let end = textArea.value.length;
    textArea.setSelectionRange(end, end);
    textArea.focus();
    textArea.scrollIntoView({behavior: "smooth"});

    sendButton.addEventListener("click", (event)=>{
      event.preventDefault();
      newReplyTemplateFunction(parentComment,textArea.value);
    });
  });
});

const deleteButtons = document.getElementsByClassName("delete");
Array.from(deleteButtons).map((deleteButton)=>{
  deleteButton.addEventListener("click",(event)=>{
    let deleteButton = event.target;
    let parentComment = deleteButton.parentNode.closest("div");
    let userNameValue = parentComment.parentNode;
    userNameValue.classList.add("hidden");
  });
});

const editButtons = document.getElementsByClassName("edit");
Array.from(editButtons).map((editButton)=>{
  editButton.addEventListener("click",(event)=>{
    let editButton = event.target;
    let parentComment = editButton.parentNode.closest("div");
    let paragraph = parentComment.parentNode.firstElementChild.nextElementSibling;
    let textArea = document.getElementById("form-input");
    let end = textArea.value.length;
    textArea.setSelectionRange(end, end);
    textArea.focus();
    textArea.scrollIntoView({behavior: "smooth"});
    sendButton.addEventListener("click", (event)=>{
      event.preventDefault();
      paragraph.textContent = textArea.value;
    });
    
    console.log(paragraph);
  });
});


let timeNow = (x) =>{setInterval(myTimer(x), 1000)};
function myTimer(x) {
  const date = new Date();
  x.innerHTML = date.toLocaleTimeString();
}
console.log(timeNow);



const newReplyTemplateFunction = (parent,text)=> {
  let yourReply = commentsArray[1].replies[1];
  let replySection = document.getElementById(`reply-${parent.id}`);
  let comment = document.createElement("div");
  comment.classList.add("comment");
  replySection.appendChild(comment);
  let header = document.createElement("div");
  header.classList.add("header");
  comment.appendChild(header);
  let img = document.createElement("img");
  img.classList.add("avatar");
  img.setAttribute("src", `${yourReply.user.image.png}`);
  img.setAttribute("alt", `avatar`);
  header.appendChild(img);
  let spanOne = document.createElement("span");
  spanOne.classList.add("font-header");
  spanOne.classList.add("text-color-dark-blue");
  spanOne.textContent = yourReply.user.username;
  header.appendChild(spanOne);
  let spanTwo = document.createElement("span");
  spanTwo.classList.add("font-header");
  spanTwo.classList.add("text-white");
  spanTwo.classList.add("bg-blue");
  spanTwo.classList.add("you");
  spanTwo.textContent = "you";
  header.appendChild(spanTwo);
  let spanThree = document.createElement("span");
  spanThree.classList.add("font-paragraph");
  spanThree.classList.add("text-color-light-greysh-blue");
  header.appendChild(spanThree);
  timeNow(spanThree);
  let paragraph = document.createElement("p");
  paragraph.classList.add(`font-paragraph`);
  paragraph.classList.add(`text-color-light-greysh-blue`);
  paragraph.textContent = text;
  comment.appendChild(paragraph);
  let score = document.createElement("div");
  score.classList.add("score");
  score.classList.add("font-header");
  comment.appendChild(score);
  let inputIncrease = document.createElement("input");
  inputIncrease.classList.add("increase");
  inputIncrease.classList.add("text-color-light-grey-blue");
  inputIncrease.setAttribute("type", "button");
  inputIncrease.setAttribute("value", "+");
  score.appendChild(inputIncrease);
  let inputScore = document.createElement("input");
  inputScore.classList.add("text-color-moderate-blue");
  inputScore.setAttribute("type", "number");
  inputScore.setAttribute("value", 0);
  inputScore.setAttribute("name", "score");
  score.appendChild(inputScore);
  let inputDecrease = document.createElement("input");
  inputDecrease.classList.add("increase");
  inputDecrease.classList.add("text-color-light-grey-blue");
  inputDecrease.setAttribute("type", "button");
  inputDecrease.setAttribute("value", "-");
  score.appendChild(inputDecrease);
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");
  comment.appendChild(buttons);
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.setAttribute("type", "button");
  buttons.appendChild(deleteButton);
  deleteButton.innerHTML = `<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
  <span class="font-header">Delete</span>`;
  let editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.setAttribute("type", "button");
  buttons.appendChild(editButton);
  editButton.innerHTML = `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
  <span class="font-header text-color-moderate-blue">Edit</span>`
}

//increase a score
const addButtons = document.getElementsByClassName("increase");
Array.from(addButtons).map((addScore)=>{
  addScore.addEventListener("click",(event)=>{
    let addButton = event.target;
    let scoreBox = addButton.nextElementSibling;
    scoreBox.value = parseInt(scoreBox.value) + 1;
    addButton.classList.add("text-color-light-grey-blue");
  });
});

//decrease a score
const decreaseButtons = document.getElementsByClassName("decrease");
Array.from(decreaseButtons).map((lowerScore)=>{
  lowerScore.addEventListener("click",(event)=>{
    let decreaseButton = event.target;
    let scoreBox = decreaseButton.previousElementSibling;
    scoreBox.value = parseInt(scoreBox.value) - 1;
    decreaseButton.classList.add("text-color-light-grey-blue");
  });
});