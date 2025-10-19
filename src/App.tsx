import './App.css'
import Header from "./blocks/header";
import Services from "./blocks/services";
import About from "./blocks/about";
import Advantages from "./blocks/advantages";
import CustomerMisconception from "./blocks/customer-misconception";
import Reviews from "./blocks/reviews";
import Footer from "./blocks/footer";
import Request from "./blocks/request";

function App() {
    return (
        <>
            <Header/>
            
            <section id='main'>
                <Request/>
            </section>

            <section id='services'>
                <Services/>
            </section>

            <section id='about'>
                <About/>
            </section>

            <section id='advantages'>
                <Advantages/>
            </section>

            <section>
                <CustomerMisconception/>
            </section>

            <section id='reviews'>
                <Reviews/>
            </section>

            <Footer/>
        </>
    )
}

export default App
