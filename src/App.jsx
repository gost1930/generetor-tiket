import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  // قائمة المنتجات
  const products = [
    { name: "TON ISABEL 3PS", price: 310 },
    { name: "OMO LIQUID MATIC 2.5L", price: 810 },
    { name: "JAVEL LIFE 5L", price: 230 },
    { name: "BINGO GEL MACHINE 1L", price: 370 },
    { name: "CANDIA LBEN", price: 145 },
    { name: "JUS IFRUIT 1L", price: 100 },
    { name: "TEST JAVEL 1L", price: 100 },
    { name: "BLÉDILAIT 400G", price: 800 },
  ];

  const [userName, setUserName] = useState("");
  const [logIn, setLogIn] = useState(false);

  // تحقق من تسجيل الدخول
  const isUserLoggedIn = () => {
    if (userName === "mahboul") {
      setLogIn(true);
    } else {
      alert("راك غالط ");
      setLogIn(false);
    }
  };

  // دالة للحصول على كمية عشوائية
  const getRandomQuantity = () => Math.floor(Math.random() * 2) + 1;

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [saleNumber, setSaleNumber] = useState(0);
  const [date, setDate] = useState("");
  const [mallName, setMallName] = useState("SUPÉRETTE FATEH EL ATTAF JAMAA");
  const [cashierName, setCashierName] = useState("JAMEL");

  // دالة توليد الفاتورة
  const generateInvoice = () => {
    let productsCopy = [...products];
    let newTotal = 0;
    let selected = [];

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * productsCopy.length);
      const product = productsCopy[randomIndex];
      const quantity = getRandomQuantity();
      const totalPrice = product.price * quantity;
      newTotal += totalPrice;

      selected.push({ ...product, quantity, totalPrice });

      // إزالة المنتج الذي تم اختياره من القائمة
      productsCopy.splice(randomIndex, 1);
    }

    setSelectedProducts(selected);
    setTotal(newTotal);

    // توليد رقم عشوائي للفاتورة
    setSaleNumber(Math.floor(Math.random() * 1000000));

    // إضافة التاريخ والوقت الحاليين
    const now = new Date();
    const formattedDate = `Le : ${now.getDate()} oct. ${now.getFullYear()} à ${now.getHours()}:${now.getMinutes()}`;
    setDate(formattedDate);
  };

  // دالة تحويل الفاتورة إلى صورة
  const downloadReceiptAsImage = () => {
    const receiptElement = document.getElementById("receipt");
    html2canvas(receiptElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `receipt_${saleNumber}.png`;
      link.click();
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      {logIn ? (
        <>
          <div className="mb-4">
            <input
              type="text"
              value={mallName}
              onChange={(e) => setMallName(e.target.value)}
              placeholder="Enter Mall Name"
              className="border p-2 mb-2 rounded-lg w-full"
            />
            <input
              type="text"
              value={cashierName}
              onChange={(e) => setCashierName(e.target.value)}
              placeholder="Enter Cashier Name"
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <div id="receipt" className="bg-white p-2 shadow-lg max-w-md w-[302px]">
            <h2 className="text-center text-md font-bold mb-4 uppercase">
              {`SUPÉRETTE ${mallName} EL ATTAF`}
            </h2>
            <div className="flex justify-between text-sm mb-4">
              <div>
                <p>Client: Divers</p>
                <p>Points: 0,00</p>
              </div>
              <div>
                <p>N°: {saleNumber}</p>
                <p>VAL: 0,00 DA</p>
              </div>
            </div>

            <hr className="my-2" />

            <table className="table-auto w-full text-[12px] mb-4">
              <thead>
                <tr>
                  <th className="text-start pr-2 py-1">Produit</th>
                  <th className="text-start pr-2 py-1">Qte</th>
                  <th className="text-start pr-2 py-1">P.U</th>
                  <th className="text-start pr-2 py-1">Total</th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="px-1 py-1">{product.name}</td>
                    <td className="px-1 py-1">{product.quantity}</td>
                    <td className="px-1 py-1">{product.price.toFixed(2)}</td>
                    <td className="px-1 py-1">{product.totalPrice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr className="my-2" />

            <div className="flex flex-col w-full text-[12px]">
              <div className="flex justify-between w-full">
                <p className="font-bold">Total: {total.toFixed(2)} DA</p>
                <p className="font-bold">TVA: 0,00 DA</p>
              </div>
              <p className="font-bold border p-2 text-center my-1">
                Net à payer: {total.toFixed(2)} DA
              </p>
              <div className="flex justify-between w-full">
                <p className="font-bold">Reçu: {total.toFixed(2)} DA</p>
                <p className="font-bold">Rendu: 0,00 DA</p>
              </div>
              <p className="font-bold text-center">Crédit: 0,00 DA</p>
              <div className="flex justify-between">
                <p>{date}</p>
                <p>CAISSIER : {cashierName}</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <p>Merci De Votre Visite</p>
            </div>
          </div>

          <button
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
            onClick={downloadReceiptAsImage}
          >
            تحميل الفاتورة كصورة
          </button>

          <button
            className="w-full bg-green-500 text-white py-2 mt-4 rounded-lg hover:bg-green-600"
            onClick={generateInvoice}
          >
            جينيرايت الفاتورة
          </button>
        </>
      ) : (
        <div>
          <input
            type="text"
            className="border p-2 mb-2 rounded-lg w-full"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="w-full bg-green-500 text-white py-2 mt-4 rounded-lg hover:bg-green-600"
            onClick={isUserLoggedIn}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
