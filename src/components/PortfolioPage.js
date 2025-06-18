// import const portfolios 
import {portfolios} from '../products/products';

const PortfolioPage = () => {
    return (
        <>
        <h2 className="title_portfolio">Portfolio</h2>

        <div className="portfolios">
            {portfolios.map((val)=>{
                return (
            <div className="card_portfolio">
                <img className="image" src={require(`../portfolio_images/${val.nama}`)}/>
            </div>
                )
            })}

        </div>
        </>
    )

}

export default PortfolioPage;