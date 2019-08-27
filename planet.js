var planet = [];

fetch ('https://swapi.co/api/planets/')
.then (function(response){
    return response.json();
})
.then(function(json){
    planet = json.results
    f_showData(planet)
})

function f_filter() {
    var q = document.getElementById('filter').value;
    data = planet.filter(function(planet) {
        return planet.name.toLowerCase().includes(q) || planet.rotation_period.includes(q) || planet
    });
    f_showData(data)
}

function f_showData(planet) {
    var tr, td;
    var tbody = document.getElementById("tBody")
    tbody.innerHTML = '';

    for (var i = 0; 1<planet.length;i++){
        tr = tbody.InsertRow(tbody.rows.length);
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = i+1;
        td = tr.InsertCell(tr,cells,length);
        td.innerHTML = planet[i].name;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].rotation_period;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].orbital_period;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].diameter;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].climate;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].gravity;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].terrain;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].surface_water;
        td = tr.InsertCell(tr.cells.length);
        td.setAttribute("align", "center");
        td.innerHTML = planet[i].population;

    }
}