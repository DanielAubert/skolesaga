// Areal av trekant: grunnlinje og høyde
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen grunnfarge = rgb(59/255, 130/255, 246/255);   // Blå
pen hoydefarge = rgb(239/255, 68/255, 68/255);    // Rød
pen arealfarge = rgb(34/255, 197/255, 94/255) + opacity(0.2);

// Trekant
pair A = (0, 0);
pair B = (6, 0);
pair C = (2, 3);

// Fyll arealet
filldraw(A--B--C--cycle, arealfarge, linjefarge+1.5);

// Grunnlinje (uthevet)
draw(A--B, grunnfarge+2.5);
label("$g$", (A+B)/2 + (0, -0.5), grunnfarge+fontsize(12pt));

// Høyde (stiplet ned fra C til grunnlinjen)
pair H = (C.x, 0);  // Fotpunkt
draw(C--H, hoydefarge+1.5+dashed);
label("$h$", (C+H)/2 + (-0.4, 0), hoydefarge+fontsize(12pt));

// Rettvinklet symbol
draw((H.x-0.25, 0)--(H.x-0.25, 0.25)--(H.x, 0.25), linjefarge+0.8);

// Hjørnelabels
label("$A$", A, SW);
label("$B$", B, SE);
label("$C$", C, N);

// Formel
label("$\\text{Areal} = \\dfrac{g \\cdot h}{2}$", (3, -1.5), fontsize(14pt));

// Alternativ: med sider og vinkel
label("eller: $\\text{Areal} = \\dfrac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$", (3, -2.4), fontsize(11pt)+gray(0.5));
