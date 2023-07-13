import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import QRCode from "qrcode.react";

function BarcodeComponent() {
  const [vCardData, setVCardData] = useState("");

  const vCardDataRef = useRef();

  useEffect(() => {
    const vCardDataString = `BEGIN:VCARD
      VERSION:3.0
      N:MakkLiesl
      TEL:+233553467962/+2330201921437
      EMAIL:info@makkliesl.com
      END:VCARD`;

    setVCardData(vCardDataString);
  }, []);

  return (
    <Box maxWidth="200px" mt="2rem">
      <QRCode value={vCardData} size={150} ref={vCardDataRef} />
    </Box>
  );
}

export default BarcodeComponent;
