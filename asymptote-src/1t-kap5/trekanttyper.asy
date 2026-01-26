// Trekanttyper: likesidet, likebeint, rettvinklet
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen markfarge = rgb(59/255, 130/255, 246/255);  // Blå for markeringer
pen vinkelfarge = rgb(239/255, 68/255, 68/255); // Rød for rett vinkel

real spacing = 5;

// ===== LIKESIDET TREKANT =====
pair A1 = (0, 0);
pair B1 = (2.5, 0);
pair C1 = (1.25, 2.5*sqrt(3)/2);

draw(A1--B1--C1--cycle, linjefarge+1.5);

// Markeringer for like sider (enkle streker)
pair mid1 = (A1+B1)/2;
pair mid2 = (B1+C1)/2;
pair mid3 = (C1+A1)/2;

// Streker på midten av hver side
draw((mid1 + 0.1*dir(90))--(mid1 - 0.1*dir(90)), markfarge+1);
draw((mid2 + 0.1*dir(degrees(C1-B1)+90))--(mid2 - 0.1*dir(degrees(C1-B1)+90)), markfarge+1);
draw((mid3 + 0.1*dir(degrees(A1-C1)+90))--(mid3 - 0.1*dir(degrees(A1-C1)+90)), markfarge+1);

// Vinkler (alle 60°)
draw(arc(A1, 0.4, 0, 60), markfarge+0.8);
draw(arc(B1, 0.4, 120, 180), markfarge+0.8);
draw(arc(C1, 0.4, 240, 300), markfarge+0.8);

label("\textbf{Likesidet}", (1.25, -0.7), fontsize(10pt));
label("$60°, 60°, 60°$", (1.25, -1.2), fontsize(8pt)+gray(0.4));

// ===== LIKEBEINT TREKANT =====
pair A2 = (spacing, 0);
pair B2 = (spacing+3, 0);
pair C2 = (spacing+1.5, 2.8);

draw(A2--B2--C2--cycle, linjefarge+1.5);

// Markeringer for like sider (to sider like)
pair mid2a = (A2+C2)/2;
pair mid2b = (B2+C2)/2;

draw((mid2a + 0.1*dir(degrees(C2-A2)+90))--(mid2a - 0.1*dir(degrees(C2-A2)+90)), markfarge+1);
draw((mid2b + 0.1*dir(degrees(C2-B2)+90))--(mid2b - 0.1*dir(degrees(C2-B2)+90)), markfarge+1);

// Grunnvinkler (like)
real baseAngle = degrees(C2-A2);
draw(arc(A2, 0.5, 0, baseAngle), markfarge+0.8);
draw(arc(B2, 0.5, 180-baseAngle, 180), markfarge+0.8);

label("\textbf{Likebeint}", (spacing+1.5, -0.7), fontsize(10pt));
label("2 like sider", (spacing+1.5, -1.2), fontsize(8pt)+gray(0.4));

// ===== RETTVINKLET TREKANT =====
pair A3 = (2*spacing, 0);
pair B3 = (2*spacing+3.5, 0);
pair C3 = (2*spacing, 2.5);

draw(A3--B3--C3--cycle, linjefarge+1.5);

// Rettvinklet symbol
draw((A3.x+0.35, 0)--(A3.x+0.35, 0.35)--(A3.x, 0.35), vinkelfarge+1);

// Hypotenus-label
pair hypMid = (B3+C3)/2;
label("hypotenus", hypMid + 0.4*dir(degrees(C3-B3)+90), fontsize(8pt)+gray(0.4));

// Katet-labels
label("katet", (A3+B3)/2 + (0, -0.4), fontsize(8pt)+gray(0.4));
label("katet", (A3+C3)/2 + (-0.5, 0), fontsize(8pt)+gray(0.4));

label("\textbf{Rettvinklet}", (2*spacing+1.5, -0.7), fontsize(10pt));
label("$1$ vinkel $= 90°$", (2*spacing+1.5, -1.2), fontsize(8pt)+gray(0.4));
