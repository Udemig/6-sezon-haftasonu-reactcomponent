import "../styles/Header.css";
import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
function Header({ aktifKullaniciSayisi, set }) {
  //console.log(props.aktifKullaniciSayisi)

  //Bu Alanda yani jsx kodu return edilmeyen yerde if else kullanılabilir

  // ilk parametre başlangıç durumu,ikinci paraqmetre başlangıç durumunu değiştirecek fonksiyon
  const [kullaniciVarmi, setKullaniciVarmi] = useState(true);

  const [kullanıcıAdminMi, setKullaniciAdminmi] = useState(true);

  function kullaniciSet() {
    set();

    setKullaniciVarmi(false);
  }

  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <a>Ana Sayfa</a>
        <a>Hakkımızda</a>
        <a>İletişim</a>
      </nav>
      <h1>{aktifKullaniciSayisi}</h1>
      <div className="buttonsBox">
        {/* JSX kodu olan yerde if else kullanılmaz*/}

        {/* 2 farklı sonucun olduğu durumlarda Ternary Oparator kullanılır */}
        {kullaniciVarmi ? (
          //Kullanıcının olma durumunu çıkış yap butonuna tıkladığımızda false şeklinde değiştirir
          <button onClick={() => kullaniciSet()}>Çıkış Yap</button>
        ) : (
          //Kullanıcının olma durumunu giriş yap butonuna tıkladığımızda true şeklinde değiştirir
          <button onClick={() => setKullaniciVarmi(true)}>Giriş Yap</button>
        )}

        {/*Eğer tek bir durum kontrolu yapılacaksa && kullanılır*/}

        {kullanıcıAdminMi && (
          <SpecialButton
            butonFonksiyonu={() => setKullaniciAdminmi(false)}
            butonIsmi={"Admin Paneline Git"}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
