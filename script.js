(function () {
  fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then((res) => res.json())
    .then((data) => {
      for (let z = 0; z < data.states.length; z++) {
        var label = document.createElement("label");
        label.innerHTML = data.states[z].state_name;
        var input = document.createElement("input");
        var breaks = document.createElement("BR");
        input.type = "radio";
        input.name = data.states[z].state_name;
        input.value = data.states[z].state_id;
        document.createElement("BR");
        document.body.appendChild(label);
        document.body.appendChild(input);
        document.body.appendChild(breaks);
      }

      // console.table(data.states);
    });
})();
