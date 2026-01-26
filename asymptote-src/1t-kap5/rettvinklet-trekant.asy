// Rettvinklet trekant med katet og hypotenus merket
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen katetfarge = rgb(59/255, 130/255, 246/255);    // Blå
pen hypotenusefarge = rgb(239/255, 68/255, 68/255); // Rød
pen vinkelfarge = rgb(34/255, 197/255, 94/255);     // Grønn

// Trekant
pair A = (0, 0);
pair B = (5, 0);
pair C = (0, 3);

// Tegn sidene med farger
draw(A--B, katetfarge+2);       // Katet b
draw(A--C, katetfarge+2);       // Katet a
draw(B--C, hypotenusefarge+2);  // Hypotenus c

// Rettvinklet symbol
draw((0.4, 0)--(0.4, 0.4)--(0, 0.4), linjefarge+1);

// Hjørnelabels
label("$A$", A, SW);
label("$B$", B, SE);
label("$C$", C, NW);

// Sidelabels med farger
label("katet $a$", (A+C)/2 + (-0.9, 0), katetfarge+fontsize(11pt));
label("katet $b$", (A+B)/2 + (0, -0.6), katetfarge+fontsize(11pt));
label("hypotenus $c$", (B+C)/2 + (0.9, 0.3), hypotenusefarge+fontsize(11pt));

// Vinkel-notasjoner
draw(arc(A, 0.6, 0, 90), vinkelfarge+1.5);
label("$90°$", A + 0.95*dir(45), vinkelfarge+fontsize(9pt));

draw(arc(B, 0.7, 90+degrees(C-B), 180), gray(0.4)+1);
label("$B$", B + 0.9*dir(130), gray(0.4)+fontsize(9pt));

draw(arc(C, 0.7, 270, 270+degrees(B-C)), gray(0.4)+1);
label("$C$", C + 0.9*dir(305), gray(0.4)+fontsize(9pt));

// Forklaring
label("Hypotenusen ligger \textit{mot} den rette vinkelen", (2.5, -1.3), fontsize(10pt));
