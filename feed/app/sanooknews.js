let url = 'https://www.posttoday.com/rss/src/breakingnews.xml';
const textarea = document.querySelector('#feed-textarea > ul');
var space = '     ';
const date = new Date();
//document.querySelector('#date').innerHTML = date.toDateString();

function toThaiDateString(date) {
  let monthNames = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
    "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
    "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`;
}
let today = new Date();
let date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

//document.querySelector('#display-date').innerHTML = toThaiDateString(date);
console.log(toThaiDateString(date));

feednami.load(url)
  .then(feed => {
    textarea.value = ''
    console.log(feed);
    for (let entry of feed.entries) {



      
      //create a list element
      let li = document.createElement('li');
      //add HTML content to list items
      li.innerHTML = `
      
      
      <a href="${entry.link}" class="font-newsbar"> ***** ${entry.description}
       </a> 
      
         
      `;
      //append HTML content to list 
      textarea.appendChild(li);
    }
  });

  /*

  <div class="blog-ext-img-content uk-feed-mixcont-border uk-ext-margin15"> ${entry.description}
  </div>

*/