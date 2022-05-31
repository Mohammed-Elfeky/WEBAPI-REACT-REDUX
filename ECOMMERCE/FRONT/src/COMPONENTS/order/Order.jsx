import { staticBase } from "../../THEBASE/URL";
const Order = ({ id, userName, total, products }) => {
    return (
        <div className=" mb-2">
            <div style={{ cursor: "pointer" }} className="card" data-bs-toggle="collapse" href={`#p${id}`} aria-expanded="false" aria-controls="collapseExample">
                <div class="card-body d-flex justify-content-between">
                    <h5 class="card-title">user: {userName}</h5>
                    <p class="card-text">total {total}</p>
                </div>
            </div>
            <div class="collapse" id={`p${id}`}>

                {products.map(({ name, price, img, count }) => {
                    return (
                        <div className="card my-2 bg-dark text-white">
                            <div className="row card-body align-items-center">
                                <div className="col-3 text-center">product  {name}</div>
                                <div className="col-3 text-center">price {price}</div>
                                <div className="col-3 text-center">count {count}</div>
                                <div className="col-3 text-center"><img src={`${staticBase}/images/${img}`} style={{ width: "50px" }} alt="" srcset="" /> </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default Order;