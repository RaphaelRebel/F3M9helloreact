import "./Card.css";

const Card = (props) => {


    return(
       
        <article onClick={props.mouseclick}>
            <header>
                <h2>{props.title || "Placeholder title"}</h2>
            </header>
            <section>
                {props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui beatae iure consectetur maiores nesciunt repudiandae quisquam sint repellendus odit, corporis impedit ullam voluptates ut quas minima saepe iste deleniti."}
            </section>
        </article>
    );
}

export default Card;
