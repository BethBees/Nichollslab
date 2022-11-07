var data=[["Apple","Beetles",4.26],
["Bbean","Beetles",11.11],
["Raspberry","Beetles",2.74],
["Cherry","Beetles",0],
["Squash","Beetles",40],
["Cucumber","Beetles",31.43],
["Currants","Beetles",4.55],
["Rbean","Beetles",12.92],
["Strawberry","Beetles",15.15],
["Tomato","Beetles",2.94],
["Apple","Hoverflies",17.02],
["Bbean","Hoverflies",3.7],
["Raspberry","Hoverflies",11.69],
["Cherry","Hoverflies",42.86],
["Squash","Hoverflies",7.94],
["Cucumber","Hoverflies",2.86],
["Currants","Hoverflies",22.73],
["Rbean","Hoverflies",4.58],
["Strawberry","Hoverflies",12.12],
["Tomato","Hoverflies",14.71],
["Apple","Flies",27.66],
["Bbean","Flies",44.44],
["Raspberry","Flies",15.42],
["Cherry","Flies",28.57],
["Squash","Flies",16.18],
["Cucumber","Flies",22.86],
["Currants","Flies",40.91],
["Rbean","Flies",8.75],
["Strawberry","Flies",42.42],
["Tomato","Flies",29.41],
["Apple","Butterflies",0],
["Bbean","Butterflies",3.7],
["Raspberry","Butterflies",3.73],
["Cherry","Butterflies",0],
["Squash","Butterflies",4.41],
["Cucumber","Butterflies",0],
["Currants","Butterflies",2.27],
["Rbean","Butterflies",3.75],
["Strawberry","Butterflies",8.08],
["Tomato","Butterflies",23.53],
["Apple","Honeybees",27.66],
["Bbean","Honeybees",0],
["Raspberry","Honeybees",32.34],
["Cherry","Honeybees",0],
["Squash","Honeybees",17.94],
["Cucumber","Honeybees",8.57],
["Currants","Honeybees",27.27],
["Rbean","Honeybees",40.83],
["Strawberry","Honeybees",11.11],
["Tomato","Honeybees",14.71],
["Apple","Bumblebees",17.02],
["Bbean","Bumblebees",29.63],
["Raspberry","Bumblebees",27.11],
["Cherry","Bumblebees",0],
["Squash","Bumblebees",6.47],
["Cucumber","Bumblebees",17.14],
["Currants","Bumblebees",2.27],
["Rbean","Bumblebees",18.75],
["Strawberry","Bumblebees",9.09],
["Tomato","Bumblebees",8.82],
["Apple","Solitary_Bees",4.26],
["Bbean","Solitary_Bees",5.56],
["Raspberry","Solitary_Bees",6.47],
["Cherry","Solitary_Bees",21.43],
["Squash","Solitary_Bees",5.59],
["Cucumber","Solitary_Bees",0],
["Currants","Solitary_Bees",0],
["Rbean","Solitary_Bees",9.17],
["Strawberry","Solitary_Bees",2.02],
["Tomato","Solitary_Bees",5.88],
["Apple","Wasps",2.13],
["Bbean","Wasps",1.85],
["Raspberry","Wasps",0.5],
["Cherry","Wasps",7.14],
["Squash","Wasps",1.47],
["Cucumber","Wasps",17.14],
["Currants","Wasps",0],
["Rbean","Wasps",1.25],
["Strawberry","Wasps",0],
["Tomato","Wasps",0]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked':'#3366CC','Beetles':'rgb(56,43,61)','Hoverflies':'rgb(56,43,61)','Flies':'rgb(56,43,61)','Butterflies':'rgb(56,43,61)','Honeybees':'rgb(56,43,61)','Bumblebees':'rgb(56,43,61)','Solitary_Bees':'rgb(56,43,61)','Wasps':'rgb(56,43,61)'};




var g1 = svg.append("g").attr("transform","translate(217,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(1)
                         .height(400)
                         .width(200)
                         .barSize(35)
                         .fill(d=>color[d.secondary])
.sortSecondary(sort(["Bumblebees","Honeybees","Solitary_Bees","Beetles","Flies","Hoverflies","Wasps","Butterflies"]))
.orient("vertical");

g1.call(bp1);g1.append("text")
                        .attr("x",-50).attr("y",-8)
                        .style("text-anchor","middle")
                        .text("Crops");
                        g1.append("text")
                        .attr("x", 250)
                        .attr("y",-8).style("text-anchor","middle")
                        .text("Visitors");
                        g1.append("text")
                        .attr("x",100).attr("y",-25)
                        .style("text-anchor","middle")
                        .attr("class","header")
                        .text("N/A");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -32:35.6))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -165:198))
                        .attr("y",d=>+6)
                        .text(function(d){ return d3.format("0.0%")(d.percent)})
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start")); 

function mouseover(d){
bp1.mouseover(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}

                     function mouseout(d){
bp1.mouseout(d);
                            g1.selectAll(".mainBars")
                            .select(".perc")
                            .text(function(d){ return d3.format("0.0%")(d.percent)});
}


