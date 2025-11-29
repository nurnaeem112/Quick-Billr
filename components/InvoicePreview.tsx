import React, { useState } from 'react';
import type { InvoiceData, LineItem } from '../types';

import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';
import Template5 from '../templates/Template5';
import Template6 from '../templates/Template6';
import Template7 from '../templates/Template7';

interface InvoicePreviewProps {
  data: InvoiceData;
  t: Record<string, string>;
  currencySymbol: string;
  qrCodeUrl: string;
  showQrCode: boolean;
  formatNumber: (num: number | '' | null | undefined) => string;
  formatDate: (dateStr: string) => string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, field: 'logoUrl' | 'signatureUrl') => void;
  removeImage: (field: 'logoUrl' | 'signatureUrl') => void;
  handleDataChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleItemChange: (id: string, field: keyof Omit<LineItem, 'id'>, value: string) => void;
  removeItem: (id: string) => void;
  addItem: () => void;
  subtotal: number;
  total: number;
  balanceDue: number;
  EditableField: React.ElementType;
  templateId: string;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = (props) => {

  // ✅ HOOKS MUST BE HERE, inside component
  const [isDownloading, setIsDownloading] = useState(false);

  const {
    data,
    t,
    currencySymbol,
    qrCodeUrl,
    showQrCode,
    formatNumber,
    formatDate,
    handleFileChange,
    removeImage,
    handleDataChange,
    handleItemChange,
    removeItem,
    addItem,
    subtotal,
    total,
    balanceDue,
    EditableField,
    templateId
  } = props;

  const renderTemplate = () => {
    switch (templateId) {
      case 'template-1':
        return <Template1 {...props} />;

      case 'template-2':
        return <Template2 {...props} />;

      case 'template-3':
        return <Template3 {...props} />;

        case 'template-4':
        return <Template4 {...props} />;

        case 'template-5':
        return <Template5 {...props} />;

      case 'template-6':
        return <Template6 {...props} />;

        case 'template-7':
        return <Template7 {...props} />;



      default:
        return (
          <div
            id="invoice-preview"
            className={`bg-white p-10 rounded-lg shadow-lg template-${templateId} ${isDownloading ? "pdf-safe" : ""}`}
          />
        );
    }
  };

  return <>{renderTemplate()}</>;
};

export default InvoicePreview;
