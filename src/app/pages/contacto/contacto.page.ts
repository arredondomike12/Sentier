import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {EmailPage} from '../../popovers/email/email.page';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  public direcciones = [
    {
      Title: 'Sucursal Jimenez',
      Calle: 'Jimenez',
      Numero: '163',
      Colonia: 'Col. Centro',
      Ciudad: 'San Pedro Graza Gracia',
      Telefono: '1306 7174',
      src:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449.4813116903964!2d-100.3173129!3d25.6762503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662958814150ea5%3A0x6443b0317e5e6cfb!2sJos%C3%A9+Mariano+Jim%C3%A9nez+163%2C+Centro%2C+64000+Monterrey%2C+N.L.!5e0!3m2!1ses!2smx!4v1551649403532'
    },
    {
      Title: 'Sucursal Plaza Fiesta',
      Calle: 'Av. Real de San Agustin',
      Numero: '222',
      Colonia: 'Plaza Fiesta San Agustin, Local 00',
      Ciudad: 'San Pedro Graza Gracia',
      Telefono: '8363 6268',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.61032569726!2d-100.33727157423857!3d25.649502501999642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d1e883639f5b141!2sPlaza+Fiesta+San+Agustin!5e0!3m2!1ses!2smx!4v1551649726953'
    },
    {
      Title: 'Sucursal Gonzalitos',
      Calle: 'Av. Gonzalitos',
      Numero: '2639 Nte',
      Colonia: 'Col. Mitras',
      Ciudad: 'Monterrey, N.L',
      Telefono: '2556 2270',
      src: 'https://www.google.com/maps/place/Dr.+Jos%C3%A9+Eleuterio+Gonz%C3%A1lez+(Gonzalitos)+2637-2641,+Mitras+Nte.,+64320+Monterrey,+N.L./@25.7078895,-100.3507589,19z/data=!3m1!4b1!4m13!1m7!3m6!1s0x866295d618659fd1:0x7269e1cd413aaadc!2sMitras+Nte.,+64320+Monterrey,+N.L.!3b1!8m2!3d25.7107432!4d-100.3469826!3m4!1s0x8662967803f1a071:0xdf24c99cd934842c!8m2!3d25.7078883!4d-100.3502117?hl=es-419&authuser=0'
    },
    {
      Title: 'Sucursal Sendero',
      Calle: 'Sendero',
      Numero: '522 A',
      Colonia: 'Col. Nogalera',
      Ciudad: 'San Nicolas de los Garza',
      Telefono: '1968 8070',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0327189473796!2d-100.2758136850001!3d25.769482814567677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866294a7a5c5968f%3A0xcbd06ef1c0ce2bd9!2sSentier+casa+de+cambio!5e0!3m2!1ses!2smx!4v1551650558089'
    },
    {
      Title: 'Sucursal Plaza Via',
      Calle: 'Plaza Via',
      Numero: '02',
      Colonia: 'San Geronimo',
      Ciudad: 'Blvd. Rogelio Cantu',
      Telefono: '4000 5300',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.208938855748!2d-100.3818654850013!3d25.697505317526396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662964702835bb9%3A0xb81f944ff688bf5c!2sPlaza+Via+02!5e0!3m2!1ses-419!2smx!4v1551650701594'
    },
    {
      Title: 'Sucursal Nicolas Bravo',
      Calle: 'Nicolas Bravo',
      Numero: '163',
      Colonia: 'Col. Centro',
      Ciudad: 'San Nicolas de los Garza',
      Telefono: '4000 5300',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.3324969574262!2d-100.29286959980551!3d25.75642736505701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866294904eb91ec3%3A0x25d499f271ef3130!2sGral.+Nicol%C3%A1s+Bravo%2C+Centro%2C+66400+San+Nicol%C3%A1s+de+los+Garza%2C+N.L.!5e0!3m2!1ses-419!2smx!4v1551650965656'
    }
  ];

  constructor(public popover:PopoverController) { }

  ngOnInit() {
  }
  async setEmail(){
    const popover = await this.popover.create({
      component: EmailPage,   
      translucent: true
    });
    return await popover.present();
  }

}
