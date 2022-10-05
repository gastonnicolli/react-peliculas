import './SelectorMultiple.css';

export default function SelectorMultiple(props: selectorMultipleProps){
    
    function seleccionar(item: selectorMultipleModel){
        const seleccionados = [...props.seleccionados, item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados, noSeleccionados);
        console.log('seleccionar')
    }

    function deseleccionar(item: selectorMultipleModel){
        const seleccionados = props.seleccionados.filter(valor => valor !== item);
        const noSeleccionados = [...props.noSeleccionados, item];
        props.onChange(seleccionados, noSeleccionados);
        console.log('deseleccionar')
    }

    function seleccionarTodos(){
        const seleccionados = [...props.noSeleccionados, ...props.seleccionados]
        const noSeleccionados: selectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);
        console.log('seleccionar todos')
        
    }

    function deSeleccionarTodos(){
        const noSeleccionados = [...props.noSeleccionados, ...props.seleccionados]
        const seleccionados: selectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);
        console.log('deseleccionar todos')
    }

    return(
        <div className="selector-multiple">
            <ul>
                {props.noSeleccionados.map(item =>
                    <li key={item.llave} onClick={() => seleccionar(item)}>{item.valor}</li>)}
            </ul>
            <div className="selector-multible-botones">
                <button type="button" onClick={seleccionarTodos}>{'>>'}</button>
                <button type="button" onClick={deSeleccionarTodos}>{'<<'}</button>
            </div>
            <ul>
                {props.seleccionados.map(item =>
                    <li key={item.llave} onClick={() => deseleccionar(item)}>{item.valor}</li>)}
            </ul>
        </div>

    )
}

interface selectorMultipleProps{
    seleccionados: selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(seleccionados: selectorMultipleModel[],
        noSeleccionados: selectorMultipleModel[]): void;
}

export interface selectorMultipleModel{
    llave: number;
    valor: string;
}