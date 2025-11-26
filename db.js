const firebaseConfig = {
    apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
    authDomain: "mahan-food-app.firebaseapp.com",
    projectId: "mahan-food-app",
    storageBucket: "mahan-food-app.firebasestorage.app",
    messagingSenderId: "33097873868",
    appId: "1:33097873868:web:a34866029150b96d274569",
    measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.database();

const dataFilter = []

db.ref('popularinstamart/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);

}).catch(err => {
    console.log(err.message);

})


db.ref('popularcuisines/').get('value').then((snapshot) => {
    const dataInstamart = snapshot.val();
    dataFilter.push(dataInstamart);
    console.log(dataFilter.length);



}).catch(err => {
    console.log(err.message);

})


console.log(dataFilter.length);



async function fetchs() {
    const fetchdata = await fetch('http://localhost:3000/DessertItem');
    const data1 = await fetchdata.json()
    console.log(data1);
    dataFilter.push(data1)
    
    
}

fetchs()
async function fetchs1() {
    const fetchdata = await fetch('http://localhost:3000/BiryaniItem');
    const data2 = await fetchdata.json()
    console.log(data2);
    dataFilter.push(data2)
    
    
}
fetchs1()


 const input = document.getElementById('search');
            var inputValue = input.value.toLowerCase();


            input.addEventListener('input', function (e) {
                const term = e.target.value.toLowerCase();
                const matches = [];

                if (!term) {
                    console.log([]);
                    const resultsEl = document.getElementById('results');
                    if (resultsEl) resultsEl.innerHTML = '';
                    return;
                }

                for (let i = 0; i < dataFilter.length; i++) {
                    const list = dataFilter[i];
                    if (!Array.isArray(list)) continue;
                    for (let j = 0; j < list.length; j++) {
                        const item = list[j];
                        if (!item || !item.name) continue;
                        if (item.name.toLowerCase().includes(term)) matches.push(item);
                    }
                }

                console.log(matches);

                // optional: render results if an element with id="results" exists
                const resultsEl = document.getElementById('results');
                if (resultsEl) {
                    resultsEl.innerHTML = matches.map (it => `<div>${it.name} <img src="${it.img}" width="30px" height="30px"> </div>`).join('');
                    
                }
            });
          
