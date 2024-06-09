import { Row, Col } from "react-bootstrap";
import { foodArray } from "../foodStore/foodArray";
// import ProductCard from "../components/ProductCard";
import FoodCard from "../components/FoodCard";
function Store() {
  console.log("foodArraystore",foodArray)
  return (
    <>
      <h1 align="center" className="p-3 mt-5">      
      Bon Appétit
      </h1>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {foodArray.map((food, idx) => (
          <Col align="center" key={idx}>
            <FoodCard foodData={food} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
