import "./index.css";
import Header from "./components/Header.jsx";
import SpecialButton from "./components/SpecialButton.js";
import { Cards } from "./components/Cards.js";
import { useState } from "react";
import { users } from "./utils/constants.js";
/*
Componenet Oluşturma Kuralları


1-Js fonksiyonları yada ES6 classları şeklinde oluşturulur
2-İlk Harf Büyük Başlar
3-Bir JSX return eder 
4-Oluşturulduktan sonra başka alanlarda kullanılmak için export edilir




not:

export default Header şeklinde componeneti export edersek 
import ederken isteğimiz isimle import edebiliriz

export Header şeklinde componeneti export edersek
import {Header} şeklinde import ederiz


***Her Sayfada yalnızca tek birkez default şeklinde export yapılır
eğer birden fazla yapı export edeceksek ;

export {Header,Button}





*/

/*

Component Kullanmak İçin Yapılması Gereken Adımlar;

1-Oluşturduğumu compoenent import yardımıyla en üstte sayfaya dahil edilri
2-Kullanılmak istenen yerde self-closing ile dahil edilir

*/

/*

>>>>HTML ile JSX arasındaki bazı farklılıklar;

1-Attribute farklılıkları;
  -HTML ---> class JSX --->className
  -HTML ---> for   JSX --->htmlFor
  -JSX stil yazarken {} bu parantezlerin içerisne obje şeklinde yazılır

2-JSX de sadece bir tane parent element olur
  -Eğer herhangi bir jsx elementi kullanmak istemiyorsak
  <> </>  kodlarımızı bu iki yapının arasına alabiliriz bu yapıya fragment denir




3-HTML self close kapatımı ile JSX arasındaki farklılık

     HTML -----> <img>
     JSX  -----> <img/>

4-JSX içerisinde JavaScript kodu yazabiliyoruz.Ancak Bir Takım farklılıklar var;

dizileri dönmek forEach veya for yerine ----> map metodu kullanılır
if-else sorguları yerine ternary opartor dediğimi ? : yapısı kullanılır


  JSX de JavaScrip Kodu YAzmak için;

  { süslü parantezlerin arasına JavaScript Kodlarımız Yazılır  }


*/

/*

React Props

---Bileşenler arası veri akatarımını sağlamak için props mantığını kullanırız

1-Props lar her zaman üst componenetten alt componente doğru gider

2- Props olarak gönderilebilecekler;
   -fonksiyon,
   -array
   -string
   -number
   -object
   -state


*/

function App() {
  //  console.log(users[0].first_name)

  const [aktifKullaniciSAyisi, setAktifKullaniciSayisi] = useState(100);
  const [dogruKullanici, setDogruKullanici] = useState(users[0].first_name);

  //console.log(dogruKullanici);
  return (
    <div className="App">
      <Header
        set={() => setAktifKullaniciSayisi(aktifKullaniciSAyisi - 1)}
        aktifKullaniciSayisi={aktifKullaniciSAyisi}
      />

      <SpecialButton
        butonIsmi={"Onayla"}
        butonFonksiyonu={() => alert("Onaylandı")}
        className={"Speacialbutton"}
      />

      <SpecialButton butonFonksiyonu={()=>setDogruKullanici('Yanlis')} butonIsmi={"Kırmızı Buton"} className={"Kirmizi"} />

      {dogruKullanici == "Chelsie" ? (
        <Cards />
      ) : (
        <button onClick={() => setDogruKullanici("Chelsie")}>Giriş Yap</button>
      )}
    </div>
  );
}

export default App;
