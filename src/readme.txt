use shortcuts like:

      clg and enter for console log
      rfc and enter for react based component
      imr and enter for import React from 'react'
      imrd and enter for import ReactDOM from 'react-dom'
      imrc and enter for import React, { Component } from 'react'
      imp and enter for import moduleName from 'module'
      imn and enter for import 'module'
      exp and enter for export default moduleName
      enf and enter for export const functionName = (params) => { }
      nfn and enter for const functionName = (params) => { }
      cp and enter for const { } = this.props
      cs and enter for const { } = this.state
      sst and enter for this.setState({ })
      props and enter for this.props.propName
      state and enter for this.state.stateName


If any value is passed via export default (variable name), then it can have a different name while importing. 
      Example, 
      file name : Module2.mjs
            const a = "Bishal";
            const b = "Manish";
            const c = "Kushal";
            const d = "Pramesh";


      export default a;

      file name : Module1.mjs
            import ui from './module2.mjs';

      This above program will display "Bishal" when we run command node .\Module1.mjs in powershell terminal.
      As we can see, we exported variable 'a' as default and while importing we received the data in variable 'ui'

      but in case of exporting the data as normal i.e not by default,
      we have to export as :
            export {a};
      And receive the data as :
            import {a} from './module2.mjs'


props:
      They are simply the properties of a component that can be changed according to their use. 
      Suppose we created a very responsive and amazing component which we want to use in our different project, it would be difficult to
      address each line of code and make changes. Hence, props comes to the rescue by creating a property of that component whose values can be
      changed according to their use like company logo and name.

      we can set default value to props just like "alt" for image which is, if we forget to pass value in props, then the "defaultProps"
      function will kick in and handles the problem similar to if image not found, message inside the "alt" displays.

      Also, we have to remember that, even if we set 'propType' as 'isRequired', if we have 'defaultProps' written, we wont get any problems
      as it will take over, and if we dont have it written, then we will have some errors to deal with.

State: 
      State is the local state of the component which cannot be accessed and modified outside of the component.
      