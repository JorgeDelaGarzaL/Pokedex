const pokeNombre = document.querySelector(`.name`)
const pokeHP = document.querySelector(`.hp`);
const pokeATK = document.querySelector(`.atk`);
const pokeDEF = document.querySelector(`.def`);
const pokeSPATK = document.querySelector(`.spatk`);
const pokeSPDEF = document.querySelector(`.spdef`);
const pokeSPEED = document.querySelector(`.speed`);
const pokeNHP = document.querySelector(`.n_hp`);
const pokeNATK = document.querySelector(`.n_atk`);
const pokeNDEF = document.querySelector(`.n_def`);
const pokeNSPATK = document.querySelector(`.n_spatk`);
const pokeNSPDEF = document.querySelector(`.n_spdef`);
const pokeNSPEED = document.querySelector(`.n_speed`);

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./PikachuSad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            pokeNombre.textContent= data[`name`].toUpperCase();
            pokeHP.textContent = data.stats[0].base_stat;
            pokeNHP.textContent = data.stats[0].stat.name;
            pokeATK.textContent = data.stats[1].base_stat;
            pokeNATK.textContent = data.stats[1].stat.name;
            pokeDEF.textContent = data.stats[2].base_stat;
            pokeNDEF.textContent = data.stats[2].stat.name;
            pokeSPATK.textContent = data.stats[3].base_stat;
            pokeNSPATK.textContent = data.stats[3].stat.name;
            pokeSPDEF.textContent = data.stats[4].base_stat;
            pokeNSPDEF.textContent = data.stats[4].stat.name;
            pokeSPEED.textContent = data.stats[5].base_stat;
            pokeNSPEED.textContent = data.stats[5].stat.name;
            
            pokeImage(pokeImg);
        }
    });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

