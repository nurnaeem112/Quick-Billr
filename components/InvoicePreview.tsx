import React from 'react';
import type { InvoiceData, LineItem } from '../types';
import { DocumentType } from '../types';

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

const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  data, t, currencySymbol, qrCodeUrl, showQrCode,
  formatNumber, formatDate, handleFileChange, removeImage, handleDataChange,
  handleItemChange, removeItem, addItem,
  subtotal, total, balanceDue, EditableField, templateId
}) => {
  return (
    <div id="invoice-preview" className={`bg-white p-10 rounded-lg shadow-lg text-base dark:bg-gray-800 template-${templateId}`}>
       <div className="flex flex-row justify-between items-start mb-12 gap-4">
           <div className="w-2/5">
               <div data-export-id="logo-container">
                 {data.logoUrl ? (
                     <div className="relative group">
                         <img src={data.logoUrl} alt="Company or client logo" className="h-20 w-auto object-contain" />
                         <button onClick={() => removeImage('logoUrl')} className="absolute top-0 left-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only">&times;</button>
                     </div>
                 ) : (
                     <label htmlFor="logo-upload" className="cursor-pointer group preview-only inline-block">
                         <div className="w-48 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition dark:border-gray-600 dark:hover:border-primary-500">
                             {t.addYourLogo}
                         </div>
                         <input id="logo-upload" type="file" className="hidden" onChange={(e) => handleFileChange(e, 'logoUrl')} accept="image/*" />
                     </label>
                 )}
               </div>
               <div className="mt-4">
                   <EditableField
                      value={data.from}
                      onChange={handleDataChange}
                      name="from"
                      placeholder={"Your Company\n123 Your Street\nYour City, ST 12345\nyour@email.com"}
                      className="text-lg"
                      rows={4}
                   />
               </div>
               <div className="mt-8">
                 <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2 dark:text-gray-400">{t.billTo}</h2>
                 <EditableField
                    value={data.to}
                    onChange={handleDataChange}
                    name="to"
                    placeholder={"Client Company\n456 Client Street\nClient City, ST 54321\nclient@email.com"}
                    className="text-lg"
                    rows={4}
                 />
               </div>
           </div>
           <div className="w-auto text-right">
               <h1 className="text-5xl font-bold uppercase text-gray-800 tracking-widest dark:text-gray-100">
                   {data.documentType === DocumentType.Invoice ? t.documentTypeInvoice : t.documentTypeEstimate}
               </h1>
               <div className="flex items-center justify-end mt-2">
                   <span className="text-gray-500 mr-1 dark:text-gray-400">{t.invoiceNumberPrefix}</span>
                   <EditableField
                      value={data.invoiceNumber}
                      onChange={handleDataChange}
                      name="invoiceNumber"
                      className="w-2/5 text-right font-semibold"
                   />
               </div>
               <div className="space-y-2 mt-[60px]">
                 <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <span className="font-semibold text-gray-600 text-right dark:text-gray-300">{t.date}</span>
                    <EditableField type="date" name="date" value={data.date} onChange={handleDataChange} className="text-right [color-scheme:light] dark:[color-scheme:dark] max-w-40" />
                 </div>
                 <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <span className="font-semibold text-gray-600 text-right dark:text-gray-300">{t.dueDate}</span>
                    <EditableField type="date" name="dueDate" value={data.dueDate} onChange={handleDataChange} className="text-right [color-scheme:light] dark:[color-scheme:dark] max-w-40" />
                 </div>
                 <div data-export-id="payment-terms-row" className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <span className="font-semibold text-gray-600 text-right dark:text-gray-300">{t.paymentTerms}</span>
                    <EditableField type="text" name="paymentTerms" value={data.paymentTerms} onChange={handleDataChange} placeholder="e.g. Net 15" className="text-right max-w-36" />
                 </div>
                 <div data-export-id="po-number-row" className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <span className="font-semibold text-gray-600 text-right dark:text-gray-300">{t.poNumber}</span>
                    <EditableField type="text" name="poNumber" value={data.poNumber} onChange={handleDataChange} placeholder="e.g. PO-12345" className="text-right max-w-36" />
                 </div>
              </div>
           </div>
       </div>
       
        <div className="flow-root line-items-table">
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed">
                <colgroup>
                    <col />
                    <col className="w-24" />
                    <col className="w-28" />
                    <col className="w-28" />
                    <col className="w-12" />
                </colgroup>
                <thead className="bg-gray-800 text-white dark:bg-slate-700">
                    <tr>
                        <th scope="col" className="py-3 px-5 text-left font-semibold">{t.item}</th>
                        <th scope="col" className="py-3 px-3 text-right font-semibold">{t.quantity}</th>
                        <th scope="col" className="py-3 pl-3 pr-6 text-right font-semibold">{t.rate}</th>
                        <th scope="col" className="py-3 px-2 text-right font-semibold">{t.amount}</th>
                        <th scope="col" className="py-3 px-3 text-center font-semibold"><span className="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map(item => (
                        <tr key={item.id} className="border-b border-gray-200 group dark:border-gray-700">
                            <td className="py-2 px-3 align-top">
                                <EditableField
                                    value={item.description}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleItemChange(item.id, 'description', e.target.value)}
                                    placeholder="Description of item/service..."
                                    rows={2}
                                />
                            </td>
                            <td className="py-2 px-3 align-top text-right">
                                <EditableField type="number" value={item.quantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleItemChange(item.id, 'quantity', e.target.value)} className="text-right" placeholder="1"/>
                            </td>
                            <td className="py-2 pl-3 pr-6 align-top text-right">
                                <EditableField type="number" value={item.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleItemChange(item.id, 'price', e.target.value)} className="text-right" placeholder="0.00" />
                            </td>
                            <td className="py-2 pl-3 pr-2 text-right align-top text-gray-800 dark:text-gray-200">{currencySymbol}{formatNumber(Number(item.quantity) * Number(item.price))}</td>
                            <td className="py-2 pl-2 pr-3 text-center align-top">
                              <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity preview-only">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                              </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
        <button onClick={addItem} className="mt-4 px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-md hover:border-primary-500 hover:text-primary-500 transition-all dark:border-gray-600 dark:text-gray-400 dark:hover:text-primary-400 dark:hover:border-primary-400 preview-only">{t.addLineItem}</button>
        
        <div className="mt-8 flex flex-row justify-between items-start gap-8">
            <div className="w-[35%] space-y-8">
                <div data-export-id="payment-method-container">
                    <h4 className="font-bold text-gray-600 mb-2 dark:text-gray-300">{t.paymentMethod}</h4>
                    <EditableField
                        name="paymentMethod"
                        value={data.paymentMethod}
                        onChange={handleDataChange}
                        rows={2}
                        className="text-gray-600 dark:text-gray-400"
                        placeholder={"PayPal Account: example@paypal.com\nBank Account: XXXX-XXXX-XXXX"}
                    />
                </div>
                <div data-export-id="notes-container">
                    <h4 className="font-bold text-gray-600 dark:text-gray-300">{t.notes}</h4>
                    <EditableField name="notes" value={data.notes} onChange={handleDataChange} rows={3} className="mt-1 text-gray-600 dark:text-gray-400" placeholder="Thanks for your business!" />
                </div>
            </div>
            <div className="w-[35%] totals-summary">
                <dl className="space-y-2 text-gray-700 dark:text-gray-300">
                    <div className="flex justify-between">
                        <dt>{t.subtotal}</dt>
                        <dd>{currencySymbol}{formatNumber(subtotal)}</dd>
                    </div>
                    <div data-export-id="discount-row" className="flex justify-between items-center">
                        <dt>{t.discount}</dt>
                        <dd className="flex items-center">
                            <EditableField type="number" name="discountRate" value={data.discountRate} onChange={handleDataChange} className="max-w-20 text-right flex-shrink-0" placeholder="0" />
                            <span>%</span>
                        </dd>
                    </div>
                     <div data-export-id="tax-row" className="flex justify-between items-center">
                        <dt>{t.tax}</dt>
                        <dd className="flex items-center">
                            <EditableField type="number" name="taxRate" value={data.taxRate} onChange={handleDataChange} className="max-w-20 text-right flex-shrink-0" placeholder="5" />
                            <span>%</span>
                        </dd>
                    </div>
                    <div data-export-id="total-row" className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-100">
                        <dt>{t.total}</dt>
                        <dd>{currencySymbol}{formatNumber(total)}</dd>
                    </div>
                    <div data-export-id="amount-paid-row" className="flex justify-between items-center pt-1">
                      <dt>{t.amountPaid}</dt>
                      <dd className="flex items-center">
                        {currencySymbol}
                        <EditableField
                          type="number"
                          name="amountPaid"
                          value={data.amountPaid}
                          onChange={handleDataChange}
                          className="max-w-20 text-right flex-shrink-0"
                          placeholder="0.00"
                        />
                      </dd>
                    </div>
                    <div data-export-id="balance-due-row" className="flex justify-between font-bold text-xl pt-2 mt-2 border-t-2 border-black text-black dark:border-gray-200 dark:text-white balance-due-row">
                      <dt>{t.balanceDue}</dt>
                      <dd>{currencySymbol}{formatNumber(balanceDue)}</dd>
                    </div>
                </dl>
            </div>
        </div>

        <div className="mt-12 flex flex-row justify-between items-end gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div>
                {showQrCode && qrCodeUrl && (
                  <div>
                    <img src={qrCodeUrl} alt="QR Code for payment link" className="w-24 h-24" />
                    <p className="text-xs text-gray-500 mt-1 max-w-[96px] text-center dark:text-gray-400">{t.qrCodeHelper}</p>
                  </div>
                )}
            </div>
            
            <div data-export-id="signature-container" className="w-48 text-center">
              <div className="h-20 mb-2">
                {data.signatureUrl ? (
                  <div className="relative group h-full">
                    <img src={data.signatureUrl} alt="Authorized signature" className="h-full w-auto object-contain mx-auto" />
                    <button onClick={() => removeImage('signatureUrl')} className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity preview-only">&times;</button>
                  </div>
                ) : (
                  <label htmlFor="signature-upload" className="cursor-pointer group h-full flex items-end justify-center preview-only">
                      <span className="text-gray-400 text-sm pb-1 group-hover:text-primary-500 transition dark:group-hover:text-primary-400">Click to upload signature</span>
                      <input id="signature-upload" type="file" className="hidden" onChange={(e) => handleFileChange(e, 'signatureUrl')} accept="image/*" />
                  </label>
                )}
              </div>
              <div className="border-t border-gray-400 pt-1 dark:border-gray-500">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{t.authorizedSignature}</p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default InvoicePreview;