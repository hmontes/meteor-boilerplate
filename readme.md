## Sinopsis

Este simple proyecto es un boilerplate diseñado en Meteor y React. La idea es poder ocupar rapidamente un Layout y sus paginas hechas en Flowrouter. Contiene un simple menu y viene por defecto con un sticky footer.

---------------------
| Menu				|
---------------------
| Cuerpo / Body		|
|					|
|					|
|					|
---------------------
| Footer			|
---------------------

## Motivación

Volver a tener que hacer todo el diseño básico cada vez que existía una idea nueva se volvió tremendamente tedioso e inefectivo. Entonces la idea de este boilerplate es ahorrar los pasos de armar un layout, pages, hacerlo con un footer fijo y poder trabajar en un prototipo de manera más rapida y efectiva.

## Instalación

Esta instalación requiere de Meteor 1.4 como mínimo. No ha sido testeado en versiones anteriores pero debería de correr en 1.3 sin problemas.

- Instalar Semantic UI (Archivos)

meteor remove standard-minifier-css

meteor add semantic:ui juliancwirko:postcss less jquery

meteor npm install

Viene con defecto con todas las definiciones y temas. Si requieres modificarlo tienes que ir a /client/lib/semantic-ui/custom.semantic.json y ajustarlo según tus necesidades (Si no sabes lo que haces dejalo tal como está.)

- Instalar Flow Router

Enrutador por defecto de Meteor

meteor add kadira:flow-router

- React Mounter (Para trabajar con Flow Router)

meteor npm install --save react-mounter

- createContainer (Para enviar datos a paginas y layout)

meteor add react-meteor-data

meteor npm install --save react-addons-pure-render-mixin

- Finalmente ejecutar con meteor

## License

Por favor. Compartanlo con quien quieran. Es simplemente para simplificar el trabajo