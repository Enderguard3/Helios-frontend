import axios from "axios";


export const getGames = () => {
    axios.get('http://uqergft:8000/Entreprise/Games', {
        token: "qidfbhgmqofnmqiefnbqngqielfbmqoirfn"
    })
        .then(res => {return res})
        .catch(err => console.log(err))

    return null
}

/*
res :

[{
    name: "iqjdfdbg",
    desc: "mkqjhfrqdfljhdqfbg",
    prix: 45
}]
 */