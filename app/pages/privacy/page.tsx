import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-4 text-3xl font-bold">Datenschutzerklärung</h1>
      <p className="mb-6">Stand: 8. April 2025</p>

      <h2 className="mb-4 text-2xl font-bold">Inhaltsübersicht</h2>
      <ul className="index mb-8 space-y-2">
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m3">
            Verantwortlicher
          </a>
        </li>
        <li>
          <a
            className="index-link text-blue-600 hover:underline"
            href="#mOverview"
          >
            Übersicht der Verarbeitungen
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m2427">
            Maßgebliche Rechtsgrundlagen
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m27">
            Sicherheitsmaßnahmen
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m24">
            Internationale Datentransfers
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m12">
            Allgemeine Informationen zur Datenspeicherung und Löschung
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m10">
            Rechte der betroffenen Personen
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m225">
            Bereitstellung des Onlineangebots und Webhosting
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m134">
            Einsatz von Cookies
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m136">
            Präsenzen in sozialen Netzwerken (Social Media)
          </a>
        </li>
        <li>
          <a className="index-link text-blue-600 hover:underline" href="#m328">
            Plug-ins und eingebettete Funktionen sowie Inhalte
          </a>
        </li>
      </ul>

      <h2 id="m3" className="mb-4 text-2xl font-bold">
        Verantwortlicher
      </h2>
      <p className="mb-2">
        Vorname, Name / Firma
        <br />
        Straße, Hausnr.
        <br />
        PLZ, Ort, Land
      </p>
      <p className="mb-8">
        E-Mail-Adresse:{" "}
        <a
          className="text-blue-600 hover:underline"
          href="mailto:vorname.name@beispielsdomain.eu"
        >
          vorname.name@beispielsdomain.eu
        </a>
      </p>

      <h2 id="mOverview" className="mb-4 text-2xl font-bold">
        Übersicht der Verarbeitungen
      </h2>
      <p className="mb-4">
        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
        die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen.
      </p>

      <h3 className="mb-2 text-xl font-semibold">
        Arten der verarbeiteten Daten
      </h3>
      <ul className="mb-4 list-disc pl-6">
        <li>Bestandsdaten.</li>
        <li>Standortdaten.</li>
        <li>Kontaktdaten.</li>
        <li>Inhaltsdaten.</li>
        <li>Nutzungsdaten.</li>
        <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
        <li>Protokolldaten.</li>
      </ul>

      <h3 className="mb-2 text-xl font-semibold">
        Kategorien betroffener Personen
      </h3>
      <ul className="mb-4 list-disc pl-6">
        <li>Kommunikationspartner.</li>
        <li>Nutzer.</li>
      </ul>

      <h3 className="mb-2 text-xl font-semibold">Zwecke der Verarbeitung</h3>
      <ul className="mb-8 list-disc pl-6">
        <li>Kommunikation.</li>
        <li>Sicherheitsmaßnahmen.</li>
        <li>Organisations- und Verwaltungsverfahren.</li>
        <li>Feedback.</li>
        <li>
          Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
        </li>
        <li>Informationstechnische Infrastruktur.</li>
        <li>Öffentlichkeitsarbeit.</li>
      </ul>

      <h2 id="m2427" className="mb-4 text-2xl font-bold">
        Maßgebliche Rechtsgrundlagen
      </h2>
      <p className="mb-4">
        <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im
        Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO,
        auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie
        zur Kenntnis, dass neben den Regelungen der DSGVO nationale
        Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
        können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
        maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
      </p>

      <ul className="mb-4 list-disc pl-6">
        <li className="mb-2">
          <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die
          betroffene Person hat ihre Einwilligung in die Verarbeitung der sie
          betreffenden personenbezogenen Daten für einen spezifischen Zweck oder
          mehrere bestimmte Zwecke gegeben.
        </li>
        <li className="mb-2">
          <strong>
            Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
          </strong>{" "}
          - die Verarbeitung ist zur Wahrung der berechtigten Interessen des
          Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die
          Interessen, Grundrechte und Grundfreiheiten der betroffenen Person,
          die den Schutz personenbezogener Daten verlangen, nicht überwiegen.
        </li>
      </ul>

      <p className="mb-4">
        <strong>Nationale Datenschutzregelungen in Deutschland: </strong>
        Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
        Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere
        das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
        Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
        insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
        Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
        personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
        Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Ferner können Landesdatenschutzgesetze der
        einzelnen Bundesländer zur Anwendung gelangen.
      </p>

      <p className="mb-8">
        <strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>Diese
        Datenschutzhinweise dienen sowohl der Informationserteilung nach dem
        Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus
        diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren
        räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO
        verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten
        Begriffe &quot;Bearbeitung&quot; von &quot;Personendaten&quot;,
        &quot;überwiegendes Interesse&quot; und &quot;besonders schützenswerte
        Personendaten&quot; werden die in der DSGVO verwendeten Begriffe
        &quot;Verarbeitung&quot; von &quot;personenbezogenen Daten&quot; sowie
        &quot;berechtigtes Interesse&quot; und &quot;besondere Kategorien von
        Daten&quot; verwendet. Die gesetzliche Bedeutung der Begriffe wird
        jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem
        Schweizer DSG bestimmt.
      </p>

      <h2 id="m27" className="mb-4 text-2xl font-bold">
        Sicherheitsmaßnahmen
      </h2>
      <p className="mb-4">
        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
        Berücksichtigung des Stands der Technik, der Implementierungskosten und
        der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie
        der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der
        Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
        technische und organisatorische Maßnahmen, um ein dem Risiko
        angemessenes Schutzniveau zu gewährleisten.
      </p>

      <p className="mb-4">
        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
        Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
        und elektronischen Zugangs zu den Daten als auch des sie betreffenden
        Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit
        und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
        eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
        Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
        berücksichtigen wir den Schutz personenbezogener Daten bereits bei der
        Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren
        entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
        durch datenschutzfreundliche Voreinstellungen.
      </p>

      <p className="mb-8">
        Sicherung von Online-Verbindungen durch
        TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer,
        die über unsere Online-Dienste übertragen werden, vor unerlaubten
        Zugriffen zu schützen, setzen wir auf die
        TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und
        Transport Layer Security (TLS) sind die Eckpfeiler der sicheren
        Datenübertragung im Internet. Diese Technologien verschlüsseln die
        Informationen, die zwischen der Website oder App und dem Browser des
        Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die
        Daten vor unbefugtem Zugriff geschützt sind. TLS, als die
        weiterentwickelte und sicherere Version von SSL, gewährleistet, dass
        alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen.
        Wenn eine Website durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies
        durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als ein
        Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt
        übertragen werden.
      </p>

      <h2 id="m24" className="mb-4 text-2xl font-bold">
        Internationale Datentransfers
      </h2>
      <p className="mb-4">
        Datenverarbeitung in Drittländern: Sofern wir Daten in ein Drittland (d.
        h. außerhalb der Europäischen Union (EU) oder des Europäischen
        Wirtschaftsraums (EWR)) übermitteln oder dies im Rahmen der Nutzung von
        Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an
        andere Personen, Stellen oder Unternehmen geschieht (was erkennbar wird
        anhand der Postadresse des jeweiligen Anbieters oder wenn in der
        Datenschutzerklärung ausdrücklich auf den Datentransfer in Drittländer
        hingewiesen wird), erfolgt dies stets im Einklang mit den gesetzlichen
        Vorgaben.
      </p>

      <p className="mb-4">
        Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das
        Data Privacy Framework (DPF), welches durch einen
        Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer
        Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen
        Anbietern Standardvertragsklauseln abgeschlossen, die den Vorgaben der
        EU-Kommission entsprechen und vertragliche Verpflichtungen zum Schutz
        Ihrer Daten festlegen.
      </p>

      <p className="mb-4">
        Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer
        Daten: Das DPF bildet die primäre Schutzebene, während die
        Standardvertragsklauseln als zusätzliche Sicherheit dienen. Sollten sich
        Änderungen im Rahmen des DPF ergeben, greifen die
        Standardvertragsklauseln als zuverlässige Rückfalloption ein. So stellen
        wir sicher, dass Ihre Daten auch bei etwaigen politischen oder
        rechtlichen Veränderungen stets angemessen geschützt bleiben.
      </p>

      <p className="mb-4">
        Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie
        nach dem DPF zertifiziert sind und ob Standardvertragsklauseln
        vorliegen. Weitere Informationen zum DPF und eine Liste der
        zertifizierten Unternehmen finden Sie auf der Website des
        US-Handelsministeriums unter{" "}
        <a
          className="text-blue-600 hover:underline"
          href="https://www.dataprivacyframework.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.dataprivacyframework.gov/
        </a>{" "}
        (in englischer Sprache).
      </p>

      <p className="mb-8">
        Für Datenübermittlungen in andere Drittländer gelten entsprechende
        Sicherheitsmaßnahmen, insbesondere Standardvertragsklauseln,
        ausdrückliche Einwilligungen oder gesetzlich erforderliche
        Übermittlungen. Informationen zu Drittlandtransfers und geltenden
        Angemessenheitsbeschlüssen können Sie dem Informationsangebot der
        EU-Kommission entnehmen:{" "}
        <a
          className="text-blue-600 hover:underline"
          href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de.
        </a>
      </p>

      <h2 id="m12" className="mb-4 text-2xl font-bold">
        Allgemeine Informationen zur Datenspeicherung und Löschung
      </h2>
      <p className="mb-4">
        Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den
        gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen
        widerrufen werden oder keine weiteren rechtlichen Grundlagen für die
        Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche
        Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden.
        Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder
        besondere Interessen eine längere Aufbewahrung oder Archivierung der
        Daten erfordern.
      </p>

      <p className="mb-4">
        Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen
        Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist
        zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder
        juristischer Personen, entsprechend archiviert werden.
      </p>

      <p className="mb-4">
        Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur
        Aufbewahrung und Löschung von Daten, die speziell für bestimmte
        Verarbeitungsprozesse gelten.
      </p>

      <p className="mb-4">
        Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines
        Datums, ist stets die längste Frist maßgeblich.
      </p>

      <p className="mb-4">
        Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und
        beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende des
        Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im
        Fall laufender Vertragsverhältnisse, in deren Rahmen Daten gespeichert
        werden, ist das fristauslösende Ereignis der Zeitpunkt des
        Wirksamwerdens der Kündigung oder sonstige Beendigung des
        Rechtsverhältnisses.
      </p>

      <p className="mb-4">
        Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern
        aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden,
        verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung
        rechtfertigen.
      </p>

      <p className="mb-2 font-semibold">
        Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
      </p>

      <div className="mb-8 pl-6">
        <p className="mb-2">
          <strong>Aufbewahrung und Löschung von Daten: </strong>Die folgenden
          allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach
          deutschem Recht:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            10 Jahre - Aufbewahrungsfrist für Bücher und Aufzeichnungen,
            Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie
            die zu ihrem Verständnis erforderlichen Arbeitsanweisungen und
            sonstigen Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3
            AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).
          </li>
          <li className="mb-2">
            8 Jahre - Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§
            147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1
            Nr. 4 i.V.m. Abs. 4 HGB).
          </li>
          <li className="mb-2">
            6 Jahre - Übrige Geschäftsunterlagen: empfangene Handels- oder
            Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder
            Geschäftsbriefe, sonstige Unterlagen, soweit sie für die Besteuerung
            von Bedeutung sind, z. B. Stundenlohnzettel,
            Betriebsabrechnungsbögen, Kalkulationsunterlagen,
            Preisauszeichnungen, aber auch Lohnabrechnungsunterlagen, soweit sie
            nicht bereits Buchungsbelege sind und Kassenstreifen (§ 147 Abs. 1
            Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4
            HGB).
          </li>
          <li>
            3 Jahre - Daten, die erforderlich sind, um potenzielle
            Gewährleistungs- und Schadensersatzansprüche oder ähnliche
            vertragliche Ansprüche und Rechte zu berücksichtigen sowie damit
            verbundene Anfragen zu bearbeiten, basierend auf früheren
            Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die
            Dauer der regulären gesetzlichen Verjährungsfrist von drei Jahren
            gespeichert (§§ 195, 199 BGB).
          </li>
        </ul>
      </div>

      <h2 id="m10" className="mb-4 text-2xl font-bold">
        Rechte der betroffenen Personen
      </h2>
      <p className="mb-4">
        Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
        Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere
        aus Art. 15 bis 21 DSGVO ergeben:
      </p>

      <ul className="mb-8 space-y-4">
        <li className="border-l-4 border-gray-300 py-2 pl-6">
          <strong>
            Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
            der Sie betreffenden personenbezogenen Daten, die aufgrund von Art.
            6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
            gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
            Direktwerbung zu betreiben, haben Sie das Recht, jederzeit
            Widerspruch gegen die Verarbeitung der Sie betreffenden
            personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen;
            dies gilt auch für das Profiling, soweit es mit solcher
            Direktwerbung in Verbindung steht.
          </strong>
        </li>
        <li>
          <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
          Recht, erteilte Einwilligungen jederzeit zu widerrufen.
        </li>
        <li>
          <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
          darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
          Auskunft über diese Daten sowie auf weitere Informationen und Kopie
          der Daten entsprechend den gesetzlichen Vorgaben.
        </li>
        <li>
          <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
          gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
          betreffenden Daten oder die Berichtigung der Sie betreffenden
          unrichtigen Daten zu verlangen.
        </li>
        <li>
          <strong>
            Recht auf Löschung und Einschränkung der Verarbeitung:
          </strong>{" "}
          Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
          verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden,
          bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine
          Einschränkung der Verarbeitung der Daten zu verlangen.
        </li>
        <li>
          <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht,
          Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe
          der gesetzlichen Vorgaben in einem strukturierten, gängigen und
          maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
          anderen Verantwortlichen zu fordern.
        </li>
        <li>
          <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
          unbeschadet eines anderweitigen verwaltungsrechtlichen oder
          gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
          Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
          Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
          betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO
          verstößt.
        </li>
      </ul>

      <h2 id="m225" className="mb-4 text-2xl font-bold">
        Bereitstellung des Onlineangebots und Webhosting
      </h2>
      <p className="mb-4">
        Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur
        Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
        IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen
        unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu
        übermitteln.
      </p>

      <div className="mb-4 border-l-2 border-gray-200 pl-4">
        <p className="mb-2">
          <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B.
          Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und
          -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen
          mit Inhalten und Funktionen); Meta-, Kommunikations- und
          Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
          Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B.
          Logfiles betreffend Logins oder den Abruf von Daten oder
          Zugriffszeiten.)
        </p>

        <p className="mb-2">
          <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher,
          Nutzer von Onlinediensten).
        </p>

        <p className="mb-2">
          <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
          Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
          Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und
          technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.
        </p>

        <p className="mb-2">
          <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend
          Angaben im Abschnitt &quot;Allgemeine Informationen zur
          Datenspeicherung und Löschung&quot;.
        </p>

        <p>
          <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs.
          1 S. 1 lit. f) DSGVO).
        </p>
      </div>

      <p className="mb-2 font-semibold">
        Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
      </p>

      <div className="mb-8 border-l-2 border-gray-200 pl-4">
        <p className="mb-2">
          <strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der Zugriff
          auf unser Onlineangebot wird in Form von sogenannten
          &quot;Server-Logfiles&quot; protokolliert. Zu den Serverlogfiles
          können die Adresse und der Name der abgerufenen Webseiten und Dateien,
          Datum und Uhrzeit des Abrufs, übertragene Datenmengen
        </p>
      </div>
    </div>
  );
};

export default Page;
