const form = document.querySelector("form");
FileUpload = form.querySelector(".FileUpload");


form.addEventListener("click", () => {
  FileUpload.click();
});

FileUpload.onchange = ({ target }) => {

  document.querySelector('.DataTable').style.display= 'contents'
  document.querySelector('.text').style.display= 'none'
  

  let file = target.files;

  if (file) {
      for (let data = 0; data < file.length; data++) {
      
        let FileData = getSize(file[data].size)
        addData(file[data], FileData.size, FileData.unit);


      }

  }
  else{
  }
};

// Get FileSize
function getSize(filesize){
      
  //   Checking file size
//Filesize greater than 0 bytes and less than 1kb
if (filesize > 0 && filesize < 1024) {
  let unit = "bytes";
  let size = file[data].size
  addData(file[data], size, unit);
  return {unit:"bytes", size};
}
//Filesize greater than and equal to 1 kb and less than 1mb
else if (filesize >= 1024 && filesize < 1048576) {
  let size = filesize / 1024;
  return {unit:"kb", size};

}
//Filesize greater than equal to 1mb and less than 1GB
else if (filesize >= 1048576 && filesize < 1073741824) {
  let size = filesize / 1024 / 1024;
  return {unit:"MB", size};
}
//Filesize greater than equal to 1GB and less than 1TB
else if (filesize >= 1073741824 && filesize < 1099511627776) {
  let size = filesize / 1024 / 1024 / 1024;
  return {unit:"GB", size};
}
//Filesize greater than equal to 1TB
else if (filesize >= 1099511627776) {
  let size = filesize / 1024 / 1024 / 1024 / 1024;
  return {unit:"TB", size};
}
}


function addData(data, size, unit) {
  //   inserting rows to table
  const table = document.querySelector('.DataTable').getElementsByTagName('tbody')[0];
  let row = table.insertRow(0);
  let file_name = row.insertCell(0).innerText = data.name.split(".")[0];
  let file_extension = data.name.split(".").pop()
  let file_size = row.insertCell(1).innerText = `${size.toFixed(2)} ${unit}`;
  let file_info = row.insertCell(2);
let date = data.lastModifiedDate;
  

  file_info.innerHTML = `<p href="#" title="File Name: ${file_name}
File Size: ${file_size}
File Extension: ${file_extension}
Modified Date: ${date}">i</p>`;
}
