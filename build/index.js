"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withItemsList = void 0;
const react_1 = __importDefault(require("react"));
function withItemsList(WrappedDropzoneComponent, WrappedItemsListComponent) {
    class WithItemsListComponent extends react_1.default.Component {
        constructor(props) {
            super(props);
            this.handleRemoveItem = (item) => {
                const currItems = this.state.items
                    .filter((prevItem) => prevItem.name !== item.name);
                this.setState({ items: currItems });
                if (this.props.callBack)
                    this.props.callBack(currItems);
            };
            this.state = {
                items: props.files
            };
            this.handleRemoveItem = this.handleRemoveItem.bind(this);
        }
        componentDidUpdate(prevProps) {
            if (this.props.files !== prevProps.files) {
                this.setState({ items: this.props.files });
            }
        }
        render() {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(WrappedDropzoneComponent, Object.assign({}, this.props)),
                react_1.default.createElement(WrappedItemsListComponent, Object.assign({ items: this.state.items, handleRemoveItem: this.handleRemoveItem }, this.props))));
        }
    }
    return WithItemsListComponent;
}
exports.withItemsList = withItemsList;
//# sourceMappingURL=index.js.map