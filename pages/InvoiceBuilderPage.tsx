import TemplateSelector from '../components/TemplateSelector';

import React, { useState, useCallback, ChangeEvent, useRef, useLayoutEffect, useEffect, ReactNode } from 'react';
import type { InvoiceData, LineItem } from '../types';
import { DocumentType } from '../types';
import { TEMPLATES, CURRENCIES, LANGUAGES } from '../constants';
import useLocalStorage from '../hooks/useLocalStorage';
import { translations } from '../translations';
import InvoicePreview from '../components/InvoicePreview';
import { downloadPdf } from "../services/downloadPdf";
import { Helmet } from 'react-helmet-async';

import { useLocation } from 'react-router-dom';

declare const jspdf: any;
declare const html2canvas: any;

const defaultInvoice: InvoiceData = {
  documentType: DocumentType.Invoice,
  from: '',
  to: '',
  logoUrl: null,
  signatureUrl: null,
  invoiceNumber: '1',
  poNumber: '',
  date: new Date().toISOString().split('T')[0],
  dueDate: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0],
  paymentTerms: '',
  paymentMethod: '',
  items: [
    { id: crypto.randomUUID(), description: '', quantity: '', price: '' },
  ],
  notes: '',
  taxRate: '',
  discountRate: '',
  currency: 'USD',
  amountPaid: '',
  paymentLink: '',
  language: 'en-US',
};

// Reusable styled input component for a consistent look
const EditableField: React.FC<any> = ({ value, onChange, placeholder = '', className = '', type = 'text', rows, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
      if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
  }, [value]);

  const commonProps = {
      value,
      onChange,
      placeholder,
      className: `bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-600 rounded-md p-1 w-full border border-gray-300 dark:text-gray-100 dark:placeholder:text-gray-500 dark:border-gray-600 dark:focus:ring-primary-500 ${className}`,
      ...props
  };
  
  if (rows) {
      return (
          <textarea
              {...commonProps}
              ref={textareaRef}
              rows={rows}
              className={`${commonProps.className} resize-none overflow-hidden`}
          />
      );
  }

  return <input type={type} {...commonProps} />;
};

