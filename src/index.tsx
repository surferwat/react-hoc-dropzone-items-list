import React from 'react'


type CallBack = {
    (files: File[]): any
}

type ExternalProps = {
    files: File[],
    callBack?: CallBack,
}

type InjectedProps = {
    items: File[]
}

interface iWithItemList {

}


function withItemsList<P extends InjectedProps, C>(
    WrappedDropzoneComponent: React.ComponentType & C, 
    WrappedItemsListComponent: React.JSXElementConstructor<P> & C
): iWithItemList {
    type Props = JSX.LibraryManagedAttributes<C, Omit<P, 'data'>> & ExternalProps
    type State = {
        items: File[]
    }
    class WithItemsListComponent extends React.Component<Props, State> { 
        constructor(props: Props) {
            super(props)
            this.state = {
                items: props.files
            }
            this.handleRemoveItem = this.handleRemoveItem.bind(this)
        }

        componentDidUpdate(prevProps: Props) {
            if (this.props.files !== prevProps.files) {
                this.setState({ items: this.props.files })
            }
        }
        
        handleRemoveItem = (item: File) => {
            const currItems: File[] = this.state.items
                .filter((prevItem) => prevItem.name !== item.name)
            this.setState({ items: currItems })
            if (this.props.callBack) this.props.callBack(currItems)
        }

        render() {
            return (
                <div>
                    <WrappedDropzoneComponent
                        {...(this.props as any)}
                    />
                    <WrappedItemsListComponent
                        items={this.state.items}
                        handleRemoveItem={this.handleRemoveItem}
                        {...(this.props as any)}
                    />
                </div>
            )
        }
    }

    return WithItemsListComponent
}


export { withItemsList }
