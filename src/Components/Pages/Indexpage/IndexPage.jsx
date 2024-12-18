import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import './Indexpage.css';


function IndexPage() {
  
  const topics = [
    {
      name: 'Hydrogen Basics', path: '/hydrogen-basics', subItems: [
        { name: 'Introduction to Hydrogen', link: '../PowerElectronics/introduction/introduction.html' },
        { name: 'Hydrogen as Fuel', link: '../PowerElectronics/triggering/triggering.html' },
      ]
    },
    { name: 'Categories of Hydrogen based on production', path: '/categories-hydrogen' 

      ,subItems: [
        { name: 'Grey Hydrogen', link: '../motorDrive/PMSM/index.html' },
        { name: 'Blue Hydrogen', link: '../motorDrive/PMDC/index.html' },
        { name: 'Green Hydrogen', link: '../motorDrive/BLDC/index.html' },
      ]
    },
    {
      name: 'Hydrogen Safety',
      subItems: [
        { name: 'Flammability and Explosivity', link: '../genConcepts/BMS/index.html' },
        { name: 'Leakage and Detection', link: '../genConcepts/fourQuadrant/index.html' },
        { name: 'Material Compatibility', link: '../genConcepts/regenerativeChargingBraking/index.html' },
        { name: 'Handling and Transport', link: '../genConcepts/CAN/index.html' },
        { name: 'Education and Awareness', link: '../genConcepts/CAN/index.html' },
      ],
    },
    {
      name: 'Hydrogen Generation Methodologies',
      subItems: [
        { name: 'Steam Methane Reforming', link: '../BMS/bmsTheory/index.html' },
        { name: 'Electrolysis of Water', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Methanol Reforming', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    },
    {
      name: 'Hydrogen Storage',
      subItems: [
        { name: 'Geological Hydrogen Storage', link: '../BMS/bmsTheory/index.html' },
        { name: 'Compressed Hydrogen', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Liquid Hydrogen', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Material based Hydrogen Storage', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Hydrogen Storage in Ammonia', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    }
    ,
    {
      name: 'Hydrogen Distribution',
      subItems: [
        { name: 'Hydrogen Pipelines', link: '../BMS/bmsTheory/index.html' },
        { name: 'Hydrogen Tankers', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Hydrogen Refueling Stations', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Ammonia as a Hydrogen Carrier', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    },
    {
      name: 'Fuel Cell Fundamentals',
      subItems: [
        { name: 'Introduction to Fuel Cell', link: '../BMS/bmsTheory/index.html' },
      ],
    },
    {
      name: 'Categories of Fuel Cell',
      subItems: [
        { name: 'Alkaline Fuel Cell', link: '../BMS/bmsTheory/index.html' },
        { name: 'PEM (Proton Exchange Membrane) Fuel Cell', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Microbial Fuel Cell', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Phosphoric Acid Fuel Cells (PAFC)', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Molten Carbonate Fuel Cells (MCFC)', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Solid Oxide Fuel Cells (SOFC)', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Direct Methanol Fuel Cells (DMFC)', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    },
    {
      name: 'Advanced Hydrogen Fuel Cell Experiments',
      subItems: [
        { name: 'Test the fuel cell at different load condition', link: '../BMS/bmsTheory/index.html' },
        { name: 'Study of IV characteristics of fuel cell', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Study of the Measurement of Fuel Cell Efficiency', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    },
    {
      name: 'Hydrogen Industrial Application',
      subItems: [
        { name: 'Ammonia Production', link: '../BMS/bmsTheory/index.html' },
        { name: 'Methanol Production', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Steelmaking', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Concrete Production', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Oil Refining', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    },
    {
      name: 'Hydrogen Mobility and Transportation Applications',
      subItems: [
        { name: 'Fuel Cell Buses', link: '../BMS/bmsTheory/index.html' },
        { name: 'Material Handling', link: '../BMS/batteryTrainngSystem/lead-acid.html' },
        { name: 'Mining trucks', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Aviation', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Rail Transportation', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
        { name: 'Marine Transportation', link: '../BMS/batteryTrainngSystem/lithium-ion.html' },
      ],
    },
    { name: 'Hydrogen Combustion Engine', path: '/hydrogen-combustion-engine' },
  ];

  const [activeSubItems, setActiveSubItems] = React.useState({});

  const toggleSubItems = (index) => {
    setActiveSubItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <Header />
      
      <div className="d-flex justify-content-center">
        <div className="grid-container">
          <div className="subtitle-container">
            <h3 className="subtitle">Table of Contents</h3>
          </div>
          <Row className="grid-row">
            {topics.map((topic, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <div className="menuItemContainer">
                  <span
                    className={`grid-button ${activeSubItems[index] ? 'active' : ''}`}
                    onClick={() => topic.subItems ? toggleSubItems(index) : null}
                  >
                    {topic.name}
                  </span>


                  {/* Sub-menu that appears below the grid item */}
                  {topic.subItems && activeSubItems[index] && (
                    <div className={`sub-menu ${activeSubItems[index] ? 'active' : ''}`}>
                      <ol>
                        {topic.subItems.map((subItem, subIndex) => (
                          <a href={subItem.link} key={subIndex}>
                            <li>{subItem.name}</li>
                          </a>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
