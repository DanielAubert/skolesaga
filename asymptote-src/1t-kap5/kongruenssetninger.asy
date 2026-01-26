// Kongruenssetninger: SSS, SAS, ASA
settings.outformat = "svg";
unitsize(0.8cm);

import geometry;

pen linjefarge = gray(0.2);
pen sidefarge = rgb(59/255, 130/255, 246/255);   // Blå for sider
pen vinkelfarge = rgb(239/255, 68/255, 68/255);  // Rød for vinkler

real spacing = 5.5;
real yspacing = 4.5;

// ===== SSS (Side-Side-Side) =====
pair A1 = (0, yspacing);
pair B1 = (3, yspacing);
pair C1 = (1, yspacing+2);

draw(A1--B1--C1--cycle, linjefarge+1.5);

// Markeringer for alle sider
pair mid1a = (A1+B1)/2;
pair mid1b = (B1+C1)/2;
pair mid1c = (C1+A1)/2;

draw((mid1a + 0.1*dir(90))--(mid1a - 0.1*dir(90)), sidefarge+1.5);
draw((mid1b + 0.08*unit(C1-B1) + 0.1*dir(degrees(C1-B1)+90))--(mid1b + 0.08*unit(C1-B1) - 0.1*dir(degrees(C1-B1)+90)), sidefarge+1.5);
draw((mid1b - 0.08*unit(C1-B1) + 0.1*dir(degrees(C1-B1)+90))--(mid1b - 0.08*unit(C1-B1) - 0.1*dir(degrees(C1-B1)+90)), sidefarge+1.5);
draw((mid1c + 0.12*unit(A1-C1) + 0.1*dir(degrees(A1-C1)+90))--(mid1c + 0.12*unit(A1-C1) - 0.1*dir(degrees(A1-C1)+90)), sidefarge+1.5);
draw((mid1c + 0.1*dir(degrees(A1-C1)+90))--(mid1c - 0.1*dir(degrees(A1-C1)+90)), sidefarge+1.5);
draw((mid1c - 0.12*unit(A1-C1) + 0.1*dir(degrees(A1-C1)+90))--(mid1c - 0.12*unit(A1-C1) - 0.1*dir(degrees(A1-C1)+90)), sidefarge+1.5);

label("\textbf{SSS}", (1.5, yspacing-0.8), fontsize(11pt));
label("side-side-side", (1.5, yspacing-1.3), fontsize(8pt)+gray(0.5));

// ===== SAS (Side-Vinkel-Side) =====
pair A2 = (spacing, yspacing);
pair B2 = (spacing+3, yspacing);
pair C2 = (spacing+1, yspacing+2);

draw(A2--B2--C2--cycle, linjefarge+1.5);

// Markeringer for to sider
pair mid2a = (A2+B2)/2;
pair mid2c = (C2+A2)/2;

draw((mid2a + 0.1*dir(90))--(mid2a - 0.1*dir(90)), sidefarge+1.5);
draw((mid2c + 0.08*unit(A2-C2) + 0.1*dir(degrees(A2-C2)+90))--(mid2c + 0.08*unit(A2-C2) - 0.1*dir(degrees(A2-C2)+90)), sidefarge+1.5);
draw((mid2c - 0.08*unit(A2-C2) + 0.1*dir(degrees(A2-C2)+90))--(mid2c - 0.08*unit(A2-C2) - 0.1*dir(degrees(A2-C2)+90)), sidefarge+1.5);

// Vinkel ved A
draw(arc(A2, 0.5, 0, degrees(C2-A2)), vinkelfarge+1.5);

label("\textbf{SAS}", (spacing+1.5, yspacing-0.8), fontsize(11pt));
label("side-vinkel-side", (spacing+1.5, yspacing-1.3), fontsize(8pt)+gray(0.5));

// ===== ASA (Vinkel-Side-Vinkel) =====
pair A3 = (2*spacing, yspacing);
pair B3 = (2*spacing+3, yspacing);
pair C3 = (2*spacing+1, yspacing+2);

draw(A3--B3--C3--cycle, linjefarge+1.5);

// Markering for én side
pair mid3a = (A3+B3)/2;
draw((mid3a + 0.1*dir(90))--(mid3a - 0.1*dir(90)), sidefarge+1.5);

// Vinkler ved A og B
draw(arc(A3, 0.5, 0, degrees(C3-A3)), vinkelfarge+1.5);
draw(arc(B3, 0.5, 180-degrees(C3-B3)+180, 180), vinkelfarge+1.5);

label("\textbf{ASA}", (2*spacing+1.5, yspacing-0.8), fontsize(11pt));
label("vinkel-side-vinkel", (2*spacing+1.5, yspacing-1.3), fontsize(8pt)+gray(0.5));

// Forklaring
label("Like elementer markert med samme farge:", (spacing+1.5, yspacing-2.3), fontsize(9pt)+gray(0.4));
label("blå = sider, rød = vinkler", (spacing+1.5, yspacing-2.9), fontsize(9pt)+gray(0.4));
