import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-4 text-3xl font-bold">Impressum</h1>
      <p className="mb-6">Angaben gemäß § 5 TMG:</p>
      <p>
        Max Mustermann
        <br />
        Musterstraße 1<br />
        12345 Musterstadt
        <br />
        Germany
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold">Kontakt</h2>
      <p>
        Telefon: +49 (0) 123 456789
        <br />
        E-Mail: info@musterfirma.de
      </p>
    </div>
  );
};

export default Page;
