import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const products = [
    { name: "IZEM CANET 33CL", price: 90 },
    { name: "MARGARINE DIMA 250G", price: 110 },
    { name: "MARGARINE SOL 500G", price: 180 },
    { name: "NOULLES JUMBO", price: 50 },
    { name: "NOULLES KAZAMI", price: 50 },
    { name: "OMO LIQUID MATIC 1L", price: 370 },
    // { name: "COUCHE CANBÉBÉ N05", price: 250 },
    // { name: "THON ISABEL 3PCS", price: 310 },

    // { name: "MARGARINE MANY  500G", price: 185 },

    // { name: "MAYOUNES LESIEUR 234", price: 210 },

    { name: "TOUMATE CAB 800G", price: 310 },
    { name: "H'RISSA CAB", price: 180 },
    { name: "CONFITURE CAB", price: 180 },

    
    { name: "MARGARINE DIMA 500G", price: 185 },
    { name: "THON RICAMAR 3PCS", price: 310 },
    { name: "THON MARATUN 3PCS", price: 310 },
    // { name: "SIDI SAADA CAMEMBRET", price: 380 },
    { name: "BIMO COOKIES", price: 100 },
    { name: "TASSILI CAMEMEBRET", price: 360 },

    // { name: "FROMAGE TARTINO JUNIOR 16PCS", price: 230 },

    { name: "FROMAGE CHEZZY 16PCS", price: 185 },
    // { name: "FROMAGE LA VACHE QUI RIT 24PCS", price: 270 },

    { name: "BIMO MACAO", price: 100 },
    { name: "TOUMATE IZDIHAR 400G", price: 185 },
    { name: "H'RISSA IZDIHAR", price: 185 },
    { name: "JUS IFRUIT 1L", price: 190 },
    { name: "CONFITURE IZDIHAR", price: 185 },
    { name: "BIMO BISCUITS", price: 100 },
    { name: "BIMO CHOKOLAT", price: 100 },
    
    // { name: "MAXON BISCUIT XL", price: 230 },
    
    // { name: "EAU LALA KHEDIDJA 1.5L", price: 45 },

    // { name: "EAU GUEDILA 1.5L", price: 45 },
    
    
    { name: "JUS IFRUIT 1L", price: 110 },
    
    // { name: "SOUMMAME L'BEN 1L", price: 145 },
    
    // { name: "HODNA L'BEN 1L", price: 145 },
    // { name: "CANDIA L'BEN 1L", price: 145 },

    { name: "HODNA LAIT 1L", price: 110 },
    
    { name: "SOUMMAME LAIT 1L", price: 130 },
    { name: "JUS RAMY 1.25L", price: 135 },
    { name: "RAMY CANETTE 33CL", price: 135 },
    
    // { name: "JAVEL LIFE 5L", price: 230 },
    // { name: "CANDY CHOCO 1L ", price: 190 },
    
    { name: "BINGO LIQUIDE VAISSELLE ", price: 370 },
    { name: "BIMO GAUFRETES", price: 100 },
    
    { name: "BINGO ASSOUPLISSANT ", price: 370 },
    { name: "HAMOUD SELECTO 2L", price: 140 },
    
    
    // { name: "FORCE XPERSS LAVE SOL 1L", price: 175 },
    { name: "AIGLE LIQUIDE VAISSELLE 970ML", price: 170 },
    // { name: "BRILEX LAVE SOL 1L", price: 165 },
    
    { name: "AMIR LIQUIDE VAISSELLE 750ML", price: 175 },
    { name: "AMIR SAVON LIQUIDE", price: 125 },
    
    { name: "AIGLE GEL MACHINE 1L", price: 330 },
    { name: "AIGLE LAVE SOL 1L", price: 150 },
    { name: "AIGLE SAVON LIQUIDE", price: 120 },

    
    // { name: "ISIS SACHET 300G", price: 95 },

    // { name: "TEST JAVEL 1L", price: 80 },

    { name: "BINGO GEL MACHINE 1L ", price: 370 },
    { name: "CELIA DEVELOP 1 400G", price: 750 },
    { name: "CELIA DEVELOP 2 500G", price: 750 },
    
    // { name: "BLÉDILAIT NURSIE 1 400G", price: 720 },
    { name: "COUCHE BIMBIES N03", price: 260 },
    { name: "COUCHE BIMBIES N01", price: 260 },
    { name: "AMIR GEL MACHINE 2.5L", price: 730 },

    { name: "COUCHE BIMBIES N04", price: 260 },
    { name: "COUCHE MOLFIX N06", price: 260 },
    { name: "COUCHE BIMBIES N02", price: 260 },
    { name: "SHAMPOOING VENUS 2EN1", price: 120 },
    
    { name: "DÉODORANT FLUX CARE", price: 250 },
    { name: "LESIEUR HUILE", price: 10 },
    { name: "CHEEZY PORSION", price: 10 },
    { name: "COUCHE BIMBIES N06", price: 260 },
    
    { name: "COUCHE MOLFIX N02", price: 260 },
    { name: "YAOURT SOUMMAM FORT", price: 25 },
    { name: "COUCHE MOLFIX N01", price: 260 },
    { name: "COUCHE MOLFIX N05", price: 260 },
    { name: "AMIR CLEAN LAVE SOL 1L", price: 175 },
    { name: "KOOL 4 WINNERS", price: 60 },
    
    { name: "COUCHE BIMBIES N05", price: 260 },
    { name: "CHIPS MAHBOL", price: 60 },
    
    // { name: "JUS ROUIBA 1L", price: 110 },
    
    // { name: "CAFÉ MANY 250G", price: 380 },
    
    // { name: "EAU IFRI 1.5L", price: 45 },
    
    { name: "COCA COLA 1.5L", price: 130 },
    
    // { name: "OMO LIQUID MATIC 2.5L", price: 810 },
    
    { name: "YAOURT DANETTE MAXY", price: 55 },
    { name: "DULCESOL COMMPLET ET MINI", price: 200 },
    
    { name: "DULCESOL SNACK TRUFFE FAMILIAL", price: 240 },
    

    // { name: "LAIT GLORIA JUNIOR 500G", price: 670 },
    { name: "COUCHE MOLFIX N04", price: 260 },
    
    { name: "OMO LIQuid matic 1L ", price: 370 },
    
    { name: "COUCHE MOLFIX N03", price: 260 },
    { name: "DULCESOL CLASSIQUE BLEUE", price: 200 },
    { name: "MASTER CHIPS", price: 120 },
    { name: "DULCESOL MADELEINE", price: 180 },
    { name: "DULCESOL PANDORINO ", price: 85 },
    { name: "CHOCOLAT MOMENT NOIR", price: 210 },
    
    // { name: "NOUILLES YAOMY", price: 70 },
    
    { name: "DULCESOL BURGER", price: 200 },
    // { name: "GLACE GINI MINI", price: 60 },

    { name: "GLACE PRIMA", price: 70 },


    // { name: "QAADA BISCUITS", price: 130 },

    
    // { name: "LAIT NAN 400G", price: 770 },

    // { name: "LAIT GLORIA JUNIOR 125G ", price: 200 },

    // { name: "LAIT GLORIA JUNIOR 350G", price: 680 },
    { name: "MADELEINE DULCESOL  FRAISE ET ABRICOT", price: 160 },


    // { name: "PRÉSIDENT CAMEMBERT", price: 380 },

    { name: "MARGARINE FLEURIAL 500G", price: 185 },
    { name: "CAFÉ 1001", price: 390 },

    // { name: "CAFÉ AROMA", price: 380 },

    // { name: "BLÉDILAIT CROISSANCE 3", price: 780 },

    { name: "CHIPS MAHBOUL FRITOS", price: 10 },

    { name: "LESIEUR SAUCE", price: 10 },
    { name: "LESIEUR SAUCE", price: 10 },
    { name: "CHIPS MAHBOUL FRITOS", price: 10 },
    { name: "LESIEUR MAYONNAISE", price: 10 },


  ];

  const [userName, setUserName] = useState("");
  const [logIn, setLogIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [saleNumber, setSaleNumber] = useState(0);
  const [date, setDate] = useState("");
  const [mallName, setMallName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [cashierName, setCashierName] = useState("");

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  // تحقق من تسجيل الدخول
  const isUserLoggedIn = () => {
    if (userName === "19") {
      setLogIn(true);
      setCurrentIndex(0); // إعادة تعيين الفهرس عند تسجيل الدخول
    } else {
      alert("راك غالط");
      setLogIn(false);
    }
  };

  // دالة للحصول على كمية عشوائية
  const getRandomQuantity = () => Math.floor(Math.random() * 2) + 1;

  // دالة توليد الفاتورة
  const generateInvoice = () => {
    let selected = [];

    // تحديد المجموعة التالية من المنتجات
    const endIndex = currentIndex + 13;
    const productsToDisplay = products.slice(currentIndex, endIndex);

    // تحقق من وجود منتجات لعرضها
    if (productsToDisplay.length === 0) {
      alert("لقد عرضت جميع المنتجات!");
      return;
    }

    productsToDisplay.forEach((product) => {
      const quantity = getRandomQuantity();
      const totalPrice = product.price * quantity;
      selected.push({ ...product, quantity, totalPrice });
    });

    setSelectedProducts(selected);
    const totalPrice = selected.reduce(
      (acc, product) => acc + product.totalPrice,
      0
    );
    setTotal(totalPrice);

    // توليد رقم عشوائي للفاتورة
    setSaleNumber(Math.floor(Math.random() * 1000000));

    // إضافة التاريخ والوقت الحاليين
    const now = new Date();
    const formattedDate = `Le : ${now.getDate()} oct. ${now.getFullYear()} à ${now.getHours()}:${now.getMinutes()}`;
    setDate(formattedDate);

    // تحديث الفهرس للمنتجات التالية
    setCurrentIndex(endIndex);
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

          <div
            id="receipt"
            className="bg-white p-2 shadow-lg max-w-md w-[302px]"
          >
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
                    <td className="px-1 py-1">
                      {product.totalPrice.toFixed(2)}
                    </td>
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