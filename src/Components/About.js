import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className=" columns main-col">
              <h2>About Us</h2>

              <p>
                At our Regal Ethnic clothing brand, our unwavering focus is on delivering impeccable quality to our discerning customers. We believe that true elegance lies in the flawless craftsmanship, luxurious fabrics, and attention to detail that is evident in every garment we create.
                <br />
                <br />
                From the moment you set eyes on our collection, you will recognize the dedication we have towards sourcing the finest materials. We handpick premium fabrics that exude opulence and ensure a comfortable and luxurious feel against your skin. Our team of skilled artisans then transforms these fabrics into exquisite pieces of art, meticulously crafting each garment to perfection.
                <br />
                <br /> Quality is the cornerstone of our brand. We adhere to the highest standards of craftsmanship, employing time-honored techniques and merging them with modern innovations. Our garments undergo rigorous quality checks at every stage of production to ensure that they meet our exacting standards. We believe that every stitch, every seam, and every embellishment should reflect our commitment to excellence.
                <br />
                <br /> We are passionate about providing our customers with clothing that not only looks beautiful but also stands the test of time. We understand that true quality transcends fleeting trends, and our garments are designed to be cherished as timeless heirlooms. When you wear our regal ethnic attire, you can feel the difference in the way it drapes, the weight of the fabric, and the meticulous attention to detail. It is a testament to our commitment to excellence.
                <br />
                <br /> We invite you to experience the unparalleled quality that defines our regal ethnic clothing brand. From the richness of the fabrics to the precision of the tailoring, each garment embodies our unwavering pursuit of perfection. Step into our world of elegance and grace, and let our commitment to quality elevate your wardrobe to new heights.
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
