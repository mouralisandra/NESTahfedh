import React, {useContext} from 'react';
import {Button, Dropdown} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import '../../static/CatalogSettings.css'


const CatalogSettings = observer(() => {

    const {product} = useContext(Context)

    const resetButton = () => {
        product.setSelectedCategory({})
        product.setSelectedSortOrder('')
    }

    return (
        <div style={{fontSize:'18px'}}>
            <div >Selected <strong>{product.totalRecords}</strong> products</div>
            <div className='col' >
            <Button variant="outline-dark" className="rounded-pill" onClick={resetButton}>Reset</Button>
          
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Sorting
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Object.keys(product.sortOrderVars).map((key, index) =>
                            (<Dropdown.Item
                                onClick={() => product.setSelectedSortOrder(key)}
                                active={product.selectedSortOrder === key}
                                key={index.toString()}
                            >
                                {key}
                            </Dropdown.Item>)
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
});

export default CatalogSettings;