interface DropdownOption {
  value: string;
  label: ReactNode;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (

   <>
      {/* ✅ HELMET MUST BE HERE */}
      <Helmet>
        <title>Free Online Invoice Generator – Create & Download Professional Invoices | QuickBillr</title>
        
        <meta
          name="description"
          content="Generate, customize, and download professional invoices instantly with QuickBillr’s free online invoice generator. No signup required. Perfect for freelancers, contractors, and small businesses."
          key="description"
        />
        
        <meta
        name="keywords"
        content="online invoice generator, create invoice free, download invoice pdf, invoice template free, freelancer billing software, invoice creator, estimate maker"
        />

        {/* Canonical (VERY IMPORTANT) */}
        <link rel="canonical" href="https://quickbillr.online/free-invoice-generator" />
        
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Free Invoice Generator for Freelancers | QuickBillr" />
        <meta property="og:description" content="Create professional invoices in seconds with QuickBillr." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quickbillr.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Invoice Generator for Freelancers | QuickBillr" />
        <meta name="twitter:description" content="Create invoices easily with QuickBillr." />
      </Helmet>




    
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-transparent p-2 text-left dark:bg-gray-700 dark:border-gray-600 dark:text-white flex justify-between items-center"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          className={`h-5 w-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 dark:ring-gray-600 overflow-auto focus:outline-none sm:text-sm"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${value === option.value ? 'bg-primary-50 dark:bg-primary-600/20' : ''}`}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={value === option.value}
            >
              <span className={`block truncate ${value === option.value ? 'font-semibold' : 'font-normal'}`}>
                {option.label}
              </span>
              {value === option.value && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 dark:text-primary-400">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
   </>
  );
};


const InvoiceBuilderPage: React.FC = () => {
  const [data, setData] = useLocalStorage<InvoiceData>('invoiceData', defaultInvoice);
  const [selectedTemplate, setSelectedTemplate] = useLocalStorage<string>('selectedTemplate', 'template-1');
  const [showQrCode, setShowQrCode] = useLocalStorage<boolean>('showQrCode', true);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [paperSize, setPaperSize] = useLocalStorage<string>('paperSize', 'a4');
  const [isDownloading, setIsDownloading] = useState(false);

    const location = useLocation();

  // Detect template from URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const templateId = params.get('template');
    if (templateId && TEMPLATES.some(t => t.id === templateId)) {
      setSelectedTemplate(templateId);
    }
  }, [location, setSelectedTemplate]);


  const t = translations[data.language as keyof typeof translations] || translations['en-US'];

  const handleDataChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
        if (value === '') {
            setData(prev => ({ ...prev, [name]: '' }));
        } else {
            const parsedValue = parseFloat(value);
            if (!isNaN(parsedValue)) {
                setData(prev => ({ ...prev, [name]: Math.max(0, parsedValue) }));
            }
        }
    } else {
        setData(prev => ({ ...prev, [name]: value }));
    }
  }, [setData]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: 'logoUrl' | 'signatureUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prev => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const removeImage = (field: 'logoUrl' | 'signatureUrl') => {
    setData(prev => ({ ...prev, [field]: null }));
  };

  const handleItemChange = (id: string, field: keyof Omit<LineItem, 'id'>, value: string) => {
    setData(prev => ({
      ...prev,
      items: prev.items.map(item => {
        if (item.id === id) {
          if (field === 'quantity' || field === 'price') {
            if (value === '') {
              return { ...item, [field]: '' };
            }
            const parsedValue = parseFloat(value);
            if (!isNaN(parsedValue)) {
              return { ...item, [field]: Math.max(0, parsedValue) };
            }
            return item;
          }
          return { ...item, [field]: value };
        }
        return item;
      }),
    }));
  };

  const addItem = () => {
    setData(prev => ({
      ...prev,
      items: [
        ...prev.items,
        { id: crypto.randomUUID(), description: '', quantity: '', price: '' },
      ],
    }));
  };

  const removeItem = (id: string) => {
    setData(prev => ({ ...prev, items: prev.items.filter(item => item.id !== id) }));
  };

  const formatDate = useCallback((dateStr: string) => {
    if (!dateStr) return '';
    try {
      const dateObj = new Date(dateStr + 'T00:00:00'); // Ensure it's parsed as local date
      return new Intl.DateTimeFormat(data.language, { month: 'short', day: 'numeric', year: 'numeric' }).format(dateObj);
    } catch {
      return 'Invalid Date';
    }
  }, [data.language]);

  const handleDownloadPdf = useCallback(async () => {
    setIsDownloading(true);   // <-- Enable PDF-safe mode

    await downloadPdf(data, paperSize, formatDate);

    setTimeout(() => {
        setIsDownloading(false);  // <-- Back to normal mode
    }, 200);
}, [data, paperSize, formatDate]);


  const handlePrint = useCallback(() => {
    const previewElement = document.getElementById('invoice-preview');
    if (!previewElement) return;

    const exportableInvoice = previewElement.cloneNode(true) as HTMLElement;
    if (!exportableInvoice) return;

    const printContainer = document.getElementById('print-container');
    if (printContainer) {
        printContainer.innerHTML = '';
        printContainer.appendChild(exportableInvoice);
        window.print();
    }
  }, [data, formatDate]);
  
  const subtotal = data.items.reduce((acc, item) => acc + (Number(item.quantity) || 0) * (Number(item.price) || 0), 0);
  const discountAmount = (subtotal * (Number(data.discountRate) || 0)) / 100;
  const subtotalAfterDiscount = subtotal - discountAmount;
  const taxAmount = (subtotalAfterDiscount * (Number(data.taxRate) || 0)) / 100;
  const total = subtotalAfterDiscount + taxAmount;
  const balanceDue = total - (Number(data.amountPaid) || 0);
  const currencySymbol = CURRENCIES.find(c => c.name === data.currency)?.symbol || '$';

  const formatNumber = useCallback((num: number | '' | null | undefined) => {
    const number = Number(num);
    if (isNaN(number)) return '0.00';
    return new Intl.NumberFormat(data.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
  }, [data.language]);

  useEffect(() => {
    if (!showQrCode || !data.paymentLink) {
        setQrCodeUrl('');
        return;
    }
    
    const generateQrCode = async () => {
      try {
        const qrData = encodeURIComponent(data.paymentLink);
        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${qrData}&bgcolor=ffffff`);
        if (!response.ok) {
            throw new Error('Failed to fetch QR code');
        }
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onloadend = () => {
            setQrCodeUrl(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error generating QR code:", error);
        setQrCodeUrl('');
      }
    };

