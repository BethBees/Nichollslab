var data=[["Apple","Beetles",3.92],
["Bbean","Beetles",10.84],
["Raspberry","Beetles",4.23],
["Cherry","Beetles",0],
["Squash","Beetles",39.22],
["Cucumber","Beetles",26.67],
["Currants","Beetles",4.35],
["Rbean","Beetles",11.9],
["Strawberry","Beetles",14.75],
["Tomato","Beetles",2],
["Apple","Hoverflies",19.61],
["Bbean","Hoverflies",6.02],
["Raspberry","Hoverflies",12.05],
["Cherry","Hoverflies",42.86],
["Squash","Hoverflies",8.12],
["Cucumber","Hoverflies",4.44],
["Currants","Hoverflies",21.74],
["Rbean","Hoverflies",6.69],
["Strawberry","Hoverflies",15.57],
["Tomato","Hoverflies",20],
["Apple","Flies",27.45],
["Bbean","Flies",37.35],
["Raspberry","Flies",19.45],
["Cherry","Flies",28.57],
["Squash","Flies",16.53],
["Cucumber","Flies",17.78],
["Currants","Flies",41.3],
["Rbean","Flies",11.15],
["Strawberry","Flies",38.52],
["Tomato","Flies",28],
["Apple","Butterflies",0],
["Bbean","Butterflies",4.82],
["Raspberry","Butterflies",3.59],
["Cherry","Butterflies",0],
["Squash","Butterflies",4.48],
["Cucumber","Butterflies",11.11],
["Currants","Butterflies",2.17],
["Rbean","Butterflies",3.72],
["Strawberry","Butterflies",8.2],
["Tomato","Butterflies",18],
["Apple","Honeybees",25.49],
["Bbean","Honeybees",7.23],
["Raspberry","Honeybees",28.12],
["Cherry","Honeybees",0],
["Squash","Honeybees",17.37],
["Cucumber","Honeybees",11.11],
["Currants","Honeybees",26.09],
["Rbean","Honeybees",36.8],
["Strawberry","Honeybees",11.48],
["Tomato","Honeybees",10],
["Apple","Bumblebees",17.65],
["Bbean","Bumblebees",25.3],
["Raspberry","Bumblebees",26.43],
["Cherry","Bumblebees",0],
["Squash","Bumblebees",6.72],
["Cucumber","Bumblebees",13.33],
["Currants","Bumblebees",4.35],
["Rbean","Bumblebees",20.07],
["Strawberry","Bumblebees",8.2],
["Tomato","Bumblebees",16],
["Apple","Solitary_Bees",3.92],
["Bbean","Solitary_Bees",3.61],
["Raspberry","Solitary_Bees",5.71],
["Cherry","Solitary_Bees",21.43],
["Squash","Solitary_Bees",5.32],
["Cucumber","Solitary_Bees",0],
["Currants","Solitary_Bees",0],
["Rbean","Solitary_Bees",8.18],
["Strawberry","Solitary_Bees",2.46],
["Tomato","Solitary_Bees",4],
["Apple","Wasps",1.96],
["Bbean","Wasps",4.82],
["Raspberry","Wasps",0.42],
["Cherry","Wasps",7.14],
["Squash","Wasps",2.24],
["Cucumber","Wasps",15.56],
["Currants","Wasps",0],
["Rbean","Wasps",1.49],
["Strawberry","Wasps",0.82],
["Tomato","Wasps",2]]



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
                        .text("Citizen Scientist Data");

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


