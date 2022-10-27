const api_posts = "https://jsonplaceholder.typicode.com/posts";

async function getUsertable() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => generateHtml(data));
}

const generateHtml = (data) => {

    const tableHead = document.querySelector("thead");
    const tableBody = document.querySelector("tbody");
    const contentsBody= document.querySelector("span")
    tableHead.innerHTML="<tr></tr>";
    tableBody.innerHTML="";
    
  let result = Object.values(data);
   let result1 = Object.keys(data[0]).filter(
    (x) => x !== "address" && x !== "company"
  );  //removed address and company from the array 

  result1.push("posts")
  console.log(result)
  for(const item of result1){
    const headerElement = document.createElement("th")
   console.log(item)
    headerElement.textContent = item;
    tableHead.querySelector("tr").appendChild(headerElement);}
      
 
  
 for(const item of result ){


const bodyElement = document.createElement("tr")

  Object.values(item).filter(x=>typeof x !== "object").map((item)=>{
     
    const cellElement = document.createElement("td")
      cellElement.textContent=item;
    
    bodyElement.appendChild(cellElement)
   
    console.log(cellElement)
        
 
})



 const button = document.createElement("button")
 button.textContent="click" 
 button.className=`${item.id}`
 button.id=`btn`
 
 



function showPosts(categoryId){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => postsContents(data));
  
  function postsContents(data){
  
   const post =  data.filter(x=> x.userId === parseInt(categoryId))
   
    post.map(x=>{
   
    const head = document.createElement("div")
    head.className="head"
    head.textContent=x.title
    const body = document.createElement("p")
    body.textContent=x.body
    console.log(head,body)
    contentsBody.appendChild(head,body)
    
   
})  


  }


 }

 const newTd = document.createElement("td")
 newTd.append(button)
 bodyElement.append(newTd)

 bodyElement.querySelector("button").addEventListener("click", function(e) {
    contentsBody.innerHTML=""
     const categoryId = e.currentTarget.className;
     showPosts(categoryId)
    
})

tableBody.appendChild(bodyElement)
   


}
    

};





getUsertable();

// window.addEventListener("DOMContentLoaded", function () {
//   displayButtons();
// });

// function displayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} class="photo" alt=${item.title} />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");

//   sectionCenter.innerHTML = displayMenu;
// }

// function displayButtons() {
//   const btns = users
//     .map(function (eachUsers) {
//       // console.log(menuItem)
//       return `<button class="filter-btn" type="button" data-id=${eachUsers.id}>${eachUsers.title}</button>`;
//     })
//     .join("");
//   container.innerHTML = btns;

//   const filterBtns = container.querySelectorAll(".filter-btn");

//   filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const categoryId = e.currentTarget.dataset.id;
//       //console.log(categoryId)
//       const menuCategory = menu.filter(function (menuItem, index) {
//         // console.log(menuItem)
//         //console.log(index)
//         if (menuItem.id == categoryId) {
//           //console.log(menuItem);
//           return menuItem;
//         }
//       });
//       displayMenuItems(menuCategory);
//     });
//   });
// }
