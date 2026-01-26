// Parallelle linjer med transversal - toppvinkler og samsvarende vinkler
settings.outformat = "svg";
unitsize(1cm);

import geometry;

pen linjefarge = gray(0.2);
pen parallelfarge = rgb(59/255, 130/255, 246/255);   // Blå
pen transversalfarge = rgb(107/255, 114/255, 128/255); // Grå
pen vinkel1 = rgb(239/255, 68/255, 68/255);   // Rød
pen vinkel2 = rgb(34/255, 197/255, 94/255);   // Grønn
pen vinkel3 = rgb(168/255, 85/255, 247/255);  // Lilla

// Parallelle linjer
real y1 = 2.5;
real y2 = 0;
real xmin = -0.5;
real xmax = 6;

draw((xmin, y1)--(xmax, y1), parallelfarge+1.5);
draw((xmin, y2)--(xmax, y2), parallelfarge+1.5);

// Transversal
real angle = 60;
pair start = (1, -0.8);
pair end = start + 5*dir(angle);
draw(start--end, transversalfarge+1.2);

// Krysspunkt 1 (nedre linje)
pair P1 = extension(start, end, (xmin, y2), (xmax, y2));
// Krysspunkt 2 (øvre linje)
pair P2 = extension(start, end, (xmin, y1), (xmax, y1));

// Vinkler ved P1 (nedre)
real r = 0.5;
// Toppvinkel 1 (under til høyre)
filldraw(arc(P1, r, 0, angle)--P1--cycle, vinkel1+opacity(0.3), vinkel1+1);
label("$\alpha$", P1 + 0.7*dir(angle/2), vinkel1);

// Toppvinkel 2 (over til venstre)
filldraw(arc(P1, r, 180, 180+angle)--P1--cycle, vinkel1+opacity(0.3), vinkel1+1);
label("$\alpha$", P1 + 0.7*dir(180+angle/2), vinkel1);

// Nærliggende vinkel
filldraw(arc(P1, r, angle, 180)--P1--cycle, vinkel2+opacity(0.3), vinkel2+1);
label("$\beta$", P1 + 0.75*dir((angle+180)/2), vinkel2);

// Vinkler ved P2 (øvre) - samsvarende
filldraw(arc(P2, r, 0, angle)--P2--cycle, vinkel1+opacity(0.3), vinkel1+1);
label("$\alpha$", P2 + 0.7*dir(angle/2), vinkel1);

filldraw(arc(P2, r, angle, 180)--P2--cycle, vinkel2+opacity(0.3), vinkel2+1);
label("$\beta$", P2 + 0.75*dir((angle+180)/2), vinkel2);

// Parallell-piler
draw((xmax-0.3, y1+0.15)--(xmax-0.3, y1-0.15), parallelfarge+0.8, Arrow(3));
draw((xmax-0.5, y1+0.15)--(xmax-0.5, y1-0.15), parallelfarge+0.8, Arrow(3));
draw((xmax-0.3, y2+0.15)--(xmax-0.3, y2-0.15), parallelfarge+0.8, Arrow(3));
draw((xmax-0.5, y2+0.15)--(xmax-0.5, y2-0.15), parallelfarge+0.8, Arrow(3));

// Forklaringer
label("\textbf{Toppvinkler:} $\alpha = \alpha$", (3, -1.5), fontsize(9pt)+vinkel1);
label("\textbf{Samsvarende vinkler:} like på begge linjer", (3, -2.1), fontsize(9pt)+parallelfarge);
label("$\alpha + \beta = 180°$", (3, -2.7), fontsize(9pt)+gray(0.4));
