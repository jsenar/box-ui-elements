/**
 * @flow
 * @file Component for the details for the item name
 * @author Box
 */

import React from 'react';
import { InlineBreadcrumbs } from '../Breadcrumbs';
import { VIEW_SEARCH, VIEW_SELECTED } from '../../constants';
import ItemSubDetails from './ItemSubDetails';
import type { View, BoxItem } from '../../flowTypes';
import './ItemDetails.scss';

type Props = {
    rootId: string,
    item: BoxItem,
    getLocalizedMessage: Function,
    onItemClick: Function,
    view: View
};

const ItemDetails = ({ view, rootId, item, onItemClick, getLocalizedMessage }: Props) =>
    <div className='buik-item-details'>
        {view === VIEW_SELECTED || view === VIEW_SEARCH
            ? <InlineBreadcrumbs
                rootId={rootId}
                item={item}
                onItemClick={onItemClick}
                getLocalizedMessage={getLocalizedMessage}
              />
            : <ItemSubDetails item={item} getLocalizedMessage={getLocalizedMessage} />}
    </div>;

export default ItemDetails;
