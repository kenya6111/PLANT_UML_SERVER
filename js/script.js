
var jsonData;
console.log('fetch始まり')
fetch('../problem.json')
  .then(response => response.json())
  .then(data => {
    console.log('jsonファイルの内容:');
    console.log(data);
    jsonData = data;
    createTable(jsonData);
  })
  .catch(error => {
    console.error('エラー:', error);
  });

// async function getJson () {
//   const res = await fetch('../problem.json');
//   jsonData = await res.json();
//   console.log(jsonData+'bbb')
//  }
// console.log('fetch終わり')
// console.log(jsonData+'aaa')
//   console.log(data.employee.name);
//   console.log(data.employee.favoriteColor[2]);
//   console.log(data.employee.siblings);
//   console.log(data.employee.siblings.Liza);
//----------------------------------------------

  // const jsonData = require('../problem.json');
  // const url = "../problem.json";
  // var data2 = JSON.parse(JSON.stringify(jsonData));

function createTable(jsonData){
  // tableを作成
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
  
  table.appendChild(thead);
  table.appendChild(tbody);
  //1行目
  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
      heading_1.innerHTML = 'ID';
  let heading_2 = document.createElement('th');
      heading_2.innerHTML = 'Title';
  let heading_3 = document.createElement('th');
      heading_3.innerHTML = 'Theme';
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);

  //2行目以降
  for (let i = 0; i < jsonData.length; i++){
      console.log("i は= " + i);
      let row= document.createElement('tr');
          row.setAttribute("class", "clickable-row");
          row.setAttribute("data-id", i);
      let row_data_1 = document.createElement('td');
            row_data_1.innerHTML = jsonData[i].id;
      let row_data_2 = document.createElement('td');
            row_data_2.innerHTML = jsonData[i].title;
      let row_data_3 = document.createElement('td');
            row_data_3.innerHTML = jsonData[i].theme;
      row.appendChild(row_data_1);
      row.appendChild(row_data_2);
      row.appendChild(row_data_3);
      tbody.appendChild(row);
  } 

  thead.appendChild(row_1);
  // Adding the entire table to the body tag
  document.getElementById('maintable').appendChild(table);

  addRowClickEvent(jsonData);
}

function addRowClickEvent(jsonData) {
  // テーブルの行がクリックされたときのイベントリスナーを設定
  const rows = document.querySelectorAll('.clickable-row');
  rows.forEach(row => {
    row.addEventListener('click', function() {
      const problemId = this.getAttribute('data-id');
      const title = jsonData[problemId].title;
      const theme = jsonData[problemId].theme;
      const uml = jsonData[problemId].uml;
      window.location.href = `../problem_detail.php?id=${problemId}&title=${encodeURIComponent(title)}&theme=${encodeURIComponent(theme)}&uml=${encodeURIComponent(uml)}`;
    });
  });
};



