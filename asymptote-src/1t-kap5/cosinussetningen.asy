// Cosinussetningen
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen sidefarge_a = rgb(239/255, 68/255, 68/255);   // Rød
pen sidefarge_b = rgb(59/255, 130/255, 246/255);  // Blå
pen sidefarge_c = rgb(34/255, 197/255, 94/255);   // Grønn
pen vinkelfarge = rgb(168/255, 85/255, 247/255);  // Lilla

// Trekant (vilkårlig)
pair A = (0, 0);
pair B = (5.5, 0);
pair C = (2, 3);

// Tegn sidene med farger
draw(B--C, sidefarge_a+2);  // Side a (mot vinkel A)
draw(A--C, sidefarge_b+2);  // Side b (mot vinkel B)
draw(A--B, sidefarge_c+2);  // Side c (mot vinkel C)

// Marker vinkel C spesielt (den vi bruker i formelen)
real r = 0.7;
filldraw(arc(C, r, degrees(A-C), degrees(B-C))--C--cycle, vinkelfarge+opacity(0.2), vinkelfarge+1.5);
label("$C$", C + 1*dir((degrees(A-C)+degrees(B-C))/2), vinkelfarge+fontsize(11pt));

// Sidelabels
label("$a$", (B+C)/2 + 0.4*dir(degrees(C-B)+90), sidefarge_a+fontsize(12pt));
label("$b$", (A+C)/2 + 0.4*dir(degrees(C-A)-90), sidefarge_b+fontsize(12pt));
label("$c$", (A+B)/2 + (0, -0.5), sidefarge_c+fontsize(12pt));

// Hjørnepunkter
dot(A, linjefarge+4);
dot(B, linjefarge+4);
dot(C, linjefarge+4);

// Hjørnelabels
label("$A$", A, SW);
label("$B$", B, SE);

// Cosinussetningen
label("\textbf{Cosinussetningen:}", (2.75, -1.3), fontsize(11pt));
label("$c^2 = a^2 + b^2 - 2ab\\cos C$", (2.75, -2.3), fontsize(13pt));

// Alternativ form
label("Løst for vinkel: $\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$", (2.75, -3.5), fontsize(10pt)+gray(0.5));
