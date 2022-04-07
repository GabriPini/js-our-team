
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
addButton.addEventListener('click', function () {

    team.push({ //Dare la possibilità all’utente di aggiungere un membro 

        name : document.getElementById('name').value ,
        role :  document.getElementById('role').value ,
/*         image :  document.getElementById('img').value , */ 
    
    })
    const memberpage = document.createElement(`div`);
    let addmember = team[team.length - 1];
    memberpage.innerHTML =
    ` 
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f80b6e3-05fc-4af2-a638-a32ce20652db/d2uixi9-0df6dc1d-8373-419a-a592-dc82d628d86f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmODBiNmUzLTA1ZmMtNGFmMi1hNjM4LWEzMmNlMjA2NTJkYlwvZDJ1aXhpOS0wZGY2ZGMxZC04MzczLTQxOWEtYTU5Mi1kYzgyZDYyOGQ4NmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0YzfCBLJZTWaMaOwyT3vwEKj_JM3JkJYNHt3MarRPUE" class = "h_600 " alt="">

    <h2> ${ addmember.name} </h2>
    
    <h3>${ addmember.role}  </h3> 
    `;

    memberpage.classList.add( `card`, `text-center`, `mt-5`, )
    memeberOnPage.append(memberpage)
    }
    
    
) 