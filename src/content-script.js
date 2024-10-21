import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';



// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === 'convertToPDF') {
//         console.log("convert to pdf")
//         // Aquí pones la lógica para capturar la página y convertirla a PDF
//         convertirAPDF();
//     }
// });




export async function convertirAPDF() {
    const doc = new jsPDF();
    let pageHeight = doc.internal.pageSize.height;
    let totalHeight = document.body.scrollHeight;
    let currentHeight = 0;
  
    while (currentHeight < totalHeight) {
      // Captura la parte visible de la página
      await html2canvas(document.body, { scrollY: currentHeight  , scrollX: 0 }).then(canvas => {
        let imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 0, currentHeight, 210, 297);
        currentHeight += pageHeight;
        if (currentHeight < totalHeight) {
          doc.addPage(); // Agregar una nueva página
        }
      });
    }
  
    doc.save('pagina_completa.pdf'); // Guardar el PDF
  }


 