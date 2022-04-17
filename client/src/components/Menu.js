import React from 'react';
import {Container, Nav, Col, Row, Tab} from 'react-bootstrap'


// Importing Context custom hooks
import { useLanContext } from './LanguageProvider.js'

// Importing components
import Curry from './Curry';
import Nan from './Nan';
import Sides from './Sides';
import Sets from './Sets';
import Drink from './Drink';


const Menu = () => {
  const json = useLanContext();
  const menu = json.menu;
  const activeTab = menu.menuList[0];
  return (
    <Container className='mt-5 py-5 position-relative'>
      <Tab.Container id="left-tabs-example" defaultActiveKey={ activeTab }>
        <Row> 
          <Col  className="menu-col menu-page" xs={12} sm={3} md={2}>
            <Nav variant="pills">
              {console.log(activeTab)}
              {menu.menuList.map((subMenu, index) => (

                <Nav.Item key={index}>
                  <Nav.Link eventKey={subMenu}>{subMenu}</Nav.Link>
                </Nav.Item>
              ))}
              {/* 
              
                <div class="menu-col menu-page col-md-2 col-sm-3 col-12">
                  <div class="nav nav-pills" role="tablist">
                    <div class="nav-item">
                      <a role="tab" data-rr-ui-event-key="Curry" id="left-tabs-example-tab-Curry" aria-controls="left-tabs-example-tabpane-Curry" class="nav-link active" aria-selected="true">Curry</a>
                    </div>
                    <div class="nav-item">
                      <a role="tab" data-rr-ui-event-key="Nan" id="left-tabs-example-tab-Nan" aria-controls="left-tabs-example-tabpane-Nan" tabindex="-1" class="nav-link">Nan</a>
                    </div>
                    <div class="nav-item">
                      <a role="tab" data-rr-ui-event-key="Side" id="left-tabs-example-tab-Side" aria-controls="left-tabs-example-tabpane-Side" tabindex="-1" class="nav-link">Side</a>
                    </div>
                    <div class="nav-item">
                      <a role="tab" data-rr-ui-event-key="Set" id="left-tabs-example-tab-Set" aria-controls="left-tabs-example-tabpane-Set" tabindex="-1" class="nav-link">Set</a>
                    </div>
                    <div class="nav-item">
                      <a role="tab" data-rr-ui-event-key="Drink" id="left-tabs-example-tab-Drink" aria-controls="left-tabs-example-tabpane-Drink" tabindex="-1" class="nav-link">Drink</a>
                    </div>
                  </div>
                </div>
              
              */}
            </Nav>
          </Col>
          <Col className="menu-col menu-content" xs={12} sm={9} md={10}>
            <Tab.Content>
              <Tab.Pane eventKey={menu.menuList[0]}>
                < Curry curries= { menu.curry } />
              </Tab.Pane>
              <Tab.Pane eventKey={menu.menuList[1]}>
                < Nan nans= { menu.nan }/>
              </Tab.Pane>
              <Tab.Pane eventKey={menu.menuList[2]}>
                <Sides sides={menu.sides} />
              </Tab.Pane>
              <Tab.Pane eventKey={menu.menuList[3]}>
                < Sets sets={ menu.sets } />
              </Tab.Pane>
              <Tab.Pane eventKey={menu.menuList[4]}>
                < Drink drinks={ menu.drinks } />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Menu;