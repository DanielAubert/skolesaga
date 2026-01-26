// Sinussetningen
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen sidefarge_a = rgb(239/255, 68/255, 68/255);   // Rød
pen sidefarge_b = rgb(59/255, 130/255, 246/255);  // Blå
pen sidefarge_c = rgb(34/255, 197/255, 94/255);   // Grønn
pen vinkelfarge = rgb(168/255, 85/255, 247/255);  // Lilla

// Trekant (vilkårlig, ikke rettvinklet)
pair A = (0, 0);
pair B = (5, 0);
pair C = (1.5, 3.5);

// Tegn sidene med farger
draw(B--C, sidefarge_a+2);  // Side a (mot vinkel A)
draw(A--C, sidefarge_b+2);  // Side b (mot vinkel B)
draw(A--B, sidefarge_c+2);  // Side c (mot vinkel C)

// Vinkler
real r = 0.6;
draw(arc(A, r, 0, degrees(C-A)), vinkelfarge+1.2);
label("$A$", A + 0.85*dir(degrees(C-A)/2), vinkelfarge+fontsize(10pt));

draw(arc(B, r, 180-degrees(C-B)+180, 180), vinkelfarge+1.2);
label("$B$", B + 0.85*dir(160), vinkelfarge+fontsize(10pt));

draw(arc(C, r, degrees(A-C), degrees(B-C)), vinkelfarge+1.2);
label("$C$", C + 0.85*dir((degrees(A-C)+degrees(B-C))/2), vinkelfarge+fontsize(10pt));

// Sidelabels
label("$a$", (B+C)/2 + 0.4*dir(degrees(C-B)+90), sidefarge_a+fontsize(12pt));
label("$b$", (A+C)/2 + 0.4*dir(degrees(C-A)-90), sidefarge_b+fontsize(12pt));
label("$c$", (A+B)/2 + (0, -0.5), sidefarge_c+fontsize(12pt));

// Hjørnepunkter
dot(A, linjefarge+4);
dot(B, linjefarge+4);
dot(C, linjefarge+4);

// Sinussetningen
label("\textbf{Sinussetningen:}", (2.5, -1.3), fontsize(11pt));
label("$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$", (2.5, -2.3), fontsize(13pt));
