// let li = document.querySelectorAll('ul li');
// let del = document.querySelectorAll('ul button')


/*
// css display none
for(let item of del){
  console.log(item.parentElement);
  item.addEventListener('click',()=>{
    item.parentElement.style.display = 'none';
  });
}
*/





function stringToHTML(str) {
  var range = document.createRange();
  range.selectNode(document.body);
  return range.createContextualFragment(str);
}

let targetIdx = 0;
document.querySelector('form')
.addEventListener('submit',(e)=>{
  e.preventDefault();
  let val = e.target.todo.value;
  console.log(val);
  let targetLi = `
  <li>
    <input type="checkbox" name="todo" id="list${targetIdx}">
    <label for="list${targetIdx}" class="circle"></label>
    <label for="list${targetIdx}">${val}</label>
    <button>삭제</button>
  </li>
  `;
  let target = stringToHTML(targetLi);
  document.querySelector('ul').append(target);
  e.target.todo.value = '';
  targetIdx++;
})


window.onload = ()=>{
  let li = document.querySelectorAll('ul li');
  let del = document.querySelectorAll('ul button');

  // removeChild
  del.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
      let ul = item.closest('ul');
      let target = li[idx];
      console.log(target);
      ul.removeChild(target);
    });
  });
}

// 2023-11-27 1차 시도
// 혼자서 만들어보는 todoList
// 문제점. ul 태그에 내용을 입력하면 li태그로 만들어지나 삭제버튼이 먹지 않음.
// 원인. 처음부터 만들어진 내용이 아닌 submit 후에 만들어진 node라 그런듯.
// 해결. 그래서 window.onload를 사용해봤는데 이게 아니던가?

// 문제2. function stringToHTML이 모두 내 머리에서 나온 코드가 아님. 
// createRange, selectNode, createContextualFragment 모두 초면..
// 문자열을 node로 바꾸는 방법이나 입력한 내용을 li로 append하는 방법을 다시 생각해봐야 될듯.!