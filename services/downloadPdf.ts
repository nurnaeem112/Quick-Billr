import type { InvoiceData } from '../types';

declare const jspdf: any;
declare const html2canvas: any;

export const prepareExportableInvoice = (
  originalElement: HTMLElement,
  data: InvoiceData,
  formatDate: (dateStr: string) => string
): HTMLElement | null => {
  if (!originalElement) return null;

  const clone = originalElement.cloneNode(true) as HTMLElement;
  clone.classList.add('export-mode');

  clone.querySelectorAll('.preview-only').forEach(el => el.remove());

  clone.querySelectorAll('input, textarea').forEach(el => {
      const element = el as HTMLInputElement | HTMLTextAreaElement;
      const parent = element.parentElement;
      if (parent) {
          const value = element.value || element.placeholder || '';
          const replacement = document.createElement(element.tagName.toLowerCase() === 'textarea' ? 'div' : 'span');
          
          if (element.tagName.toLowerCase() === 'textarea') {
              (replacement as HTMLDivElement).style.whiteSpace = 'pre-wrap';
          }
          
          replacement.textContent = value;
          if (element.type === 'date' && element.value) {
              replacement.textContent = formatDate(element.value);
          }

          element.classList.forEach(c => {
              if (c.startsWith('text-') || c.startsWith('font-') || c.startsWith('sm:text-')) {
                  replacement.classList.add(c);
              }
          });
          replacement.classList.add('p-1', 'w-full');
          parent.replaceChild(replacement, element);
      }
  });

  if (!data.poNumber) clone.querySelector('[data-export-id="po-number-row"]')?.remove();
  if (!data.paymentTerms) clone.querySelector('[data-export-id="payment-terms-row"]')?.remove();
  if (!data.paymentMethod) clone.querySelector('[data-export-id="payment-method-container"]')?.remove();
  if (!data.notes) clone.querySelector('[data-export-id="notes-container"]')?.remove();
  if (!data.signatureUrl) clone.querySelector('[data-export-id="signature-container"]')?.remove();
  
  if ((Number(data.discountRate) || 0) === 0) clone.querySelector('[data-export-id="discount-row"]')?.remove();
  if ((Number(data.taxRate) || 0) === 0) clone.querySelector('[data-export-id="tax-row"]')?.remove();
  
  if ((Number(data.amountPaid) || 0) === 0) {
      clone.querySelector('[data-export-id="amount-paid-row"]')?.remove();
      clone.querySelector('[data-export-id="balance-due-row"]')?.remove();
      const totalRow = clone.querySelector('[data-export-id="total-row"]');
      if (totalRow) {
          totalRow.className = clone.querySelector('[data-export-id="balance-due-row"]')?.className || totalRow.className;
      }
  }
  return clone;
};

export const downloadPdf = async (
  data: InvoiceData,
  paperSize: string,
  formatDate: (dateStr: string) => string
) => {
  const originalElement = document.getElementById('invoice-preview');
  if (!originalElement) {
    console.error("Invoice preview element not found");
    return;
  }
  
  const exportableInvoice = prepareExportableInvoice(originalElement, data, formatDate);
  if (!exportableInvoice) return;
  
  const exportContainer = document.createElement('div');
  exportContainer.style.position = 'fixed';
  exportContainer.style.top = '0';
  exportContainer.style.left = '0';
  exportContainer.style.opacity = '0';
  exportContainer.style.pointerEvents = 'none';
  exportContainer.style.zIndex = '-1';
  exportContainer.style.width = paperSize === 'letter' ? '8.5in' : '210mm';
  document.body.appendChild(exportContainer);
  exportContainer.appendChild(exportableInvoice);

  const isDarkMode = document.documentElement.classList.contains('dark');
  if (isDarkMode) document.documentElement.classList.remove('dark');

  try {
      const { jsPDF } = jspdf;

      // ✅ Add this before rendering
      exportableInvoice.style.fontFamily = "Inter, Arial, sans-serif";
      exportableInvoice.style.lineHeight = "1.25";

      // ✅ Improved html2canvas config
      
      const canvas = await html2canvas(exportableInvoice, {
          scale: 3,
          useCORS: true,
          scrollY: 0,
          backgroundColor: '#ffffff',
          logging: false,
          windowWidth: exportableInvoice.scrollWidth,
          windowHeight: exportableInvoice.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: paperSize });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, Math.round(pdfHeight * 10) / 10);
      pdf.save(`${data.documentType.toLowerCase()}-${data.invoiceNumber}.pdf`);
  } catch (error) {
      console.error("Error generating PDF:", error);
  } finally {
    if (isDarkMode) document.documentElement.classList.add('dark');
    document.body.removeChild(exportContainer);
  }
};
