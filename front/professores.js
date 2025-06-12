const professores = {
  eldima: {
    name: "ELDIMA BINDÁ",
    email: "ELDIMA@XTEC.SP.GOV.BR",
    contact: "11 98888-0001",
    image: "img/edilma.png"
  },
  stephen: {
    name: "STEPHEN HAWKING",
    email: "STEPHEN@XTEC.SP.GOV.BR",
    contact: "11 97777-1234",
    image: "img/stephen hawking.jfif"
  },
  albert: {
    name: "ALBERT EINSTEIN",
    email: "ALBERT@XTEC.SP.GOV.BR",
    contact: "11 96666-4321",
    image: "img/Albert_Einstein.jpg"
  }
};

const select = document.getElementById("studentSelect");
const name = document.getElementById("studentName");
const email = document.getElementById("studentEmail");
const contact = document.getElementById("studentContact");
const image = document.getElementById("studentImage");

select.addEventListener("change", () => {
  const selected = select.value;
  const data = professores[selected];

  name.textContent = data.name;
  email.textContent = data.email;
  contact.textContent = data.contact;
  image.src = data.image;
});
