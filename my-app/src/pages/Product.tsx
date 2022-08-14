import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/Product.css";
export function ProductPage()
{
    return(
        <div>
        {/* <h1>see our online courses </h1> */}
        <Navbar/>

        <div>


        <div className="tagcard-container">
        <div className="tagcard">
            <div className="card-image tag-1"> </div>
                {/* <a>The Art of Letting Your Devs Step Up w/ Equinix’s Rajah Kalipatnapu</a> */}
                <a  className="podcast-one" href="https://www.amazon.com/Life-Coaching-Handbook-Everything-Effective/dp/B07TXMLLSW/ref=sr_1_8?keywords=life+coach+books&qid=1660462467&sr=8-8">The Life Coaching Handbook: Everything You Need to Be an Effective Life Coach </a>
                {/* <p>text</p> */}

            </div>
           

            <div className="tagcard">
            <div className="card-image tag-2"> </div>
            <a  className="podcast-two" href="https://www.amazon.com/Prosperous-Coach-Increase-Income-Clients/dp/B01COOE34S/ref=sr_1_3?keywords=life+coach+books&qid=1660463759&sr=8-3">Life Coach Handbook: All the Tools You Need to Manage a Thriving Coaching Practice (Effective Coaching Series)</a>
                {/* <h2>title</h2> */}
                {/* <p>text</p> */}

            </div>
            <div className="tagcard">
            <div className="card-image tag-3"> </div>
            <a  className="podcast-two" href="https://www.amazon.com/Life-Coach-Handbook-Thriving-Effective/dp/B09YS6D3V8/ref=sr_1_12?keywords=life+coach+books&qid=1660462467&sr=8-12">Life Coach Handbook: All the Tools You Need to Manage a Thriving Coaching Practice (Effective Coaching Series)</a>
                {/* <h2>title</h2>
                <p>text</p> */}

            </div>

            
            <div className="tagcard">
            <div className="card-image tag-4"> </div>
            <a  className="podcast-two" href="https://www.amazon.com/Be-Your-Own-Life-Coach/dp/0340770643/ref=sr_1_23?keywords=life+coach+books&qid=1660463759&sr=8-23">Be Your Own Life Coach Paperback</a>
                {/* <h2>title</h2> */}
                {/* <p>text</p> */}

            </div> 

         
            
            </div>
            <Footer/>
        </div>
        </div>
      


    )
}