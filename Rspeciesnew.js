var data=[["Apple","Beetles",5.52],
["Raspberry","Beetles",3.63],
["Broad Bean","Beetles",2.86],
["Cherry","Beetles",1.47],
["Squash","Beetles",55.5],
["Cucumber","Beetles",83.87],
["Currants","Beetles",0],
["Runner Bean","Beetles",0],
["Strawberry","Beetles",16.36],
["Tomato","Beetles",0],
["Apple","Hoverflies",8.28],
["Raspberry","Hoverflies",1.64],
["Broad Bean","Hoverflies",14.29],
["Cherry","Hoverflies",29.41],
["Squash","Hoverflies",3.04],
["Cucumber","Hoverflies",0],
["Currants","Hoverflies",9.8],
["Runner Bean","Hoverflies",6.25],
["Strawberry","Hoverflies",20],
["Tomato","Hoverflies",0],
["Apple","Flies",15.86],
["Raspberry","Flies",1.06],
["Broad Bean","Flies",5.71],
["Cherry","Flies",8.82],
["Squash","Flies",2.11],
["Cucumber","Flies",3.23],
["Currants","Flies",27.45],
["Runner Bean","Flies",0],
["Strawberry","Flies",34.55],
["Tomato","Flies",0],
["Apple","Butterflies",0.69],
["Raspberry","Butterflies",0.12],
["Broad Bean","Butterflies",0],
["Cherry","Butterflies",0],
["Squash","Butterflies",0],
["Cucumber","Butterflies",1.61],
["Currants","Butterflies",0],
["Runner Bean","Butterflies",0.69],
["Strawberry","Butterflies",1.82],
["Tomato","Butterflies",0],
["Apple","A.mellifera",33.79],
["Raspberry","A.mellifera",43.73],
["Broad Bean","A.mellifera",5.71],
["Cherry","A.mellifera",26.47],
["Squash","A.mellifera",29.98],
["Cucumber","A.mellifera",3.23],
["Currants","A.mellifera",9.8],
["Runner Bean","A.mellifera",56.25],
["Strawberry","A.mellifera",0],
["Tomato","A.mellifera",20],
["Apple","Solitary_Bees",19.31],
["Raspberry","Solitary_Bees",3.05],
["Broad Bean","Solitary_Bees",2.86],
["Cherry","Solitary_Bees",16.18],
["Squash","Solitary_Bees",2.34],
["Cucumber","Solitary_Bees",1.61],
["Currants","Solitary_Bees",9.8],
["Runner Bean","Solitary_Bees",1.39],
["Strawberry","Solitary_Bees",23.64],
["Tomato","Solitary_Bees",0],
["Apple","Wasps",0],
["Raspberry","Wasps",1.99],
["Broad Bean","Wasps",2.86],
["Cherry","Wasps",0],
["Squash","Wasps",1.64],
["Cucumber","Wasps",0],
["Currants","Wasps",5.88],
["Runner Bean","Wasps",3.47],
["Strawberry","Wasps",1.82],
["Tomato","Wasps",0],
["Apple","B.terrestris",8.28],
["Raspberry","B.terrestris",11.61],
["Broad Bean","B.terrestris",22.86],
["Cherry","B.terrestris",14.71],
["Squash","B.terrestris",4.45],
["Cucumber","B.terrestris",0],
["Currants","B.terrestris",17.65],
["Runner Bean","B.terrestris",10.42],
["Strawberry","B.terrestris",0],
["Tomato","B.terrestris",40],
["Apple","B.lapidarius",1.38],
["Raspberry","B.lapidarius",2.23],
["Broad Bean","B.lapidarius",0],
["Cherry","B.lapidarius",1.47],
["Squash","B.lapidarius",0.23],
["Cucumber","B.lapidarius",0],
["Currants","B.lapidarius",0],
["Runner Bean","B.lapidarius",0.69],
["Strawberry","B.lapidarius",0],
["Tomato","B.lapidarius",0],
["Apple","B.pascuorum",6.21],
["Raspberry","B.pascuorum",22.63],
["Broad Bean","B.pascuorum",42.86],
["Cherry","B.pascuorum",1.47],
["Squash","B.pascuorum",0.7],
["Cucumber","B.pascuorum",4.84],
["Currants","B.pascuorum",3.92],
["Runner Bean","B.pascuorum",19.44],
["Strawberry","B.pascuorum",1.82],
["Tomato","B.pascuorum",40],
["Apple","B.pratorum",0.69],
["Raspberry","B.pratorum",6.1],
["Broad Bean","B.pratorum",0],
["Cherry","B.pratorum",0],
["Squash","B.pratorum",0],
["Cucumber","B.pratorum",0],
["Currants","B.pratorum",15.69],
["Runner Bean","B.pratorum",0],
["Strawberry","B.pratorum",0],
["Tomato","B.pratorum",0],
["Apple","B.hypnorum",0],
["Raspberry","B.hypnorum",2.11],
["Broad Bean","B.hypnorum",0],
["Cherry","B.hypnorum",0],
["Squash","B.hypnorum",0],
["Cucumber","B.hypnorum",0],
["Currants","B.hypnorum",0],
["Runner Bean","B.hypnorum",0],
["Strawberry","B.hypnorum",0],
["Tomato","B.hypnorum",0],
["Apple","B.hortorum",0],
["Raspberry","B.hortorum",0.12],
["Broad Bean","B.hortorum",0],
["Cherry","B.hortorum",0],
["Squash","B.hortorum",0],
["Cucumber","B.hortorum",1.61],
["Currants","B.hortorum",0],
["Runner Bean","B.hortorum",1.39],
["Strawberry","B.hortorum",0],
["Tomato","B.hortorum",0]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked':'#3366CC','Beetles':'rgb(56,43,61)','Hoverflies':'rgb(56,43,61)','Flies':'rgb(56,43,61)','Butterflies':'rgb(56,43,61)','A.mellifera':'rgb(56,43,61)','Solitary_Bees':'rgb(56,43,61)','Wasps':'rgb(56,43,61)','B.terrestris':'rgb(56,43,61)','B.lapidarius':'rgb(56,43,61)','B.pascuorum':'rgb(56,43,61)','B.pratorum':'rgb(56,43,61)','B.hypnorum':'rgb(56,43,61)','B.hortorum':'rgb(56,43,61)'};




var g1 = svg.append("g").attr("transform","translate(224,50)");
                         var bp1=viz.bP()
                         .data(data)
                         .value(d=>d[2])
                         .min(10)
                         .pad(1)
                         .height(400)
                         .width(200)
                         .barSize(35)
                         .fill(d=>color[d.secondary])
.sortSecondary(sort(["A.mellifera","Beetles","B.pascuorum","B.terrestris","Flies","Hoverflies","Solitary_Bees","B.pratorum","Wasps","B.lapidarius","B.hortorum","B.hypnorum","Butterflies"]))
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
                        .text("Crop-pollinator network");

 g1.selectAll(".mainBars")
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout);

 g1.selectAll(".mainBars").append("text").attr("class","label")
                        .attr("x",d=>(d.part=="primary"? -33.2:35.6))
                        .attr("y",d=>+6)
                        .text(d=>d.key)
                        .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));

 g1.selectAll(".mainBars").append("text").attr("class","perc")
                        .attr("x",d=>(d.part=="primary"? -171:198))
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


