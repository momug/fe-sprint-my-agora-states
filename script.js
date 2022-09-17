// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion avatar__wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  //1. image
  const image = document.createElement('img')
  image.src = obj.avatarUrl;
  avatarWrapper.append(image);

  //2. content 
  const link = document.createElement('a');
  link.setAttribute('href', obj.url);
  //link.setAttribute(data-hovercard-type, "discussion")
  //link.setAttribute(data-hovercard-url, obj.url)
  link.append(obj.title);
  discussionContent.append(link);
  const author = obj.author;
  const date = new Date(obj.createdAt);
  date.toISOString('yyyy');
  const br = document.createElement("br");
  discussionContent.append(br);
  discussionContent.append(author);
  discussionContent.append(' / ')
  discussionContent.append(date.toLocaleString());

  //3. check box
  if (obj.answer === null){
    
  } else {
    const checkMark = document.createElement("p");
    checkMark.append("☑");
    const link = document.createElement("a");
    link.setAttribute("href", obj.answer.url);
    link.append(checkMark);
    discussionAnswered.append(link);
  }
  
  // <a data-hovercard-type="discussion" data-hovercard-url="/codestates-seb/agora-states-fe/discussions/338/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;discussions.click&quot;,&quot;payload&quot;:{&quot;event_context&quot;:&quot;DISCUSSIONS_LIST&quot;,&quot;target&quot;:&quot;DISCUSSION_LINK&quot;,&quot;current_repository_id&quot;:484452652,&quot;discussion_repository_id&quot;:484452652,&quot;org_level&quot;:false,&quot;discussion_id&quot;:4387118,&quot;discussion_comment_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/codestates-seb/agora-states-fe/discussions&quot;,&quot;user_id&quot;:105591495}}" data-hydro-click-hmac="1665d0f4038c52a3ca945bd35a0eb69af47e6c5b7c82eca30dff7f9e3de5c19a" href="/codestates-seb/agora-states-fe/discussions/338" data-view-component="true" class="markdown-title discussion-Link--secondary Link--primary no-underline f4 wb-break-word d-inline-block v-align-middle mr-1">
  //             unit11 유효성 검사 / (ERR_INVALID_URL)과 같은 에러가 뜹니다.</a>


  
  //answer
  //discussionAnswered.append(obj.)
  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
