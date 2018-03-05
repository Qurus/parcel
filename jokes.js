//import axios from "axios";
// module.exports = {
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//             fetch('http://api.icndb.com/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//                 resolve(data.value.joke);
//             })
//         });
        
//     }
// }

export const jokes = {
    getOne: function () {
        return new Promise((resolve, reject) => {
            fetch('http://api.icndb.com/jokes/random')
            .then(res => res.json())
            .then(data => {
                resolve(data.value.joke);
            })
        });
        
    }
}

// export const jokes = {
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//             axios.get('http://api.icndb.com/jokes/random')
//                 .then(res => {
//                     resolve(res.data.value.joke);
//                 });
//         });
//     }
// }