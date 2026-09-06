// var arr = [
//     {
//     user: 'Sathi',
//     age:30,
//     city:'kolkata',
    
// },
// {
//     user: 'Ridhi',
//     age:25,
//     city:'Sigapur'
// },
// {
//     user: 'Sopu',
//     age:20,
//     city:'Mumdai',
    
// },
// {
//     user: 'Rupu',
//     age:18,
//     city:'Dehli',
    
// },
// {
//     user: 'Opu',
//     age:22,
//     city:'Chennai',
    
// }
// ] 

// console.log(arr[1].age)

//-------------------------------

// var arr = [10,20,30,40]
// var sum = 0
// arr.forEach(function(elem){
//    sum = sum + elem
// })
// console.log(sum);
//--------------------------------
// var sum = 0

// arr.forEach(function(elem){
//     sum = sum + elem.age
// })
// console.log(sum/arr.length);

//------------------------

const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    profession: "Frontend Developer",
    description:
      "Passionate frontend developer who loves building beautiful and responsive web applications.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },

  {
    fullName: "Priya Mehta",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    profession: "UI/UX Designer",
    description:
      "Creative UI/UX designer focused on creating simple, modern, and user-friendly digital experiences.",
    tags: ["Figma", "UI Design", "UX", "Prototyping"]
  },

  {
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    profession: "Backend Developer",
    description:
      "Backend developer who enjoys working with APIs, databases, and scalable server-side applications.",
    tags: ["Node.js", "Express", "MongoDB", "API"]
  },

  {
    fullName: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    profession: "Data Analyst",
    description:
      "Data analyst who turns complex datasets into meaningful insights and business decisions.",
    tags: ["Python", "SQL", "Excel", "Power BI"]
  },

  {
    fullName: "Aditya Singh",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    profession: "Full Stack Developer",
    description:
      "Full stack developer passionate about building complete web applications from frontend to backend.",
    tags: ["React", "Node.js", "JavaScript", "MongoDB"]
  }
];

var sum = ''

users.forEach(function(elem){
    sum = sum + `  <div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

var main = document.querySelector('main')

main.innerHTML = sum