// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        //console.log(response)
        response.json().then( function(json) {
            const div = document.getElementById("container");
            let sorted = json.sort((a,b)=>{
                return a.hoursInSpace < b.hoursInSpace ? 1 : -1
            })
            let temp = `<div>We have ${json.length} astronauts!</div>`
            
                for (let i=0; i<json.length; i++) {
                    let color = 'black';
                    if (json[i].active) {
                       color = 'green'
                       
                    }
                    temp += `
                       <div class="astronaut">
                           <div class="bio">
                               <h3>${json[i].firstName} ${json[i].lastName}</h3>
                               <ul>
                                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                                  <li style="color:${color}">Active: ${json[i].active}</li>
                                  <li>Skills: ${json[i].skills.join(", ")}</li>
                               </ul>
                           </div>
                           <img class="avatar" src="	${json[i].picture}">
                       </div>
                    `;
                    div.innerHTML = temp;
                    
                }
        });
    });
});

