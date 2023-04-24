import React from 'react';

/* Importamos componentes*/
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ContentRowCenter from './ContentRowCenter';
import ProductTable from './ProductTable';
import Footer from './Footer';

/* Estructuramos componente ContentWrapper */
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ContentRowCenter />
                    <ProductTable/>
                    <Footer />
                </div>
                
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;