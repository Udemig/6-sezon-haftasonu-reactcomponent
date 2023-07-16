import "./index.css";
import Header from "./compnents/Header.js";
import SpecialButton from "./compnents/SpecialButton.js";
import { users } from "./utils/constants.js";
import UserCard from "./compnents/UserCard.js";
import Cards from './compnents/Cards.js'
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


*/

function App() {
  // console.log(users)

  const aktifKullaniciSayisi = 20;

  return (
    <div className="App">
      <Header aktifKullaniciSayisi={15} />

      <SpecialButton
        butonIsmi={"Onayla"}
        butonFonksiyonu={() => alert("Onaylandı")}
        className={"Speacialbutton"}
      />

      <SpecialButton butonIsmi={"Kırmızı Buton"} className={"Kirmizi"} />

      <div className="cards">
        {users.map((user) =>
          //console.log(user)

          //Eğer map fonskiyonu kullanırken ()=> {} bu şekilde süslü parantez kullanıyorsak
          //mutlaka içeriği return() etmeliyiz ---> ()=>{return(jsx kodları)}

          //Bir diğer yol ()=>() bu şekilde normal kullanım returne gerek olmadan jsx yazılır

          //Bir diğer yazım ise ()=>jsx kodu  şeklinde

          {
            return <UserCard userBilgi={user} />;
          }
        )}
      </div>
    </div>
  );
}

export default App;
