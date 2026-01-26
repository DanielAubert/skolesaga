// Kongruente trekanter
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen markfarge = rgb(59/255, 130/255, 246/255);  // Blå
pen markfarge2 = rgb(239/255, 68/255, 68/255);  // Rød

// Første trekant
pair A1 = (0, 0);
pair B1 = (3, 0);
pair C1 = (0.8, 2.2);

draw(A1--B1--C1--cycle, linjefarge+1.5);

// Andre trekant (samme form, forskjøvet)
real dx = 5;
pair A2 = (dx, 0);
pair B2 = (dx+3, 0);
pair C2 = (dx+0.8, 2.2);

draw(A2--B2--C2--cycle, linjefarge+1.5);

// Markeringer for like sider
// Side AB
pair mid1 = (A1+B1)/2;
pair mid1b = (A2+B2)/2;
draw((mid1 + 0.12*dir(90))--(mid1 - 0.12*dir(90)), markfarge+1.2);
draw((mid1b + 0.12*dir(90))--(mid1b - 0.12*dir(90)), markfarge+1.2);

// Side BC (to streker)
pair mid2 = (B1+C1)/2;
pair mid2b = (B2+C2)/2;
pair d2 = unit(C1-B1);
draw((mid2 + 0.08*d2 + 0.12*dir(degrees(C1-B1)+90))--(mid2 + 0.08*d2 - 0.12*dir(degrees(C1-B1)+90)), markfarge2+1.2);
draw((mid2 - 0.08*d2 + 0.12*dir(degrees(C1-B1)+90))--(mid2 - 0.08*d2 - 0.12*dir(degrees(C1-B1)+90)), markfarge2+1.2);
draw((mid2b + 0.08*d2 + 0.12*dir(degrees(C2-B2)+90))--(mid2b + 0.08*d2 - 0.12*dir(degrees(C2-B2)+90)), markfarge2+1.2);
draw((mid2b - 0.08*d2 + 0.12*dir(degrees(C2-B2)+90))--(mid2b - 0.08*d2 - 0.12*dir(degrees(C2-B2)+90)), markfarge2+1.2);

// Side CA (tre streker)
pair mid3 = (C1+A1)/2;
pair mid3b = (C2+A2)/2;
pair d3 = unit(A1-C1);
pen markfarge3 = rgb(34/255, 197/255, 94/255);
draw((mid3 + 0.12*d3 + 0.12*dir(degrees(A1-C1)+90))--(mid3 + 0.12*d3 - 0.12*dir(degrees(A1-C1)+90)), markfarge3+1.2);
draw((mid3 + 0.12*dir(degrees(A1-C1)+90))--(mid3 - 0.12*dir(degrees(A1-C1)+90)), markfarge3+1.2);
draw((mid3 - 0.12*d3 + 0.12*dir(degrees(A1-C1)+90))--(mid3 - 0.12*d3 - 0.12*dir(degrees(A1-C1)+90)), markfarge3+1.2);
draw((mid3b + 0.12*d3 + 0.12*dir(degrees(A2-C2)+90))--(mid3b + 0.12*d3 - 0.12*dir(degrees(A2-C2)+90)), markfarge3+1.2);
draw((mid3b + 0.12*dir(degrees(A2-C2)+90))--(mid3b - 0.12*dir(degrees(A2-C2)+90)), markfarge3+1.2);
draw((mid3b - 0.12*d3 + 0.12*dir(degrees(A2-C2)+90))--(mid3b - 0.12*d3 - 0.12*dir(degrees(A2-C2)+90)), markfarge3+1.2);

// Hjørnelabels
label("$A$", A1, SW);
label("$B$", B1, SE);
label("$C$", C1, N);
label("$D$", A2, SW);
label("$E$", B2, SE);
label("$F$", C2, N);

// Kongruens-symbol
label("$\triangle ABC \cong \triangle DEF$", (4, -1), fontsize(12pt));
