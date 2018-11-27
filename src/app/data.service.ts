import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

  private banners:Datos[] = [
  
        {
          img: "/assets/img/banners/amazon-banner-home.jpg",
          titulo: "Registrate aquí y disfruta este beneficio",
          bajada: "",
          nombretab: ""
        },

        {
          img: "/assets/img/banners/banner-home-app-santander.jpg",
          titulo: "Si quieres instalar Santander Pass ",
          bajada: "Sigue los pasos aquí",
          nombretab: ""
        },

        {
          img: "/assets/img/banners/banner-home-descuentos-santander.jpg",
          titulo: "Conoce más descuentos aquí",
          bajada: "",
          nombretab: ""
        },

        {
          img: "/assets/img/banners/banner-home-institucional.jpg",
          titulo: "Conoce dónde retirar tu bolsa aquí",
          bajada: "",
          nombretab: ""
        }
    ];

      

      private tabs:Datos[]= [
        {
          img: "/assets/img/tabs/santander-life-tab-home.jpg",
          nombretab: "Santander Life",
          titulo: "Santander presenta Life.",
          bajada:
            "Por primera vez un banco valora tus méritos con reconocimientos exclusivos."
        },
        {
          img: "/assets/img/tabs/applex-tab-home.jpg",
          nombretab: "Apple",
          titulo: "Apple",
          bajada: "iPhone XS, XS Max y iPhone XR"
        },
        {
          img: "/assets/img/tabs/work-cafe-tab.jpg",
          nombretab: "Seguros en promoción",
          titulo: "Llévate hasta 6.000 Millas LATAM Pass",
          bajada: "Válido entre el 7 y 20 de noviembre."
        },
        {
          img: "/assets/img/tabs/santander-week-tab-home.jpg",
          nombretab: "Santander week",
          titulo: "Una semana de ofertas imperdibles.",
          bajada:
            "Hasta un 40% de dcto. en las mejores marcas del 12 al 18 de noviembre."
        },
        {
          img: "/assets/img/tabs/educacion-10-cuotas-tab-home.jpg",
          nombretab: "Educación",
          titulo: "10 cuotas con tasa preferencial",
          bajada:
            "Tasa preferencial de 0,59%. Además acumulas el doble de Millas LATAM Pass."
        }
      ];



  private calugas:Datos[]=[

    {
      img: "/assets/img/calugas/123click-pro-caluga-home.jpg",
      titulo: "Hazte Cliente desde los 18 años.",
      bajada: "Conoce la Cuenta Corriente Universitaria de Santander, que no te endeuda.",
      nombretab: "",
    },
   

    {
      img: "/assets/img/calugas/dias-dcto-noviembre-caluga-home.jpg",
      titulo: "Santander Wallet",
      bajada:
        "La nueva aplicación de pago móvil de tus Tarjetas de Crédito Santander Mastercard.",
      nombretab: ""
    },
    {
      img:
        "/assets/img/calugas/hazte-cliente-universitario-caluga-home.jpg",
      titulo: "40% dcto todos los días",
      bajada: "Disfruta noviembre con tus Tarjetas de Crédito Santander.",
      nombretab: ""
    },
    {
      img: "/assets/img/calugas/santander-wallet-caluga.png",
      titulo: "Simula tu Crédito Personal",
      bajada:
        "Si eres cliente o no cliente, revisa si tienes un monto pre aprobado o Simula tu Crédito Personal aquí.",
      nombretab: ""
    },
    {
      img: "/assets/img/calugas/seguro-auto-caluga-home.jpg",
      titulo: "Seguro de Auto",
      bajada: "Cotiza, compara y contrata tu seguro en 3 simples pasos.",
      nombretab: ""
    }

  ]



  constructor() {
    console.log("servicio listo para usarse");
  }



getBanners(){
   return this.banners;
};

getCalugas(){
return this.calugas;
}


getTabs(){
  return this.tabs;
}

}



export interface Datos {
  img:string;
  titulo:string;
  bajada:string;
  nombretab:string;
}
