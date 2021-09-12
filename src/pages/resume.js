import React from "react";
import { Page as PageSite, Seo } from "gatsby-theme-portfolio-minimal";
import { Document, Page, pdfjs } from "react-pdf";
import resume from './resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {

  return (
    <>
      <Seo title="Resume" useTitleTemplate={true} noIndex={true} />
      <PageSite>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
      </div>

      </PageSite>
    </>
  );
}
