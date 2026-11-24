# Tester for aksentporten og vernet som hindrer æøå-verktøyene i å røre fremmedspråk (aksentsveip 23.11.2026).
#   python3 scripts/aeoa/test_aksent_og_vern.py        (ren Python, ingen avhengigheter — kjøres i CI)
import importlib.util, json, os, subprocess, sys, tempfile, unittest

HER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HER)
from tekst import fremmed_kontekst
from rett import Regler

spec = importlib.util.spec_from_file_location('aksent', os.path.join(HER, 'aksent-sjekk.py'))
aksent = importlib.util.module_from_spec(spec)
spec.loader.exec_module(aksent)


def pos(s, ord_):
    i = s.index(ord_)
    return i, i + len(ord_)


class Vern(unittest.TestCase):
    """æøå-sveipen 6.11 gjorde «est a la» til «est å la» og «star power» til «står power». Aldri igjen."""

    def test_fremmed_kontekst_fransk(self):
        s = "Le livre dont j'ai besoin est a la bibliotheque."
        self.assertTrue(fremmed_kontekst(s, s.index(' a ') + 1, s.index(' a ') + 2))
        s2 = 'Elle parle a ses amis.'
        self.assertTrue(fremmed_kontekst(s2, s2.index(' a ') + 1, s2.index(' a ') + 2))

    def test_fremmed_kontekst_engelsk(self):
        s = 'economic scale, distribution networks, star power, and the English-language advantage'
        self.assertTrue(fremmed_kontekst(s, *pos(s, 'star')))

    def test_norsk_setning_er_ikke_fremmed(self):
        s = 'Det er viktig a lære kjønnet med riktig artikkel.'
        self.assertFalse(fremmed_kontekst(s, s.index(' a ') + 1, s.index(' a ') + 2))
        s2 = 'Han liker ikke a bade pa sommeren.'
        self.assertFalse(fremmed_kontekst(s2, *pos(s2, 'pa')))

    def test_regler_ror_ikke_fremmedspraak(self):
        regler = Regler({'a': 'å', 'star': 'står', 'pa': 'på'}, {})
        ny, endr = regler.rett('test', '', "Le livre dont j'ai besoin est a la bibliotheque.")
        self.assertEqual(ny, "Le livre dont j'ai besoin est a la bibliotheque.")
        ny, _ = regler.rett('test', '', 'distribution networks, star power, and the English-language advantage')
        self.assertIn('star power', ny)
        # men norsk tekst rettes fortsatt
        ny, _ = regler.rett('test', '', 'Det er viktig a lære ordene pa tysk.')
        self.assertEqual(ny, 'Det er viktig å lære ordene på tysk.')
        self.assertTrue(regler.fremmed)


