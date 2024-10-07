import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  // قائمة المنتجات
  const products = [
  { name: "IZEM CANET 33CL", price: 90 },
{ name: "OMO LIQUID MATIC 1L", price: 370 },
{ name: "COUCHE CAN BÉBÉ N05", price: 250 },
{ name: "THON ISABEL 3PES", price: 310 },
{ name: "MARGARINE MANY  500G", price: 185 },
{ name: "MAYOUNEZ LESIEUR 234", price: 210 },
{ name: "TOUMATE CAB 800G", price: 310 },
{ name: "TOUMATE IZDIHAR 400G", price: 185 },
{ name: "MARGARINE DIMA 500G", price: 185 },
{ name: "MARGARINE DIMA 250G", price: 110 },
{ name: "MARGARINE SOL 500G", price: 180 },
{ name: "NOULLES JUMBO", price: 50 },
{ name: "NOULLES KAZAMI", price: 50 },
{ name: "THON RICAMAR 3PES", price: 310 },
{ name: "THON MARATUN 3PES", price: 310 },
{ name: "SIDI SAADA CAMEMBRET", price: 380 },
{ name: "TASSILI CAMEMEBRET", price: 360 },
{ name: "FROMAGE TARTINO JUNIOR 16PES", price: 230 },
{ name: "FROMAGE CHEZZY 16PES", price: 185 },
{ name: "FROMAGE LA VACHE QUI RIT 24PES", price: 270 },
{ name: "BIMO MACAO", price: 100 },
{ name: "MAXON BISCUIT XL", price: 230 },
{ name: "EAU LALA KHEDIDJA 1.5L", price: 45 },
{ name: "EAU GUEDILA 1.5L", price: 45 },
{ name: "HAMOUD SELECTO 2L", price: 140 },
{ name: "JUS RAMY 1.25L", price: 135 },
{ name: "JUS IFRUIT 1L", price: 110 },
{ name: "SOUMMAME LBEN 1L", price: 145 },
{ name: "HODNA LBEN 1L", price: 145 },
{ name: "CANDIA LBEN 1L", price: 145 },
{ name: "SOUMMAME LAIT 1L", price: 130 },
{ name: "HODNA LAIT 1L", price: 110 },
{ name: "CANDY CHOCO 1L ", price: 190 },
{ name: "JAVEL LIFE 5L", price: 230 },
{ name: "BINGO GEL MACHINE 1L ", price: 370 },
{ name: "FORCE XPERSS LAVE SOL 1L", price: 175 },
{ name: "BRILEX LAVE SOL 1L", price: 165 },
{ name: "AMIR CEAN LAVE SOL 1L", price: 175 },
{ name: "AIGLE LIQUIDE VAISSELLE 970ML", price: 170 },
{ name: "ISIS SACHET 300G", price: 95 },
{ name: "TEST JAVEL 1L", price: 80 },
{ name: "CELIA DEVELOP 1 400G", price: 750 },
{ name: "BLÉDILAIT NUTSI 1 400G", price: 720 },
{ name: "COUCHE BIMBIES N03", price: 260 },
{ name: "COUCHE MOLFIX N04", price: 260 },
{ name: "SHAMPOOING VENUS 2EN1", price: 120 },
{ name: "DÉODORANT CARE", price: 250 },
{ name: "CHIPS MAHBOL", price: 60 },
{ name: "JUS ROUIBA 1L", price: 110 },
{ name: "CAFÉ MANY 250G", price: 380 },
{ name: "EAU IFRI 1.5L", price: 45 },
{ name: "COCA COLA 1.5L", price: 130 },
{ name: "OMO LIQUID MATIC 2.5L", price: 810 },
{ name: "YAOURT DANETTE MAXY", price: 55 },
{ name: "CHOCOLAT MOMENT NOIR", price: 210 },
{ name: "KOOL 4 WINNERS", price: 60 },
{ name: "YAOURT SOUMMAM FORT", price: 25 }
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
  const [mallName, setMallName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [cashierName, setCashierName] = useState("");

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
              placeholder="ادخل اسم صاحب المحل"
              className="border p-2 mb-2 rounded-lg w-full"
            />
            <input
              type="text"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              placeholder="ادخل المنطقة"
              className="border p-2 mb-2 rounded-lg w-full"
            />
            <input
              type="text"
              value={cashierName}
              onChange={(e) => setCashierName(e.target.value)}
              placeholder="اسم صاحب المبيعات"
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <div id="receipt" className="bg-white p-2 shadow-lg max-w-md w-[302px]">
            <h2 className="text-center text-md font-bold mb-4 uppercase">
              {`SUPÉRETTE ${mallName} ${placeName}`}
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
