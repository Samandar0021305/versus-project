import "./section.scss";
import Api from "./SectionApi.js";

function Section(){
    return(
        <section className="section">
            <div className="container">
                 
                 <h2>Latest Work</h2>

             <ul className="section__list">
               {Api.map((element)=>{
                return(
                    <li className="section__item" key={element.id}>
                        <img src={element.img} alt="" />
                    </li>
                )
               })}
             </ul>
            </div>
        </section>
    )
}

export default Section;