
const memeberOnPage =  document.querySelector('.members')
const addButton = document.querySelector('.btn')


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

for (let i  = 0 ; i < team.length ; i++) {
    
    const memberpage = document.createElement(`div`);
    const member = team[i];
    memberpage.innerHTML =
    `
    <img src="assets/img/${ member.image}" alt="">
    
    <h2> ${ member.name} </h2>
    
    <h4>${ member.role}  </h4> 
    `;
    
    memberpage.classList.add( `card`, `text-center`, `mt-5`, )
    memeberOnPage.append(memberpage)
    
    
    
    console.log(member.name);
    console.log(member.role);
    console.log(member.image);
    console.log('_____________________');
    
}
console.log (team)




//prove per aggiugere qualcuno(still working on it )
/* addButton.addEventListener('click', function () {

    team.push({ //Dare la possibilità all’utente di aggiungere un membro 

        name : document.getElementById('name').value ,
        role :  document.getElementById('role').value ,
        image :  document.getElementById('img').value 
    
    })
    for (let i  = 0 ; i < team.length ; i++) {
    const memberpage = document.createElement(`div`);
    const member = team[i];
    memberpage.innerHTML =
    ` 
    <img src="assets/img/${ member.image}" alt="">

    <h1> ${ member.name} </h1>
    
    <h3>${ member.role}  </h3> 
    `;

    memberpage.classList.add( `card`, `text-center`, `mt-5`, )
    memeberOnPage.append(memberpage)
    }
    console.log(team)
    
})  */