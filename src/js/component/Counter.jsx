import React  from "react";


export const CounterSlot = (props) => <div>{Math.floor(props.valor / Math.pow(10,props.digito)) % 10}</div>

export const Counter = (props) => {
    
    return (
        <div className="counter">
            <i className  ="icono-reloj fa-solid fa-clock"></i>
            <CounterSlot valor={props.contadorActual} digito={5} />
            <CounterSlot valor={props.contadorActual} digito={4} />
            <CounterSlot valor={props.contadorActual} digito={3} />
            <CounterSlot valor={props.contadorActual} digito={2} />
            <CounterSlot valor={props.contadorActual} digito={1} />
            <CounterSlot valor={props.contadorActual} digito={0} />
        </div>
    );
    
}

