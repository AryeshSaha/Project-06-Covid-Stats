$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (res) {
    // console.log(res.Countries)

    res.Countries.map((element) => {
      let activeCases = element.TotalConfirmed - element.TotalRecovered;
      let tableRow = `<tr>
        <td> ${element.Country} </td>
        <td> ${element.TotalConfirmed} </td>
        <td> ${activeCases} </td>
        <td> ${element.TotalRecovered} </td>
        <td> ${element.TotalDeaths} </td>
        <td> ${element.Date} </td>
        </tr>`;

      $("#tbody").append(tableRow);
    });

    $("#covidtable").DataTable();

  },
  error: function (err) {
    console.log(err);
  },
});
