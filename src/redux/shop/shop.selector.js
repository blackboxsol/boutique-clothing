import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

/**
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
 */

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

/**
export const selectCollection = memoize(collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
);
 */

export const selectCollection = memoize(collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => (collections ? collections[collectionUrlParam] : null)
    )
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)

