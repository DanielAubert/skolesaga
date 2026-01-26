// Pytagoras' setning med areal-bevis
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen areal_a = rgb(239/255, 68/255, 68/255) + opacity(0.3);    // Rød
pen areal_b = rgb(59/255, 130/255, 246/255) + opacity(0.3);   // Blå
pen areal_c = rgb(34/255, 197/255, 94/255) + opacity(0.3);    // Grønn

real a = 2;
real b = 3;
real c = sqrt(a^2 + b^2);

// Rettvinklet trekant
pair A = (0, 0);
pair B = (b, 0);
pair C = (0, a);

draw(A--B--C--cycle, linjefarge+1.5);

// Rettvinklet symbol
draw((0.3, 0)--(0.3, 0.3)--(0, 0.3), linjefarge+0.8);

// Sidelabels
label("$a$", (C+A)/2, W, fontsize(11pt));
label("$b$", (A+B)/2, S, fontsize(11pt));
label("$c$", (B+C)/2 + 0.2*dir(degrees(C-B)+90), fontsize(11pt));

// Kvadrat på side a (vertikal)
pair[] sq_a = {C, C+(-a,0), C+(-a,a), (0,a+a)};
filldraw(sq_a[0]--sq_a[1]--sq_a[2]--sq_a[3]--cycle, areal_a, rgb(239/255, 68/255, 68/255)+1);
label("$a^2$", (sq_a[0]+sq_a[2])/2, fontsize(12pt)+rgb(239/255, 68/255, 68/255));

// Kvadrat på side b (horisontal)
pair[] sq_b = {A, B, B+(0,-b), (0,-b)};
filldraw(sq_b[0]--sq_b[1]--sq_b[2]--sq_b[3]--cycle, areal_b, rgb(59/255, 130/255, 246/255)+1);
label("$b^2$", (sq_b[0]+sq_b[2])/2, fontsize(12pt)+rgb(59/255, 130/255, 246/255));

// Kvadrat på hypotenusen c
pair dir_c = unit(C-B);
pair perp_c = (-dir_c.y, dir_c.x);
pair[] sq_c = {B, C, C+c*perp_c, B+c*perp_c};
filldraw(sq_c[0]--sq_c[1]--sq_c[2]--sq_c[3]--cycle, areal_c, rgb(34/255, 197/255, 94/255)+1);
label("$c^2$", (sq_c[0]+sq_c[2])/2, fontsize(12pt)+rgb(34/255, 197/255, 94/255));

// Formel
label("$a^2 + b^2 = c^2$", (1.5, -4.2), fontsize(14pt));
