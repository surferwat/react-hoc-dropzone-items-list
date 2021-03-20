## Description

A React higher order component to attach a stylized component for files dropped via React Dropzone or other file drag'n'drop zone libraries.

## Installation

Step 1: Clone the repo 

```
git clone https://github.com/surferwat/react-hoc-dropzone-items-list.git
```

Step 2: Install the dependecies

```
cd <package_name>
npm install
```

Step 3: Build 
```
npm run-script build:clean
```

Step 4: Go to app folder and install the module

```
npm install /file/path/to/module
```

## Usage

You may want to display the files that you've dropped in a list with some css. This higher order component allows you to attach a component (i.e., AttachedComponent) to a drag'n'drop component (i.e., DropzoneComponent). The AttachedComponent should be a component that lists out the files that have been dropped.

The higher order component takes an optional `files` prop if you want to set the items list with an existing array of files. It also takes an optional `callBack` prop if you want to pass any data back to the parent component.

The higher order component injects an `items` prop and `handleRemoveItem` prop into the AttachedComponent. The `items` prop is an array of the files dropped. The `handleRemoveItem` prop is a function that updates the `items` state by removing the file object passed as a param.

InputForm.js
```javascript
import React from 'react'
import { withItemsList } from 'react-hoc-items-list'
import YourDropzoneComponent from './path/to/your/dropzone/component'
import YourAttachedComponent from './path/to/your/attached/component'


const YourDropzoneComponentWithItemsList = withItemslist(YourDropzoneComponent, YourAttachedComponent)


function InputForm(props) {
    const [files, setFiles] = useState(props.files || [])

    return (
        <YourDropzoneComponentWithItemsList
            files={files}
            callBack={setFiles}
        />
    )
}


export default InputForm
```

## Todo 

* [ ] Add tests


## References

* [React Typescript Cheatsheet Full HOC Example](https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/)