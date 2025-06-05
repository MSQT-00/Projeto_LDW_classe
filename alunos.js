const students = {
  ned: {
    name: "NED LEEDS",
    email: "NED@XTEC.SP.GOV.BR",
    contact: "11 99876-5432",
    image: "img/needfoto.jpeg"
  },
  mj: {
    name: "MICHELLE JONES",
    email: "MJ@XTEC.SP.GOV.BR",
    contact: "11 91234-5678",
    image: "img/mjfoto.jpeg"
  },
  peter: {
    name: "PETER PARKER",
    email: "PETER@XTEC.SP.GOV.BR",
    contact: "11 90000-0000",
    image: "img/peterparkerfoto.webp"
  }
};

const select = document.getElementById("studentSelect");
const name = document.getElementById("studentName");
const email = document.getElementById("studentEmail");
const contact = document.getElementById("studentContact");
const image = document.getElementById("studentImage");

select.addEventListener("change", () => {
  const selected = select.value;
  const data = students[selected];

  name.textContent = data.name;
  email.textContent = data.email;
  contact.textContent = data.contact;
  image.src = data.image;
});