class Aksentport(unittest.TestCase):
    def test_rod_pa_strippet_fransk(self):
        f = aksent.sjekk_tekst("Les garcons et les filles. L'atmosphere est calme. Mon frere a une soeur.", 'fr')
        ord_ = {x['ord'] for x in f}
        self.assertTrue({'garcons', 'frere', 'soeur'} <= ord_, ord_)

    def test_rod_pa_strippet_tysk_og_spansk(self):
        self.assertTrue(aksent.sjekk_tekst('Ich gehe uber die Strasse und bin sehr mude.', 'de'))
        self.assertTrue(aksent.sjekk_tekst('Manana voy a Espana con mi familia.', 'es'))

    def test_aeoa_inne_i_fransk(self):
        f = aksent.sjekk_tekst("Le livre dont j'ai besoin est å la bibliothèque.", 'fr')
        self.assertEqual([x['forslag'] for x in f], ['à'])

    def test_tysk_ae_inne_i_tysk(self):
        f = aksent.sjekk_tekst('b) Die Kanzlerin erklært: Deutschland ist auf dem richtigen Weg.', 'de')
        self.assertEqual([x['forslag'] for x in f], ['erklärt'])

    def test_gronn_pa_riktig(self):
        self.assertEqual(aksent.sjekk_tekst("Les garçons et les filles. L'atmosphère est calme. Mon frère a une sœur.", 'fr'), [])
        self.assertEqual(aksent.sjekk_tekst('Ich gehe über die Straße und bin sehr müde.', 'de'), [])
        self.assertEqual(aksent.sjekk_tekst('Mañana voy a España con mi familia.', 'es'), [])

    def test_norsk_tekst_flagges_ikke(self):
        self.assertEqual(aksent.sjekk_tekst('Spør om andres mening og bygg på andres ideer.', 'es'), [])
        self.assertEqual(aksent.sjekk_tekst('Molière får publikum til å le av gjerrigheten.', 'fr'), [])

    def test_fil_rod_og_gronn(self):
        with tempfile.TemporaryDirectory() as d:
            p = os.path.join(d, 'src/lib/data/chapters')
            os.makedirs(p)
            rod = os.path.join(p, 'fransk-9-9-9.json')
            json.dump({'id': 'fransk-9-9-9', 'content': [{'id': 'x', 'type': 'text', 'content': 'Les garcons sont a la plage.'}]},
                      open(rod, 'w'), ensure_ascii=False)
            self.assertTrue(aksent.sjekk_fil(rod, 'src/lib/data/chapters/fransk-9-9-9.json'))
            json.dump({'id': 'fransk-9-9-9', 'content': [{'id': 'x', 'type': 'text', 'content': 'Les garçons sont à la plage.'}]},
                      open(rod, 'w'), ensure_ascii=False)
            self.assertEqual(aksent.sjekk_fil(rod, 'src/lib/data/chapters/fransk-9-9-9.json'), [])
            # andre bøker sjekkes ikke av aksentporten
            self.assertEqual(aksent.sjekk_fil(rod, 'src/lib/data/chapters/naturfag-9-9-9.json'), [])


class Mojibake(unittest.TestCase):
    """24.11.2026: «forteneste\ufffdmargin», «berÃ¸ringar» og «Ã\u0085 … sÃ¥» sto i nn-filene uten at porten sa fra."""

    def test_rod_paa_funnene(self):
        import mojibake as mb
        for s, venta in (('To berÃ¸ringar', 'ø'), ('Ã\u0085 alltid angripe sÃ¥ raskt', 'Å'), ('forteneste\ufffdmargin', None)):
            f = mb.finn(s)
            self.assertTrue(f, s)
            self.assertEqual(f[0][4], venta)

    def test_gronn_paa_riktig_tekst_og_sitert_eksempel(self):
        import mojibake as mb
        for s in ('Tre berøringar', 'Å alltid angripe så raskt', 'São Paulo', 'pâte', 'Kurdisk «Î» er ikkje λ',
                  'Feilkoding gir "Ã¸" i staden for ø', 'Sjå `Ã¥` i loggen'):
            self.assertEqual(mb.finn(s), [], s)

    def test_repo_sjekk_feller_mojibake_ogsaa_i_svaralternativ(self):
        import importlib.util
        with tempfile.TemporaryDirectory() as d:
            p = os.path.join(d, 'src/lib/data/chapters/nn')
            os.makedirs(p)
            fil = os.path.join(p, 'kroppsoving-9-9-9.json')
            json.dump({'id': 'k', 'content': [{'exercise': {'subTasks': [{'multipleChoiceOptions': ['To berÃ¸ringar', 'Tre berøringar']}]}}]},
                      open(fil, 'w', encoding='utf-8'), ensure_ascii=False)
            spec = importlib.util.spec_from_file_location('repo_sjekk_t', os.path.join(HER, 'repo-sjekk.py'))
            rs = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(rs)
            rs.sjekk_fil(fil, 'src/lib/data/chapters/nn/kroppsoving-9-9-9.json')
            self.assertEqual([g for _, g, _ in rs.funn], ['Ã¸'])

    def test_sjekk_py_stdin(self):
        p = subprocess.run([sys.executable, os.path.join(HER, 'sjekk.py'), '--stdin', '--json', '--kjente'],
                           input=json.dumps({'task': 'Kva er forteneste\ufffdmarginen?'}), capture_output=True, text=True)
        self.assertEqual(p.returncode, 1, p.stderr)
        self.assertTrue(json.loads(p.stdout)[0]['grunn'].startswith('mojibake'))


if __name__ == '__main__':
    unittest.main(verbosity=1)
