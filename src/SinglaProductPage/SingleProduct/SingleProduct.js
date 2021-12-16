import { Accordion } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import Services from '../../AllServices/Services';
import Header from '../../Header/Header';
import Topbar from '../../Topbar/Topbar';
import './SingleProduct.css'

const SingleProduct = () => {
    const {id} = useParams();
    // console.log(id)
    // const [singleProduct,setSingleProduct]=useState([]);
    const Data = [
        {
            id: 1,
            name: 'Business Cards',
            description: 'A business card is a mini representation of your business and we’ve got everything you need to build the perfect card.',
            img: 'https://i.ibb.co/4S95F2C/printing-hub-london-business-card.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 2,
            name: 'Flyers',
            description: 'Flyers make light work of spreading the word. Explore our huge range of stocks and sizes to create the perfect flyer!',
    
            img: 'https://i.ibb.co/F6t4Kxn/printing-hub-london-flyers.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 3,
            name: 'Posters',
            description: 'Posters are a great way to get a strong, impactful message out to the world, enjoy our selection of indoor and outdoor stocks.',
            img: 'https://i.ibb.co/FBCfhvT/printing-hub-london-postars.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 4,
            name: 'PVC Banners',
            description: 'From big to very big, we have waterproof 440gsm PVC banners to meet every need.',
            img: 'https://i.ibb.co/GtDXw6q/printing-hub-london-pvc-banner.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 5,
            name: 'Roller Banners',
            description: 'Get your client noticed at their next trade show with a roller banner that is printed on durable, scratch-resistant 220mic Banner PVC.',
            img: 'https://i.ibb.co/ccQDBx6/printing-hub-london-roller-banner.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 6,
            name: 'Booklets',
            description: 'We do Any size and quantity booklets-Brochure including Stapled Booklets, Perfect Bound Booklets, Notebooks, Spot UV Booklets and Wiro Bound Booklets',
            img: 'https://i.ibb.co/5WPC1QW/printing-hub-london-booklet.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 7,
            name: 'Foamex display boards',
            description: 'We offer our Foamex signs on two different thicknesses and with a selection of finishes, included drilled holes in the corners to make it easier to fix to walls.',
            img: 'https://i.ibb.co/3hsTf8g/printing-hub-london-foamex-board.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        
        {
            id: 8,
            name: 'Vinyl Window Stickers',
            description: 'Printed on 95mic white removable vinyl these window stickers are perfect for displaying information on the exterior of your windows.',
            img: 'https://i.ibb.co/3NkDH2m/printing-hub-london.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 9,
            name: 'Folded Leaflets',
            description: ' Choose from our different available fold types and a wide range of stocks to create the folded leaflet you need.',
            img: 'https://i.ibb.co/fCPqX39/printing-hub-london.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 10,
            name: 'A-Frames',
            description: 'A-frame signs are a fantastic tool that you can use to bring new customers into your store. Printed on weatherproof PVC.',
            img: 'https://i.ibb.co/ZzQTNr2/printing-hub-london.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        },
        {
            id: 11,
            name: 'Stickers',
            description: 'Are you looking to add some fun to your marketing? Choose from our square, rectangular, or circular stickers for your next campaign.',
            img: 'https://i.ibb.co/jLfh3M2/printing-hub-london-stickers.jpg',
            similarImg:'https://i.ibb.co/tCX9tyD/printing-hub-lodnon.jpg'
        }
    ];

    const filteredProduct = Data.filter(product => product.id == id)
    return (
        <div>
            <Topbar></Topbar>
            <Header></Header>
            <div>
        <div>
    <div>
    {filteredProduct.map(product => (
    <div key={product.id}>
                
<div class="container">
  <div class="row">
    <div class="col-sm">
     <img className='w-75 h-50' src={product.img} alt="" /><br />
     <div className="similar-img d-flex col-sm-12">
     <div className="img1">
      <img className='custom-img mt-3' src={product.similarImg} alt="" />
     </div>
     <div className="img2">
     <img className='custom-img mt-3' src={product.similarImg} alt="" />
     </div>
     </div>
    </div>
    <div class="col-sm">
      <h1 className='text-danger h1'>{product.name}</h1>
      <div className="container">
      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum assumenda unde repellendus animi laboriosam fuga, quaerat porro iusto rem est magni natus esse eligendi nemo possimus repellat modi cupiditate! Animi cupiditate, sit dolorem voluptatum est alias dicta, harum saepe consequatur laborum nihil amet sequi illum. Animi, vitae? Necessitatibus temporibus illo veritatis, similique ducimus a quis inventore corrupti, vitae, totam debitis. Aspernatur iusto pariatur accusamus, labore sequi reprehenderit? Eos, eveniet corrupti similique eum cum facere vero hic velit repellendus ipsum veritatis tempore dicta voluptatem blanditiis itaque quos totam ipsam rerum, sapiente et provident ducimus tenetur vitae? Sequi magni explicabo culpa.</small>
      </div>
    </div>
  </div>
 
</div>
 <div className="product-prize text-center p-5 text-bold">
 <div class="row">
    <div class="col-sm">
    <table class="table table-bordered">
  <thead>
    <tr>
      <th >Quantity</th>
      <th >A4</th>
      <th >A5</th>
      <th >DL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>250</td>
      <td>49</td>
      <td>40</td>
      <td>42</td>
    </tr>
    <tr>
      <td>500</td>
      <td>65</td>
      <td>55</td>
      <td>58</td>
    </tr>
    <tr>
      <td>1000</td>
      <td>85</td>
      <td>65</td>
      <td>65</td>
    </tr>
    <tr>
      <td >5000</td>
      <td>195</td>
      <td>130</td>
      <td>130</td>
    </tr>
  </tbody>
</table>
    </div>
    <div class="col-sm justify-content-center">
      <h1 className='text-danger h1'>{product.name}</h1>
      <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum assumenda unde repellendus animi laboriosam fuga, quaerat porro iusto rem est magni natus esse eligendi nemo possimus repellat modi cupiditate! Animi cupiditate, sit dolorem voluptatum est alias dicta, harum saepe consequatur laborum nihil amet sequi illum. Animi, vitae? Necessitatibus temporibus illo veritatis, similique ducimus a quis inventore corrupti, vitae, totam debitis. Aspernatur iusto pariatur accusamus, labore sequi reprehenderit? Eos, eveniet corrupti similique eum cum facere vero hic velit repellendus ipsum veritatis tempore dicta voluptatem blanditiis itaque quos totam ipsam rerum, sapiente et provident ducimus tenetur vitae? Sequi magni explicabo culpa.</small>
    </div>
    
  </div>
 </div>

              </div>
            ))}

          </div>
        </div>
      </div>
      <div>
        <Services></Services>
      </div>
      <div className="container bg-primary">
      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
 
      </div>
    </div>
    );
};

export default SingleProduct;