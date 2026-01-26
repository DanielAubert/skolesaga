// Vinkeltyper: spiss, rett, stump
settings.outformat = "svg";
unitsize(1cm);

import geometry;

// Farger
pen spissfarge = rgb(59/255, 130/255, 246/255); // Blå
pen rettfarge = rgb(239/255, 68/255, 68/255);   // Rød
pen stumpfarge = rgb(34/255, 197/255, 94/255);  // Grønn
pen linjefarge = gray(0.2);

real spacing = 4.5;

// Spiss vinkel (45°)
pair O1 = (0, 0);
draw(O1--(2.5, 0), linjefarge+1.2);
draw(O1--2*dir(45), linjefarge+1.2);
draw(arc(O1, 0.6, 0, 45), spissfarge+1.2);
label("$45°$", O1 + 0.9*dir(22.5), spissfarge);
label("\textbf{Spiss vinkel}", (1.25, -0.8), fontsize(10pt));
label("$< 90°$", (1.25, -1.3), fontsize(8pt)+gray(0.4));

// Rett vinkel (90°)
pair O2 = (spacing, 0);
draw(O2--(O2.x+2.5, 0), linjefarge+1.2);
draw(O2--(O2.x, 2), linjefarge+1.2);
// Rettvinklet symbol
draw((O2.x+0.4, 0)--(O2.x+0.4, 0.4)--(O2.x, 0.4), rettfarge+0.8);
label("$90°$", O2 + (0.7, 0.7), rettfarge);
label("\textbf{Rett vinkel}", (O2.x+1.25, -0.8), fontsize(10pt));
label("$= 90°$", (O2.x+1.25, -1.3), fontsize(8pt)+gray(0.4));

// Stump vinkel (135°)
pair O3 = (2*spacing, 0);
draw(O3--(O3.x+2.5, 0), linjefarge+1.2);
draw(O3--O3+2*dir(135), linjefarge+1.2);
draw(arc(O3, 0.6, 0, 135), stumpfarge+1.2);
label("$135°$", O3 + 0.95*dir(67.5), stumpfarge);
label("\textbf{Stump vinkel}", (O3.x+0.5, -0.8), fontsize(10pt));
label("$> 90°$", (O3.x+0.5, -1.3), fontsize(8pt)+gray(0.4));
