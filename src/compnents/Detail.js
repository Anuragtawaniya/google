import React from "react";
import profile from "../images/anurag.jpeg";
import {FaDotCircle} from "react-icons/fa";
const Detail = () =>{
    return(
<div className="card-head">

<div className="card-img">
<img src={profile} />
<div className="card-title">
<span className="card-title">Crio.DO</span><br></br>
    <a href="">https://google.com</a>
</div>
<div className="icon">
<FaDotCircle />
</div>
</div>









<div className="card-detail">
<h1>React Js Training Course- Enroll and start for free.</h1>
<p>Get guaranted placement as a skilled full stack web developer in product-based compaines .....</p>
</div>
<hr></hr>
<div className="card-links">
<a>Job Gurantee Program</a><hr></hr>
<a>Full Stack Course</a><hr></hr>
<a>Backend Course</a><hr></hr>
<a>Book Your Free Trail</a><hr></hr>
<a>Developer Reviews</a><hr></hr>
</div>

</div>
    );
}
export default Detail;