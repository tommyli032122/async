const loadData = async () => {
    try {
        let url = 'https://jsonplaceholder.typicode.com/users';
        const res = await fetch(url);
        if (res.ok) {
            console.log(res.ok);
        } else {
            console.error(err);
        }
        const data = await res.json();
        console.log(data);
        data.forEach((item) => {
            console.log(item);
        });
        return data;
    } catch (error) {
        console.error(err);
    }
};

console.log(typeof loadData); 
// loadData();

const data = loadData();
console.log(data);
console.log(typeof data);


// loadData().then((data) => console.log(data));

//Not eork
// const data1 = loadData();
// for (let i = 0; i < data1.length; i++) {
//     const element = data1[i];
//     console.log(element);
// }

// const test1 = [1, 2, 3];
// for (let i = 0; i < test1.length; i++) {
//     const element = test1[i];
//     console.table(element);
// }

//Not work
// for (var key in data) {
//     console.log(key);
// }

// const test2 = ['a', 'b', 'c'];
// test2.forEach(i => {
//     console.log(i);
// });
