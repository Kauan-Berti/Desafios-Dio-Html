function mostrarSection(id, botao) {
  const section = document.getElementById(id);

  let textoTemporada = "";


  switch (id) {
    case "temporada1":
      textoTemporada = "1ª temporada";
      break;
    case "temporada2":
      textoTemporada = "2ª temporada";
      break;
    case "temporada3":
      textoTemporada = "3ª temporada";
      break;
    case "temporada4":
      textoTemporada = "4ª temporada";
      break;
    case "temporada5":
      textoTemporada = "5ª temporada";
      break;
    case "temporada6":
      textoTemporada = "6ª temporada";
      break;
    case "temporada7":
      textoTemporada = "7ª temporada";
      break;
    default:
      textoTemporada = "8ª temporada";
  }

  // Alterna visibilidade
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    botao.innerText = `❌Ocultar Trailer ${textoTemporada}`;
  } else {
    section.style.display = "none";
    botao.innerText = `🎞️Mostrar Trailer ${textoTemporada}`;
  }
}


function changeTheme(theme) {

  if (theme === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');

    
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode'); 

  }
}

window.addEventListener('DOMContentLoaded', () => {
  const selectedTheme = document.querySelector('input[name="tema"]:checked').value;
  changeTheme(selectedTheme);
});

let searchField = document.getElementById('buscar');
let descriptionObjects = document.getElementsByClassName('conteudo');

// Guardar o texto original de cada elemento
let originalTexts = [];

for (let i = 0; i < descriptionObjects.length; i++) {
    originalTexts.push(descriptionObjects[i].innerHTML);
}

function realizaBusca(buscador) {
    for (let i = 0; i < descriptionObjects.length; i++) {
        let textToSearch = originalTexts[i];
        if (!buscador) {
            descriptionObjects[i].innerHTML = textToSearch;
            continue;
        }
        const regex = new RegExp(`(${buscador})`, 'gi');
        const highlighted = textToSearch.replace(regex, `<mark>$1</mark>`);
        descriptionObjects[i].innerHTML = highlighted;
    }
}

searchField.addEventListener('keyup', (e) => realizaBusca(e.target.value));

