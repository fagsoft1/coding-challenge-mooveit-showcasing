# InputText
<p>
Text fields let users enter and edit text when creating form or components.
</p>

## Import
    import {InputText} from 'mooveit-library-fagsoft';

## Examples
<p>The TextField wrapper component is a complete form control including a label, input and help text.</p>

    import {InputText} from 'mooveit-library-fagsoft';
    <InputText name={'text_input_text'} label={'The Input Text'}/>
    
<InputText label='Nombre'/>

### PROPS & METHODS

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| name    | 	string |Required| Component's Name |
| value    | 	string || Component's value |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| className| 	string ||  |
| disabled    | boolean |False| To enable or disable the component |
| onChange	    | ((e: ChangeEvent<HTMLInputElement>) => void) or undefined || To handle onChange event |
| onKeyDown	    | ((e: KeyboardEvent<HTMLInputElement>) => void) or undefined || To handle onKeyDown event |
| onKeyUp	    | ((e: KeyboardEvent<HTMLInputElement>) => void) or undefined || To handle onKeyUp event |
    