    generateQrCode();
  }, [data.paymentLink, showQrCode]);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:flex-grow flex justify-center items-start overflow-hidden">
                  <InvoicePreview 
                    data={data}
                    t={t}
                    currencySymbol={currencySymbol}
                    qrCodeUrl={qrCodeUrl}
                    showQrCode={showQrCode}
                    formatNumber={formatNumber}
                    formatDate={formatDate}
                    handleFileChange={handleFileChange}
                    removeImage={removeImage}
                    handleDataChange={handleDataChange}
                    handleItemChange={handleItemChange}
                    removeItem={removeItem}
                    addItem={addItem}
                    subtotal={subtotal}
                    total={total}
                    balanceDue={balanceDue}
                    EditableField={EditableField}
                    templateId={selectedTemplate}
                    isDownloading={isDownloading} 
                  />
              </div>

              <aside className="lg:w-80 flex-shrink-0">
                  <div className="sticky top-24 space-y-6">
                      <div className="bg-white rounded-lg shadow p-4 space-y-4 dark:bg-gray-800">
                         <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={handleDownloadPdf}
                              className="w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-md hover:shadow-lg hover:brightness-110 transition-all font-semibold text-base flex items-center justify-center space-x-2"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                              <span>Download PDF</span>
                            </button>
                             <button
                              onClick={handlePrint}
                              className="w-full text-center px-4 py-3 bg-gray-600 text-white rounded-md hover:shadow-lg hover:bg-gray-700 transition-all font-semibold text-base flex items-center justify-center space-x-2"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" /></svg>
                              <span>Print</span>
                            </button>
                         </div>
                         <div className="grid grid-cols-1 gap-4 pt-2">
                             
<TemplateSelector
  selectedTemplate={selectedTemplate}
  setSelectedTemplate={setSelectedTemplate}
/>


                              <label className="block">
                                 <span className="text-gray-700 font-semibold dark:text-gray-300">{t.language}</span>
                                 <CustomDropdown
                                     value={data.language}
                                     onChange={(newValue) => setData(prev => ({...prev, language: newValue}))}
                                     options={LANGUAGES.map(lang => ({ value: lang.code, label: lang.name }))}
                                 />
                             </label>
                             <label className="block">
                                 <span className="text-gray-700 font-semibold dark:text-gray-300">Currency</span>
                                 <CustomDropdown
                                     value={data.currency}
                                     onChange={(newValue) => setData(prev => ({...prev, currency: newValue}))}
                                     options={CURRENCIES.map(c => ({ value: c.name, label: <>{c.name} <span className="text-gray-500">({c.symbol})</span></> }))}
                                 />
                             </label>
                             <label className="block">
                                 <span className="text-gray-700 font-semibold dark:text-gray-300">Payment Link (for QR)</span>
                                 <input
                                     type="url"
                                     name="paymentLink"
                                     value={data.paymentLink}
                                     onChange={handleDataChange}
                                     placeholder="https://paypal.me/yourname"
                                     className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-transparent p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                 />
                             </label>
                             <label className="flex items-center space-x-2 cursor-pointer text-sm">
                                <input
                                  type="checkbox"
                                  checked={showQrCode}
                                  onChange={(e) => setShowQrCode(e.target.checked)}
                                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                />
                                <span className="text-gray-700 font-medium dark:text-gray-300">Add QR Code to Invoice</span>
                             </label>
                             <button onClick={() => setData(prev => ({ ...prev, documentType: prev.documentType === DocumentType.Invoice ? DocumentType.Estimate : DocumentType.Invoice }))} className="w-full text-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition mt-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                               {data.documentType === DocumentType.Invoice ? t.switchToEstimate : t.switchToInvoice}
                             </button>
                         </div>
                      </div>
                  </div>
              </aside>
          </div>
      </div>
    </>
  );
};

export default InvoiceBuilderPage;
