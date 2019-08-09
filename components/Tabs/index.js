// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
window.addEventListener('load', (e)=>{ 
    const container = document.querySelector('.topics');
    //console.log(container);


    const tabItem = axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then ((response) => {
            //console.log(response);
            let tabdata = response.data.topics.map(item=>item);
            tabdata.forEach (item => {
                container.appendChild(TabsBar(item))
            })
            //data pass in
            // let firstTab = TabsBar(tabdata[0]);
            // let secondTab = TabsBar (tabdata[1]);
            // let thirdTab = TabsBar (tabdata [2]);
            // let forthTab = TabsBar (tabdata [3]);
            // let fifthTab = TabsBar (tabdata [4]);
            // //add components to topics class
            //  container.appendChild(firstTab);
            //  container.appendChild(secondTab);
            //  container.appendChild(thirdTab);
            //  container.appendChild(forthTab);
            //  container.appendChild(fifthTab);
         })

        .catch((err) => {
            console.log(err);
        });
        

    function TabsBar (topic) { 
        //add element
        let tab = document.createElement("div")
        
        //add class
        tab.classList.add ('tab')

        //Text content
        tab.textContent = topic;

    return tab;
    }
}) //close window