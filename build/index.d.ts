import React from 'react';
declare type InjectedProps = {
    items: File[];
};
interface iWithItemList {
}
declare function withItemsList<P extends InjectedProps, C>(WrappedDropzoneComponent: React.ComponentType & C, WrappedItemsListComponent: React.JSXElementConstructor<P> & C): iWithItemList;
export { withItemsList };
