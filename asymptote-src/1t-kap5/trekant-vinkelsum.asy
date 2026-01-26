// Vinkelsum i trekant: A + B + C = 180°
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen fargeA = rgb(59/255, 130/255, 246/255);  // Blå
pen fargeB = rgb(239/255, 68/255, 68/255);   // Rød
pen fargeC = rgb(34/255, 197/255, 94/255);   // Grønn

// Trekanthjørner
pair A = (0, 0);
pair B = (5, 0);
pair C = (1.5, 3);

// Tegn trekanten
draw(A--B--C--cycle, linjefarge+1.5);

// Vinkler
real radius = 0.6;

// Vinkel A
real angleA = degrees(C-A) - degrees(B-A);
if (angleA < 0) angleA += 360;
draw(arc(A, radius, 0, degrees(C-A)), fargeA+1.2);
label("$A$", A + 0.9*dir(degrees(C-A)/2), fargeA);

// Vinkel B
real startB = 180;
real endB = degrees(C-B);
draw(arc(B, radius, endB, startB), fargeB+1.2);
label("$B$", B + 0.9*dir((startB+endB)/2), fargeB);

// Vinkel C
real startC = degrees(A-C);
real endC = degrees(B-C);
draw(arc(C, radius, startC, endC), fargeC+1.2);
label("$C$", C + 0.85*dir((startC+endC)/2), fargeC);

// Hjørneetiketter
label("$A$", A, SW);
label("$B$", B, SE);
label("$C$", C, N);

// Formel
label("$A + B + C = 180°$", (2.5, -1.2), fontsize(12pt));
