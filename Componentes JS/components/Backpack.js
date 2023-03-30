class Backpack{
    constructor(
        id,
        nombre,
        volumen,
        color,
        numeroVolsillo,
        largoL,
        largoR,
        tapaAbierta,
        datosAdquiridos,
        imagen
    ){
        this.id=id;
        this.nombre=nombre,
        this.volumen=volumen,
        this.color= color,
        this.numeroVolsillo= numeroVolsillo,
        this.largor={
            izquierda:largoL,
            derecha: largoR,
        };
        this.tapaAbierta=tapaAbierta,
        this.datosAdquiridos=datosAdquiridos,
        this.imagen=imagen;
    }
    ingresarId(estado){
        this.tapaAbierta=estado;
    }
    nuevoLargor(izquierda,derecha){
        this.largor.izquierda=izquierda;
        this.largor.derecha=derecha;
    }
    datosAños(){
        let nuevo = new Date();
        let adquirir = new Date(this.datosAdquiridos);
        let enlazar= nuevo-adquirir;
        let calcular= Math.floor(enlazar / (1000 * 3600 * 24));
    return calcular;
    }
}
export default Backpack;