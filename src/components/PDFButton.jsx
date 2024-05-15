import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Receipt from "/src/components/Receipt";

const PDFButton = ({ user, service }) => {
  return (
    <PDFDownloadLink
      document={<Receipt user={user} service={service} />}
      fileName={`comprobante-${service.name}.pdf`}
    >
      {({ loading }) =>
        loading ? (
          "Cargando documento..."
        ) : (
          <button className="text-pokeblue underline underline-offset-2 text-lg flex">
            Descargar comprobante
          </button>
        )
      }
    </PDFDownloadLink>
  );
};

export default PDFButton;