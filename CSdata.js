var data=[["Apple","Beetles",2],
["Bbean","Beetles",9],
["Raspberry","Beetles",20],
["Cherry","Beetles",0],
["Squash","Beetles",140],
["Cucumber","Beetles",12],
["Currants","Beetles",2],
["Rbean","Beetles",32],
["Strawberry","Beetles",18],
["Tomato","Beetles",1],
["Apple","Hoverflies",10],
["Bbean","Hoverflies",5],
["Raspberry","Hoverflies",57],
["Cherry","Hoverflies",6],
["Squash","Hoverflies",29],
["Cucumber","Hoverflies",2],
["Currants","Hoverflies",10],
["Rbean","Hoverflies",18],
["Strawberry","Hoverflies",19],
["Tomato","Hoverflies",10],
["Apple","Flies",14],
["Bbean","Flies",31],
["Raspberry","Flies",92],
["Cherry","Flies",4],
["Squash","Flies",59],
["Cucumber","Flies",8],
["Currants","Flies",19],
["Rbean","Flies",30],
["Strawberry","Flies",47],
["Tomato","Flies",14],
["Apple","Butterflies",0],
["Bbean","Butterflies",4],
["Raspberry","Butterflies",17],
["Cherry","Butterflies",0],
["Squash","Butterflies",16],
["Cucumber","Butterflies",5],
["Currants","Butterflies",1],
["Rbean","Butterflies",10],
["Strawberry","Butterflies",10],
["Tomato","Butterflies",9],
["Apple","Honeybees",13],
["Bbean","Honeybees",6],
["Raspberry","Honeybees",133],
["Cherry","Honeybees",0],
["Squash","Honeybees",62],
["Cucumber","Honeybees",5],
["Currants","Honeybees",12],
["Rbean","Honeybees",99],
["Strawberry","Honeybees",14],
["Tomato","Honeybees",5],
["Apple","Bumblebees",9],
["Bbean","Bumblebees",21],
["Raspberry","Bumblebees",125],
["Cherry","Bumblebees",0],
["Squash","Bumblebees",24],
["Cucumber","Bumblebees",6],
["Currants","Bumblebees",2],
["Rbean","Bumblebees",54],
["Strawberry","Bumblebees",10],
["Tomato","Bumblebees",8],
["Apple","Solitary_Bees",2],
["Bbean","Solitary_Bees",3],
["Raspberry","Solitary_Bees",27],
["Cherry","Solitary_Bees",3],
["Squash","Solitary_Bees",19],
["Cucumber","Solitary_Bees",0],
["Currants","Solitary_Bees",0],
["Rbean","Solitary_Bees",22],
["Strawberry","Solitary_Bees",3],
["Tomato","Solitary_Bees",2],
["Apple","Wasps",1],
["Bbean","Wasps",4],
["Raspberry","Wasps",2],
["Cherry","Wasps",1],
["Squash","Wasps",8],
["Cucumber","Wasps",7],
["Currants","Wasps",0],
["Rbean","Wasps",4],
["Strawberry","Wasps",1],
["Tomato","Wasps",1]]



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


