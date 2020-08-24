# InputBase
<p>
Component used to set commons props and methods for an input. It also set the theme used by.
It is used by mooveit-library's components.
</p>

### PROPS & METHODS
| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| name    | 	string |Required| Component's Name |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| className| 	string ||  |
| disabled    | boolean |False| To enable or disable the component |
| onChange	    | ((e: ChangeEvent<HTMLInputElement>) => void) or undefined || To handle onChange event |
| onKeyDown	    | ((e: KeyboardEvent<HTMLInputElement>) => void) or undefined || To handle onKeyDown event |
| onKeyUp	    | ((e: KeyboardEvent<HTMLInputElement>) => void) or undefined || To handle onKeyUp event |