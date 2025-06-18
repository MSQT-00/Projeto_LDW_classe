/**
 * @fileoverview Data module containing information about students and teachers
 * @module data/people
 */

export const people = {
  students: {
    ned: {
      id: 'ned',
      name: "NED LEEDS",
      email: "NED@XTEC.SP.GOV.BR",
      contact: "11 99876-5432",
      image: "/assets/images/needfoto.jpeg",
      type: 'student'
    },
    mj: {
      id: 'mj',
      name: "MICHELLE JONES",
      email: "MJ@XTEC.SP.GOV.BR",
      contact: "11 91234-5678",
      image: "/assets/images/mjfoto.jpeg",
      type: 'student'
    },
    peter: {
      id: 'peter',
      name: "PETER PARKER",
      email: "PETER@XTEC.SP.GOV.BR",
      contact: "11 90000-0000",
      image: "/assets/images/peterparkerfoto.webp",
      type: 'student'
    }
  },
  teachers: {
    eldima: {
      id: 'eldima',
      name: "ELDIMA BINDÁ",
      email: "ELDIMA@XTEC.SP.GOV.BR",
      contact: "11 98888-0001",
      image: "/assets/images/edilma.png",
      type: 'teacher'
    },
    stephen: {
      id: 'stephen',
      name: "STEPHEN HAWKING",
      email: "STEPHEN@XTEC.SP.GOV.BR",
      contact: "11 97777-1234",
      image: "/assets/images/stephen_hawking.jpg",
      type: 'teacher'
    },
    albert: {
      id: 'albert',
      name: "ALBERT EINSTEIN",
      email: "ALBERT@XTEC.SP.GOV.BR",
      contact: "11 96666-4321",
      image: "/assets/images/albert_einstein.jpg",
      type: 'teacher'
    }
  }
}; 