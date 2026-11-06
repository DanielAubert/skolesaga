// Ordbokoppslag mot macOS' stavekontroll. Leser ord på stdin, skriver «nb nn en<TAB>ord» (1/0 per språk).
import AppKit
let c = NSSpellChecker.shared
let spraak = ["nb", "nn", "en"]
var ut = ""
while let w = readLine() {
  var r: [String] = []
  for s in spraak {
    let f = c.checkSpelling(of: w, startingAt: 0, language: s, wrap: false, inSpellDocumentWithTag: 0, wordCount: nil)
    r.append(f.location == NSNotFound ? "1" : "0")
  }
  ut += r.joined(separator: " ") + "\t" + w + "\n"
}
print(ut, terminator: "")
