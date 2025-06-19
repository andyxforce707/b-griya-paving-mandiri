// import const portfolios 
import {portfolios} from '../products/products';

//framer-motion 
import {motion} from 'framer-motion';

const PortfolioPage = () => {
    return (
        <>
        <h2 className="title_portfolio">Portfolio</h2>

        <div className="portfolios">
            {portfolios.map((val)=>{
                return (
            <motion.div className="card_portfolio" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}>
                <img className="image" src={require(`../portfolio_images/${val.nama}`)}/>
            </motion.div>
                )
            })}

        </div>
        </>
    )

}

export default PortfolioPage;