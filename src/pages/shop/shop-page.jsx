import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection-page.container';
import { selectIsCollectionFetching , selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) =>{

    useEffect(()=>{
        fetchCollectionsStart();
    },[fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Route 
                exact 
                path={`${match.path}`} 
                component={CollectionOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToPops = dispatch => ({
    fetchCollectionsStart: collections => dispatch(fetchCollectionsStart(collections))
})


export default connect(mapStateToProps, mapDispatchToPops)(ShopPage);