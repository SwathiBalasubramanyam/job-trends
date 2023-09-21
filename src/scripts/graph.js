
export function plotGraph(data, domId, displayText, num){
    let data_sorted = Object.fromEntries(Object.entries(data).sort((a, b) => b[1]-a[1]).slice(0, num))
    let xValues = Object.keys(data_sorted);
    let yValues = Object.values(data_sorted);
    let backgroundColors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff']

    let graphBackgroundColors = []
    while (graphBackgroundColors.length <= num){
        graphBackgroundColors = graphBackgroundColors.concat(backgroundColors)
    }

    // if(domId === "skills-graph"){
    //   return
    // }

    new Chart(domId, {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: graphBackgroundColors.slice(0,num),
            data: yValues,

          }]
        },
        options: {
          title: {
            display: true,
            text: displayText
          }
        }
      });
}