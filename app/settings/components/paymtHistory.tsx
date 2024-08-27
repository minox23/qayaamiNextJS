const orders = [
    {
      orderNum: 808195,
      date: "08 May 2024",
      status: "Done",
      total: "CFA 2500",
      invoiceLink: <a target="blank" className="text-blue-600 underline" href="https://google.com">Invoice</a>,
    },
    {
      orderNum: 806747,
      date: "08 May 2024",
      status: "Processing",
      total: "CFA 2500",
      invoiceLink: <a target="blank" className="text-blue-600 underline" href="https://google.com">Invoice</a>,
    },
    {
      orderNum: 800870,
      date: "08 May 2024",
      status: "Processing",
      total: "CFA 2500",
      invoiceLink: <a target="blank" className="text-blue-600 underline" href="https://google.com">Invoice</a>,
    },
    {
      orderNum: 808795,
      date: "08 May 2024",
      status: "Processing",
      total: "CFA 2500",
      invoiceLink: <a target="blank" className="text-blue-600 underline" href="https://google.com">Invoice</a>,
    },
  
  ];
  
  function createInvoice(orders: any) {
    return (
      <tr className="text-center hover:bg-white transition-all">
        <td className="py-3">{orders.orderNum}</td>
        <td className="py-3">{orders.date}</td>
        <td className="py-3">{orders.status}</td>
        <td className="py-3">{orders.total}</td>
        <td className="py-3">{orders.invoiceLink}</td>
      </tr>
    );
  }
  
  export default function PaymenttHistory() {
    return (
      <div className="bg-gray-100 p-5 rounded-md mt-5">
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b">
              <th className="font-semibold pb-2">Order #</th>
              <th className="font-semibold pb-2">Date</th>
              <th className="font-semibold pb-2">Status</th>
              <th className="font-semibold pb-2">Total</th>
              <th className="font-semibold pb-2">Invoice</th>
            </tr>
          </thead>
          <tbody className="mt-5">{orders.map(createInvoice)}</tbody>
        </table>
      </div>
    );
  }
  