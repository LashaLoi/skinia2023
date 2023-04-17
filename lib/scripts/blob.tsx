import Script from "next/script";

export function BlobScript() {
  return (
    <Script id="blob" strategy="afterInteractive">
      {`
      const blob = document.getElementById('blob');

      document.body.onmousemove = event => {
        const { clientX, clientY } = event;

        blob.animate(
          {
            left: clientX + "px",
            top: clientY + "px",
          },
          { duration: 2000, fill: "forwards" }
        );
      }
  `}
    </Script>
  );
}
