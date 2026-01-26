// Formlike trekanter
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen markfarge = rgb(59/255, 130/255, 246/255);  // Blå
pen vinkelfarge = rgb(239/255, 68/255, 68/255); // Rød

// Liten trekant
pair A1 = (0, 0);
pair B1 = (2, 0);
pair C1 = (0.5, 1.5);

draw(A1--B1--C1--cycle, linjefarge+1.5);

// Stor trekant (forstørret 1.8x)
real scale = 1.8;
real dx = 4;
pair A2 = (dx, 0);
pair B2 = (dx + scale*2, 0);
pair C2 = (dx + scale*0.5, scale*1.5);

draw(A2--B2--C2--cycle, linjefarge+1.5);

// Vinkler (like i begge)
real r1 = 0.4;
real r2 = 0.4*scale;

// Vinkel A
draw(arc(A1, r1, 0, degrees(C1-A1)), vinkelfarge+1);
draw(arc(A2, r2, 0, degrees(C2-A2)), vinkelfarge+1);

// Vinkel B
draw(arc(B1, r1, 180-degrees(C1-B1)+180, 180), vinkelfarge+1);
draw(arc(B2, r2, 180-degrees(C2-B2)+180, 180), vinkelfarge+1);

// Vinkel C
draw(arc(C1, r1, degrees(A1-C1), degrees(B1-C1)), vinkelfarge+1);
draw(arc(C2, r2, degrees(A2-C2), degrees(B2-C2)), vinkelfarge+1);

// Sidelengder
label("$a$", (A1+B1)/2, S, fontsize(9pt)+markfarge);
label("$b$", (B1+C1)/2 + 0.2*dir(degrees(C1-B1)+90), fontsize(9pt)+markfarge);
label("$c$", (C1+A1)/2 + 0.2*dir(degrees(A1-C1)-90), fontsize(9pt)+markfarge);

label("$ka$", (A2+B2)/2, S, fontsize(9pt)+markfarge);
label("$kb$", (B2+C2)/2 + 0.3*dir(degrees(C2-B2)+90), fontsize(9pt)+markfarge);
label("$kc$", (C2+A2)/2 + 0.3*dir(degrees(A2-C2)-90), fontsize(9pt)+markfarge);

// Forstørrelsesfaktor
label("$k = 1{,}8$", (3.5, 1.5), fontsize(10pt)+gray(0.4));
draw((2.3, 0.7)--(3.3, 1.2), gray(0.4)+0.5, Arrow(3));

// Forklaring
label("Forholdstall: $\\frac{ka}{a} = \\frac{kb}{b} = \\frac{kc}{c} = k$", (4, -0.9), fontsize(10pt));
label("Vinkler: $A = A'$, $B = B'$, $C = C'$", (4, -1.5), fontsize(10pt)+vinkelfarge);
