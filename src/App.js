import Card from './Card';
import "./App.css";
import matchers from '@testing-library/jest-dom/matchers';


const App = () => {

    const click = () => {
        console.log('Ik ben geklikt');
    }

    const random = () => {
        console.log( Math.random());
    }

    const sum = () => {
        console.log( 2123123 * 12312);
    } 
    return(
        <>
       
        <Card mouseclick={click} title="Eerste kaart" />
        <Card mouseclick={random} text="Hallo ik ben een tekst" />
        <Card mouseclick={sum} title="Derde kaart" text="Hallo ik ben een tekst"/>
        </>
    );
}


export default App;