var data=[["Apple","Beetles",5.52],
["Bbean","Beetles",2.86],
["Raspberry","Beetles",3.63],
["Cherry","Beetles",1.47],
["Squash","Beetles",55.5],
["Cucumber","Beetles",83.87],
["Currants","Beetles",0],
["Rbean","Beetles",0],
["Strawberry","Beetles",16.36],
["Tomato","Beetles",0],
["Apple","Hoverflies",8.28],
["Bbean","Hoverflies",14.29],
["Raspberry","Hoverflies",1.64],
["Cherry","Hoverflies",29.41],
["Squash","Hoverflies",3.04],
["Cucumber","Hoverflies",0],
["Currants","Hoverflies",9.8],
["Rbean","Hoverflies",6.25],
["Strawberry","Hoverflies",20],
["Tomato","Hoverflies",0],
["Apple","Flies",15.86],
["Bbean","Flies",5.71],
["Raspberry","Flies",1.06],
["Cherry","Flies",8.82],
["Squash","Flies",2.11],
["Cucumber","Flies",3.23],
["Currants","Flies",27.45],
["Rbean","Flies",0],
["Strawberry","Flies",34.55],
["Tomato","Flies",0],
["Apple","Butterflies",0.69],
["Bbean","Butterflies",0],
["Raspberry","Butterflies",0.12],
["Cherry","Butterflies",0],
["Squash","Butterflies",0],
["Cucumber","Butterflies",1.61],
["Currants","Butterflies",0],
["Rbean","Butterflies",0.69],
["Strawberry","Butterflies",1.82],
["Tomato","Butterflies",0],
["Apple","Honeybees",33.79],
["Bbean","Honeybees",5.71],
["Raspberry","Honeybees",43.73],
["Cherry","Honeybees",26.47],
["Squash","Honeybees",29.98],
["Cucumber","Honeybees",3.23],
["Currants","Honeybees",9.8],
["Rbean","Honeybees",56.25],
["Strawberry","Honeybees",0],
["Tomato","Honeybees",20],
["Apple","Solitary_Bees",19.31],
["Bbean","Solitary_Bees",2.86],
["Raspberry","Solitary_Bees",3.05],
["Cherry","Solitary_Bees",16.18],
["Squash","Solitary_Bees",2.34],
["Cucumber","Solitary_Bees",1.61],
["Currants","Solitary_Bees",9.8],
["Rbean","Solitary_Bees",1.39],
["Strawberry","Solitary_Bees",23.64],
["Tomato","Solitary_Bees",0],
["Apple","Wasps",0],
["Bbean","Wasps",2.86],
["Raspberry","Wasps",1.99],
["Cherry","Wasps",0],
["Squash","Wasps",1.64],
["Cucumber","Wasps",0],
["Currants","Wasps",5.88],
["Rbean","Wasps",3.47],
["Strawberry","Wasps",1.82],
["Tomato","Wasps",0],
["Apple","Terrestris",8.28],
["Bbean","Terrestris",22.86],
["Raspberry","Terrestris",11.61],
["Cherry","Terrestris",14.71],
["Squash","Terrestris",4.45],
["Cucumber","Terrestris",0],
["Currants","Terrestris",17.65],
["Rbean","Terrestris",10.42],
["Strawberry","Terrestris",0],
["Tomato","Terrestris",40],
["Apple","Lapidarius",1.38],
["Bbean","Lapidarius",0],
["Raspberry","Lapidarius",2.23],
["Cherry","Lapidarius",1.47],
["Squash","Lapidarius",0.23],
["Cucumber","Lapidarius",0],
["Currants","Lapidarius",0],
["Rbean","Lapidarius",0.69],
["Strawberry","Lapidarius",0],
["Tomato","Lapidarius",0],
["Apple","Pascuorum",6.21],
["Bbean","Pascuorum",42.86],
["Raspberry","Pascuorum",22.63],
["Cherry","Pascuorum",1.47],
["Squash","Pascuorum",0.7],
["Cucumber","Pascuorum",4.84],
["Currants","Pascuorum",3.92],
["Rbean","Pascuorum",19.44],
["Strawberry","Pascuorum",1.82],
["Tomato","Pascuorum",40],
["Apple","Pratorum",0.69],
["Bbean","Pratorum",0],
["Raspberry","Pratorum",6.1],
["Cherry","Pratorum",0],
["Squash","Pratorum",0],
["Cucumber","Pratorum",0],
["Currants","Pratorum",15.69],
["Rbean","Pratorum",0],
["Strawberry","Pratorum",0],
["Tomato","Pratorum",0],
["Apple","Hypnorum",0],
["Bbean","Hypnorum",0],
["Raspberry","Hypnorum",2.11],
["Cherry","Hypnorum",0],
["Squash","Hypnorum",0],
["Cucumber","Hypnorum",0],
["Currants","Hypnorum",0],
["Rbean","Hypnorum",0],
["Strawberry","Hypnorum",0],
["Tomato","Hypnorum",0],
["Apple","Hortorum",0],
["Bbean","Hortorum",0],
["Raspberry","Hortorum",0.12],
["Cherry","Hortorum",0],
["Squash","Hortorum",0],
["Cucumber","Hortorum",1.61],
["Currants","Hortorum",0],
["Rbean","Hortorum",1.39],
["Strawberry","Hortorum",0],
["Tomato","Hortorum",0]]



 function sort(sortOrder){
                    return function(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)) }
                  }
var color = {'Unlinked':'#3366CC','Beetles':'rgb(56,43,61)','Hoverflies':'rgb(56,43,61)','Flies':'rgb(56,43,61)','Butterflies':'rgb(56,43,61)','Honeybees':'rgb(56,43,61)','Solitary_Bees':'rgb(56,43,61)','Wasps':'rgb(56,43,61)','Terrestris':'rgb(56,43,61)','Lapidarius':'rgb(56,43,61)','Pascuorum':'rgb(56,43,61)','Pratorum':'rgb(56,43,61)','Hypnorum':'rgb(56,43,61)','Hortorum':'rgb(56,43,61)'};




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
.sortSecondary(sort(["Honeybees","Beetles","Pascuorum","Terrestris","Flies","Hoverflies","Solitary_Bees","Pratorum","Wasps","Lapidarius","Hortorum","Hypnorum","Butterflies"]))
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
                        .text("Researcher data");

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


