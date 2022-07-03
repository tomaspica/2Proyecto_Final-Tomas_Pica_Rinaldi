let favoritos;

if(JSON.parse(localStorage.getItem('favoritos'))) {
  favoritos = JSON.parse(localStorage.getItem('favoritos'))
} else {
  localStorage.setItem('favoritos', JSON.stringify([]))
  favoritos = JSON.parse(localStorage.getItem('favoritos'))
}

const body = document.getElementById('favContainer');
if (favoritos.length == 0) {
    const texto = `
    <div class='favContainer'>
        <h1 class='txtFavoritos'>No hay favoritos</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;        
    body.innerHTML += texto;    
} else {
    const titulo = `
    <div class'favContainer'>
        <h1 class='txtFavoritos'>Favoritos</h1>
    </div>`;
    body.innerHTML += titulo;
    const table = `    
    <div class="tableContainer">
    <table>
        <thead>
            <tr>
                <th></th>
                <th class="txtTabla">AUTOS</th>
                <th class="txtTabla">PRECIO</th>
            </tr>
        </thead>
        <Tbody id="tbody">
        </Tbody>
    </table>
    </div>
     <div class="btn-container">
        <button id="btnBorrar" class="btnBorrar"> BORRAR FAVORITOS</button>
    </div>
    <div>
    <a class='btnVolver' href='index.html'>
        <button>VOLVER</button>
    </a>
    </div`;
    body.innerHTML += table
    const tbody = document.getElementById('tbody')
    for (let i = 0; i < favoritos.length; i++) {
        const element = favoritos [i];
        const { id, auto, precio, img, cantidad } = element;
        const fav = `
        <tr id=${id}>
            <th><img class="trash" src="./img/basura.png" height="50px" alt="basura" srcset=""></th>
            <th class="detallesTabla"><img class="imgAutoFav" height="200px" src="${img}" alt="auto"><span class="nombreauto">${auto}</span></th>
            <th>${cantidad}</th>
            <th>$${(cantidad * precio).toLocaleString()}</th>
        </tr>
        `
        tbody.innerHTML += fav;
        }
        
    
    /* const btnBorrar = document.getElementsByClassName('btnBorrar')
    for(let i =0; i < btnBorrar.length ; i++){
        btnBorrar[i].addEventListener("click", BorrarFavoritos)}
        function BorrarFavoritos(e) {
            const btn = e.target
            const btnBorrar = btn.getElementsByClassName('btnBorrar')
            
        } */
        let BorrarFavoritos = document.getElementById("btnBorrar");
        BorrarFavoritos.onclick = () => {
        favoritos = []
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }
         
}