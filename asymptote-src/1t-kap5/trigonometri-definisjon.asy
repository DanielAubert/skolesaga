// Trigonometri i rettvinklet trekant: sin, cos, tan
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen sinfarge = rgb(239/255, 68/255, 68/255);    // Rød
pen cosfarge = rgb(59/255, 130/255, 246/255);   // Blå
pen tanfarge = rgb(168/255, 85/255, 247/255);   // Lilla
pen vinkelfarge = rgb(34/255, 197/255, 94/255); // Grønn

// Trekant
pair A = (0, 0);  // Vinkelen v er her
pair B = (5, 0);
pair C = (5, 3);

draw(A--B--C--cycle, linjefarge+1.5);

// Rettvinklet symbol ved B
draw((4.6, 0)--(4.6, 0.4)--(5, 0.4), linjefarge+0.8);

// Vinkel v ved A
draw(arc(A, 0.8, 0, degrees(C-A)), vinkelfarge+1.5);
label("$v$", A + 1.1*dir(degrees(C-A)/2), vinkelfarge+fontsize(12pt));

// Sidelabels
label("hosliggende katet", (A+B)/2 + (0, -0.6), cosfarge+fontsize(10pt));
label("motstående katet", (B+C)/2 + (0.9, 0), sinfarge+fontsize(10pt));
label("hypotenus", (A+C)/2 + (-0.6, 0.4), gray(0.4)+fontsize(10pt));

// Definisjonene
real dx = 7;
label("\textbf{Trigonometriske forhold:}", (dx, 2.8), fontsize(11pt));

label("$\\sin v = \\dfrac{\\text{motstående}}{\\text{hypotenus}}$", (dx, 1.6), sinfarge+fontsize(11pt));
label("$\\cos v = \\dfrac{\\text{hosliggende}}{\\text{hypotenus}}$", (dx, 0.4), cosfarge+fontsize(11pt));
label("$\\tan v = \\dfrac{\\text{motstående}}{\\text{hosliggende}}$", (dx, -0.8), tanfarge+fontsize(11pt));

// Huskeregel
label("Huskeregel: \textbf{SOH-CAH-TOA}", (dx, -2), fontsize(10pt)+gray(0.5));
