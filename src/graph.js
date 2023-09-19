
export function plotSkills(data){

    let xValues = Object.keys(data);
    let yValues = Object.values(data);

    new Chart("skills-graph", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Skills in job posts"
          }
        }
      });
}

export function plotCompanies(data){

    let xValues = Object.keys(data);
    let yValues = Object.values(data);

    const myChart = new Chart("companies-graph", 
        {
            type: 'bar',
            data: {
                labels: xValues,
                datasets: [{
                    data: yValues
                }]
            }
        }
    )
    
}

export function plotLocations(data){

    let xValues = Object.keys(data);
    let yValues = Object.values(data);

    const myChart = new Chart("locations-graph", 
        {
            type: 'bar',
            data: {
                labels: xValues,
                datasets: [{
                    data: yValues
                }]
            }
        }
    )
    
}